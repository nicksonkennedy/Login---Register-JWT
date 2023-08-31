import React from 'react'
import { useLogout } from '../Hooks/useLogout'
import { useAuthContext } from '../Hooks/useAuthContext'
import Sidebar from './Sidebar'

const Dashboard = () => {
  const {user} = useAuthContext()
  const {logout} = useLogout()
 const logoutHandler =() =>{
  logout()
 }
   
   
  return (
   <>
   <div className='h-full w-full bg-transparent'>
     <div className=' fixed p-4 bg-slate-700 shadow-2xl flex justify-between items-center w-full max-w-full '>
        <div className='relative cursor-pointer left-0 md:left-[5rem] mx-auto md:mx-1 '>
            <img src='payments.png' alt='' className='h-[2rem] mx-auto text-center' />
            <span className='text-white font-semibold tracking-[.25em] font-monospace'><span className='text-yellow-600 font-bold'>Hel</span>Finance</span>
        </div>

        <div className='hidden md:block'>
     {user && <span className='text-md font-semibold text-white relative right-3 '>{user.email}</span>}
      <span className={'text-md font-semibold  cursor-pointer tracking-[.25em] p-2 text-white border-1 border-yellow-400'} onClick={logoutHandler} >Logout</span>

        </div>

        <div className='block md:hidden text-yellow-600 cursor-pointer'>
           <Sidebar user={user} logoutHandler={logoutHandler}/>
        </div>
    </div>
   </div>
   
   {/*************************************************************************************** */}
 
   </>
  )
}

export default Dashboard