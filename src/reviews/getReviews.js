import { collection, getDocs, query, where } from "firebase/firestore"
import firebase from "../firebase"
import { mapAsync } from "../util"
import { getUserInfo } from "../user"
export const getReviews = async (restaurantId) => {
  const q = query(
    collection(firebase.firestore(), "reviews"),
    where("restaurantId", "==", restaurantId)
  )
  const querySnapshot = await getDocs(q)
  const reviews = querySnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    }
  })
  const populatedReviews = await mapAsync(reviews, async (review) => {
    const author = await getUserInfo(review.userId)
    return {
      ...review,
      author,
    }
  })
  return populatedReviews
}
