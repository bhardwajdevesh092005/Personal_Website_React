import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import GitHub,{gitInfoLoader} from './Components/GitHub/GitHub.jsx'
import User from './Users/User.jsx'
const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path = '/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='About' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='github' element={<GitHub/>} loader={gitInfoLoader}/>
    </Route>
    )
)
ReactDOM.createRoot(document.getElementById('root')).render(
        <RouterProvider router = {router}/>
)
