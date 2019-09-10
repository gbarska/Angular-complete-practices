import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListRoutingModule } from './shopping-list.routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [
      ShoppingListComponent,
      ShoppingEditComponent,
      ],
      imports:[
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        ShoppingListRoutingModule,
        SharedModule
      ]
})
export class ShoppingListModule{

}