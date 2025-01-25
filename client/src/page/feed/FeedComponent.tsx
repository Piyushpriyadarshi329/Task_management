import React from 'react'

export default function FeedComponent({item}:any) {
  return (
    <div className='flex-row flex m-10 border-1 rounded-sm mt-10'>

        <div className='flex-2 p-2'>
          <p>   {item?.title}</p> 
          <p>{item?.descrition}</p>
          </div>
          <div className='flex-1'>
          <img className='p-2 h-80 w-full' src={item?.url} alt="Italian Trulli"/>

          </div>

    </div>
  )
}
