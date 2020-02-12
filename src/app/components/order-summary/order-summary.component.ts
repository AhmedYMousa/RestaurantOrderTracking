import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { Order } from "src/app/models/order";
import { Observable } from "rxjs";
import { orderStatus } from "../../models/enums";

@Component({
  selector: "app-order-summary",
  templateUrl: "./order-summary.component.html",
  styleUrls: ["./order-summary.component.css"]
})
export class OrderSummaryComponent implements OnInit {
  orders: Order[];

  constructor(private data: DataService) {}

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
  // deleteOrder(order: Order) {
  //   this.data.deleteOrder(order);
  // }
}
