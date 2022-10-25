import { Module } from '@nestjs/common';

import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { PagingStrategies } from '@nestjs-query/query-graphql';

import { CreateDisciplineInput } from './dto/create-discipline.input';
import { UpdateDisciplineInput } from './dto/update-discipline.input';
import { Discipline } from './entities/discipline.entity';
import { DisciplineDTO } from './dto/discipline.dto';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Discipline])],
      resolvers: [
        { 
          DTOClass: DisciplineDTO, 
          EntityClass: Discipline,
          CreateDTOClass: CreateDisciplineInput,
          UpdateDTOClass: UpdateDisciplineInput,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
        }
      ],
    })  
  ],
  providers: []
})
export class DisciplinesModule {}
