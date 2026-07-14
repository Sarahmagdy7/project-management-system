import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userName: string = 'Admin';
  stats: any[] = [];

  constructor(
    private dashboardService: DashboardService,
    private router: Router 
  ) {}


  ngOnInit(): void {
    this.stats = this.dashboardService.getStats();
  }
goToLogin(): void {
    this.router.navigate(['/login']);
  }
  logout() {
    localStorage.removeItem('isLoggedIn');
    
    this.router.navigate(['/login']);
  }
}