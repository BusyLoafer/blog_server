import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  
  @ApiProperty({example: 'email@email.com', description: 'Email пользователя'})
  readonly email: string;

  
  @ApiProperty({example: 'qwerty123', description: 'Пароль пользователя'})
  readonly password: string;

}