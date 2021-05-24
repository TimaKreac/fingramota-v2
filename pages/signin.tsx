import { NextPage } from 'next'
import Header from '../src/components/Header/Header'
import SignInComponent from '../src/components/auth/SignIn'

const SignIn: NextPage = () => {
  return (
    <>
      <Header />
      <SignInComponent />
    </>
  )
}

export default SignIn
