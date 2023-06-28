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
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    this.getPizzas(http, baseUrl);
    http.get<ITopping[]>(baseUrl + 'api/topping').subscribe(result => {
      this.toppings = result
      this.hideModal = false;
    }, error => console.error(error))
  }

  private getPizzas(http: HttpClient, baseUrl: string) {
    http.get<IPizza[]>(baseUrl + 'api/pizza').subscribe(result => {
      this.pizzas = result;
    }, error => console.error(error));
  }

  public delete(pizza: IPizza){

    fetch(`${this.baseUrl}api/pizza/${pizza.id}`, {
      method: "DELETE"
    }).then(() => {
      this.getPizzas(this.http, this.baseUrl);
    }).catch(() => {
      console.error("didn't delete")
    })
  }

  public getToppings(toppings: any): string {
    // need to do an additional mapping due to EF properties on backend
    const toppingsCleaned: ITopping[] = toppings["$values"];
    return toppingsCleaned.map(topping => `${topping.name} (${topping.flavor})`).join(',');
  }

  public update(pizza: IPizza){

    fetch(`${this.baseUrl}api/pizza/${pizza.id}`, {
      method: "DELETE"
    }).then(() => {
      // message then close logic
    }).catch(() => {
      console.error("didn't delete")
    })
  }
}


