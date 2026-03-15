import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private router: Router, private location: Location) {}

  goBack() { 
    this.location.back(); 
  }

  goForward() { 
    this.location.forward(); 
  }

  logout() {
    localStorage.clear(); 
    
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
  }
}