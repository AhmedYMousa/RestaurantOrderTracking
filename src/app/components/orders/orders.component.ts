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
  carousel: any[];
  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getOrders().subscribe(orders => {
      this.orders = orders.filter(o => o.status == "جاهز");
      return this.orders;
    });
    this.carousel = [
      {
        id: "assets/img/1.jpg",
        title: "اربيا برجر",
        active: "active"
      },
      { id: "assets/img/2.jpg", title: "براوني برجر" },
      { id: "assets/img/3.jpg", title: "برجر بوكس" },
      { id: "assets/img/4.jpg", title: "بومبر برجر" },
      { id: "assets/img/5.jpg", title: "بيستو برجر" },
      { id: "assets/img/6.jpg", title: "تشكن بارميزان" },
      { id: "assets/img/7.jpg", title: "تشكن بيستو" },
      { id: "assets/img/8.jpg", title: "تشكن ستيك برجر" },
      { id: "assets/img/9.jpg", title: "تشكن كاجون" },
      { id: "assets/img/10.jpg", title: "روكيت كرسبي" },
      { id: "assets/img/11.jpg", title: "سموكي برجر" },
      { id: "assets/img/12.jpg", title: "كلاسيك تشكن برجر" },
      { id: "assets/img/13.jpg", title: "كلاسيك كرسبي" }
    ];
  }
}
