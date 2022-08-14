import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from "./articles/articles.entity";
import { ArticlesModule } from './articles/articles.module';
import { User } from "./users/users.entity";
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { Role } from "./roles/roles.entity";

@Module({
  controllers: [],
  providers:[],
  imports: [
    ConfigModule.forRoot({envFilePath: `.${process.env.NODE_ENV}.env`}),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: Number(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DB,
      entities: [Article, User, Role],
      synchronize: Boolean(process.env.MYSQL_SYNC),
    }),
    ArticlesModule,
    UsersModule,
    RolesModule,
  ],

})
export class AppModule{}