import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-above',
  standalone: false,
  templateUrl: './above.component.html',
  styleUrls: ['./above.component.scss']
})
export class AboveComponent {

  constructor(private router: Router) {}

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}