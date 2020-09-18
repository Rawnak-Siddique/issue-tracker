import * as firebase from "firebase/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0ZP2iTtBFFeREuCxef9v-jTbt5eJ9V0g",
  authDomain: "issue-trac-web.firebaseapp.com",
  databaseURL: "https://issue-trac-web.firebaseio.com",
  projectId: "issue-trac-web",
  storageBucket: "issue-trac-web.appspot.com",
  messagingSenderId: "1033421269090",
  appId: "1:1033421269090:web:274cc54664972a10ce893b",
  measurementId: "G-WQTBSEHBQ1",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
