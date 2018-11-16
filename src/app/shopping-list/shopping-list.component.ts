import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shopplingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shopplingListService.getIngredients();
    this.shopplingListService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      )
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.shopplingListService.addIngredient(ingredient);
  }
}
