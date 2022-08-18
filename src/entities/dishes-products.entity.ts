import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class DishProducts {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dishId: number;

  @Column()
  productId: number;
}