import { Component, OnInit} from '@angular/core';

import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
recipe: Recipe;
id: number;

  constructor(private shpListService: ShoppingListService,private recipeService: RecipeService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    // this.recipe = this.recipeService.getRecipesById(this.route.snapshot.params['id']);

    //when the route for the current component is called inside the component
    //it is necessary to subscribe to the route object
    //in order to catch the changes and refresh data displayed
    this.route.params
            .subscribe(
              (params: Params) =>{ 
               this.id = +params['id'];
               this.recipe = this.recipeService.getRecipesById(this.id);
              }
            );


  }

  toShoppingList(){
    this.shpListService.addIngredients(this.recipe.ingredients);
  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes', {relativeTo: this.route}]);
 
  }
}
