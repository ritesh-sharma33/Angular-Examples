import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  getAuthToken(): string {
    return "TOKEN-ABCDEFG";
  }

  constructor() { }
}
