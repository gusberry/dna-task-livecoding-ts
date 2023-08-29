import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm"

@Entity()
export class CovidCase extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  userId: string
}