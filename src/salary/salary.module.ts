import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IsExist } from 'src/utils/validators/is-exists.validator';
import { IsNotExist } from 'src/utils/validators/is-not-exists.validator';
import { Salary } from './entities/salary.entity';
import { SalaryController } from './salary.controller';
import { SalaryService } from './salary.service';

@Module({
  imports: [TypeOrmModule.forFeature([Salary])],
  controllers: [SalaryController],
  providers: [IsExist, IsNotExist, SalaryService],
  exports: [SalaryService],
})
export class SalaryModule {}
