import { getServerSession } from 'next-auth'

const NoticePage = async () => {
  const session = await getServerSession()
  return <div>
    notice page
  </div>
}

export default NoticePage