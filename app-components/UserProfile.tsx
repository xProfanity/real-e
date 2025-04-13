"use client"

import { SignOutButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'
import { PiSignOut } from 'react-icons/pi'

export default function UserProfile() {
    const {user, isLoaded} = useUser()
  return (
    <div className='flex flex-row gap-2'>
        {isLoaded ? (
            <>
              <Image
                  src={user?.imageUrl as string}
                  height={40}
                  width={40}
                  alt='user'
                  className='rounded-full object-cover'
              />
            </>
        ) : (
          <>
            <div className='h-[40px] w-[40px] rounded-full bg-gray-100'></div>
          </>
        )}
    </div>
  )
}
