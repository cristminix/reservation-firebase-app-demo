import React from "react"
import { Outlet, Navigate, Route } from "react-router-dom"

export const ProtectedRoute = ({ isAuthed, isLoading, ...props }) => {
  let element = <Outlet />
  if (!isAuthed) {
    element = <Navigate to="/sign-in" />
  } else if (isLoading) {
    element = <div>Loading...</div>
  }
  return <Route {...props} element={element} />
}
