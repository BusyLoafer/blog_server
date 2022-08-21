import { ApiProperty } from "@nestjs/swagger";
import { Product } from "src/food/products/products.entity";

export class CreateDishFullDto {

  @ApiProperty({ example: 'Вареный рис с мясом', description: 'Название блюда' })
  readonly title: string;

  @ApiProperty({ example: 'Вареный бурый рис и запеченное мясо', description: 'Описание блюда' })
  readonly description: string;
  
  @ApiProperty({ example: 'Сварить рис, запечь курицу', description: 'Рецепт блюда' })
  readonly resipe: string;
  
  @ApiProperty({ example: [{
    id: 1,
    title: "Белый рис",
    description: "Описание белый рис"
  }], description: 'Ингредиенты' })
  readonly products: Product[];

}