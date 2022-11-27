/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import type { NextPage , GetServerSideProps } from 'next'
import React, { useEffect , useState } from 'react'
import Link from "next/link";
import { Collection } from "../../typings"
import { sanityClient } from '../../sanity'

interface Props {
  collection: Collection
}

function NFTDropPage({ collection }: Props) {
    return (
    <div className='flex h-screen w-screen'>
            <iframe id="iframe" src={collection.url} allowFullScreen width="100%" height="100%"></iframe>
            <h1>{collection.title}</h1>
    </div>
  )
}

export default NFTDropPage