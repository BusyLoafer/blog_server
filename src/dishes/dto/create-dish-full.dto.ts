import { ApiProperty } from "@nestjs/swagger";

export class CreateDishFullDto {

  @ApiProperty({ example: 'Вареный рис с мясом', description: 'Название блюда' })
  readonly title: string;

  @ApiProperty({ example: 'Вареный бурый рис и запеченное мясо', description: 'Описание блюда' })
  readonly description: string;
  
  @ApiProperty({ example: 'Сварить рис, запечь курицу', description: 'Рецепт блюда' })
  readonly resipe: string;
  
  @ApiProperty({ example: [1,2], description: 'Ингредиенты' })
  readonly products: number[];

}