import { ApiProperty } from "@nestjs/swagger";
import { Dish } from "src/food/dishes/dishes.entity";
import { MealType } from "src/food/mealtypes/mealtypes.entity";

export class CreateMealFullDto {

  @ApiProperty({
    example: {
      id: 1,
      title: "Ужин",
      description: "плотный приём пищи после 16:00 "
    }, description: 'Тип приема'
  })
  readonly mealType: MealType;

  @ApiProperty({ example: '12/12/12 12:00:00', description: 'Дата приема пищи' })
  readonly date?: string;

  @ApiProperty({
    example: [{
      id: 1,
      title: "Бурый рис с курицей",
      description: "Вареный рис с запеченной курицей",
      resipe: "Сварить рис, запечь курицу"
    }], description: 'Идентификаторы блюд'
  })
  readonly dishes: Dish[];

}