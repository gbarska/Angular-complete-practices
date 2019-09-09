import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DataStorageService{

    constructor(private http: HttpClient, private recipeService: RecipeService){ }

   save(){
       const recipes = this.recipeService.getRecipes();
       this.http.put('https://ng-course-recipe-f61c5.firebaseio.com/recipes.json',recipes).subscribe( data => {
           console.log(data);
       });
   }

   fetch() {
    return this.http.get<Recipe[]>('https://ng-course-recipe-f61c5.firebaseio.com/recipes.json')
    //this is the map operator from rxjs
    .pipe(map(recipes => {
        //this is the javascript map function
        return recipes.map(recipe => {
            return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
        })
    }), tap( recipes => {
        this.recipeService.setRecipes(recipes);
    })
    );       
  } 
}