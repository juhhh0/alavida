import React from 'react'
import BlocksRendererClient from '../BlocksRendererClient'

export default function Step({data} :{data: any}) {
  return (
    <article>
     {data.hotel && <div className='bg-alavida-yellow px-4 py-3 rounded-md flex items-center gap-4 mt-6 mb-4'>
       <img className='w-6 h-6 block' src="/icons/bed.svg" alt="" /> <p className='tracking-wide'>{data.hotel}</p>
      </div>}
        <div className='step bg-alavida-grey rounded-md'>
          <div className='py-3 px-5'>
            <BlocksRendererClient content={data.content} />
          </div>
          <div className='flex flex-wrap max-w-full'>
          {data.images.data && data.images.data.map((image: any, i: number) => {
            return(
              <img key={i} className='w-1/3 p-[1px]' src={"http://strapi.juhh.fr" + image.url}/>
            )
          })}
          </div>
        </div>
    </article>
  )
}
