import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import ReactiveFormsModule
import { FirebaseService } from '../../services/firebase.service'; // Import FirebaseService

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule], // Add ReactiveFormsModule to imports
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private firebaseService: FirebaseService) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      description: [''],
      price: [0, [Validators.required, Validators.min(0.01)]],
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const productData = this.productForm.value;
      this.firebaseService.addProduct(productData); // Add the new product to Firebase
      this.productForm.reset(); // Reset the form after submission
      console.log('Product added:', productData);
    }
  }
}
