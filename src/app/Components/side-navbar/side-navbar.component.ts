import { Component, OnInit } from '@angular/core';
import {Event, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css']
})
export class SideNavbarComponent implements OnInit {

  public appDrawer: any;
  constructor(private router: Router) {
    
   }

  ngOnInit() {
  }
  
  openNav(){
  
  }

}
