import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { LoginComponent } from './modules/authentication/login/login.component';
import { RegisterComponent } from './modules/authentication/register/register.component';
import { HomeComponent } from './modules/home/home.component';
import { SharedModule } from './shared/shared.module';


import { AccountService } from './shared/services/account.service';
import { AnimalService } from './shared/services/animal.service';


import { NavComponent } from './layout/nav/nav.component';
import { HeaderComponent } from './layout/nav/header/header.component';
import { FooterLayoutComponent } from './layout/footer-layout/footer-layout.component';
import { AnimalsViewComponent } from './modules/animals-view/animals-view.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modules/animals-view/modal/modal.component';
import { PlacesComponent } from './modules/animals-view/modal/places.component';
import { AnimalCardCpmponent } from './modules/animals-view/animal-card/animal-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    HeaderComponent,
    FooterLayoutComponent,
    AnimalsViewComponent,
    ProfileComponent,
    ModalComponent,
    PlacesComponent,
    AnimalCardCpmponent
  ],
  entryComponents: [
    ModalComponent,
    PlacesComponent
  ],
  imports: [
    //Angular
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),

    HttpClientModule,
    NgbModule,

    //App

    AuthenticationModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    
    // 3rd Party

    // AppServerModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'authentication/login', component: LoginComponent },
      { path: 'authentication/register', component: RegisterComponent },
      { path: 'animals-view', component: AnimalsViewComponent },
      { path: 'profile', component: ProfileComponent },
    //   { path: 'fetch-data', component: FetchDataComponent },
    //   { path: 'random-number', component: RandomNumberComponent },
    // ])
    ]),
  ],
  exports:[
  ],

  providers: [
    // AccountService,
    // AnimalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
