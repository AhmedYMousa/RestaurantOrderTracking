import { Injectable } from "@angular/core";
import { Order } from "../models/order";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "angularfire2/firestore";
import { Observable, from } from "rxjs";
import { not } from "@angular/compiler/src/output/output_ast";
import { orderStatus } from "../models/enums";

@Injectable({
  providedIn: "root"
})
export class DataService {
  ordersCollection: AngularFirestoreCollection<Order>;
  orders: Observable<any[]>;
  orderDoc: AngularFirestoreDocument<unknown>;

  constructor(private firestore: AngularFirestore) {
    this.ordersCollection = this.firestore.collection("orders", refs => {
      return refs
        .where("isFinished", "==", false)
        .where("dateCreated", "==", new Date().toLocaleDateString())
        .orderBy("orderNumber", "desc");
    });
    this.orders = this.ordersCollection.valueChanges({ idField: "id" });
  }

  getOrders() {
    return this.orders;
  }

  addOrder(order: Order) {
    this.ordersCollection.add(order);
  }
  updateOrder(order: Order) {
    order.dateUpdated = new Date().toLocaleDateString();
    this.orderDoc = this.firestore.collection("orders").doc(order.id);
    this.orderDoc.update(order);
  }
  // deleteOrder(order: Order) {
  //   this.firestore.doc("orders/" + order.id).delete();
  // }
}
