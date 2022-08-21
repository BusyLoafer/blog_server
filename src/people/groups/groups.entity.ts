import { ApiProperty } from "@nestjs/swagger";
import { Dish } from "src/food/dishes/dishes.entity";
import { Column, Entity, Index, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Person } from "../persons/persons.entity";

@Entity()
export class Group {

  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Работа', description: 'Название группы' })
  @Column()
  title: string;

  @ApiProperty({ example: 'Люди, с которыми пересекаемся на работе', description: 'Описание группы' })
  @Column()
  description: string;

  @OneToMany(() => Person, group => group.group)
  person: Group

}