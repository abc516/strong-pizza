import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Flavor, ITopping } from '../interfaces/ITopping';

@Component({
  selector: 'app-topping-modal',
  templateUrl: './topping-modal.component.html',
})
export class ToppingModalComponent implements OnInit {
  toppingForm!: FormGroup;
  flavors: string[] = Object.values(Flavor);

  constructor(private formBuilder: FormBuilder, private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

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
      const body = {Flavor: `${this.toppingForm.controls['flavor'].value}`  , Name: `${this.toppingForm.controls['name'].value}` };

      this.http.post(`${this.baseUrl}api/topping`,
       body,
      {  }).subscribe(result => {
        console.log('Added topping successfully')
        this.closeModal();
      }, error => console.error(error));

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
