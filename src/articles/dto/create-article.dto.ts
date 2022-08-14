import { ApiProperty } from "@nestjs/swagger";

export class CreateArticleDto {
  
  @ApiProperty({example: 'Обвал рынка', description: 'Заголовок статьи'})
  readonly title: string;

  
  @ApiProperty({example: 'Сегодня произошел обвал рынка в...', description: 'Тело статьи'})
  readonly text: string;

  @ApiProperty({example: true, description: 'Флаг публикации статьи'})
  readonly published: boolean;
}