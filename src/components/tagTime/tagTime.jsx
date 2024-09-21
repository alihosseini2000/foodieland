import React from 'react'
import { LuTimer } from 'react-icons/lu'

function TagTime() {
  return (
    <span className='bg-color-tag p-3 flex w-fit rounded-full items-center gap-3'>
        <LuTimer />
        <span>30 Minutes</span>
    </span>
  )
}

export default TagTime