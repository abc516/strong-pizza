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

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<ITopping[]>(baseUrl + 'api/topping').subscribe(result => {
      this.toppings = result;
    }, error => console.error(error));
    this.baseUrl = baseUrl;
  }

  // public async ngOnInit(): Promise<void> {
  //   const resp = await fetch(`${this.baseUrl}api/topping`, {
  //     method: "GET"
  //   });

  public delete(topping: ITopping){

    fetch(`${this.baseUrl}api/topping/${topping.id}`, {
      method: "DELETE"
    }).then(() => {
      // message then close logic
    }).catch(() => {
      console.error("didn't delete")
    })
  }
}
