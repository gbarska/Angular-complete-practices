import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes.component';
import { AuthGuard } from '../auth/auth.guard';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesResolverService } from './recipes-resolver.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';

const routes: Routes = [
    {
      path: 'recipes',
      component: RecipesComponent,
      canActivate: [AuthGuard],
      children: [
      {path: 'new', component: RecipeEditComponent},
      {path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService]},
      {path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolverService]},
      {path: '', component: RecipeStartComponent, resolve: [RecipesResolverService]}
                 ]
    }
  ]

@NgModule({
imports:[RouterModule.forChild(routes)],
exports:[RouterModule]
})

export class RecipesRoutingModule { }


