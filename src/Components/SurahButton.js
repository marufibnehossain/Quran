"use client"
import React from 'react'

const SurahButton = (props) => {
  return (
    <div className=''>
      <div className='flex border-[1px] border-[#ebeef0] hover:border-[#0A8270] p-4 rounded-lg gap-3'>
        <div className=''><p className='p-4 leading-none rounded-md bg-[#E3EADE] text-lg font-medium'>{props.SurahNo}</p></div>
        <div className='grow'>
            <div className='flex justify-between font-semibold text-lg'>
                <div>{props.SurahName}</div>
                <div>{props.SurahNameArab}</div>
            </div>
            <div className='flex justify-between'>
                <div className=''>{props.NameTranslation}</div>
                <div className=''>{props.NumOfVerses}</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SurahButton;
