import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';

const appRoutes: Routes = [
    {path: '', component: RecipeStartComponent},
    {path: 'shopping', component: ShoppingListComponent},
    {path: 'recipes', component: RecipesComponent, children: [
      {path: 'new', component: RecipeEditComponent},
      {path: ':id/edit', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailComponent},
      {path: '', component: RecipeStartComponent}
    ]}
  ]

@NgModule({
imports: [
    RouterModule.forRoot(appRoutes)
  ],
exports: [
    RouterModule
]
})


export class AppRoutingModule { }


