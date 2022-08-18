import { ApiProperty } from "@nestjs/swagger";

export class CreateNoteDto {

  @ApiProperty({ example: 'Заголовок', description: 'Заголовок' })
  readonly title: string;

  @ApiProperty({ example: 'Текст', description: 'Текст' })
  readonly text: string;

  @ApiProperty({ example: '1', description: 'Идентификатор смайла' })
  readonly smileId: number;

  @ApiProperty({ example: '1', description: 'Идентификатор производительности' })
  readonly prodictivityId: number;
}