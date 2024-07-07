import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom';
function GitHub() {
  const data = useLoaderData();
  return (
    <div className='mb-10'>
      <div className='w-screen text-center mt-10 text-3xl mb-10 hover:underline'>GitHub</div>
      <div className='grid grid-col-3 grid-flow-col justify-center mb-4 pb-4'>
        <div className='w-1/2 hover:shadow-md hover:shadow-black col-span-2 border-2  border-black rounded-xl overflow-hidden'>
          <img className = "w-100 h-100 hover:scale-125 hover:rounded-xl" src={data["avatar_url"]} alt="" />
        </div>
        <div className='grid grid-flow-row p-2 gap-y-2'>
          <div className='text-xl bg-gradient-to-tr from-fuchsia-500 to-violet-600 p-2 rounded-xl pt-1 text-center self-center'>UserName: {data["login"]}</div>
          <div className='text-xl bg-gradient-to-tr from-fuchsia-500 to-violet-600 p-2 rounded-xl pt-1 text-center self-center'>Followers: {data["followers"]}</div>
        </div>
      </div>
    </div>
  )
}

export default GitHub

export const gitInfoLoader = async ()=>{
  const response = await fetch('https://api.github.com/users/bhardwajdevesh092005');
  return response.json();
}