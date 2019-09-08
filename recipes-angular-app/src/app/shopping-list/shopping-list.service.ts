import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService{
  // ingredientAdded = new EventEmitter<Ingredient[]>();
   ingredientAdded = new Subject<Ingredient[]>();
  startedEditing = new Subject<Number>();

  private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];

    getIngredients(){
        return this.ingredients.slice();
    }
    getIngredient(index: number){
      return this.ingredients[index];
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

  updateIngredient(index: number, newIngredient: Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientAdded.next(this.ingredients.slice());
  }

  deleteIngredient(index: number){
    this.ingredients.splice(index, 1);
    this.ingredientAdded.next(this.ingredients.slice());
  }
}