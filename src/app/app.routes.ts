import { Routes } from '@angular/router';

export const routes: Routes = [
  // Lazy load User module
  {
    path: '',
    loadChildren: () =>
      import('./shared/layouts/user/user.module').then((m) => m.UserModule),
  },

  // Lazy load Admin module
  {
    path: 'admin',
    loadChildren: () =>
      import('./shared/layouts/admin/admin.module').then((m) => m.AdminModule),
  },

  // Wildcard (optional)
  { path: '**', redirectTo: '' },

];
