"use client"

import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { FaLocationDot } from 'react-icons/fa6'

export default function SearchInput() {
  return (
    <div className='hidden md:inline-flex'>
        <div className='h-10 w-10 border-y border-s border-gray-400 rounded-s-lg flex flex-col justify-center items-center'>
            <BiSearch size={25} color='#99a1af' />
        </div>
        <input
            type="search"
            className='border-y border-gray-400 h-10 w-xl outline-none'
            placeholder='search for properties according to location'
        />
        <div className='h-10 w-10 border-e border-y border-gray-400 rounded-e-lg flex flex-col justify-center items-center'>
            <FaLocationDot size={25} color='#99a1af' />
        </div>
    </div>
  )
}
