import { Component, OnInit, ɵPlayState } from '@angular/core';
import { ApiService } from "../api.service";
import { Observable } from 'rxjs';
import { Users } from 'src/assets/Users';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  tester;
  huh:any;
  email:string;
  username:string;
  password:string;
  user:Users;
  response:string;
  idk:string;
  poop:Boolean = false;
  shit:any = null;

  obs:Observable<any>;

  constructor(private api:ApiService) { }

  ngOnInit() {
  }

  register(e, u, p){
    this.email = e;
    this.username = u;
    this.password = p;
    this.user = new Users(this.email, this.username, this.password);
    console.log(this.shit);
    this.shit = this.api.postUser(this.user).subscribe((data) => {
      console.log(data);
      this.huh = data['huh'];
    });
    console.log(this.shit);
    if(this.shit != null){
      this.idk = "Success!";
      this.poop = true;
    }
  }

  test() {
    this.api.getTest().subscribe((data) => {
      console.log(data);
      this.tester = data['tester'];
    });
  }

}
