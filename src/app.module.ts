import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from "./articles/articles.entity";
import { ArticlesModule } from './articles/articles.module';
import { User } from "./users/users.entity";
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { Role } from "./roles/roles.entity";
import { MealsModule } from './meals/meals.module';
import { DishesModule } from './dishes/dishes.module';
import { ProductsModule } from './products/products.module';
import { Product } from "./products/products.entity";
import { Dish } from "./dishes/dishes.entity";

@Module({
  controllers: [],
  providers:[],
  imports: [
    ConfigModule.forRoot({envFilePath: `.${process.env.NODE_ENV}.env`}),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'testdb.sqlite3',
      entities: [Article, User, Role, Product, Dish],
      synchronize: true,
    }),
    ArticlesModule,
    UsersModule,
    RolesModule,
    MealsModule,
    DishesModule,
    ProductsModule,
  ],

})
export class AppModule{}