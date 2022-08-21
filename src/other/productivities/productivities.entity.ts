import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, Index, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Productivity {

  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Отлично', description: 'Название степени продуктивности' })
  @Column()
  title: string;

  @ApiProperty({ example: 'Лучше не бывает', description: 'Описание степени продуктивности' })
  @Column()
  description: string;

}