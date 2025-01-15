import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private readonly dbPath = '/products';

  constructor(private readonly db: AngularFireDatabase) {}

  getAllProducts(): Observable<Product[]> {
    return this.db.list<Product>(this.dbPath).valueChanges();
  }

  getProductById(id: string): Observable<Product | null> {
    return this.db.object<Product>(`${this.dbPath}/${id}`).valueChanges();
  }

  addProduct(product: Product): void {
    this.db.list<Product>(this.dbPath).push(product);
  }

  updateProduct(id: string, product: Product): void {
    this.db.object<Product>(`${this.dbPath}/${id}`).update(product);
  }

  deleteProduct(id: string): void {
    this.db.object(`${this.dbPath}/${id}`).remove();
  }
}
