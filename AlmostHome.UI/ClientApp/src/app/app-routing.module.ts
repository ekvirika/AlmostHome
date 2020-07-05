import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  
  // {
  //   path: '',
  //   redirectTo: '/home/home',
  //   pathMatch: 'full'
  // },
  // {
  //   path: '',
  //   component: ContentLayoutComponent,
  //   // canActivate: [NoAuthGuard], // Should be replaced with actual auth guard
  //   children: [
  //     {
  //       path: 'dashboard',
  //       loadChildren: () =>
  //         import('./modules/home/home.module').then(m => m.HomeModule)
  //     },
  //     {
  //       path: 'about',
  //       loadChildren: () =>
  //         import('./modules/about-us/about-us.module').then(m => m.AboutUsModule)
  //     },
  //     {
  //       path: 'contact',
  //       loadChildren: () =>
  //         import('./modules/contact/contact.module').then(m => m.ContactModule)
  //     },
  //     {
  //       path: 'profile',
  //       loadChildren: () =>
  //         import('./modules/profile/profile.module').then(m => m.ProfileModule)
  //     },
  //   ]
  // },
  // {
  //   path: 'auth',
  //   component: AuthLayoutComponent,
  //   loadChildren: () =>
  //     import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule)
  // },
  // Fallback when no prior routes is matched
  // { path: '**', redirectTo: '/home/home', pathMatch: 'full' }
];

//     // {
//     //     path: '',
//     //     component: ContentLayoutComponent,
//     // },
//     {
//       path: '',
//       // redirectTo: '/authentication/login',
//       redirectTo: '/home/home',
//       pathMatch: 'full'
//     },
//     {
//       path: '',
//       component: ContentLayoutComponent,
//       children: [
//         {
//           path: 'home',
//           loadChildren: () =>
//             import('./modules/home/home.module').then(m => m.HomeModule)
//         },
//         {
//           path: 'about',
//           loadChildren: () =>
//             import('./modules/about-us/about-us.module').then(m => m.AboutUsModule)
//         },
//         // {
//         //   path: 'login',
//         //   loadChildren: () =>
//         //     import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule)
//         // }
//       ]
//     },
//     {
//       path: 'auth',
//       component: AuthLayoutComponent,
//       loadChildren: () =>
//         import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule)
//     },
//     // Fallback when no prior routes is matched
//     { path: '**', redirectTo: '/authentication/login', pathMatch: 'full' }
// ];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
