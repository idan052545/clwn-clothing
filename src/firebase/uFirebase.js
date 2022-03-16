import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBb2g1NuQyKss2d-cvMjUYx3VHmxxPx9PA",
  authDomain: "crwn-db-186a8.firebaseapp.com",
  projectId: "crwn-db-186a8",
  storageBucket: "crwn-db-186a8.appspot.com",
  messagingSenderId: "841589550390",
  appId: "1:841589550390:web:b4ddc2d8492e33083c1797",
  measurementId: "G-HMBJMV7MPF",
};

export const createUserprofileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: " select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
