import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { RouterModule, Routes, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  constructor() { }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  logoutUser(){
    localStorage.removeItem('token');
    // this._router.navigate(['/events'])
  }
}
