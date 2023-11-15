import { classNames } from '@/util/string.util'
import Link from 'next/link'
import NavMenu from '@/app/(home)/nav'
import { getServerSession } from 'next-auth'

const HomeHeader = async ({}) => {
  const session = await getServerSession()
  return (
    <header
      className={classNames('border-b-2', 'h-14', 'border-b-gray-400', 'flex', 'items-center', 'justify-between', 'px-7')}>
      <div className={classNames('flex', 'space-x-5')}>
        <div>Pray for us</div>
        <ul className={classNames('flex', 'space-x-3')}>
          <li>
            <Link href={'/notice'}>공지사항</Link>
          </li>
          {session && <li>
            <Link href={'/pray'}>우리의 기도</Link>
          </li>}
        </ul>
      </div>
      <NavMenu/>
    </header>
  )
}

export default HomeHeader