import { ApiProperty } from "@nestjs/swagger";

export class CreateMealTypeDto {

  @ApiProperty({ example: "Ужин", description: 'Тип приема' })
  readonly title: string;

  @ApiProperty({ example: 'Прием пищи после 18', description: 'Описание типа приема пищи' })
  readonly description: string;
}