import * as firebase from "firebase";
import { toastMessageDuration } from "../src/utils";

const config = {
  apiKey: "AIzaSyDqfKG_-NcH3Tv-Zn6z25Oyvm2HNIy2vLU",
  authDomain: "first-app-react-4406b.firebaseapp.com",
  databaseURL: "https://first-app-react-4406b.firebaseio.com",
  projectId: "first-app-react-4406b",
  storageBucket: "first-app-react-4406b.appspot.com",
  messagingSenderId: "596866175208",
  appId: "1:596866175208:web:13f98b38119afeb471795d"
};

firebase.initializeApp(config);

export async function loginUser(email: string, password: string) {
  //authentication with firebase
  return new Promise((resolve, reject) => {
    const res = firebase.auth().signInWithEmailAndPassword(email, password);
    resolve(res);
    reject(res);
  });
}

export async function registerUser(email: string, senha: string) {
  return new Promise((resolve, reject) => {
    const res = firebase.auth().createUserWithEmailAndPassword(email, senha);
    resolve(res);
    reject(res);
  });
}

export function getCurrentUser() {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        resolve(user);
      } else {
        reject(null);
      }
      unsubscribe();
    });
  });
}
export function logoutUser() {
  return firebase.auth().signOut();
}
