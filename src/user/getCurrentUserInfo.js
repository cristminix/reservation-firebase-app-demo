import { getCurrentUser } from "../auth"
import { getUserInfo } from "./getUserInfo"
export const getCurrentUserInfo = async () => {
  const currentUser = await getCurrentUser()
  if (!currentUser) {
    return null
  }
  return await getUserInfo(currentUser.id)
}
