import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{
  ingredientAdded = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        console.log(this.ingredients);
        this.ingredientAdded.emit(this.ingredients.slice());
    }
    addIngredients(ingredients: Ingredient[]) {
      this.ingredients.push.apply(this.ingredients, ingredients);
      console.log(this.ingredients);
      this.ingredientAdded.emit(this.ingredients.slice());
  }
}