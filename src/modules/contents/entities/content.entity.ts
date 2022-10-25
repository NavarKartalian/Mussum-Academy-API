import { Column, Entity, ManyToOne } from 'typeorm';

import { BaseEntity } from 'src/modules/bases/entities/base.entity';
import { Lesson } from 'src/modules/lessons/entities/lesson.entity';

@Entity()
export class Content extends BaseEntity {
  @Column()
  description: string;

  @Column({ nullable: true })
  linkContent: string;

  @ManyToOne(() => Lesson)
  lesson: Lesson;

  @Column({ nullable: true })
  lessonId?: string;
}
