"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, CardAction } from '@/components/ui/card'
import { api } from '@/convex/_generated/api'
import { House } from '@/types'
import { useQuery } from 'convex/react'
import Image from 'next/image'
import React from 'react'

interface Props {
    property: House
}

export default function Property({property}: Props) {
    //@ts-ignore
    const imgUrl = useQuery(api.properties.getUrl, {id: property.thumbnail})

  return (
    <Card className='w-fit mx-auto'>
        <CardHeader className='flex flex-row justify-between items-center'>
            <div>
                <CardTitle>{property.title}</CardTitle>
                <CardDescription>{property.description}</CardDescription>
            </div>
            <div>
                <CardTitle>MWK {property.price.toLocaleString()}</CardTitle>
            </div>
        </CardHeader>
        <CardContent>
            <Image
                src={imgUrl!}
                height={800}
                width={600}
                alt={property.type}
                className='rounded-lg shadow'
                />
        </CardContent>
        <CardContent>
            <CardAction>
            <ul className='inline-flex gap-4'>
                {property.ameneties.map((amenity, index) => (
                    <li key={index} className='text-gray-500'>{amenity}</li>
                ))}
            </ul>
            </CardAction>
        </CardContent>
        <CardFooter>
                <p className=''>contact: {property.contact[0]}</p>
        </CardFooter>
    </Card>
  )
}
