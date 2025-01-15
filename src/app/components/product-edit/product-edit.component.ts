import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; 
import { FirebaseService } from '../../services/firebase.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;
  productId: string = ''; 

  constructor(
    private fb: FormBuilder,
    private firebaseService: FirebaseService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      description: [''],
      price: [0, [Validators.required, Validators.min(0.01)]],
    });
  }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id')!;
    this.firebaseService.getProductById(this.productId).subscribe(product => {
      if (product) {
        this.productForm.patchValue(product);
      }
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const productData = this.productForm.value;
      productData.price = parseFloat(productData.price.toFixed(2)); // Format price to two decimal places
      this.firebaseService.updateProduct(this.productId, productData);
      this.router.navigate(['/']); // Navigate back to the product list
    }
  }
}
