import { Component, OnInit } from '@angular/core';
import { LoginService } from './shared/login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public loginService: LoginService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Form Submit');
    this.loginService.validateUser();
    // https://codecraft.tv/courses/angular/http/http-with-observables/
  }

}
