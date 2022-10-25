import { InputType } from '@nestjs/graphql';

@InputType()
export class CreateContentInput {
  linkContent?: string;
  description: string;
  lessonId?: string;
}
