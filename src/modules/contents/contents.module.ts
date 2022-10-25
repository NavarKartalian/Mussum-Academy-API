import { Module } from '@nestjs/common';

import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { PagingStrategies } from '@nestjs-query/query-graphql';

import { Content } from './entities/content.entity';
import { CreateContentInput } from './dto/create-content.input';
import { UpdateContentInput } from './dto/update-content.input';
import { ContentDTO } from './dto/content.dto';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Content])],
      resolvers: [
        { 
          DTOClass: ContentDTO, 
          EntityClass: Content,
          CreateDTOClass: CreateContentInput,
          UpdateDTOClass: UpdateContentInput,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
        }
      ],
    })  
  ],
  providers: []
})
export class ContentsModule {}
