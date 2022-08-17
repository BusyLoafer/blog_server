import { ApiProperty } from "@nestjs/swagger";
import { Product } from "src/products/products.entity";
import { Column, Entity, Index, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Dish {

  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Бурый рис с курицей', description: 'Название блюда' })
  @Column()
  title: string;

  @ApiProperty({ example: 'Вареный рис с запеченной курицей', description: 'Описание блюда' })
  @Column()
  description: string;

  @ApiProperty({ example: 'Сварить рис, запечь курицу', description: 'Рецепт блюда' })
  @Column()
  resipe: string;

  @ManyToMany(() => Product)
    @JoinTable()
    products: Product[]

}