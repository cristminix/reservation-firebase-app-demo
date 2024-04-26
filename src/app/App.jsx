import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {
  CreateAccountPage,
  EmailConfirmationLanderPage,
  SignInPage,
  ProtectedRoute,
  RequireAuth,
  useAuth,
} from "../auth"
import { ReservationsListPage } from "../reservations"
import { RestaurantDetailPage, SearchPage } from "../restaurants"
import { WriteAReviewPage, WriteAReviewThankYouPage } from "../reviews"
import { EditProfilePage } from "../user"
import "./App.css"

export function App() {
  const { isLoading, user } = useAuth()
  const isAuthed = !!user
  return (
    <Router>
      <Routes>
        <Route path="/sign-in" element={<SignInPage />}></Route>
        <Route path="/create-account" element={<CreateAccountPage />}></Route>

        <Route
          path="/edit-profile"
          element={
            <RequireAuth isAuthed={isAuthed} isLoading={isLoading}>
              <EditProfilePage />
            </RequireAuth>
          }
        />
        <Route
          path="/email-confirmation/success"
          element={<EmailConfirmationLanderPage success />}
        />
        <Route
          path="/email-confirmation/failure"
          element={<EmailConfirmationLanderPage />}
        />
        <Route
          path="/"
          exact
          element={
            <RequireAuth isAuthed={isAuthed} isLoading={isLoading}>
              <ReservationsListPage />
            </RequireAuth>
          }
        ></Route>
        <Route path="/search" element={<SearchPage />}></Route>
        <Route path="/restaurants/:id" element={<RestaurantDetailPage />} />
        <Route
          path="/write-a-review/:id"
          element={
            <RequireAuth isAuthed={isAuthed} isLoading={isLoading}>
              <WriteAReviewPage />
            </RequireAuth>
          }
        />
        <Route
          path="/review/thank-you"
          element={
            <RequireAuth isAuthed={isAuthed} isLoading={isLoading}>
              <WriteAReviewThankYouPage />
            </RequireAuth>
          }
        />
      </Routes>
    </Router>
  )
}
