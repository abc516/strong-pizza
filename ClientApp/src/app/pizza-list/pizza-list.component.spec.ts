import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PizzaListComponent } from './pizza-list.component';
import { IPizza } from '../interfaces/IPizza';

describe('PizzaListComponent', () => {
  let component: PizzaListComponent;
  let fixture: ComponentFixture<PizzaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [PizzaListComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize pizzas and toppings', () => {
    expect(component.pizzas).toEqual([]);
    expect(component.toppings).toEqual([]);
    expect(component.hideModal).toBe(true);
  });

  it('should fetch pizzas on component initialization', () => {
    spyOn(component.http, 'get').and.callThrough();
    // component.ngOnInit();
    expect(component.http.get).toHaveBeenCalledWith(`${component.baseUrl}api/pizza`);
    expect(component.pizzas).toEqual([]);
  });

  it('should fetch toppings on component initialization', () => {
    spyOn(component.http, 'get').and.callThrough();
    // component.ngOnInit();
    expect(component.http.get).toHaveBeenCalledWith(`${component.baseUrl}api/topping`);
    expect(component.toppings).toEqual([]);
    expect(component.hideModal).toBe(false);
  });

  it('should delete a pizza', (done) => {
    const mockPizza = { id: 1 };
    spyOn(window, 'fetch').and.returnValue(Promise.resolve({} as Response));
    spyOn(component, 'getPizzas').and.callThrough();
    component.delete(mockPizza as IPizza);
    expect(window.fetch).toHaveBeenCalledWith(`${component.baseUrl}api/pizza/${mockPizza.id}`, {
      method: 'DELETE'
    });
    setTimeout(() => {
      expect(component.getPizzas).toHaveBeenCalled();
      done();
    }, 0);
  });

  it('should get toppings string', () => {
    const mockToppings = [
      { name: 'Topping1', flavor: 'Flavor1' },
      { name: 'Topping2', flavor: 'Flavor2' }
    ];
    const toppingsString = component.getToppings({ $values: mockToppings });
    expect(toppingsString).toBe('Topping1 (Flavor1),Topping2 (Flavor2)');
  });

  it('should update a pizza', (done) => {
    const mockPizza = { id: 1 };
    spyOn(window, 'fetch').and.returnValue(Promise.resolve({} as Response));
    spyOn(console, 'error');
    component.update(mockPizza as IPizza);
    expect(window.fetch).toHaveBeenCalledWith(`${component.baseUrl}api/pizza/${mockPizza.id}`, {
      method: 'DELETE'
    });
    setTimeout(() => {
      expect(console.error).toHaveBeenCalledWith("didn't delete");
      done();
    }, 0);
  });
});
