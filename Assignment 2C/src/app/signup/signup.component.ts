import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  formdata: any;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.formdata = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
      name: new FormControl(),
    });
  }

  onClickSubmit(data: any) {
    if (data.name && data.email && data.password) {
      localStorage.setItem('user', JSON.stringify(data));
      this.router.navigateByUrl('/login');
    }
  }
}