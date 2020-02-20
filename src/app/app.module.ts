import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AdminComponent } from "./components/admin/admin.component";
import { LoginComponent } from "./components/login/login.component";
import { OrderFormComponent } from "./components/order-form/order-form.component";
import { AppRoutingModule } from "./app-routing.module";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { environment } from "../environments/environment";
import { DataService } from "./services/data.service";
import { FormsModule } from "@angular/forms";
import { AuthService } from "./services/auth.service";
import { AngularFireAuthModule } from "angularfire2/auth";
import { OrdersComponent } from "./components/orders/orders.component";
import { AuthGuard } from "./guards/auth.guard";
import { NavComponent } from "./components/nav/nav.component";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    OrderFormComponent,
    PageNotFoundComponent,
    OrdersComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(
      environment.firebase,
      "RestaurantOrderTracking"
    ),
    AngularFirestoreModule.enablePersistence(), // enablePersistence for offline data availability
    FormsModule,
    AngularFireAuthModule
  ],
  providers: [DataService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
