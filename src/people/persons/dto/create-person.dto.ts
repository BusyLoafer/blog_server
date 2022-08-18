import { ApiProperty } from "@nestjs/swagger";

export class CreatePersonDto {
  
  @ApiProperty({ example: 'Имя', description: 'Имя' })
  readonly firstName: string;

  @ApiProperty({ example: 'Фамилия', description: 'Фамилия' })
  readonly secondName: string;

  @ApiProperty({ example: 'Отчество', description: 'Отчество' })
  readonly lastName: string;

  @ApiProperty({ example: 'Описание', description: 'Дополнительные заметки' })
  readonly description: string;

  @ApiProperty({ example: true, description: 'Мужской - true' })
  readonly gender: boolean;

  @ApiProperty({ example: '12/12/12 12:00:00', description: 'Дата рождения' })
  readonly date?: string;

  @ApiProperty({ example: 1, description: 'Идентификатор группы' })
  readonly groupId?: number;

}