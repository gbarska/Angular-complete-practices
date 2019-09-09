import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({
    providedIn: 'root'
})
export class DataStorageService{

    constructor(private http: HttpClient, private recipeService: RecipeService,private authService: AuthService){ }

   save(){
       const recipes = this.recipeService.getRecipes();
       this.http.put('https://ng-course-recipe-f61c5.firebaseio.com/recipes.json',recipes).subscribe( data => {
           console.log(data);
       });
   }

   fetch() {
   return this.authService.user.pipe(
    take(1),
    exhaustMap(user => {
      return this.http.get<Recipe[]>('https://ng-course-recipe-f61c5.firebaseio.com/recipes.json',
      {
          params: new HttpParams().set('auth',user.token)
      })
    }),
    map(recipes => {
        //this is the javascript map function
      return recipes.map(recipe => {
         return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
       })
    }),
    tap( recipes => {
        this.recipeService.setRecipes(recipes);
    }));
   
   
  } 
}