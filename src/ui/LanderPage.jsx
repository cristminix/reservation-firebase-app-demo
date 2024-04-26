import React from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "./Button"
import { CenteredContentBox } from "./CenteredContentBox"
import { Heading } from "./Heading"

export const LanderPage = ({ heading, message, buttonText, redirectUrl }) => {
  const history = useNavigate()

  return (
    <CenteredContentBox>
      <Heading>{heading}</Heading>
      <p>{message}</p>
      <Button
        onClick={() => {
          history.push(redirectUrl)
        }}
      >
        {buttonText}
      </Button>
    </CenteredContentBox>
  )
}
