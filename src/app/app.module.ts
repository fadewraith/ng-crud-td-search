import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TdFormsComponent } from './td-forms/td-forms.component';
import { GetUserDataComponent } from './get-user-data/get-user-data.component';

@NgModule({
  declarations: [
    AppComponent,
    TdFormsComponent,
    GetUserDataComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
