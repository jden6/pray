import { classNames } from '@/util/string.util'
import Link from 'next/link'
import Avatar from '@/app/_components/avatar/avatar'

const HomeHeader = ({}) => {
  return (
    <header className={classNames('border-b-2', 'h-14', 'border-b-gray-400', 'flex', 'items-center', "justify-between", 'px-7')}>
      <div className={classNames('flex', 'space-x-5')}>
        {/*<div>Logo</div>*/}
        <div>Pray for us</div>
        <ul className={classNames("flex", "space-x-3")}>
          <li>
            <Link href={'/pray'}>우리의 기도</Link>
          </li>
          <li>
            <Link href={'/notice'}>공지사항</Link>
          </li>
          {/*<li>menu3</li>*/}
        </ul>
      </div>
      <div>
        <Avatar />
      </div>
    </header>
  )
}

export default HomeHeader