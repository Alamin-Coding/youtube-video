import React from 'react'
import { useState, useEffect } from 'react'
import client from '../client'
import SanityBlockContent from '@sanity/block-content-to-react'
import { FaPlay } from 'react-icons/fa';


const Blog = () => {
 const [posts, setPosts] = useState([])

 useEffect(() => {
  client.fetch(
   `*[_type == "post"] {
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
  .then((data) => setPosts(data))
  .catch(console.err)
 }, [])
 
  return (
    <div>
         <div className="container">
          <div className='pt-12 grid grid-cols-1 md:grid-cols-3 gap-6' >
           { posts.map((post) => {
            return(
                  <div key={post.slug.current} className='p-2 rounded-md bg-gray-700/20'>
                     <a href="/" className='relative block h-full'>
                      <img className='h-full w-full object-cover' src={post.mainImage.asset.url} alt={post.title} />
                      <div className='absolute top-0 left-0 w-full h-full bg-black/5 flex items-center justify-center '>
                        <span className='text-slate-50 text-3xl'>
                        <FaPlay />
                        </span>
                      </div>
                     </a>
                  </div>
                 )
            }) }
        </div>
         </div>
        
    </div>
  )
}

export default Blog
