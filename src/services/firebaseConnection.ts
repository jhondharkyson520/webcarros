import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyCDp50sIweP06KZrMBMOcOseyiepcGw6Ok",
  authDomain: "webcarros-eb47b.firebaseapp.com",
  projectId: "webcarros-eb47b",
  storageBucket: "webcarros-eb47b.appspot.com",
  messagingSenderId: "976745192119",
  appId: "1:976745192119:web:24d992ba2c28e2f66fcb32"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };