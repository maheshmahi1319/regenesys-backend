import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { SalaryDto } from './dto/salary.dto';
import { SalaryService } from './salary.service';
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@ApiTags('Salary')
@Controller({ path: 'salary', version: '1' })
export class SalaryController {
  constructor(private readonly salaryService: SalaryService) {}

  @Post()
  async create(@Body() createSalaryDto: SalaryDto) {
    return this.salaryService.create(createSalaryDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.salaryService.delete(id);
  }

  @Get('statistics/financial-year/:year')
  async getFinancialYearStatistics(@Param('year') year: string) {
    return this.salaryService.getFinancialYearStatistics(year);
  }

  @Get('statistics/on-contract/financial-year/:year')
  async getOnContractFinancialYearStatistics(@Param('year') year: string) {
    return this.salaryService.getOnContractFinancialYearStatistics(year);
  }

  @Get('statistics/department')
  async getDepartmentStatistics() {
    return this.salaryService.getDepartmentStatistics();
  }

  @Get('statistics/department-sub-department')
  async getDepartmentSubDepartmentStatistics() {
    return this.salaryService.getDepartmentSubDepartmentStatistics();
  }
}
