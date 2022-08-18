import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {

  @ApiProperty({ example: 'Бурый рис', description: 'Название продукта' })
  readonly title: string;

  @ApiProperty({ example: 'Описание бурый рис', description: 'Описание продукта' })
  readonly description: string;

}