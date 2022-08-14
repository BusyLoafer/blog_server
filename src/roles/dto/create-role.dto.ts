import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto {
  
  @ApiProperty({example: 'Администратор', description: 'Уникальное название роли'})
  readonly value: string;

  
  @ApiProperty({example: 'Администратор', description: 'Описание роли'})
  readonly description: string;

}