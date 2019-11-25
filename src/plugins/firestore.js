import firebase from 'firebase/app';
import 'firebase/firestore';

if (!firebase.apps.length) {


    var firebaseConfig = {
        apiKey: "AIzaSyASKsY3RAogg6LNfLqplYZ-xhIyJojOOV8",
        authDomain: "nuxt2newsfeed.firebaseapp.com",
        databaseURL: "https://nuxt2newsfeed.firebaseio.com",
        projectId: "nuxt2newsfeed",
        storageBucket: "nuxt2newsfeed.appspot.com",
        messagingSenderId: "468075530658",
        appId: "1:468075530658:web:b20609223c8f105b3c4afb"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.firestore().settings( {
        // timestampsInSnapshots: true
    })
}

const db = firebase.firestore();

export default db;