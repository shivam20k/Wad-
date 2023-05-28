import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formdata: any;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.formdata = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  onClickSubmit(data: any) {
    if (data.email && data.password) {
      const userData = localStorage.getItem('user');

      if (!userData) {
        return;
      }
      const user = JSON.parse(userData);

      if (user.email === data.email) {
        if (user.password === data.password) {
          this.router.navigateByUrl('/home');
        } else {
          alert('Invalid password');
        }
      } else {
        alert('Invalid email');
      }
    }
  }
}