"use client"
import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import React from 'react'

export default function HomeAbout({data}: {data:any}) {
  return (
    <section className='w-full bg-yellow-400'>
        <div className='max-w-[1200px] mx-auto text-black'>
        <h3 className='text-black text-4xl font-extrabold'>{data.AboutTitle}</h3>
        <BlocksRenderer content={data.AboutContent} />
        </div>
    </section>
  )
}

