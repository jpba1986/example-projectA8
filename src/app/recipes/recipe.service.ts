import { Recipe } from './recipe.model';

export class RecipeService {
    private recipes:Recipe[] = [
        new Recipe('Test Recipe',' its a test','https://cdn.pixabay.com/photo/2015/10/26/07/21/soup-1006694_960_720.jpg'),
        new Recipe('Test Recipe 2',' its a test 2 ','https://cdn.pixabay.com/photo/2015/10/26/07/21/soup-1006694_960_720.jpg')
      ];

      getRecipes(){
          return this.recipes.slice(); // get a copy of the array
      }
}