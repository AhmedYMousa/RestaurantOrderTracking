import { Component, OnInit } from "@angular/core";
import { Login } from "src/app/models/login";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  login: Login = {
    id: "",
    email: "",
    password: ""
  };
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}
  Login() {
    let user=localStorage.getItem("user");
    if(user==null){
      this.auth.Login(this.login);
    }
   
  }
}
