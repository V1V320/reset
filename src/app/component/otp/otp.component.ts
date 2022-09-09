import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxOtpInputConfig } from 'ngx-otp-input';


@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
  MyOtpForm : FormGroup|any

  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.MyOtpForm = new FormGroup({
      'OTP': new FormControl (null,Validators.required)
    })
  }
  
  otpInputConfig:NgxOtpInputConfig ={
     otpLength:4,
    autofocus:true,
    classList:{
      inputBox:'my-super-class',
      inputFilled:'my-super-filled-class',
      inputDisabled:'my-super-disable-class',
      inputSuccess:'my-super-success-class',
      inputError:'my-super-error-class'
    },
   
  }
  
  
  
    onsubmit(){
      this.http.post('url','').subscribe(responseData =>{
        console.log(responseData)
       })
      console.log(this.router.navigate(['/newpassword']))
    }
  }
   





  


