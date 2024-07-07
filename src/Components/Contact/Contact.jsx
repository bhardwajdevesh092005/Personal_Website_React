import React from 'react'
function Contact() {
  return (
    <>
      <div className='flex justify-center space-x-5 mt-10 mb-10'>
        <div className='w-1/4 grid grid-rows-5 gap-2 bg-slate-400 rounded-xl'>
          <div className='row-span-2 flex justify-center flex-col'>
            <h3 className='text-center text-3xl'>Get In Touch</h3>
            <h2 className='text-center text-white'>Fill in the form to start a conversation</h2>
          </div>
          <div className='flex row-span-1 pl-2 mt-0.5'><img src="/src/Assets/Pin.png" className='w-3 h-3 mt-1' alt="" />&nbsp;Acme Inc. Street,State,Postal Code</div>
          <div className='flex row-span-1 pl-2 mt-0.5 text-white'><img src="https://www.iconpacks.net/icons/1/free-phone-icon-1-thumb.png" className='w-3 h-3 mt-1' alt="" />&nbsp;+44 12345678</div>
          <div className='flex row-span-1 pl-2'><img src="/src/Assets/Mes.png" className='w-3 h-3 mt-1' alt="" />&nbsp;abcde@gmail.com</div>
        </div>
        <div className='w-1/4 grid grid-rows-3 gap-y-2'>
          <div><input type="text" name="" id="" className='border-2 border-black rounded-xl p-2'placeholder='First Name'/></div>
          <div><input type="text" name="" id="" className='border-2 border-black rounded-xl p-2'placeholder='Last Name'/></div>
          <div><input type="text" name="" id="" className='border-2 border-black rounded-xl p-2'placeholder='Email Id'/></div>
          <div><input type="Submit" name="" id="" className='border-2 bg-red-600 rounded-xl p-2'placeholder='First Name'/></div>
        </div>
      </div>
    </>
  )
}

export default Contact