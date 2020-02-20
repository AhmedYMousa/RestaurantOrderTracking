import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  isAuth(): boolean {
    return this.auth.isAuthenticated();
  }
  SignOut(): void {
    console.log("Clicked");
    this.auth.LogOut();
  }
}
