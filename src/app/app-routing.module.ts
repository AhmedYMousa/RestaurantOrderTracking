import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { OrderSummaryComponent } from "./components/order-summary/order-summary.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

const appRoutes: Routes = [
  { path: "orders", component: OrderSummaryComponent },
  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "/orders", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
