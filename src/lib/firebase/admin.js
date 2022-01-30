import admin from "firebase-admin"

import serviceAccount from "./serviceAccountKey.json"

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DATABASEURL
});

const db = admin.firestore()
const auth = admin.auth()

export { db, auth }