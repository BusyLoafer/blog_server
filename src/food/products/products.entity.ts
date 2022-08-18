import { ApiProperty } from "@nestjs/swagger";
import { Dish } from "src/food/dishes/dishes.entity";
import { Column, Entity, Index, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {

  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Бурый рис', description: 'Название продукта' })
  @Column()
  title: string;

  @ApiProperty({ example: 'Описание бурый рис', description: 'Описание продукта' })
  @Column()
  description: string;
  
  @ManyToMany(() => Dish)
  dishes: Dish[]

}