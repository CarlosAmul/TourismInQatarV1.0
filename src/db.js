import { initializeApp } from 'firebase/app';
import { getFirestore} from "firebase/firestore";
import { collection, onSnapshot, query } from "firebase/firestore"; 

const firebaseConfig1 = {
    apiKey: "AIzaSyDI8fCDmQfTwJsmq9FdnvKs12AIjtm8Gz4",
    authDomain: "tourisminqatar-59dff.firebaseapp.com",
    projectId: "tourisminqatar-59dff",
    storageBucket: "tourisminqatar-59dff.appspot.com",
    messagingSenderId: "673096009255",
    appId: "1:673096009255:web:3ff863c5edc27c23ad7002",
    measurementId: "G-PCC2TNX9LD"
}


const app = initializeApp(firebaseConfig1);
const db = getFirestore(app);


class Feedbacks{
   
    reformat(doc) {
        return { id: doc.id, ...doc.data() }
    }

    
    listenToFeedbacks = (set) =>{
    const q = query(collection(db, "feedbacks"));

   return onSnapshot(q, (querySnapshot) => {
    const feedbacks = [];
    querySnapshot.forEach((doc) => {
        feedbacks.push(this.reformat(doc));
    });
    
    
    set(feedbacks)
    })
}
}
export default {
    Feedbacks: new Feedbacks()
}
