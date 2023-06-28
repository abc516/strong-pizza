import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ITopping } from '../interfaces/ITopping';
import { IPizza } from '../interfaces/IPizza';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pizza-modal',
  templateUrl: './pizza-modal.component.html',
})
export class PizzaModalComponent implements OnInit {
  pizzaForm!: FormGroup;
  @Input() allToppings: ITopping[] = [];

  constructor(private formBuilder: FormBuilder, public http: HttpClient, @Inject('BASE_URL') public baseUrl: string, private router: Router) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.pizzaForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      toppings: this.buildToppings()
    });
  }

  public buildToppings(): FormArray<FormControl<unknown>> {
    const toppingsArray = this.formBuilder.array([], Validators.required);
    this.allToppings.forEach(topping => {
      toppingsArray.push(
        new FormControl(false)
      );
    });

    return toppingsArray;
  }


  get toppingsFormArray(): FormArray {
    return this.pizzaForm.controls.toppings as FormArray;
  }

  getSelectedToppings(): { name: string, flavor: string }[] {
    return this.toppingsFormArray.controls
      .filter((control) => control.value)
      .map((control, ind) => ({ name: this.allToppings[ind].name as string, flavor: this.allToppings[ind].flavor as string, id: this.allToppings[ind].id }));
  }

  submitForm(): void {
    if (this.pizzaForm.valid && this.getSelectedToppings().length > 0) {
      // Handle form submission
      console.log(this.pizzaForm.value);
      // You can send the form data to your API or perform other actions
      const newPizza: IPizza = {
        name: this.pizzaForm.get('name')?.value,
        toppings: this.getSelectedToppings() as ITopping[]
      };
      this.http.post(`${this.baseUrl}api/pizza`, newPizza)
      .subscribe(result => {
        console.log('Added pizza successfully')
        this.closeModal();
      }, error => console.error(error));

      // Close the modal
      this.closeModal();
    } else {
      // Form is invalid, display validation errors
      this.markFormControlsAsTouched();
    }
  }

  markFormControlsAsTouched(): void {
    Object.keys(this.pizzaForm.controls).forEach(controlName => {
      this.pizzaForm.get(controlName)?.markAsTouched();
    });
  }

  closeModal(): void {
    // Logic to close the modal
    $('.modal-backdrop').hide();
    $('.modal').removeClass('show');
    const currentUrl = this.router.url;
        this.router.navigateByUrl('/toppings', {skipLocationChange: true}).then(() => {
            this.router.navigate(['/pizzas']);
        });
  }
}
