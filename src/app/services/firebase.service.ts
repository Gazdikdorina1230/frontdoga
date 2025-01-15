import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {

  private readonly db = firebase.database();
  private readonly dbPath = '/products';

  constructor() {
    firebase.initializeApp(environment.firebaseConfig);  // Firebase inicializálás
  }

  getAllProducts(): Observable<Product[]> {
    return new Observable((observer) => {
      this.db.ref(this.dbPath).once('value').then((snapshot) => {
        const products = snapshot.val();
        observer.next(Object.values(products));
        observer.complete();
      });
    });
  }

  addProduct(product: Product): void {
    const productRef = this.db.ref(this.dbPath);
    productRef.push(product);
  }

  updateProduct(id: string, product: Product): void {
    this.db.ref(`${this.dbPath}/${id}`).update(product);
  }

  deleteProduct(id: string): void {
    this.db.ref(`${this.dbPath}/${id}`).remove();
  }
}
