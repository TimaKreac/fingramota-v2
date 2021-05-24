import { NextPage } from 'next'
import Header from '../src/components/Header/Header'
import SignUpComponent from '../src/components/auth/SignUp'

const SignUp: NextPage = () => {
  return (
    <>
      <Header />
      <SignUpComponent />
    </>
  )
}

export default SignUp
