import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
  imports: [
    RouterLink
  ],
  standalone: true
})
export class ContactUsComponent {

}
