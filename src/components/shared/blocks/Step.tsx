import React from 'react'
import BlocksRendererClient from '../BlocksRendererClient'

export default function Step({data} :{data: any}) {
    console.log(data.images.data)
  return (
    <article className='py-10'>
      <div className='bg-alavida-yellow px-4 py-3 rounded-md flex gap-2'>
       <span><img className='w-6' src="/icons/bed.svg" alt="" /></span> <p className='tracking-wide'>{data.hotel}</p>
      </div>
        <div className='step bg-alavida-grey mt-3 rounded-md'>
          <div className='py-3 px-5'>
            <BlocksRendererClient content={data.content} />
          </div>
          <div className='flex max-w-full'>
          {data.images.data && data.images.data.map((image: any, i: number) => {
            return(
              <img key={i} className='w-1/3 px-[1px]' src={"http://strapi.juhh.fr" + image.url}/>
            )
          })}
          </div>
        </div>
    </article>
  )
}
