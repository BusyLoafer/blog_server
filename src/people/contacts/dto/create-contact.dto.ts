import { ApiProperty } from "@nestjs/swagger";

export class CreateContactDto {

  @ApiProperty({ example: 'Пересечение в коридоре', description: 'Название встречи' })
  readonly title: string;

  @ApiProperty({ example: 'Общались по поводу тикета', description: 'Описание встречи' })
  readonly description: string;

  @ApiProperty({ example: '1', description: 'Идентификатор типа контакта' })
  readonly typeContactId: number;

  @ApiProperty({ example: '1', description: 'Идентификатор человека' })
  readonly personId: number;

  @ApiProperty({ example: '1', description: 'Идентификатор смайла' })
  readonly smileId: number;
}