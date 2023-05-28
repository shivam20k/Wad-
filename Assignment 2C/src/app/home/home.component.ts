import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  name = '';
  email = '';
  constructor() {}

  ngOnInit(): void {
    const userData = localStorage.getItem('user');

    if (!userData) {
      return;
    }
   const user = JSON.parse(userData);
    this.name = user.name;
    this.email = user.email;
  }
}
