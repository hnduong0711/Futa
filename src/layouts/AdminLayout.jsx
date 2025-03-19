import React from 'react'
import Sidebar from '../components/admin/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div className='w-full flex justify-between h-screen'>
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default AdminLayout