import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Salary } from 'src/salary/entities/salary.entity';
import { SalarySeedService } from './salary-seed.service';

@Module({
  imports: [TypeOrmModule.forFeature([Salary])],
  providers: [SalarySeedService],
  exports: [SalarySeedService],
})
export class SalarySeedModule {}
