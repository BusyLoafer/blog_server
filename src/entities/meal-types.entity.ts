import { ApiProperty } from "@nestjs/swagger";
import { Dish } from "src/dishes/dishes.entity";
import { Meal } from "src/meals/meals.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class MealType {

  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Ужин', description: 'Тип приёма пищи' })
  @Column()
  title: string;

  @ApiProperty({ example: 'плотный приём пищи после 16:00 ', description: 'Описание типа приёма пищи' })
  @Column()
  description: string;

  @OneToMany(() => Meal, (meal) => meal.mealType)
  meals: Meal[]
}