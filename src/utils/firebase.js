import firebase from 'firebase/compat/app'

const firebaseConfig = {
    apiKey: "AIzaSyAyhzinoO1uZuXaqN6uTK0p-3pSf7AJcFY",
    authDomain: "yilan-ba001.firebaseapp.com",
    projectId: "yilan-ba001",
    storageBucket: "yilan-ba001.appspot.com",
    messagingSenderId: "902561457418",
    appId: "1:902561457418:web:07ae250319d096a33b06f3"
};

firebase.initializeApp(firebaseConfig)

export default firebase;