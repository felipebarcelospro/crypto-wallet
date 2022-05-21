import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import { AuthMainPage } from '../../src/pages/auth/main'

export default (): React.ReactElement => {
  return <AuthMainPage />
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const session = await getSession({ ctx })

  if (session) {
    return {
      props: {},
      redirect: {
        destination: '/app'
      }
    }
  }

  return {
    props: {}
  }
}
