// import { Sidebar } from 'lucide-react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/user/ProfileComponent/Sidebar/Sidebar'

const ProfileLayout = () => {
  return (
    <div className='flex px-44 py-10 h-fit space-x-10'>
        <Sidebar />
        <Outlet />
    </div>
  )
}

export default ProfileLayout