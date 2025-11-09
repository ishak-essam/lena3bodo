import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink
  ],
  standalone:true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Add this line
})
export class HomeComponent {

}
