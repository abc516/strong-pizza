import { Component } from '@angular/core';

@Component({
  selector: 'app-topping-list-component',
  templateUrl: './topping-list.component.html'
})
export class ToppingListComponent {
  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
  }
}
