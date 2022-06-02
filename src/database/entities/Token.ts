import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { UserEntity } from './User'

@Entity("token")
export class TokenEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @OneToOne(type => UserEntity)
  @JoinColumn()
  user: UserEntity

  @Column()
  userId: string

  @Column({ name: 'refresh_token' })
  refreshToken: string
}