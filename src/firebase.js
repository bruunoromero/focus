import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBn6wOcJYrY_mAbyzUqE0PJLTm4GB8WaGs",
  authDomain: "focus-cf420.firebaseapp.com",
  databaseURL: "https://focus-cf420.firebaseio.com",
  projectId: "focus-cf420",
  storageBucket: "focus-cf420.appspot.com",
  messagingSenderId: "147426998306",
  appId: "1:147426998306:web:2ce55cabae186381"
};

export const mapSnapshot = snapshot => {
  const data = [];
  snapshot.forEach(doc => {
    data.push({ id: doc.id, ...doc.data() });
  });

  return data;
};

export default firebase.initializeApp(config);
export const db = firebase.firestore();
