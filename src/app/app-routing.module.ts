import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { AdminComponent } from "./components/admin/admin.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { OrdersComponent } from "./components/orders/orders.component";
import { AuthGuard } from "./guards/auth.guard";

const appRoutes: Routes = [
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [AuthGuard]
  },
  { path: "orders", component: OrdersComponent },
  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "/orders", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
