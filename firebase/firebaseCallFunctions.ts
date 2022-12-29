import firebase,{ initializeApp, getApp, getApps } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useRouter } from "next/router";
import nookies from "nookies";

import firebaseApp from './firebaseApp'

const analytics = getAnalytics(firebaseApp)
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

const googleOnSubmit = async () => {
  try{
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider)
    const user = result.user
    const docRef = doc(db, "users", user.uid)
    const docSnap = await getDoc(docRef);
    
    if(!docSnap.exists()) {
      await setDoc(doc(db,"userd",user.uid),{
        name: user.displayName,
        email: user.email
      })
    }

  }catch(e){
    console.log(e)
  }
}

export { analytics, db, auth }