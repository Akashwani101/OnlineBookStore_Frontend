import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserProductComponent } from './user-product/user-product.component';
import { SuccessfulComponent } from './successful/successful.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminProductComponent,
    UserProductComponent,
    SuccessfulComponent,
    HomeComponent,
    SignupComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'admin-product', component:AdminProductComponent},
      {path:'user-product', component:UserProductComponent},
      {path:'successful', component:SuccessfulComponent},
      {path:'',redirectTo:'/home',pathMatch:'full'},
      {path:'home',component:HomeComponent},
      {path:'signup',component:SignupComponent},
      {path:'about',component:AboutComponent},
     
    ])
  ],
  providers: [provideHttpClient(withFetch())],
  bootstrap: [AppComponent]
})
export class AppModule { }
