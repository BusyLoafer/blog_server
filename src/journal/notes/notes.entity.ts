import { ApiProperty } from "@nestjs/swagger";
import { Productivity } from "src/other/productivities/productivities.entity";
import { Smile } from "src/other/smiles/smiles.entity";
import { Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Diary } from "../diaries/diaries.entity";

@Entity()
export class Note {

  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Заголовок', description: 'Заголовок' })
  @Column()
  title: string;

  @ApiProperty({ example: 'Текст', description: 'Текст' })
  @Column()
  text: string;

  @ApiProperty({ example: '12/12/12 12:00:00', description: 'Дата записи' })
  @Column({
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP'
  })
  @Index()
  date: string;

  @ManyToOne(() => Diary)
  diaryId: Diary

  @OneToOne(() => Smile)
  @JoinColumn()
  smileId: Smile

  @OneToOne(() => Productivity)
  @JoinColumn()
  prodictivityId: Productivity

}