import React from 'react'

export default function Hero({data}: {data: any}) {
  return (
    <div className='relative w-full h-[500px]'>
        <div className='fixed -z-10 brightness-[60%] top-0 left-0 w-full h-full bg-cover bg-center' style={{backgroundImage: `url(https://strapi.juhh.fr${data.image.url})`}}></div>
        <div className='flex items-center w-full h-full'>
          <h1 className='text-white font-extrabold text-4xl lg:text-6xl text-center mx-auto'>{data.title}</h1>

        </div>

    </div>
  )
}
