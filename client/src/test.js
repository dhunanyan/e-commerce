import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("0wOm2HuM60DUTnJwj77P")
  .collection("cartItems")
  .doc("kij4Spt4oqRcqCKiwWzS");
firestore.doc("/users/0wOm2HuM60DUTnJwj77P/cartItems/kij4Spt4oqRcqCKiwWzS");
firestore.collection("/users/0wOm2HuM60DUTnJwj77P/cartItems");
