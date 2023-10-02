import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent 
  {
    signInForm: FormGroup | any;
  
    constructor(private formBuilder: FormBuilder, private router: Router) {}
  
    ngOnInit(): void {
      this.signInForm = this.formBuilder.group({
        userName: ['', Validators.required],
        password: ['', Validators.required]
      });
    }
  
    onSignIn() {
      if (this.signInForm.valid) {
        // Get the form values
        const formData = this.signInForm.value;
  
        // Retrieve user data from local storage
        const userData = JSON.parse(localStorage.getItem('userData') || '[]');
  
        // Check if the user exists
        const userExists = userData.find((user: any) =>
          user.userName === formData.userName && user.password === formData.password
        );
  
        if (userExists) {
          // Redirect to the home page upon successful sign-in
          this.router.navigate(['home']);
        } else {
          // Handle unsuccessful sign-in (e.g., display an error message)
          alert('Invalid username or password. Please try again.');
        }
      }
    }
  }
  // signupUsers: any[] = [];
  // signupObj: any = {
  //   userName: '',
  //   email: '',
  //   password: '',

  // };
  // loginObj: any = {
  //   userName: '',
  //   password: ''

  // };
  // constructor(private router: Router) {}

  // ngOnInit(): void {
  //   const localData = localStorage.getItem('signupUsers');
  //   if (localData != null) {
  //     this.signupUsers = JSON.parse(localData);
  //   }

  // }
  // onSignUp() {
  //   this.signupUsers.push(this.signupObj);
  //   localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers))
  // }
  // onLogin() {

  //   const isUserExist = this.signupUsers.find(m => m.userName == this.loginObj.userName && m.password == this.loginObj.password);
  //   debugger
  //   if(isUserExist != undefined) {
  //   alert("login Successful");
  //   this.router.navigate(['home']);

  // }else{
  //   alert('wrong credentials');
  // }
  // }

  

