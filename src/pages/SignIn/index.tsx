import { useState } from 'react'

import { SignInForm } from './containers/SignInForm'
import { SignUpForm } from './containers/SignUpForm'

import { Container } from './styles'

export const SignIn = () => {
  const [signUpForm, setSignUpForm] = useState(false)

  return (
    <Container>
      {!signUpForm ? (
        <SignInForm signUpForm={signUpForm} setSignUpForm={setSignUpForm} />
      ) : (
        <SignUpForm signUpForm={signUpForm} setSignUpForm={setSignUpForm} />
      )}
    </Container>
  )
}
