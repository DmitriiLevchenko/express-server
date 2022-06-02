import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'


@Entity("question")
export class QuestionEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  question: string

  @Column()
  answer: string
}