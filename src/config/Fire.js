import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCU1Cng9ghZY3rwa3_2NUT-SJa_WZfl6qA",
  authDomain: "shipmnts-expense-manager.firebaseapp.com",
  databaseURL: "https://shipmnts-expense-manager-default-rtdb.firebaseio.com",
  projectId: "shipmnts-expense-manager",
  storageBucket: "shipmnts-expense-manager.appspot.com",
  messagingSenderId: "392990170209",
  appId: "1:392990170209:web:d66a61462be9da6d139e20",
};

const fire = firebase.initializeApp(config);
export default fire;
