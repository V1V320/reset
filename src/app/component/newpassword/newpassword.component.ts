import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.component.html',
  styleUrls: ['./newpassword.component.css']
})
export class NewpasswordComponent implements OnInit {
  MyForm : FormGroup|any

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.MyForm = new FormGroup({
      'password':new FormControl ('', Validators.compose([Validators.required,Validators.minLength(6)])),
      'confirm_password':new FormControl ('',Validators.compose([Validators.required]))

    })
  }
 // confirm password
onPasswordChange() {
  if (this.confirm_password.value == this.password.value) {
    this.confirm_password.setErrors(null);
  } else {
    this.confirm_password.setErrors({ mismatch: true });
  }
}

// getting the form control elements
get password(): AbstractControl {
  return this.MyForm.controls['password'];
}

get confirm_password(): AbstractControl {
  return this.MyForm.controls['confirm_password'];
}
 
  
  onSubmit(){

    
      this.http.post('url','').subscribe(responseData =>{
       console.log(responseData)
      })
  }


}
