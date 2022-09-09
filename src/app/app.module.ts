import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ForgetpasswordComponent } from './component/forgetpassword/forgetpassword.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewpasswordComponent } from './component/newpassword/newpassword.component';
import { OtpComponent } from './component/otp/otp.component';

import { NgxOtpInputModule } from 'ngx-otp-input';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import{HttpClientModule} from '@angular/common/http'




@NgModule({
  declarations: [
    AppComponent,
    ForgetpasswordComponent,
   NewpasswordComponent,
   OtpComponent,
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxOtpInputModule,
    HttpClientModule

    
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
