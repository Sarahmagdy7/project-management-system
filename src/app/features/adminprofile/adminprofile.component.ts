import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.scss']
})
export class AdminprofileComponent implements OnInit {
  adminInfo: any;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.adminInfo = this.profileService.getUser();
  }
}