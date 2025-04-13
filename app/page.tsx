import { SignedIn, SignedOut, SignInButton, SignOutButton } from '@clerk/nextjs'
import React from 'react'

export default function Home() {
  return (
    <div>
      <p>Hello</p>
      <SignedIn>
        <SignOutButton>
          <button className='bg-blue-500 text-sm py-4 px-6 my-5 rounded-lg cursor-pointer'>Log out</button>
        </SignOutButton>
      </SignedIn>
      <SignedOut>
        <SignInButton>
          <button className='bg-blue-500 text-sm py-4 px-6 my-5 rounded-lg cursor-pointer'>Log in</button>
        </SignInButton>
      </SignedOut>
    </div>
  )
}
