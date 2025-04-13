import React from 'react'

interface Props {
    children: React.ReactNode
}

export default function AuthLayout({children}: Props) {
  return (
    <div className='min-h-screen w-full max-w-screen-lg mx-auto flex flex-col justify-center items-center'>
        <main>{children}</main>
    </div>
  )
}
