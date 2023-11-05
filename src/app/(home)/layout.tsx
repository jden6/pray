import { ReactNode } from 'react'
import HomeHeader from '@/app/(home)/header'
import { classNames } from '@/util/string.util'

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <HomeHeader/>
      <div className={classNames("px-5", "xl:px-7", "py-3")}>
        {children}
      </div>
    </>
  )
}

export default HomeLayout