import { SearchInput, UserProfile } from '@/app-components'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

interface Props {
    children: React.ReactNode
}

export default function HomeLayout({children}: Props) {
  return (
    <div>
        <div className='w-full shadow-sm'>
            <header className='h-16 w-full max-w-screen-xl mx-auto flex flex-row justify-between items-center'>
                <Image
                    alt='logo'
                    src={'/rented-color.png'}
                    width={100}
                    height={100}
                />

                <SearchInput />
                
                <SignedIn>
                    <UserProfile />
                </SignedIn>

                <SignedOut>
                    <button type="button" className='text-sm font-bold py-10 px-10 bg-primary rounded-lg'>
                        Log out
                    </button>
                </SignedOut>
            </header>
        </div>

        <main>{children}</main>
    </div>
  )
}
