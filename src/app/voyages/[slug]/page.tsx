import Hero from '@/components/shared/Hero'
import RebondCategorie from '@/components/shared/RebondCategorie'
import { getCategorieData } from '@/data/loaders'
import React from 'react'

export default async function Page({ params }: { params: { slug: string } }) {
    const {data, others} = await getCategorieData(params.slug)

    console.log(data)

    if(!data) return <></>
    
  return (
    <>
    <Hero data={{title: data.name, image: data.image, date: data.type == "article" ? new Date(data.createdAt).toLocaleDateString() : ""}}/>
    <div className='bg-white py-10'>

    <RebondCategorie data={others} categorie={data.name} />
    </div>
    </>
  )
}
