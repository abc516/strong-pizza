import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { PizzaModalComponent } from './pizza-modal/pizza-modal.component';
import { ToppingListComponent } from './topping-list/topping-list.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { ToppingModalComponent } from './topping-modal/topping-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    PizzaModalComponent,
    ToppingListComponent,
    PizzaListComponent,
    ToppingModalComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'pizzas', pathMatch: 'full' },
      { path: 'toppings', component: ToppingListComponent },
      { path: 'pizzas', component: PizzaListComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
