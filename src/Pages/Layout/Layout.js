import React from 'react'
import Dashboard from '../Dashboard/Dashboard'

const Layout = () => {
    
  const roleAccessList = [
    {
        role: 'admin',
        component: <>Admin layout</>
    },
    {
        role: 'user',
        component: <Dashboard/>
    }
  ]  

  return (
    <>{roleAccessList[1].component}</>
  )
}

export default Layout