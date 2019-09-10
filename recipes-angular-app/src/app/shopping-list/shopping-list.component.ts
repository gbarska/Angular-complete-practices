import { Component, OnInit, OnDestroy } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[] = [];
  private subs: Subscription;

  constructor(private shoppingListService: ShoppingListService, private logService: LoggingService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
   this.subs = this.shoppingListService.ingredientAdded
      .subscribe((ingredients: Ingredient[]) =>{
        this.ingredients = ingredients;
      });

      this.logService.printLog('hello from Shopping component ngOnInit');
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
   }

   onEditItem(index: number){
    this.shoppingListService.startedEditing.next(index);
    // console.log(index);
   }
}
