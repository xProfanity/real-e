"use client"

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { SignOutButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import { BiLogOut } from 'react-icons/bi'
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
                <PopoverContent>
                  <div className='divide-y'>
                    <div className='flex flex-col justify-center items-center pb-4'>
                      <Image
                        src={user?.imageUrl as string}
                        height={80}
                        width={80}
                        alt='user'
                        className='rounded-full object-cover'
                      />
                      <h1 className='font-bold'>{user?.fullName}</h1>
                      <p className='text-sm text-gray-500'>{user?.username}</p>
                    </div>

                    <div className='pt-4'>
                      <div className='w-full flex flex-col justify-center items-center'>
                        <Link href="/user/profile">
                          <p className='font-bold text-lg hover:underline'>View Profile</p>
                        </Link>
                        <SignOutButton>
                          <button type="button" className='outline-none flex flex-col justify-center items-center'>
                            <BiLogOut size={25} className='mt-4 cursor-pointer' />
                            <p className='text-sm text-gray-400 cursor-default'>Logout</p>
                          </button>
                        </SignOutButton>
                      </div>
                    </div>
                  </div>
                </PopoverContent>
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
