// auth.controller.spec.ts

import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { AppModule } from '../src/app.module';
import { User } from 'src/users/entities/user.entity';
import supertest from 'supertest';

describe('AuthController (end-to-end)', () => {
  let app: INestApplication;
  let userRepository: Repository<User>;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        AppModule,
        TypeOrmModule.forRoot({
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'myuser',
          password: '',
          database: 'regen2',
          entities: [User],
          synchronize: true,
        }),
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    userRepository = moduleFixture.get<Repository<User>>(
      getRepositoryToken(User),
    );
    await app.init();
  });

  beforeEach(async () => {
    // Clear the users table before each test
    await userRepository.query('DELETE FROM user;');
  });

  afterAll(async () => {
    await app.close();
  });

  it('should register a new user and return 201 Created', async () => {
    const newUser = {
      email: 'test@example.com',
      password: 'testpassword',
    };

    const response = await supertest(app.getHttpServer())
      .post('register')
      .send(newUser);

    expect(response.status).toBe(HttpStatus.CREATED);
    expect(response.body).toHaveProperty('access_token');
  });

  //   it('should return 401 Unauthorized for login with invalid credentials', async () => {
  //     const credentials = {
  //       email: 'invalid@example.com',
  //       password: 'invalidpassword',
  //     };

  //     const response = await supertest(app.getHttpServer())
  //       .post('login')
  //       .send(credentials);

  //     expect(response.status).toBe(HttpStatus.UNAUTHORIZED);
  //   });

  //   it('should login a registered user and return 200 OK', async () => {
  //     const newUser = {
  //       email: 'test@example.com',
  //       password: await bcrypt.hash('testpassword', 10),
  //     };

  //     await userRepository.save(newUser);

  //     const credentials = {
  //       email: 'test@example.com',
  //       password: 'testpassword',
  //     };

  //     const response = await supertest(app.getHttpServer())
  //       .post('login')
  //       .send(credentials);

  //     expect(response.status).toBe(HttpStatus.OK);
  //     expect(response.body).toHaveProperty('access_token');
  //   });

  // Add more test cases for other AuthController methods...
});
