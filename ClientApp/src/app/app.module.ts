import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { PizzaModalComponent } from './pizza-modal/pizza-modal.component';
import { ToppingListComponent } from './topping-list/topping-list.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    PizzaModalComponent,
    ToppingListComponent,
    PizzaListComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'fetch-data', pathMatch: 'full' },
      { path: 'counter', component: ToppingListComponent },
      { path: 'fetch-data', component: PizzaListComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
