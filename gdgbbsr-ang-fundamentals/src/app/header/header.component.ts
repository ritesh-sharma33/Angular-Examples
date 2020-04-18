import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user;
  constructor() { }

  ngOnInit(): void {
  }

  login() {
    this.user = {
      displayName: "Ritesh Sharma",
      photoURL: "https://twitter.com/sharma_ritesh33/photo",
      email: "sharmaritesh3312@gmail.com"
    }
  }

}
