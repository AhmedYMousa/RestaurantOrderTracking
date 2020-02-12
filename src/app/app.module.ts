import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { OrderSummaryComponent } from "./components/order-summary/order-summary.component";
import { LoginComponent } from "./components/login/login.component";
import { OrderFormComponent } from "./components/order-form/order-form.component";
import { AppRoutingModule } from "./app-routing.module";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { environment } from "../environments/environment";
import { DataService } from "./services/data.service";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    OrderSummaryComponent,
    LoginComponent,
    OrderFormComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(
      environment.firebase,
      "RestaurantOrderTracking"
    ),
    AngularFirestoreModule.enablePersistence(), // enablePersistence for offline data availability
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
