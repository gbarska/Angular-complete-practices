import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService{
  // ingredientAdded = new EventEmitter<Ingredient[]>();
   ingredientAdded = new Subject<Ingredient[]>();

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
        // this.ingredientAdded.emit(this.ingredients.slice());
        this.ingredientAdded.next(this.ingredients.slice());
    }
    addIngredients(ingredients: Ingredient[]) {
      this.ingredients.push.apply(this.ingredients, ingredients);
      console.log(this.ingredients);
      // this.ingredientAdded.emit(this.ingredients.slice());
      this.ingredientAdded.next(this.ingredients.slice());
  }
}