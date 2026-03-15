import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private techGiants = [
    { id: 3, name: 'Bill Gates', role: 'Microsoft Founder', 
      status: 'Verified', img: 'assets/img/images.webp', 
      createdAt: 'Sep 28, 2022' },
    { id: 7, name: 'Mark Zuckerberg', role: 'Meta CEO',
       status: 'Verified', img: 'assets/img/images (1) - Copy.webp',
        createdAt: 'Sep 28, 2022' },
    { id: 12, name: 'Elon Musk', role: 'Tesla CEO',
       status: 'Not Verified', img: 'assets/img/images (2).webp',
        createdAt: 'Sep 28, 2022' },
    { id: 66, name: 'Jeff Bezos', role: 'Amazon Founder', 
      status: 'Verified', img: 'assets/img/images (3).webp',
       createdAt: 'Sep 28, 2022' },
    { id: 99, name: 'Steve Jobs', role: 'Apple Co-founder',
       status: 'Verified', img: 'assets/img/images (4).webp',
        createdAt: 'Sep 28, 2022' }
  ];

  private techGiantsSource = new BehaviorSubject<any[]>(this.techGiants);

  constructor() { }

  getTechUsers(): Observable<any[]> {
    return this.techGiantsSource.asObservable();
  }
}