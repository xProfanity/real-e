"use client"

import React from 'react'

interface Props {
  error: Error & {digest: string}
  reset: () => void
}

export default function Error({error, reset}: Props) {
  return (
    <div className='h-screen w-full px-10 flex flex-col justify-center items-center text-center'>
      <h1 className='font-bold text-6xl text-primary uppercase'>OoPs!</h1>
      <p>{error.name}</p>
      <p>{error.message}</p>
      <p>{error.digest}</p>
    </div>
  )
}
