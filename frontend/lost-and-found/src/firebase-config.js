
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import "firebase/storage";



const firebaseConfig = {

  apiKey: "<API-KEY>",
  authDomain: "<AUTH-DOMAIN>",
  projectId: "<PROJECT-ID>",
  storageBucket: "<STORAGE-BUCKET>",
  messagingSenderId: "<MESSAGING-SENDER-ID>",
  appId: "<APP-ID>",
  measurementId: "<MEASUREMENT-ID>"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
