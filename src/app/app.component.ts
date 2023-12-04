import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentcrudComponent } from './studentcrud/studentcrud.component';
import { BrowserModule } from '@angular/platform-browser';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  // schemas :[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    CommonModule, 
    RouterOutlet,
    FormsModule,
    HttpClientModule,
    StudentcrudComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
}
