import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // New User Form
  signUpForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    rptPassword: new FormControl('')
  })

  // Login Form
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  // UI States
  showLoginForm: boolean = false;
  showSignUpForm: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSignUp(): void {
    console.log("Sign Up!")
    console.log(this.signUpForm.value)
  }

  onLogin(): void {
    console.log("Login!")
    console.log(this.loginForm.value)
  }

  toggleLoginForm() {
    this.showLoginForm = !this.showLoginForm;
    this.showSignUpForm = false;
  }

  toggleSignUpForm() {
    this.showSignUpForm = !this.showSignUpForm;
    this.showLoginForm = false;
  }

}
