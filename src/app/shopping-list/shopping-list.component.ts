import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  subscription: Subscription

  constructor(private shopplingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shopplingListService.getIngredients();
    this.subscription = this.shopplingListService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.shopplingListService.addIngredient(ingredient);
  }
}
