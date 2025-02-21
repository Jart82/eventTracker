import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CountComponent } from './components/count/count.component';



@NgModule({
  declarations: [],
  imports: [
    CountComponent,
    BrowserModule,
    CommonModule,
    FormsModule
  ]
})
export class AppModule { }
