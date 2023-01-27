import React from 'react'
import { useState, useEffect } from 'react'
import client from '../client'
import SanityBlockContent from '@sanity/block-content-to-react'

const Banner = () => {
  const [hero, setHero] = useState([])

 useEffect(() => {
  client.fetch(
   `*[_type == "banner"] {
    subtitle,
    title,
    slug,
    body,
    mainImage {
     asset -> {
      _id,
      url
     },
     alt
    }
   }`
  )
  .then((data) => setHero(data))
  .catch(console.err)
 }, [])



  return (
    <section className='py-28 font-hind border-b border-slate-800 bg-slate-700'>
        <div className="container">
        { hero.map((item) => {
        return(
          <div className="grid gap-6 items-center grid-cols-1 md:grid-cols-2" key={item.slug.current}>
                <div>
                    <h2 className='text-slate-100 text-xl font-medium'>{item.subtitle}</h2>
                    <h1 className='text-slate-50 text-5xl font-bold pt-3 pb-7'>{item.title}</h1>
                    <div className="text-lime-50 text-medium text-center lg:text-left">
                    <SanityBlockContent blocks={item.body} projectId="2u5ulidx" dataset="production"></SanityBlockContent>
                    </div>
                </div>
                <div className='pl-6'>
                  <img className='w-full object-cover' src={item.mainImage.asset.url} alt={item.title} />
                </div>
            </div>
        )
       }) }
            
        </div>
    </section>
  )
}

export default Banner