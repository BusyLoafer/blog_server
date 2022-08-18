import { ApiProperty } from "@nestjs/swagger";
import { Dish } from "src/food/dishes/dishes.entity";
import { Column, Entity, Index, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Contact } from "./contacts.entity";

@Entity()
export class TypeContact {

  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Online', description: 'Название типа контакта' })
  @Column()
  title: string;

  @ApiProperty({ example: 'telegram, email, vk...', description: 'Описание типа контакта' })
  @Column()
  description: string;
  

  @OneToMany(() => Contact, contact => contact.typeContact)
  contact: Contact

}