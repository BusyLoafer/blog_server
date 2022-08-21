import { ApiProperty } from "@nestjs/swagger";
import { Dish } from "src/food/dishes/dishes.entity";
import { Smile } from "src/other/smiles/smiles.entity";
import { Column, Entity, Index, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Person } from "../persons/persons.entity";
import { TypeContact } from "./typeContact.entity";

@Entity()
export class Contact {

  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Пересечение в коридоре', description: 'Название встречи' })
  @Column()
  title: string;

  @ApiProperty({ example: 'Общались по поводу тикета', description: 'Описание встречи' })
  @Column()
  description: string;

  @ManyToOne(() => TypeContact)
  typeContact: TypeContact

  @ManyToOne(() => Person)
  person: Person

  @ManyToOne(() => Smile)
  smile: Smile

}