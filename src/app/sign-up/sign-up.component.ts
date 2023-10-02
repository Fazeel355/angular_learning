import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup | any;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  onSignUp() {
    if (this.signupForm.valid) {
      // Get the form values
      const formData = this.signupForm.value;
  
      // Check if user data already exists in local storage
      let userData = localStorage.getItem('userData');
      let users = [];
  
      if (userData) {
        users = JSON.parse(userData);
  
        // Ensure that users is an array
        if (!Array.isArray(users)) {
          users = [];
        }
      }
  
      // Add the new user data to the array
      users.push(formData);
  
      // Save the updated user data to local storage
      localStorage.setItem('userData', JSON.stringify(users));
  
      // Redirect to the homepage
      this.router.navigate(['home']);
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


// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-sign-up',
//   templateUrl: './sign-up.component.html',
//   styleUrls: ['./sign-up.component.scss']
// })
// export class SignUpComponent implements OnInit {
//   signupUsers: any[] = [];
//   signupObj: any = {
//     userName: '',
//     email: '',
//     password: ''
//   };

//   ngOnInit(): void {
//     const localData = localStorage.getItem('signupUsers');
//     if (localData != null) {
//       this.signupUsers = JSON.parse(localData);
//     }
//   }

//   onSignUp() {
//     this.signupUsers.push(this.signupObj);
//     localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers));
//     alert('Registration Successful');
//   }
// }
