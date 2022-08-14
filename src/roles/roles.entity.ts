import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Role {

  @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({example: 'Администратор', description: 'Уникальное название роли'})
  @Column()
  value: string;

  @ApiProperty({example: 'Администратор', description: 'Описание роли'})
  @Column()
  description: string;
}