"use client"
import React from 'react'
import PlayAgainButton from './_button/page.jsx'

const Result = ({params}) => {
    const result = params.result

  return (
    <div className="flex justify-center items-center bg-[url('/bg.jpg')] w-full h-screen bg-cover">
        <div className='bg-[#343964] rounded-xl flex flex-col items-center pt-5 pr-7 pl-7 h-[415px] w-[400px]'>
            <img src='/congrats.svg'/>
            <h2 className='text-2xl text-[#E2E4F3] flex flex-wrap mt-5 text-center ml-4 mr-4 mb-3'>Congrats! You completed the quiz.</h2>
            <p className='text-base text-center text-[#E2E4F3] mb-10'>You answer {result}/10 correctly.</p>
            <PlayAgainButton />
        </div>
    </div>
  )
}

export default Result