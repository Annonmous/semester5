import React from 'react'
import logo from "../img/logo.png"
import avatar from"../img/avatar.png"
import {motion} from 'framer-motion'

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import {app} from '../firebase.config'

import { MdShoppingBasket } from 'react-icons/md'
import { Link } from 'react-router-dom'
const Header = () => {
  const firebaseAuth=getAuth(app);
  const provider=new GoogleAuthProvider();
  const login= async()=>
  {
    const response=await signInWithPopup(firebaseAuth,provider)
    console.log(response)
  }
  return (
    <>
      <header className="fixed z-50 w-screen p-6 px-16 ">
        {/* Desktop & tablet */}
        <div className='hidden md:flex w-full h-full items-center justify-between '>

          <Link to='/' className="flex items-center gap-2">
            <img src={logo} className="w-8 object-cover" alt="logo" />
            <p className='text-headingColor text-xl font-bold'>City</p>
          </Link>
          <div className='flex items-center gap-8'>
            <ul className='flex items-center gap-8 '>
              <li className='text-base text-headingColor :hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
              <li className='text-base text-headingColor :hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
              <li className='text-base text-headingColor :hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>About</li>
              <li className='text-base text-headingColor :hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Contact Us</li>
            </ul>

            <div className='relative flex items-center justify-center'>
              <MdShoppingBasket className='text-textColor text-2xl ml-8 cursor-pointer' />
              <div className=' absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBd flex items-center justify-center'>
                <p className='text-sm text-white font-semibold'>1 </p>
              </div>
            </div>

            <div className='relative'>
            < motion.img 
            whileTap={{scale:0.6}}
            src={avatar} 
            alt="userProfile"
           className='w-10 min-w-[40] h-10 min-h-[40] drop-shadow-xl cursor-pointer'
           onClick={login}
           />

            </div>
          </div>
        </div>
        {/* Mobile */}
        <div className='flex md:hidden w-full h-full '>

        </div>
      </header>
    </>
  )
}

export default Header