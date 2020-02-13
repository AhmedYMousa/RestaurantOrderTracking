import { Injectable } from "@angular/core";
import { Login } from "../models/login";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;
  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.user = afAuth.authState;

    this.user.subscribe(user => {
      if (user) {
        this.userDetails = user;
        localStorage.setItem("user", JSON.stringify(this.userDetails));
      } else {
        this.userDetails = null;
      }
    });
  }

  Login(login: Login) {
    this.afAuth.auth
      .signInWithEmailAndPassword(login.email, login.password)
      .then(() => {
        this.router.navigate(["admin"]);
      })
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  }
  Register() {
    // return new Promise<any>((resolve, reject) => {
    //   firebase
    //     .auth()
    //     .createUserWithEmailAndPassword(login.email, login.password)
    //     .then(
    //       res => {
    //         resolve(res);
    //       },
    //       err => reject(err)
    //     );
    // });
  }
  LogOut() {
    localStorage.removeItem("user");
    this.afAuth.auth.signOut().then(res => this.router.navigate(["/login"]));
  }
  isAuthenticated() {
    let user = localStorage.getItem("user");
    if (user == null) {
      return false;
    } else {
      return true;
    }
  }
  get currentUserObservable(): any {
    return this.afAuth.auth;
  }
}
