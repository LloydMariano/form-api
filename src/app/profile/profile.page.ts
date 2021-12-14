import { Component, OnInit } from '@angular/core';
import { InfoService } from '../services/info.service';
import { Router } from '@angular/router';
import { Friends } from '../info/info';




@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  
  data: Friends

  constructor( public apiService: InfoService, public router: Router ) {this.data= new Friends() }
  ngOnInit() {
  }
  Gotocss(){
    {
      this.router.navigate(['friend-list']);
    };
  }

}