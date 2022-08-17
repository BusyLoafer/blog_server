import { ApiProperty } from "@nestjs/swagger";

export class CreateMealFullDto {

  @ApiProperty({ example: 1, description: 'Тип приема' })
  readonly type_meal_id: number;

  @ApiProperty({ example: '12/12/12 12:00:00', description: 'Дата приема пищи' })
  readonly text: string;

  @ApiProperty({ example: [1, 2, 3], description: 'Идентификаторы блюд' })
  readonly dish_ids: number[];

}