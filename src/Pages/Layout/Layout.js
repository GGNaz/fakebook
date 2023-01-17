import React from 'react'
import Sidebar from '../../Components/DashboardComponents/Sidebar'
import Dashboard from '../Dashboard/Dashboard'

const Layout = () => {
    
  const roleAccessList = [
    {
        role: 'admin',
        component: <>Admin layout</>
    },
    {
        role: 'user',
        component: <Sidebar/>
    }
  ]  

  return (
    <>{roleAccessList[1].component}</>
  )
}

export default Layout