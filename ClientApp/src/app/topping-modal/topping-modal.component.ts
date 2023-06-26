import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-topping-modal',
  templateUrl: './topping-modal.component.html',
})
export class ToppingModalComponent implements OnInit {
  toppingForm!: FormGroup;
  flavors: string[] = ['Pepperoni', 'Mushroom', 'Onion', 'Green Pepper'];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.toppingForm = this.formBuilder.group({
      flavor: ['', Validators.required],
      name: ['', [Validators.required, Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9 ]*$')]]
    });
  }

  submitForm(): void {
    if (this.toppingForm.valid) {
      // Handle form submission
      console.log(this.toppingForm.value);
      // You can send the form data to your API or perform other actions

      // Close the modal
      this.closeModal();
    } else {
      // Form is invalid, display validation errors
      this.markFormControlsAsTouched();
    }
  }

  markFormControlsAsTouched(): void {
    Object.keys(this.toppingForm.controls).forEach(controlName => {
      this.toppingForm.get(controlName)?.markAsTouched();
    });
  }

  closeModal(): void {
    // Logic to close the modal
  }
}
