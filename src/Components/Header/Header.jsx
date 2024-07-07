import React from 'react'
import { Link,NavLink } from 'react-router-dom'
function Header() {
  return (
    <>
        <nav className='flex justify-between shadow-xl shadow-slate-700 align-baseline rounded-br-2xl rounded-bl-2xl'>
            <div className='max-w-20 hover:shadow-md'>
                <img className='hover:scale-150 hover:rounded-xl rounded-xl' src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1720224000&semt=sph" alt="Logo"/>
            </div>
            <div className='w-1/2 h-1/2 flex align-middle justify-evenly mt-7'>
                    <NavLink to={""} className={
                        ({isActive})=>`list-none  ${isActive?"text-orange-500":"text-slate-800"} h-fit p-1 rounded-md hover:shadow-md`}>
                        Home
                    </NavLink>
                    <NavLink to={"about"} className={
                        ({isActive})=>`list-none  ${isActive?"text-orange-500":"text-slate-800"} h-fit p-1 rounded-md hover:shadow-md`}>
                        About
                    </NavLink>
                    <NavLink to={"contact"} className={
                        ({isActive})=>`list-none  ${isActive?"text-orange-500":"text-slate-800"} h-fit p-1 rounded-md hover:shadow-md`}>
                        Contact
                    </NavLink>
                    <NavLink to={"github"} className={
                        ({isActive})=>`list-none  ${isActive?"text-orange-500":"text-slate-800"} h-fit p-1 rounded-md hover:shadow-md`}>
                        GitHub
                    </NavLink>
            </div>
            <div className='flex w-1/5 justify-around mt-7'>
                <Link to = {"#"} className='hover:shadow-md bg-red-600 h-fit p-1 rounded-md'>Login </Link>
                <Link to = {"#"} className='hover:shadow-md bg-red-600 h-fit p-1 rounded-md'>GetStarted</Link>
            </div>
        </nav>
    </>
  )
}

export default Header