import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  
  private defaultData = {
    name: '',
    email: '',
    phone: '',
    country: 'Egypt',
    governorate: 'Assiut',
    university: 'Assiut University of Technology',
    age: null,
    image: 'assets/img/computer.jpg'
  };

  private userData: any = null;

  constructor() {
    const saved = localStorage.getItem('user_profile');
    this.userData = saved ? JSON.parse(saved) : { ...this.defaultData };
  }

  setUser(data: any) {

    this.userData = { ...this.userData, ...data };

    localStorage.setItem('user_profile', JSON.stringify(this.userData));
  }

  getUser() {
    return this.userData;
  }

  clearUser() {
    this.userData = { ...this.defaultData };
    localStorage.removeItem('user_profile');
  }
}