import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
username = new FormControl('',Validators.required);
password = new FormControl('',Validators.required);

  constructor(private router: Router) {}
  login(){
    console.log(this.username);
    this.router.navigate(['/profile']); 
  }
  signup(){
    this.router.navigate(['/signup']);
  }
}
