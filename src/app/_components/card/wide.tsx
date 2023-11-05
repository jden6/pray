import { classNames } from '@/util/string.util'
import { AiOutlineHeart } from 'react-icons/ai'

/**
 * card 내용
 * 2. pray contents
 * 3. pray date
 * 4. pray writer
 * 5. pray like
 * @constructor
 */
export const Wide = () => {
  return <div className={classNames('w-[300px]', 'bg-white', 'm-4', 'p-4', 'relative', "rounded-2xl")}>
    <div className={classNames('flex', 'justify-between')}>
      <div>@hn</div>
      <div>
        <AiOutlineHeart size={20} className={classNames('hover:fill-black')}/>
      </div>
    </div>
    <div>가족 건강을 위해 기도해주세요</div>
    <div className={classNames("flex", "justify-end")}>
      <div>2023.11.1</div>
    </div>
  </div>
}