import { ApiProperty } from "@nestjs/swagger";
import { Role } from "src/roles/roles.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

  @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({example: 'email@email.com', description: 'Email пользователя'})
  @Column()
  email: string;

  @ApiProperty({example: 'qwerty123', description: 'Пароль пользователя'})
  @Column()
  password: string;

  @ManyToMany(() => Role)
    @JoinTable()
    roles: Role[]
}