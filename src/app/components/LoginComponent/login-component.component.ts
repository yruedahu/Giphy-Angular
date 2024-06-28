import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/enviroments/enviroment';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponent {

  userName: string = '';
  password: string = '';

  constructor(private router: Router) { }

  onSubmit(): void {
    if (this.userName === environment.user && this.password === environment.password) {
      localStorage.setItem('isLoggedIn', 'true')
      this.router.navigate(['/findGif']);
    }
    else {
      alert('Wrong username or password');
    }
  }
}
