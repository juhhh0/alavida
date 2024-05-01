import React from 'react'
import BlocksRendererClient from '../BlocksRendererClient'

export default function ContentBlock({data}: {data: any}) {
  return (
    <BlocksRendererClient content={data.content} />
  )
}
