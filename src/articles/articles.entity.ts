import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Article {

  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Обвал рынка', description: 'Заголовок статьи' })
  @Column()
  title: string;

  @ApiProperty({ example: 'Сегодня произошел обвал рынка в...', description: 'Тело статьи' })
  @Column()
  text: string;

  @ApiProperty({ example: true, description: 'Флаг публикации статьи' })
  @Column({ default: true })
  published: boolean;

  @Column({
    type: 'datetime',
    default: () => 'NOW()',
  })
  @Index()
  created_at: string;

}