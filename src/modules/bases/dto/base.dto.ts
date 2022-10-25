import { Field, ObjectType } from '@nestjs/graphql';
import { FilterableField } from '@nestjs-query/query-graphql';

@ObjectType()
export class BaseDTO {
  @Field()
  id: string;

  @FilterableField()
  createdAt: Date;

  @FilterableField()
  updatedAt: Date;

  @FilterableField()
  deletedAt: Date;
}
