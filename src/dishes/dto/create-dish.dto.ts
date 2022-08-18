import { ApiProperty } from "@nestjs/swagger";

export class CreateDishDto {

  @ApiProperty({ example: 'Вареный рис с мясом', description: 'Название блюда' })
  readonly title: string;

  @ApiProperty({ example: 'Вареный бурый рис и запеченное мясо', description: 'Описание блюда' })
  readonly description: string;
  
  @ApiProperty({ example: 'Сварить рис, запечь курицу', description: 'Рецепт блюда' })
  readonly resipe: string;

}