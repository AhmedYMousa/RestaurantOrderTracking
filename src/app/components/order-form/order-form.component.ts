import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { Order } from "src/app/models/order";

@Component({
  selector: "app-order-form",
  templateUrl: "./order-form.component.html",
  styleUrls: ["./order-form.component.css"]
})
export class OrderFormComponent implements OnInit {
  order: Order = {
    orderNumber: "",
    status: "",
    dateCreated: null,
    dateUpdated: null,
    isFinished: false
  };

  isValid: boolean;
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.isValid = false;
  }

  onSubmit() {
    if (this.order.orderNumber != "") {
      this.order.status = "Created";
      this.order.dateCreated = new Date().toLocaleDateString();
      this.order.dateUpdated = this.order.dateCreated;
      this.data.addOrder(this.order);
      this.clearForm();
    } else {
      this.isValid = true;
    }
  }
  clearForm(): void {
    this.order.orderNumber = "";
    this.isValid = false;
  }
}
