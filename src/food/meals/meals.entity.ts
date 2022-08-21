import { ApiProperty } from "@nestjs/swagger";
import { Dish } from "src/food/dishes/dishes.entity";
import { MealType } from "src/food/mealtypes/mealtypes.entity";
import { Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Meal {

  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: '12/12/12 12:00:00', description: 'Дата приёма пищи' })
  @Column({
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP'
  })
  @Index()
  date: string;

  @ManyToMany(() => Dish, dish => dish.meals, { 
    eager: true,
  })
  @JoinTable()
  dishes: Dish[]

  @ManyToOne(() => MealType, mealType => mealType.meals, { 
    eager: true,
  })
  @JoinColumn()
  mealType: MealType

}