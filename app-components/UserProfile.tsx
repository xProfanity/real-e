"use client"

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { SignOutButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { PiSignOut } from 'react-icons/pi'

export default function UserProfile() {
    const {user, isLoaded} = useUser()
    const [popover, setPopover] = useState(false)

    const clickButton = () => {
      setPopover(true)
    }

    const closePopOver = () => {
      setPopover(false)
    }

  return (
    <div className='flex flex-row gap-2' onMouseLeave={closePopOver} onMouseEnter={clickButton}>
        {isLoaded ? (
            <>
              <Popover open={popover}>
                <PopoverTrigger className='cursor-pointer'>
                  <Image
                    src={user?.imageUrl as string}
                    height={40}
                    width={40}
                    alt='user'
                    className='rounded-full object-cover'
                  />    
                </PopoverTrigger>
                <PopoverContent>Place content for the popover here.</PopoverContent>
              </Popover>              
            </>
        ) : (
          <>
            <div className='h-[40px] w-[40px] rounded-full bg-gray-100'></div>
          </>
        )}
    </div>
  )
}
