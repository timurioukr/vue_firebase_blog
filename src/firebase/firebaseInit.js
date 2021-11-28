import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD4mBDWDE7SaRRohJQguNSsIlFqPavgIqc",
  authDomain: "fireblogsyt-a9fbe.firebaseapp.com",
  projectId: "fireblogsyt-a9fbe",
  storageBucket: "fireblogsyt-a9fbe.appspot.com",
  messagingSenderId: "574463715762",
  appId: "1:574463715762:web:82921d0166d674cedc5cab"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {timestamp}
export default firebaseApp.firestore()
