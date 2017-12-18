import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shoppingList/shoppingList.component';
import {ShopList} from './shoppingList/list/list.component';
import {ListEditComponent} from './shoppingList/listEdit/listEdit.component';
import {RecipeBookComponent} from './recipeBook/recipe.component';
import { RecipeItemComponent } from './recipeBook/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipeBook/recipe-detail/recipe-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShopList,
    ListEditComponent,
    RecipeBookComponent,
    RecipeItemComponent,
    RecipeDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
