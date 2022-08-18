import { ApiProperty } from "@nestjs/swagger";
import { Productivity } from "src/other/productivities/productivities.entity";
import { Smile } from "src/other/smiles/smiles.entity";
import { Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Group } from "../groups/groups.entity";

@Entity()
export class Person {

  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Имя', description: 'Имя' })
  @Column()
  firstName: string;

  @ApiProperty({ example: 'Фамилия', description: 'Фамилия' })
  @Column()
  secondName: string;

  @ApiProperty({ example: 'Отчество', description: 'Отчество' })
  @Column()
  lastName: string;

  @ApiProperty({ example: 'Описание', description: 'Дополнительные заметки' })
  @Column()
  description: string;

  @ApiProperty({ example: 'Пол', description: 'Мужской - true' })
  @Column({
    type: Boolean,
    default: true
  })
  gender: boolean;

  @ApiProperty({ example: '12/12/12 12:00:00', description: 'Дата рождения' })
  @Column({
    type: 'datetime',
    nullable: true
  })
  @Index()
  date: string;

  @ManyToOne(() => Group, group => group.person)
  group: Group

}