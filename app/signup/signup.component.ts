import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup
  constructor(private formbuilder: FormBuilder, private _http:HttpClient, private _router:Router) { }

  ngOnInit(): void {
    this.signupForm = this.formbuilder.group({
      name:[''],
      email:[''],
      mobile:[''],
      password: ['']
    })
  }

  signUp(){
    this._router.navigate(['/login'])
  alert('Signup Successfully');
  }
}
