import { ReactNode } from 'react'
import { classNames } from '@/util/string.util'

export default function PrayLayout ({ children }: { children: ReactNode }) {
  return <div>
    <h1>Pray all of the time</h1>
    <div className={classNames('grid', 'sm:grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3', 'xl:grid-cols-4')}>
      {children}
    </div>
  </div>
}