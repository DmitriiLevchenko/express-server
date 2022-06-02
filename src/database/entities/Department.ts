import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('department')
export class DepartmentEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({ length: 1000, nullable: false })
  name: string;

  @Column({ length: 1000, nullable: false})
  email: string
}