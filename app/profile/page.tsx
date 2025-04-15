"use client"

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import {z} from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'

const formSchema = z.object({
  ameneties: z.string({ required_error: "Amenity must be a string" }),
  area: z.number({ required_error: "Area is required" }).positive({ message: "Area must be a positive number" }),
  areaUnit: z.string({ required_error: "Area unit is required" }).min(1, { message: "Area unit cannot be empty" }),
  available: z.boolean({ required_error: "Availability status is required" }),
  bathrooms: z.number({ required_error: "Number of bathrooms is required" }).min(0, { message: "Bathrooms cannot be negative" }),
  bedrooms: z.number({ required_error: "Number of bedrooms is required" }).min(0, { message: "Bedrooms cannot be negative" }),
  contact: z.string({ required_error: "Contact must be a string" }),
  description: z.string({ required_error: "Description is required" }).min(1, { message: "Description cannot be empty" }),
  images: z.array(z.object({
    url: z.string({ required_error: "Image URL is required" }).url({ message: "Invalid image URL" }),
    alt: z.string().optional(),
  })).min(1, { message: "At least one image is required" }),
  location: z.string({ required_error: "Location is required" }).min(1, { message: "Location cannot be empty" }),
  price: z.number({ required_error: "Price is required" }).nonnegative({ message: "Price cannot be negative" }),
  purpose: z.string({ required_error: "Purpose is required" }).min(1, { message: "Purpose cannot be empty" }),
  thumbnail: z.string({ required_error: "Thumbnail URL is required" }).url({ message: "Invalid thumbnail URL" }),
  title: z.string({ required_error: "Title is required" }).min(1, { message: "Title cannot be empty" }),
  type: z.string({ required_error: "Type is required" }).min(1, { message: "Type cannot be empty" }),
})

export default function Profile() {
  

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ameneties: "",
      area: 0,
      areaUnit: "",
      available: false,
      bathrooms: 0,
      bedrooms: 0,
      contact: "",
      description: "",
      location: "",
      price: 0,
      purpose: "",
      thumbnail: "",
      title: "",
      type: ""
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <div className='w-2/3 mx-auto flex flex-col'>
       <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Property title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Describe the property" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="bathrooms"
          render={({ field }) => (
            <FormItem>
              <FormLabel>bathrooms</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="bedrooms"
          render={({ field }) => (
            <FormItem>
              <FormLabel>bedrooms</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="ameneties"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amenities</FormLabel>
              <FormControl>
                <Input placeholder="swimming pool, IoT, security, CCTV..." {...field} />
              </FormControl>
              <FormDescription>list of amenities sepated by commas (,)</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="area"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Area</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="areaUnit"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Area Unit</FormLabel>
              <FormControl>
                <Input placeholder="e.g. sqft, sqm" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input placeholder="location" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="available"
          render={({ field }) => (
            <FormItem className="flex items-center space-x-2">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <FormLabel>Available</FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Add more fields as needed following same pattern */}

        <Button type="submit">Create Property</Button>
      </form>
    </Form>
    </div>
  )
}
