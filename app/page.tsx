"use client"

import { Property } from '@/app-components'
import { api } from '@/convex/_generated/api'
import { House } from '@/types'
import { useQuery } from 'convex/react'

export default function User() {
  const properties = useQuery(api.properties.getProperties)

  return (
    <div className='grid gap-8'>
      {properties?.map((property, index) => (
        <Property property={property} key={index} />
      ))}
    </div>
  )
}
