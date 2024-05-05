import React from 'react'

interface Hero {
  title: string,
  image: any,
  date?: string,
}

export default function Hero({data}: {data: any}) {
  return (
    <div className='relative w-full h-[500px]'>
        <div className='fixed -z-10 brightness-[60%] h-full top-0 left-0 w-full bg-cover bg-center' style={{backgroundImage: `url(https://strapi.juhh.fr${data.image.url})`}}></div>
        <div className='flex flex-col gap-4 text-white justify-center items-center w-full h-full'>
          <h1 className='font-extrabold text-3xl lg:text-6xl text-center mx-auto'>{data.title}</h1>
          <span className='text-xl font-medium italic'>{data.date}</span>
        </div>

    </div>
  )
}
