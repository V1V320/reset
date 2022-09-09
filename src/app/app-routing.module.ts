import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetpasswordComponent } from './component/forgetpassword/forgetpassword.component';
import { NewpasswordComponent } from './component/newpassword/newpassword.component';
import { OtpComponent } from './component/otp/otp.component';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
  {
    path:'',component:ForgetpasswordComponent, },
    {path:'otp',component:OtpComponent},
    {path:'newpassword',component:NewpasswordComponent}
    
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

