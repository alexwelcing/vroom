import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// CRUD operations for Firestore

// Create a new document
const createDocument = async (coll, data) => {
  try {
    const docRef = await addDoc(collection(db, coll), data);
    console.log("Document written with ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding document:", error);
  }
};

// Read all documents from a collection
const readDocuments = async coll => {
  const querySnapshot = await getDocs(collection(db, coll));
  const docs = [];
  querySnapshot.forEach((doc) => {
    docs.push({
      id: doc.id,
      ...doc.data()
    });
  });
  return docs;
};

// You can continue adding update and delete functions similarly...

export {
  analytics,
  db,
  createDocument,
  readDocuments
  // Export other CRUD functions as you define them
};
