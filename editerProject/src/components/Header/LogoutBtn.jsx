import React from 'react'
import  { logout } from '../../Store/authSlice'
import { useDispatch } from 'react-redux'
import { authServices } from "./Appwrite/auth";

export default function LogoutBtn() {
      
    const dispatch = useDispatch();
     
    const LogoutHandler = () => {
        authServices.logout().then(() => {
            dispatch(logout());
        })
    }

  return (
      <div className='inline-bock px-6 py-2 duration-200
     hover:bg-blue-100 rounded-full' onClick={LogoutHandler}>Logout</div>
  )
}
