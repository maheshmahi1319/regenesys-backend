// // salary.controller.spec.ts

// import { Test, TestingModule } from '@nestjs/testing';
// import { SalaryDto } from 'src/salary/dto/salary.dto';
// import { SalaryController } from 'src/salary/salary.controller';
// import { SalaryService } from 'src/salary/salary.service';

// describe('SalaryController', () => {
//   let controller: SalaryController;
//   let service: SalaryService;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       controllers: [SalaryController],
//       providers: [SalaryService],
//     }).compile();

//     controller = module.get<SalaryController>(SalaryController);
//     service = module.get<SalaryService>(SalaryService);
//   });

//   describe('create', () => {
//     it('should create a new salary record', async () => {
//       const createSalaryDto: SalaryDto = {
//         // Provide data for the createSalaryDto here
//       };
//       const createdSalary = {}; // Provide data for the created salary record

//       jest.spyOn(service, 'create').mockResolvedValue(createdSalary);

//       const result = await controller.create(createSalaryDto);

//       expect(result).toBe(createdSalary);
//       expect(service.create).toHaveBeenCalledWith(createSalaryDto);
//     });
//   });

//   describe('delete', () => {
//     it('should delete a salary record by id', async () => {
//       const salaryId = 1;

//       jest.spyOn(service, 'delete').mockResolvedValue({});

//       const result = await controller.delete(salaryId);

//       expect(result).toEqual({});
//       expect(service.delete).toHaveBeenCalledWith(salaryId);
//     });
//   });

//   describe('getFinancialYearStatistics', () => {
//     it('should get financial year statistics', async () => {
//       const year = '2023';
//       const statistics = {}; // Provide data for the financial year statistics

//       jest.spyOn(service, 'getFinancialYearStatistics').mockResolvedValue(statistics);

//       const result = await controller.getFinancialYearStatistics(year);

//       expect(result).toBe(statistics);
//       expect(service.getFinancialYearStatistics).toHaveBeenCalledWith(year);
//     });
//   });

//   // Add test cases for other controller methods (getOnContractFinancialYearStatistics, getDepartmentStatistics, getDepartmentSubDepartmentStatistics)...
// });
