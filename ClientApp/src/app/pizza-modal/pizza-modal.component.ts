import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ITopping } from '../interfaces/ITopping';
import { IPizza } from '../interfaces/IPizza';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pizza-modal',
  templateUrl: './pizza-modal.component.html',
})
export class PizzaModalComponent implements OnInit {
  pizzaForm!: FormGroup;
  @Input() allToppings: ITopping[] = [];

  constructor(private formBuilder: FormBuilder, private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.pizzaForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      toppings: this.buildToppings()
    });
  }

  // public customValidateArray(): ValidatorFn {
  //   return (formArray:FormArray):{[key: string]: any} | null => {
  //     return formArray.controls.includes((x:FormControl) => {
  //         return x.value.selected==true;
  //     }) ? null : {error:'No Topping Selectet'};
  //   }
  // };

  private buildToppings(): FormArray<FormControl<unknown>> {
    const toppingsArray = this.formBuilder.array([], Validators.required);
    this.allToppings.forEach(topping => {
      toppingsArray.push(
        new FormControl(false)
      );
    });

    return toppingsArray;
  }

  // createToppings(): FormGroup {
  //   return this.formBuilder.group({
  //     selected: false
  //   });
  // }

  get toppingsFormArray(): FormArray {
    // return this.pizzaForm.get('toppings') as FormArray;
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
  }
}
