'use client'

import { classNames } from '@/util/string.util'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsBookmark } from 'react-icons/bs'

const BasicCard = () => {
  return <div className={classNames('max-h-[400px]', 'rounded-t-lg', 'bg-white', 'shadow-white', 'm-3')}>
    <div
      className={classNames('px-10', 'pt-5')}>
      <div>
        <AiOutlineHeart size={30} className={classNames('hover:fill-black')}/>
      </div>
      <BasicCardWriter/>
      <BasicCardTitle/>
      <BasicCardSummary/>
      <BasicCardDate/>
    </div>
    <BasicCardBottom/>
  </div>
}

const BasicCardTitle = () => {
  return <div
    className={classNames('mt-2', 'mb-1', 'text-2xl', 'max-w-[350px]', 'overflow-hidden', 'max-h-8', 'text-ellipsis', 'whitespace-nowrap')}>기도제목
    글자수
    확인하기 위한 길이 테스트기도제목 글자수 확인하기 위한 길이 테스트기도제목 글자수 확인하기 위한 길이 테스트기도제목 글자수 확인하기 위한 길이 테스트기도제목 글자수 확인하기 위한 길이 테스트
  </div>
}

const BasicCardWriter = () => {
  return <div className={classNames('mt-3', 'text-green-500')}>
    @jy
  </div>
}

const BasicCardSummary = () => {
  return <div className={classNames('h-[180px]', 'overflow-hidden', 'text-gray-400', 'text-justify')}>It is a long
    established fact that a
    reader will be distracted by the readable content of a page when looking
    at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
    accident, sometimes on purpose (injected humour and the like)
  </div>
}

const BasicCardDate = () => {
  return <div className={classNames('flex', 'justify-end', 'h-15', 'mb-4')}>
    <div>3일 전</div>
  </div>
}

// 이것만 분리하면 될듯
const BasicCardBottom = () => {
  return <div
    className={classNames('border-t-gray-500', 'rounded-b-lg', 'bg-white', 'border-t-[1px]', 'border-t-gray-200', 'h-14', 'flex', ' flex-row', 'items-center')}>
    <div className={classNames('px-10')}>
      <BsBookmark size={20}/>
    </div>
  </div>
}

export default BasicCard