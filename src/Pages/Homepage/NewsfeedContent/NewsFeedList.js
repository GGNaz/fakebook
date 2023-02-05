import React from 'react'
import { shallow } from 'zustand/shallow'
import { postStore } from '../../../Zustand/PostStore/PostStore'

function NewsFeedList() {
    const { post } = postStore((state) => state, shallow)
    console.log("post",post)
  return (
    <div className='flex flex-col gap-4'>
        {
            post.map((data)=> {
                const { tags, body, comments, image, likes,createdAt } = data;
                return (
<div className='flex flex-row bg-white rounded-xl p-3 gap-5'>
            <img className='w-12 h-12 rounded-full' src={image} alt="kendall"/>
            <div className='flex flex-col'>
            <div className='flex flex-row gap-2'>
                <div className='flex flex-col'>
                    <div className='flex flex-row gap-1'>
                        <div className='font-medium'>Kendall Jenner</div>
                    <div className='mt-0.5'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-customlink">
                            <path fill-rule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    </div>
                    <div className='text-lightgray text-xs'>
                       1 minutes ago
                    </div>
                </div>
            </div>
            <div className='flex flex-row gap-1'>
                {
                    tags?.map(({label}) => {
                        return (
                            <>
                             <div className='text-xs bg-gray-500/60 text-white px-2 rounded-full'>#{label}</div>
                {/* <div className='text-xs bg-gray-500/60 text-white px-2 rounded-full'>#model</div> */}
                            </>
                        )
                    })
                }
               
            </div>
            <p className='mt-5 text-sm text-justify'>
            Kendall Nicole Jenner (born November 3, 1995) is an American model, media personality, and socialite. She is a daughter of Kris Jenner and Caitlyn Jenner, and rose to fame in the reality television show Keeping Up with the Kardashians.
            </p>
            <div className='flex flex-row w-full pt-2 gap-2'>
                <button className='flex flex-row gap-1 justify-center items-center bg-red-500/60 text-white py-1 px-4 shadow-lg rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ">
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </svg>
                    <span  className='text-sm '>Like</span>
                </button>
                <button className='flex flex-row gap-1 justify-center items-center bg-green-700/60 text-white py-1 px-4 shadow-lg rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
  <path fill-rule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z" clip-rule="evenodd" />
</svg>

                    <span className='text-sm '>Comment</span>
                </button>
               
            </div>
            </div>
        </div>
                )
            } )
        }
        
    </div>
  )
}

export default NewsFeedList