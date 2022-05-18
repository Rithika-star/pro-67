import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    const firebaseConfig = {
        apiKey: "AIzaSyBtJzAQDrKJUVvXoRhosK9EKwj3bgpViJs",
        authDomain: "pro-67-d2b9f.firebaseapp.com",
        databaseURL: "https://pro-67-d2b9f-default-rtdb.firebaseio.com",
        projectId: "pro-67-d2b9f",
        storageBucket: "pro-67-d2b9f.appspot.com",
        messagingSenderId: "415104090060",
        appId: "1:415104090060:web:17eda98da9e1315ba0a769"
      };
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();