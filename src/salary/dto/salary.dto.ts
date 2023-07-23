import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class SalaryDto {
  @ApiProperty({ example: 'John' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 20000 })
  @IsNotEmpty()
  salary: number;

  @ApiProperty({ example: 'INR' })
  @IsNotEmpty()
  currency: string;

  @ApiProperty({ example: 'Development' })
  @IsNotEmpty()
  department: string;

  @ApiProperty({ example: 'IT' })
  @IsNotEmpty()
  sub_department: string;

  @ApiProperty({ example: true })
  @IsNotEmpty()
  on_contract: boolean;
}
