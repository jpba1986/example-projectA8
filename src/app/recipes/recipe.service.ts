import { Recipe } from './recipe.model';
import {  Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

/*     private recipes:Recipe[] = [
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
      ]; */

      private recipes:Recipe[] = [];
      constructor(private slService: ShoppingListService ){}

      setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
      }

      getRecipes(){
          return this.recipes.slice(); // get a copy of the array
      }

      getRecipe(index: number){
        return this.recipes[index]; 
      }
      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
      }

      addRecipe(recipe:Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }
      
      updateRecipe(index:number, newRecipe:Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }

      deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
      }
}