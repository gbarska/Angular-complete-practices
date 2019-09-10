import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipesResolverService } from './recipes/recipes-resolver.service';
import { AuthComponent } from './auth/auth.component';

const appRoutes: Routes = [
    {path: '', component: RecipeStartComponent,  resolve: [RecipesResolverService]}
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


