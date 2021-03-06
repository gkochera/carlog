import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // New User Form
  signUpForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    rptPassword: new FormControl('')
  })

  signUpFormError = false;
  signUpFormErrorMsg = '';

  // Login Form
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
  loginFormError = false;
  loginFormErrorMsg = '';

  // UI States
  showLoginForm: boolean = false;
  showSignUpForm: boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onSignUp(): void {
    console.log("Sign Up!")
    const newUser = <User>this.signUpForm.value
    this.userService
      .addUser(newUser)
      .subscribe(
        (result) => {
          localStorage.setItem('user-id', <string>result._id)
          this.router.navigate(['garage'])
        },
        (error) => {
          this.signUpFormError = true;
          this.signUpFormErrorMsg = error.error.message;
        })
  }

  onLogin(): void {
    console.log("Login!")
    this.userService
    .loginUser(this.loginForm.value.email)
    .subscribe(
      (result) => {

        localStorage.setItem('user-id', <string>result._id)
        this.router.navigate(['garage'])
      },
      (error) => {
        this.signUpFormError = true;
        this.signUpFormErrorMsg = error.error.message;
      })
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
