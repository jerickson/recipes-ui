import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Butter Chicken', 'Indian staple', 'https://www.wellplated.com/wp-content/uploads/2018/07/Healthy-Instant-Pot-Butter-Chicken-600x808.jpg'),
    new Recipe('Butter Chicken', 'Indian staple', 'https://www.wellplated.com/wp-content/uploads/2018/07/Healthy-Instant-Pot-Butter-Chicken-600x808.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
