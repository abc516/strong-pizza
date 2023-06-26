import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pizza-modal',
  templateUrl: './pizza-modal.component.html',
})
export class PizzaModalComponent implements OnInit {
  pizzaForm!: FormGroup;
  totalToppings: number = 4; // Replace with the actual number of toppings available

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.pizzaForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      toppings: this.formBuilder.array([], Validators.required)
    });
  }

  createToppings(): FormGroup {
    return this.formBuilder.group({
      selected: false
    });
  }

  get toppings(): FormArray {
    return this.pizzaForm.get('toppings') as FormArray;
  }

  submitForm(): void {
    if (this.pizzaForm.valid) {
      // Handle form submission
      console.log(this.pizzaForm.value);
      // You can send the form data to your API or perform other actions

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
