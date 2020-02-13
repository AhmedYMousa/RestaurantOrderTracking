import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { Order } from "src/app/models/order";
import { Observable } from "rxjs";
import { orderStatus } from "../../models/enums";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {
  orders: Order[];

  constructor(private data: DataService, private auth: AuthService) {}

  ngOnInit() {
    this.data.getOrders().subscribe(orders => {
      return (this.orders = orders);
    });
  }
  cancelOrder(event, order: Order) {
    let orderToUpdate = order;
    orderToUpdate.status = orderStatus.Cancelled.toString();
    this.data.updateOrder(orderToUpdate);
  }
  completelOrder(event, order: Order) {
    order.status = orderStatus.Completed.toString();
    this.data.updateOrder(order);
  }
  receiveOrder(event, order: Order) {
    order.status = orderStatus.Received.toString();
    this.data.updateOrder(order);
  }
  SignOut() {
    this.auth.LogOut();
  }
  // deleteOrder(order: Order) {
  //   this.data.deleteOrder(order);
  // }
}