import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService { 
  private stats = [
    { title: 'Total Projects', count: 12, 
      icon: 'fa-project-diagram',
       colorClass: 'card-yellow', location: 'United States', 
       name: 'Sunshine Pvt Ltd' },
    { title: 'Active Users', count: 150, icon: 'fa-users',
       colorClass: 'card-blue', location: 'India',
        name: 'Facebook Inc' },
    { title: 'Pending Tasks', count: 8, icon: 'fa-clock', 
      colorClass: 'card-red', location: 'United States',
       name: 'Yahoo Inc' },
    { title: 'Completed', count: 45, icon: 'fa-check-circle', 
      colorClass: 'card-green', location: 'United States', 
      name: 'Accenture Pvt Ltd' },
    { title: 'New Leads', count: 23, icon: 'fa-user-plus',
       colorClass: 'card-black', location: 'India', 
       name: 'Sundeep Tech' },
    { title: 'Revenue', count: '$5k', icon: 'fa-dollar-sign',
       colorClass: 'card-blue-dark', location: 'United States',
        name: 'Tech Mahindra' }
  ];

  getStats() {
    return this.stats;
  }
}