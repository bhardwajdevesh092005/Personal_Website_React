import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {id} = useParams();
  return (
    <div className='p-4 mt-10 bg-gray-500 text-white text-3xl rounded-xl mb-10px shadow-md shadow-red-500 text-center'>User : {id}</div>
  ) 
}

export default User