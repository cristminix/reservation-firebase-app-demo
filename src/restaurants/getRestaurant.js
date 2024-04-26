import { doc, getDoc } from "firebase/firestore"
import firebase from "../firebase"

export const getRestaurant = async (id) => {
  const restaurantDoc = await getDoc(
    doc(firebase.firestore(), "restaurants", id)
  )
  const restaurant = restaurantDoc.data()
  if (!restaurant) {
    return null
  }
  return {
    ...restaurant,
    id: doc.id,
  }
}
