import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription, Subject } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];


  private igChangedSub : Subscription;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.igChangedSub = this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) =>{
        this.ingredients = ingredients;
      }
    );
  }

  onEditItem(index: number){
    this.slService.startingEditing.next(index);    
  }


  ngOnDestroy():void {
    this.igChangedSub.unsubscribe();
  }

 // onIngredientAdded( ingredient: Ingredient){
 //   this.ingredients.push(ingredient);
 // }
}
