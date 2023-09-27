import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn } from "typeorm";

@Entity()
export class CovidCase extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: string;

  @CreateDateColumn()
  created_at: Date;

  constructor(userId: string) {
    super();
    this.userId = userId;
  }
}
