import { classNames } from '@/util/string.util'
import BasicCard from '@/app/_components/card/Basic'

const PrayPage = () => {
  return (
    <>
      <div>
        pray header
      </div>
      <div
        className={classNames('grid', 'sm:grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3', 'xl:grid-cols-4', 'gap-3')}>
        <BasicCard/>
        <BasicCard/>
        <BasicCard/>
      </div>
    </>
  )
}
export default PrayPage