import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginData = {
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  onLogin(form: NgForm) {
    if (form.valid) {
      if (this.loginData.email === 'admin@gmail.com' && this.loginData.password === '123456') {
        
        localStorage.setItem('isLoggedIn', 'true');
        
        this.router.navigate(['/dashboard']);
        
      } else {
        alert('Invalid Email or Password! Try: admin@gmail.com / 123456');
      }
    }
  }
}