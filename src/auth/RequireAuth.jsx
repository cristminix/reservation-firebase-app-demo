import { Navigate, useLocation } from "react-router-dom"

export function RequireAuth({ children, isAuthed, isLoading }) {
  let location = useLocation()
  if (isLoading) {
    return <div>Loading...</div>
  }
  if (!isAuthed) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/sign-in" replace />
  }

  return children
}
