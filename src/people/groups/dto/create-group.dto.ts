import { ApiProperty } from "@nestjs/swagger";

export class CreateGroupDto {

  @ApiProperty({ example: 'Работа', description: 'Название группы' })
  readonly title: string;

  @ApiProperty({ example: 'Люди, с которыми пересекаемся на работе', description: 'Описание группы' })
  readonly description: string;

}