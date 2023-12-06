import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { provideAuth, getAuth } from '@angular/fire/auth';

import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { from } from 'rxjs';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { LabsComponent } from './pages/labs/labs.component';
import { HeaderComponent } from './commons/header/header.component';
import { HomedosComponent } from './pages/homedos/homedos.component';

const config = {
  apiKey: "AIzaSyCWEZWo-STe73v0ivr1wpx3YBNBr8ZzPR8",
  authDomain: "apii-5f0de.firebaseapp.com",
  databaseURL: "https://apii-5f0de-default-rtdb.firebaseio.com",
  projectId: "apii-5f0de",
  storageBucket: "apii-5f0de.appspot.com",
  messagingSenderId: "570084493382",
  appId: "1:570084493382:web:59c0b7f1e3d47ccb26e247",
  measurementId: "G-H1WMFH5ZK0"
};

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent,
    LabsComponent,
    HeaderComponent,
    HomedosComponent,
  ],
  imports: [

    BrowserModule,
    provideFirebaseApp(() => initializeApp(config)),
    provideAuth(() => getAuth()),
    HttpClientModule,
    FormsModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

