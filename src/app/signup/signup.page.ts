import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  profileForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    emailadd: new FormControl(''),
    age: new FormControl(''),

    
  });
  constructor(private router: Router) { }

  ngOnInit() {
  }
  submit(){
    console.log(this.profileForm.value);
    this.router.navigate(['/profile']);
  }

  login(){
   this.router.navigate(['/home']);
  }

}
