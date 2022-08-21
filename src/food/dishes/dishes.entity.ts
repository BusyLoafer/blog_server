import { ApiProperty } from "@nestjs/swagger";
import { Product } from "src/food/products/products.entity";
import { Column, Entity, Index, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Meal } from "../meals/meals.entity";

@Entity()
export class Dish {

  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Бурый рис с курицей', description: 'Название блюда' })
  @Column()
  title: string;

  @ApiProperty({ example: 'Вареный рис с запеченной курицей', description: 'Описание блюда' })
  @Column()
  description: string;

  @ApiProperty({ example: 'Сварить рис, запечь курицу', description: 'Рецепт блюда' })
  @Column()
  resipe: string;

  @ManyToMany(() => Product, (product) => product.dishes, { 
    eager: true,
  })
    @JoinTable() 
    products: Product[]

  @ManyToMany(() => Meal, meal => meal.dishes)
  meals: Meal[]

}