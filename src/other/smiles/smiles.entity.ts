import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, Index, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Smile {

  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Отлично', description: 'Название эмоции состояния' })
  @Column()
  title: string;

  @ApiProperty({ example: 'Лучше не бывает', description: 'Описание эмоции' })
  @Column()
  description: string;

}