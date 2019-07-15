import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes:Recipe[] = [
        new Recipe(
            'Test Recipe',
            ' its a test','https://cdn.pixabay.com/photo/2015/10/26/07/21/soup-1006694_960_720.jpg',
        [
            new Ingredient('Meat',1),
            new Ingredient('French Fries',20)
        ]),
        new Recipe(
            'Test Recipe 2',
            ' its a test 2 ','https://cdn.pixabay.com/photo/2015/10/26/07/21/soup-1006694_960_720.jpg',
            [
                new Ingredient('Buns',2),
                new Ingredient('Meat',2)
            ])
      ];

      constructor(private slService: ShoppingListService ){}

      getRecipes(){
          return this.recipes.slice(); // get a copy of the array
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
      }
}