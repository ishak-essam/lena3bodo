import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, RouterOutlet, Routes} from '@angular/router';
import {HeaderComponent} from '../../ui/header/header.component';
import {FooterComponent} from '../../ui/footer/footer.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {UserComponent} from './user.component';
import {HomeComponent} from './home/home.component';
import {OurServicesComponent} from './our-services/our-services.component';

export const USER_ROUTES: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: 'home', component: HomeComponent }, // <-- default when /user is empty
      { path: 'about-us', component: AboutUsComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'our-services', component: OurServicesComponent },
      { path: '', redirectTo: 'home',pathMatch:'full' },
    ],
  },

  { path: 'about-us', component: AboutUsComponent },
];

@NgModule({
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    RouterModule.forChild(USER_ROUTES),
    CommonModule,

  ]
})
export class UserModule {
}

