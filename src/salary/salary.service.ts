// salary.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SalaryDto } from './dto/salary.dto';
import { Salary } from './entities/salary.entity';

@Injectable()
export class SalaryService {
  constructor(
    @InjectRepository(Salary)
    private readonly salaryRepository: Repository<Salary>,
  ) {}

  async create(createSalaryDto: SalaryDto): Promise<Salary> {
    const salaryPartial: Partial<Salary> = {
      name: createSalaryDto.name,
      salary: createSalaryDto.salary,
      currency: createSalaryDto.currency,
      department: createSalaryDto.department,
      sub_department: createSalaryDto.sub_department,
      on_contract: createSalaryDto.on_contract,
    };
    const salary = this.salaryRepository.create(salaryPartial);
    return this.salaryRepository.save(salary);
  }

  async delete(id: number): Promise<void> {
    await this.salaryRepository.delete(id);
  }

  async getFinancialYearStatistics(year: string): Promise<any> {
    const query = this.salaryRepository
      .createQueryBuilder('salary')
      .select('AVG(salary.salary)', 'mean')
      .addSelect('MIN(salary.salary)', 'min')
      .addSelect('MAX(salary.salary)', 'max')
      .where('EXTRACT(YEAR FROM salary.createdAt) = :year', { year })
      .getRawOne();

    return query;
  }

  async getOnContractFinancialYearStatistics(year: string): Promise<any> {
    const query = this.salaryRepository
      .createQueryBuilder('salary')
      .select('AVG(salary.salary)', 'mean')
      .addSelect('MIN(salary.salary)', 'min')
      .addSelect('MAX(salary.salary)', 'max')
      .where('EXTRACT(YEAR FROM salary.createdAt) = :year', { year })
      .andWhere('salary.on_contract = true')
      .getRawOne();

    return query;
  }

  async getDepartmentStatistics(): Promise<any> {
    const query = this.salaryRepository
      .createQueryBuilder('salary')
      .select('department', 'department')
      .addSelect('AVG(salary.salary)', 'mean')
      .addSelect('MIN(salary.salary)', 'min')
      .addSelect('MAX(salary.salary)', 'max')
      .groupBy('department')
      .getRawMany();

    return query;
  }

  async getDepartmentSubDepartmentStatistics(): Promise<any> {
    const query = this.salaryRepository
      .createQueryBuilder('salary')
      .select('department', 'department')
      .addSelect('sub_department', 'sub_department')
      .addSelect('AVG(salary.salary)', 'mean')
      .addSelect('MIN(salary.salary)', 'min')
      .addSelect('MAX(salary.salary)', 'max')
      .groupBy('department, sub_department')
      .getRawMany();

    return query;
  }
}
