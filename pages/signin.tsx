import { NextPage, NextPageContext } from 'next'
import Header from '../src/components/Header/Header'
import SignInComponent from '../src/components/auth/SignIn'
import { parseCookies } from '../src/utils/user'

const SignIn: NextPage = () => {
  return (
    <>
      <Header />
      <SignInComponent />
    </>
  )
}

export const getServerSideProps = async (ctx: NextPageContext) => {
  const cookies = parseCookies(ctx)
  if (cookies.token) {
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    }
  }
  return { props: {} }
}

export default SignIn
