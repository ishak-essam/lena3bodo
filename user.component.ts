import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from '../../ui/header/header.component';
import {FooterComponent} from '../../ui/footer/footer.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  standalone: true
})
export class UserComponent {

}
