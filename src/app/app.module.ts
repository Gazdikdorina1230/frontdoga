import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat'; // Firebase modul
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { FirebaseService } from './services/firebase.service'; // A Firebase szolgáltatás importálása


@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), 
    AngularFireDatabaseModule,
  ],
  providers: [FirebaseService],
})
export class AppM {}

@NgModule({
    imports: [BrowserModule, AppComponent],
  })
  @NgModule({
    declarations: [AppComponent], 
    imports: [BrowserModule],
    bootstrap: [AppComponent],
  })
  export class AppModule {}
  
