import { useState, useEffect } from 'react'
import prisma from '../../services/db'
import { getToken } from 'next-auth/jwt'

import MitraListViews from 'src/views/mitra-views/MitraListViews'
const Mitra = ({ data }) => {
  const [mitra, setMitra] = useState(JSON.parse(data))
  return (
    <>
      <MitraListViews data={mitra}></MitraListViews>
    </>
  )
}

export async function getServerSideProps(context) {
  const token = await getToken({ req: context.req, secret: process.env.JWT_SECRET })

  if (!token) {
    return {
      redirect: {
        destination: '/pages/login',
        permanent: false
      }
    }
  }
  let mitra

  mitra = await prisma.mitra.findMany({
    where: {
      id: {
        not: 0
      }
    }
  })
  return {
    props: {
      data: JSON.stringify(mitra)
    }
  }
}

export default Mitra