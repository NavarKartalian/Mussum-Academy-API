import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';

import { AppService } from './app.service';

import { StudentsModule } from './modules/students/students.module';
import { DisciplinesModule } from './modules/disciplines/disciplines.module';
import { LessonsModule } from './modules/lessons/lessons.module';
import { ContentsModule } from './modules/contents/contents.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.TYPEORM_CONNECTION as 'postgres',
      host: process.env.TYPEORM_HOST,
      port: Number(process.env.TYPEORM_PORT),
      username: process.env.TYPEORM_USER,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [process.env.TYPEORM_ENTITIES],
      synchronize: Boolean(process.env.TYPEORM_SYNCHRONIZE),
      logging: Boolean(process.env.TYPEORM_LOGGING)
    }),
    StudentsModule,
    DisciplinesModule,
    LessonsModule,
    ContentsModule,
  ],
  providers: [AppService, ConfigService],
})
export class AppModule {}
