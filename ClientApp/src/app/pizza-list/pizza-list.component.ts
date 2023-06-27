import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPizza } from '../interfaces/IPizza';
import { ITopping } from '../interfaces/ITopping';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html'
})
export class PizzaListComponent {
  public pizzas: IPizza[] = [];
  public toppings: ITopping[] = [];
  public hideModal = true;
  constructor(http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    http.get<IPizza[]>(baseUrl + 'api/pizza').subscribe(result => {
      this.pizzas = result;
    }, error => console.error(error));
    http.get<ITopping[]>(baseUrl + 'api/topping').subscribe(result => {
      this.toppings = result
      this.hideModal = false;
    }, error => console.error(error))
  }

  public delete(pizza: IPizza){

    fetch(`${this.baseUrl}api/pizza/${pizza.id}`, {
      method: "DELETE"
    }).then(() => {
      // message then close logic
    }).catch(() => {
      console.error("didn't delete")
    })
  }
}


