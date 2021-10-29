import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'person' })
export class Person {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    age!: number;

    @Column({ name: 'created_at' })
    createdAt?: Date;
}
