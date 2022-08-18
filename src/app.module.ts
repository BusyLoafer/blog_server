import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from "./articles/articles.entity";
import { ArticlesModule } from './articles/articles.module';
import { User } from "./users/users.entity";
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { Role } from "./roles/roles.entity";
import { MealsModule } from './food/meals/meals.module';
import { DishesModule } from './food/dishes/dishes.module';
import { ProductsModule } from './food/products/products.module';
import { Product } from "./food/products/products.entity";
import { Dish } from "./food/dishes/dishes.entity";
import { Meal } from "./food/meals/meals.entity";
import { MealType } from "./food/entities/meal-types.entity";
import { DiariesModule } from './journal/diaries/diaries.module';
import { NotesModule } from './journal/notes/notes.module';
import { ProductivitiesController } from './other/productivities/productivities.controller';
import { ProductivitiesModule } from './other/productivities/productivities.module';
import { SmilesController } from './other/smiles/smiles.controller';
import { SmilesModule } from './other/smiles/smiles.module';
import { Note } from "./journal/notes/notes.entity";
import { Smile } from "./other/smiles/smiles.entity";
import { Productivity } from "./other/productivities/productivities.entity";
import { Diary } from "./journal/diaries/diaries.entity";
import { PersonsController } from './people/persons/persons.controller';
import { PersonsModule } from './people/persons/persons.module';
import { ContactsController } from './people/contacts/contacts.controller';
import { ContactsModule } from './people/contacts/contacts.module';
import { GroupsModule } from './people/groups/groups.module';
import { Person } from "./people/persons/persons.entity";
import { Group } from "./people/groups/groups.entity";
import { Contact } from "./people/contacts/contacts.entity";
import { TypeContact } from "./people/contacts/typeContact.entity";

@Module({
  controllers: [ProductivitiesController, SmilesController, PersonsController, ContactsController],
  providers: [],
  imports: [
    ConfigModule.forRoot({ envFilePath: `.${process.env.NODE_ENV}.env` }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'testdb.sqlite3',
      entities: [
        Article,
        User,
        Role, 
        Product, 
        Dish, 
        Meal, 
        MealType, 
        Note, 
        Smile, 
        Productivity, 
        Diary,
        Person,
        Group,
        Contact,
        TypeContact
      ],
      synchronize: true,
    }),
    ArticlesModule,
    UsersModule,
    RolesModule,
    MealsModule,
    DishesModule,
    ProductsModule,
    DiariesModule,
    NotesModule,
    ProductivitiesModule,
    SmilesModule,
    PersonsModule,
    ContactsModule,
    GroupsModule,
  ],

})
export class AppModule { }