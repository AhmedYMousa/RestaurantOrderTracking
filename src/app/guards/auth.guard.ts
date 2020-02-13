import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): Observable<boolean> | boolean {
  //   debugger;
  //   if (this.auth.authenticated) {
  //     return true;
  //   }

  //   return this.auth.currentUserObservable
  //     .take(1)
  //     .map(user => !!user)
  //     .do(loggedIn => {
  //       if (!loggedIn) {
  //         console.log("access denied");
  //         this.router.navigate(["/login"]);
  //       }
  //     });
  // }
  canActivate() {
    
    if (this.auth.isAuthenticated()) {
      return true;
    }

    this.router.navigate(["/login"]);
    return false;
  }
}
