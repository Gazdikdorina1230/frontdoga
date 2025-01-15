import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FirebaseService } from '../../services/firebase.service';
import { Product } from '../../models/product.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products$: Observable<Product[]>;

  constructor(private firebaseService: FirebaseService, private router: Router) {
    this.products$ = this.firebaseService.getAllProducts();
  }

  deleteProduct(id: string): void {
    this.firebaseService.deleteProduct(id);
  }

  editProduct(id: string): void {
    this.router.navigate(['/edit', id]); // Navigate to the edit form with the product ID
  }
}
