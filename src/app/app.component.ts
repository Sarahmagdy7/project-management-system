import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'First-Project';
  constructor(public router: Router) {}

  showNavbar(): boolean {
    const hiddenRoutes = ['/', '/login'];
    return !hiddenRoutes.includes(this.router.url);
  }
}