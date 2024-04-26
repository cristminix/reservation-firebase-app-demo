import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore"
import firebase from "../firebase"
import { getRestaurant } from "../restaurants"
import { mapAsync } from "../util"

export const subscribeToReservations = (userId, cb) => {
  const callback = async (querySnapshot) => {
    console.log(querySnapshot)
    const reservations = querySnapshot.docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      }
    })

    const populatedReservations = await mapAsync(
      reservations,
      async (reservation) => {
        const restaurant = await getRestaurant(reservation.restaurantId)
        return {
          ...reservation,
          restaurant,
        }
      }
    )

    cb(populatedReservations)
  }
  const q = query(
    collection(firebase.firestore(), "reservations"),
    where("userId", "==", userId)
  )
  return onSnapshot(q, callback)
}
