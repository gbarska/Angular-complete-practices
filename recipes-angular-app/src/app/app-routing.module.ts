import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipesResolverService } from './recipes/recipes-resolver.service';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';

const appRoutes: Routes = [
    {path: '', component: RecipeStartComponent,  resolve: [RecipesResolverService]},
    {path: 'shopping', component: ShoppingListComponent},
    {path: 'auth', component: AuthComponent},
    {
      path: 'recipes',
      component: RecipesComponent,
      canActivate: [AuthGuard],
      children: [
      {path: 'new', component: RecipeEditComponent},
      {path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService]},
      {path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolverService]},
      {path: '', component: RecipeStartComponent, resolve: [RecipesResolverService]}
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


