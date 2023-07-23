import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as faker from 'faker';
import { Salary } from 'src/salary/entities/salary.entity';
@Injectable()
export class SalarySeedService {
  constructor(
    @InjectRepository(Salary)
    private repository: Repository<Salary>,
  ) {}

  async run() {
    for (let i = 0; i < 20; i++) {
      await this.repository.save(
        this.repository.create({
          name: faker.name.findName(),
          salary: faker.random.number({ min: 40000, max: 100000 }),
          currency: 'INR',
          department: faker.commerce.department(),
          sub_department: faker.commerce.productAdjective(),
          on_contract: faker.random.boolean(),
        }),
      );
    }
  }
}
