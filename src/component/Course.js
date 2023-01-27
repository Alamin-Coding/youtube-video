// import { ClientError } from '@sanity/client';
import React, { useEffect, useState } from 'react'
import { FcOnlineSupport, FcUpload, FcBusinessman } from 'react-icons/fc';
import { RiArrowRightSFill } from 'react-icons/ri';
import client from '../client';

const Course = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=> {
        client.fetch(
            `[*_type == "blog"] {
                name,
                names
            }`
        )
        .then((data) => setBlogs(data))
        .catch(console.data)
    }, []);

  return (
    <section className='py-24 font-hind'>
        <div className="container">
            <div className="common_heading text-center">
                <h2 className='text-4xl font-semibold text-slate-50'>যে কোর্সগুলো আপনি <span className='text-primary'>করতে পারবেন</span></h2>
                <h4 className='text-xl font-normal text-slate-400'>সকল ক্লাস লাইভ হবে</h4>
            </div>
            <div className='pt-12 grid grid-cols-1 md:grid-cols-3 gap-6'>
                <div className='px-6 py-5 rounded-md bg-gray-700/20'>
                    <FcBusinessman className='text-7xl'/>
                    <h3 className='pt-3 pb-4 text-2xl font-semibold text-slate-100'>মিডিয়াম থেকে প্রফেশনাল লেভেল</h3>
                    <p className='text-base text-slate-300 pb-2 leading-normal'>যারা ওয়েব ডিজাইন পারে কিন্তু প্রফেশনালি কাজ করতে পারছে না তাদের জন্য আমরা এনেছি মিডিয়াম লেভেল থেকে এডভান্স লেভেল পর্যন্ত স্পেশাল তিন মাসে এই কোর্সটি </p>
                    <a className='text-orange-400 flex items-center gap-2 hover:gap-3 transition-all mt-4' href="/">
                        বিস্তারিত জেনে নিন
                        <span>
                            <RiArrowRightSFill/>
                        </span>
                    </a>
                </div>
                <div className='px-6 py-5 rounded-md bg-gray-700/20'>
                    <FcOnlineSupport className='text-7xl'/>
                    <h3 className='pt-3 pb-4 text-2xl font-semibold text-slate-100'>জিরো থেকে প্রফেশনাল লেভেল</h3>
                    <p className='text-base text-slate-300 pb-2 leading-normal'>যারা ওয়েব ডিজাইন শুরু করতে চাচ্ছেন কিন্তু ভাবছেন কোথা থেকে করবো কিভাবে করব আদৌ কি শিখতে পারবো কিনা তাদের জন্যই স্পেশাল এই কোর্সটি </p>
                    <a className='text-orange-400 flex items-center gap-2 hover:gap-3 transition-all' href="/">
                        বিস্তারিত জেনে নিন
                        <span>
                            <RiArrowRightSFill/>
                        </span>
                    </a>
                </div>
                <div className='px-6 py-5 rounded-md bg-gray-700/20 flex items-center justify-center flex-col gap-5'>
                    <FcUpload className='text-7xl fill-primary'/>
                    <h3 title='এখনো সিদ্ধান্ত নেয়া হয়নি' className='pt-3 pb-4 text-2xl font-semibold text-slate-100'>আপকামিং . . . . .. কোর্স</h3>
                </div>
            </div>
        </div>
        <h3>Course {blogs.length}</h3>
    </section>
  )
}

export default Course