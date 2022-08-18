import { ApiProperty } from "@nestjs/swagger";
import { Dish } from "src/food/dishes/dishes.entity";
import { MealType } from "src/food/entities/meal-types.entity";
import { Column, Entity, Index, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Meal {

  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: '1', description: 'Тип приёма пищи' })
  @Column()
  meal_type_id: number;

  @ApiProperty({ example: '12/12/12 12:00:00', description: 'Дата приёма пищи' })
  @Column({
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP'
  })
  @Index()
  date: string;

  @ManyToMany(() => Dish)
  @JoinTable()
  dishes: Dish[]

  @ManyToOne(() => MealType)
  mealType: MealType

}