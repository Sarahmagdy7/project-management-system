import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users-list',
  standalone: false, 
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  usersList: any[] = [];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getTechUsers().subscribe({
      next: (data) => {
        this.usersList = data;
      },
      error: (err) => {
        console.error('Error fetching users:', err);
      }
    });
  }
}