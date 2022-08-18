import { ApiProperty } from "@nestjs/swagger";

export class CreateMealFullDto {

  @ApiProperty({ example: 1, description: 'Тип приема' })
  readonly meal_type_id: number;

  @ApiProperty({ example: '12/12/12 12:00:00', description: 'Дата приема пищи' })
  readonly date: string;

  @ApiProperty({ example: [1, 2, 3], description: 'Идентификаторы блюд' })
  readonly dishes: number[];

}