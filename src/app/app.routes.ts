import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';

export const routes: Routes = [
  { path: 'product-list', component: ProductListComponent },
  { path: 'product-edit/:id', component: ProductEditComponent },
  { path: '', redirectTo: '/product-list', pathMatch: 'full' },
  { path: '**', redirectTo: '/product-list' } // Wildcard route for a 404 page
];
