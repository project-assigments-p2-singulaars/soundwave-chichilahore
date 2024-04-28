import { Component } from '@angular/core';

@Component({
  selector: 'acme-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
    isLoggedIn = false;
  
    logIn(event:MouseEvent){
      this.isLoggedIn = true;
      alert("entrando")
    }
  
    logOut(event:FocusEvent) {
      this.isLoggedIn = false;
      alert("saliendo")
    }
  }