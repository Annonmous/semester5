import React, { useState } from 'react'
import logo from "../img/logo.png"
import avatar from "../img/avatar.png"
import { motion } from 'framer-motion'

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { app } from '../firebase.config'

import { MdShoppingBasket, MdAdd, MdLogout } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/reducer'
const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [{ user }, dispatch] = useStateValue()
  const [IsMenu, setIsMenu] = React.useState(false)

  const login = async () => {
    if (!user) {
      const { user: { refreshToken, providerData } } = await signInWithPopup(firebaseAuth, provider)
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0]
      })
      localStorage.setItem("user", JSON.stringify(providerData[0]))
    }
    else {
      setIsMenu(!IsMenu)
    }

  }

  const logout = () => {
    setIsMenu(false)
    localStorage.clear()

    dispatch({
      type: actionType.SET_USER,
      user: null
    })
  }
  return (
    <>
      <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 ">
        {/* Desktop & tablet */}
        <div className='hidden md:flex w-full h-full items-center justify-between  '>

          <Link to='/' className="flex items-center gap-2">
            <img src={logo} className="w-8 object-cover" alt="logo" />
            <p className='text-headingColor text-xl font-bold'>City</p>
          </Link>
          <div className='flex items-center gap-8'>
            <motion.ul
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              end={{ opacity: 0, x: 200 }}
              className='flex items-center gap-8 '>
              <li className='text-base text-headingColor :hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
              <li className='text-base text-headingColor :hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
              <li className='text-base text-headingColor :hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>About</li>
              <li className='text-base text-headingColor :hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Contact Us</li>
            </motion.ul>

            <div className='relative flex items-center justify-center'>
              <MdShoppingBasket className='text-textColor text-2xl ml-8 cursor-pointer' />
              <div className=' absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBd flex items-center justify-center'>
                <p className='text-sm text-white font-semibold'>1 </p>
              </div>
            </div>

            <div className='relative'>
              < motion.img
                whileTap={{ scale: 0.6 }}
                src={user ? user.photoURL : avatar}
                alt="userProfile"
                className='w-10 min-w-[40] h-10 min-h-[40] drop-shadow-xl cursor-pointer rounded-full'
                onClick={login}
              />
              {
                IsMenu && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    end={{ opacity: 0, scale: 0.6 }}
                    className="w-40 bg-gray-50 shadow-xl rounded-lg flex-col absolute top-12
            right-0 ">
                    {
                      user && user.email === "mhuzaifahkhan397@gmail.com" && (
                        <Link to={'/createItem'}>
                          <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100
             transition-all duration-100 ease-in-out text-textColor text-base'>New Item<MdAdd /></p>
                        </Link>
                      )
                    }
                    <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100
             transition-all duration-100 ease-in-out text-textColor text-base'
                      onClick={logout}
                    >
                      Signout<MdLogout /></p>
                  </motion.div>

                )
              }
            </div>
          </div>
        </div>
        {/* Mobile */}
        <div className='flex items-center justify-between md:hidden w-full h-full '>


          <div className='relative flex items-center justify-center'>
            <MdShoppingBasket className='text-textColor text-2xl ml-8 cursor-pointer' />
            <div className=' absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBd flex items-center justify-center'>
              <p className='text-sm text-white font-semibold'>1 </p>
            </div>
          </div>

          <Link to='/' className="flex items-center gap-2">
            <img src={logo} className="w-8 object-cover" alt="logo" />
            <p className='text-headingColor text-xl font-bold'>City</p>
          </Link>

          <div className='relative'>
            < motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : avatar}
              alt="userProfile"
              className='w-10 min-w-[40] h-10 min-h-[40] drop-shadow-xl cursor-pointer rounded-full'
              onClick={login}
            />
            {
              IsMenu && (
                <motion.div


                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  end={{ opacity: 0, scale: 0.6 }}
                  className="w-40 bg-gray-50 shadow-xl rounded-lg flex-col absolute top-12
            right-0 ">
                  {
                    user && user.email === "mhuzaifahkhan397@gmail.com" && (
                      <Link to={'/createItem'}>
                        <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100
             transition-all duration-100 ease-in-out text-textColor text-base'

                        >
                          New Item<MdAdd />
                        </p>
                      </Link>
                    )
                  }
                  <ul className='flex flex-col px-4 py-2 text-textColor gap-8 '>
                    <li className='text-base text-headingColor text-textColor :hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'
                      onClick={() => { setIsMenu(false) }} >
                      Home</li>
                    <li className='text-base text-headingColor text-textColor :hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'
                      onClick={() => { setIsMenu(false) }} >
                      Menu</li>
                    <li className='text-base text-headingColor text-textColor :hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'
                      onClick={() => { setIsMenu(false) }} >
                      About</li>
                    <li className='text-base text-headingColor text-textColor :hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'
                      onClick={() => { setIsMenu(false) }} >
                      Contact Us</li>
                  </ul>

                  <p className='px-4 m-2 rounded-md shadow-md py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-300
             transition-all duration-100 ease-in-out text-textColor text-base justify-center bg-gray-200'
                    onClick={logout}
                  >
                    Signout<MdLogout /></p>
                </motion.div>

              )
            }
          </div>
        </div>
      </header>
    </>
  )
}

export default Header