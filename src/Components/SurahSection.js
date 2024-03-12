"use client"
import React from 'react'
import SurahButton from './SurahButton'

const SurahSection = () => {
  return (
    <div className='w-full mx-auto grid grid-cols-3 gap-5 mt-10'>
      <SurahButton SurahNo='01' SurahName='Al-Fatiha' NameTranslation='The Opener' NumOfVerses='6' />
      <SurahButton SurahNo='01' SurahName='Al-Fatiha' NameTranslation='The Opener' NumOfVerses='6' />
      <SurahButton SurahNo='01' SurahName='Al-Fatiha' NameTranslation='The Opener' NumOfVerses='6' />
    </div>
  )
}

export default SurahSection;
