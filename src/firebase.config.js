import {getApp,getApps,initializeApp} from'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyACSMmyfOhSUyHLy3I0ohNZq7cMNjGFxL8",
    authDomain: "restaurantapp-bbfd5.firebaseapp.com",
    databaseURL: "https://restaurantapp-bbfd5-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-bbfd5",
    storageBucket: "restaurantapp-bbfd5.appspot.com",
    messagingSenderId: "247511480952",
    appId: "1:247511480952:web:bef7a09e76c37696ab8b8d"
  };

  const app = getApps.length>0 ? getApp():initializeApp(firebaseConfig);
  const firestore=getFirestore(app)
  const storage =getStorage(app)

  export {app,firestore,storage}