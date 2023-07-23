import { NestFactory } from '@nestjs/core';
import { SalarySeedService } from './salary/salary-seed.service';
import { SeedModule } from './seed.module';
import { UserSeedService } from './user/user-seed.service';

const runSeed = async () => {
  const app = await NestFactory.create(SeedModule);

  // run
  await app.get(UserSeedService).run();
  await app.get(SalarySeedService).run();

  await app.close();
};

void runSeed();
