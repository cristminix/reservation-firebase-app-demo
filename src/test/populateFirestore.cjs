const path = require("path")
const { initializeApp } = require("firebase/app")
const {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  setDoc,
} = require("firebase/firestore")

const firebaseConfig = require("../firebase/cred.json")

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const {
  restaurants,
  reservations,
  reviews,
  dateAvailabilities,
} = require("./testData.cjs")

function populateCollection(collectionName, items) {
  return Promise.all(
    items.map((item) => {
      const { id, ...data } = item
      return setDoc(doc(db, collectionName, id), data)
    })
  )
}

Promise.all([
  populateCollection("restaurants", restaurants),
  populateCollection("reservations", reservations),
  populateCollection("reviews", reviews),
  populateCollection("dateAvailabilities", dateAvailabilities),
])
  .then(() => {
    console.log("Done!")
  })
  .catch((err) => {
    console.error("Error populating Firestore", err)
  })
