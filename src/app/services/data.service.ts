import { Injectable } from "@angular/core";
import { Order } from "../models/order";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "angularfire2/firestore";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DataService {
  ordersCollection: AngularFirestoreCollection<Order>;
  orders: Observable<any[]>;
  orderDoc: AngularFirestoreDocument<unknown>;

  constructor(private firestore: AngularFirestore) {
    this.ordersCollection = this.firestore.collection("orders", refs => {
      return refs.orderBy("orderNumber", "desc");
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
    order.dateUpdated = new Date();
    this.orderDoc = this.firestore.collection("orders").doc(order.id);
    this.orderDoc.update(order);
    /**
     * db.collection("cities").doc("DC").update({
    capital: true
});
    */
  }
  // deleteOrder(order: Order) {
  //   this.firestore.doc("orders/" + order.id).delete();
  // }
}
