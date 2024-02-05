import { Component } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css'
})
export class RecipesListComponent {
  recipes= Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://unsplash.com/photos/sliced-tomatoes-with-ground-pork-iNwCO9ycBlc')
  ];

  constructor(){

  }


}
