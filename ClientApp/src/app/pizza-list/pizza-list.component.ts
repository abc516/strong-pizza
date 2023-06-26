import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPizza } from '../interfaces/IPizza';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html'
})
export class PizzaListComponent {
  public pizzas: IPizza[] = [];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<IPizza[]>(baseUrl + 'api/pizza').subscribe(result => {
      this.pizzas = result;
    }, error => console.error(error));
  }
}


