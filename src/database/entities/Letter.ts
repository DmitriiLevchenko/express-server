import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn, RelationId } from 'typeorm'
import { LetterTypeEnum } from '../../common/enums/letterType.enum';
import { DepartmentEntity } from './Department';

@Entity('letter')
export class LetterEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({ length: 1000, nullable: false })
  text: string;

  @Column({nullable: true})
  tid: number

  @Column({nullable: true})
  email: string

  @Column({nullable: true})
  subject: string

  @ManyToOne(type => DepartmentEntity, depart => depart.id)
  department: DepartmentEntity

  @RelationId((letter: LetterEntity) => letter.department)
  departmentId: number;

  @Column({type: 'enum', enum: LetterTypeEnum, default: LetterTypeEnum.SIMPLE})
  type: LetterTypeEnum
}