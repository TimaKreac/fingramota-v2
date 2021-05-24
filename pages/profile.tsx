import { NextPage, NextPageContext } from 'next'
import Header from '../src/components/Header/Header'
import ProfileComponent from '../src/components/Profile/Profile'
import { parseCookies } from '../src/utils/auth'

const Profile: NextPage = () => {
  return (
    <>
      <Header />
      <ProfileComponent />
    </>
  )
}

export const getServerSideProps = async (ctx: NextPageContext) => {
  const cookies = parseCookies(ctx)
  console.log(cookies)
  return {
    props: {},
  }
}

export default Profile
