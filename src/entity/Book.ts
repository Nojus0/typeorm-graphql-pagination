import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@ObjectType()
@Entity("books")
export class Book extends BaseEntity {

    @Field(type => Int)
    @PrimaryGeneratedColumn()
    id: number

    @Field()
    @Column({ length: 256 })
    title: string


    @Field()
    @Column({ length: 4096 })
    description: string

    @CreateDateColumn()
    createdAt: Date
    
    @UpdateDateColumn()
    updatedAt: Date
}