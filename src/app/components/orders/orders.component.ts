import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { Order } from "src/app/models/order";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.css"]
})
export class OrdersComponent implements OnInit {
  orders: Order[];

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getOrders().subscribe(orders => {
      return (this.orders = orders);
    });
  }
}
