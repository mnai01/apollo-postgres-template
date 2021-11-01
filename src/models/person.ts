import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, BaseEntity } from 'typeorm';

@Entity({ name: 'person' })
// BaseEntity allows us to use syntax like create
export class Person extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ nullable: false })
    name!: string;

    @Column()
    age!: number;

    @CreateDateColumn({ type: 'timestamp' })
    created_at!: Date;
}
