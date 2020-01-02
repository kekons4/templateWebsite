import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Users } from 'src/assets/Users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logins;
  email:string;
  username:string;
  password:string;
  user:Users;

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  login(e, p){
    this.email = e;
    this.password = p;
    this.user = new Users(this.email, "blank", this.password);
    this.api.login(this.user).subscribe((data) => {
      console.log(data);
      this.logins = data['logins'];
    });
  }

}
