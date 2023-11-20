import {initializeApp} from 'firebase/app'
import {getDatabase, ref, onValue} from 'firebase/database'
import 'firebase/database'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoxiIMqJdO65JfqsCgUj1ocmVDeC5ph1w",
  authDomain: "skycast-1dfb1.firebaseapp.com",
  projectId: "skycast-1dfb1",
  storageBucket: "skycast-1dfb1.appspot.com",
  messagingSenderId: "817061058832",
  appId: "1:817061058832:web:6059331b51a6c2dc1c2d95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getDatabase()

export {db, ref, onValue}
