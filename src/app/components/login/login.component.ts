import { Component, OnInit } from "@angular/core";
import { Login } from "src/app/models/login";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";

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
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}
  Login() {
    this.auth.Login(this.login);
    // let user = localStorage.getItem("user");
    // if (user != null) {
    //   this.router.navigate(["admin"]);
    // }
  }
}
