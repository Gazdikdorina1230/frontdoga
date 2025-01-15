import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { RouterModule, provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { ReactiveFormsModule } from '@angular/forms';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    ReactiveFormsModule,
  ],
});
