import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isLogin(): boolean {
    // Check if 'loginId' is present in localStorage
    return !!localStorage.getItem('loginId');
  }
  logout() {
    // Check if 'loginId' is present in localStorage
     localStorage.setItem('loginId',"");
  }
  getUserType(): string {
    // Retrieve the value associated with the "role" key from localStorage
    return localStorage.getItem("role") ?? '';
  }
}

