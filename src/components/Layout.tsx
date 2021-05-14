import Head from 'next/head'

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  )
}

export default Layout
