import { Component, Inject } from '@angular/core';
import { ITopping } from '../interfaces/ITopping';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-topping-list-component',
  templateUrl: './topping-list.component.html'
})
export class ToppingListComponent {
  public currentCount = 0;
  public toppings: ITopping[] = [];
  public baseUrl: string;
  public incrementCounter() {
    this.currentCount++;
  }

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
    this.getToppings(http, baseUrl);
  }

  private getToppings(http: HttpClient, baseUrl: string) {
    http.get<ITopping[]>(baseUrl + 'api/topping').subscribe(result => {
      this.toppings = result;
    }, error => console.error(error));
  }

  public delete(topping: ITopping){

    fetch(`${this.baseUrl}api/topping/${topping.id}`, {
      method: "DELETE"
    }).then(() => {
      // refresh topping
      this.getToppings(this.http, this.baseUrl);
    }).catch(() => {
      console.error("didn't delete")
    })
  }

  public update(topping: ITopping){

    this.http.put(`${this.baseUrl}api/topping`, {
      topping
    }).subscribe(() => {
      // message then close logic
    }, error => console.error(error));
  }
}
