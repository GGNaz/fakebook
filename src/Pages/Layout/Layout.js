import React from 'react'
import UserLayout from './UserLayout'

const Layout = () => {
    
  const roleAccessList = [
    {
        role: 'admin',
        component: <>Admin layout</>
    },
    {
        role: 'user',
        component: <UserLayout/>
    }
  ]  

  return (
    <>{roleAccessList[1].component}</>
  )
}

export default Layout