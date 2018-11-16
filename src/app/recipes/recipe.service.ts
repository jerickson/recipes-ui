import { EventEmitter, Injectable } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Butter Chicken',
      'Indian staple',
      'https://img.taste.com.au/qDjJh8W8/taste/2016/11/butter-chicken-101831-1.jpeg',
      [
        new Ingredient('Chicken Thighs', 8),
        new Ingredient('Butter', 1),
        new Ingredient('Garam Masala', 1),
      ]
      ),
    new Recipe(
      'Italian Brussel Sprouts',
      'Fusion',
      'https://static01.nyt.com/images/2018/10/24/dining/ar-brussels-sprouts-with-sausage-and-onions/merlin_145231653_8752fd70-cbfb-4d01-9dac-b70abcbfcc6d-articleLarge.jpg',
      [
        new Ingredient('Italian Sausage', 1),
        new Ingredient('Brussel Sprouts', 1),
        new Ingredient('Red Onion', 1),
      ])
  ];

  constructor(private shoppingList: ShoppingListService) {

  }

  getRecipes() {
    // return a copy of the array
    return this.recipes.slice();
  }

  addToShoppingList(recipe: Recipe) {
    this.shoppingList.addIngredients(recipe.ingredients);
  }

}
