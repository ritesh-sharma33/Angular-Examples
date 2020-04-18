import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {

  constructor() { }
    user = {
      displayName: "Ritesh Sharma",
      photoURL: "https://twitter.com/sharma_ritesh33/photo",
      email: "sharmaritesh3312@gmail.com"
    }

  ngOnInit(): void {
  }

}
