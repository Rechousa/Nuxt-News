import firebase from 'firebase/app';
import 'firebase/firestore';

if (!firebase.apps.length) {


    var firebaseConfig = {
        apiKey: "[APIKEY]",
        authDomain: "[authDomain]",
        databaseURL: "[databaseURL]",
        projectId: "[projectId]",
        storageBucket: "[storageBucket]",
        messagingSenderId: "[messagingSenderId]",
        appId: "[appId]"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.firestore().settings( {
        timestampsInSnapshots: true
    })
}

const db = firebase.firestore();

export default db;