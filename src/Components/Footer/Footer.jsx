import React from 'react'
import { NavLink,Link } from 'react-router-dom'
function Footer() {
  return (
    <>
        <div className='flex justify-between w-screen mt-10'>
            <div>
                <img className='w-1/2' src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1720224000&semt=sph" alt="logo" />
            </div>
            <div className='flex w-3/4 justify-between p-2 mt-4'>
                <div>
                    <p>Resources</p>
                    <ul className='flex flex-col text-slate-400 font-light'>
                        <Link className='hover:underline'>Home</Link>
                        <Link className='hover:underline'>About Us</Link>
                    </ul>
                </div>
                <div>
                    <p>Follow Us</p>
                    <ul className='flex flex-col text-slate-400 font-light'>
                        <Link className='hover:underline'>GitHub</Link>
                        <Link className='hover:underline'>Discord</Link>
                    </ul>
                </div>
                <div>
                    <p>Legal</p>
                    <ul className="flex flex-col text-slate-400 font-light">
                        <Link className='hover:underline'>Privacy Policy </Link>
                        <Link className='hover:underline'>Terms & Conditions</Link>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer