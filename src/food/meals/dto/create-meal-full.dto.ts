import { ApiProperty } from "@nestjs/swagger";
import { Dish } from "src/food/dishes/dishes.entity";
import { Product } from "src/food/products/products.entity";

export class CreateMealFullDto {

  @ApiProperty({ example: {
    "id": 1,
    "title": "Ужин",
    "description": "плотный приём пищи после 16:00 "
  }, description: 'Тип приема' })
  readonly MealType: number;

  @ApiProperty({ example: '12/12/12 12:00:00', description: 'Дата приема пищи' })
  readonly date: string;

  @ApiProperty({ example: [{
    id: 1,
    title: "Вареный рис с мясом",
    description: "Вареный бурый рис и запеченное мясо",
    resipe: "Сварить рис, запечь курицу"
  }], description: 'Ингредиенты' })
  readonly dishes: Dish[];
  
}