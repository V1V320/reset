import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { dematerialize } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
   MyReactiveForm :FormGroup|any

 
 
 
 
  constructor(private router:Router ,private http:HttpClient ) { }
  

  ngOnInit(): void {
    this.MyReactiveForm = new FormGroup({
          'email': new FormControl ('', Validators.compose([Validators.required,Validators.email])),
         
          
         
    });
  }
 


  onSubmit(){
    
   this.http.post('url','').subscribe(responseData =>{
    console.log(responseData)
   })
   
    this.router.navigate(['/otp'])
  }


}


