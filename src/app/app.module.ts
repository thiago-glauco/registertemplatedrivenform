import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import "hammerjs";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TopMenuComponent } from './top-menu/top-menu.component';


@NgModule({
  imports:      [
    //Material and FlexLayout imports
    BrowserModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  declarations: [ AppComponent, HelloComponent, LoginComponent, RegisterComponent, TopMenuComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
