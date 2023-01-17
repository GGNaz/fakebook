import React from 'react'
import { Route, Routes } from 'react-router';

import Sidebar from '../../Components/DashboardComponents/Sidebar'
import { getAllComponentsRoutes } from '../../middleware/getAllComponentsRoutes';
import { dashboardList } from '../../routes';

function Users() {
  return (
    <div className="flex min-h-screen w-full gap-5 ">
      users
    </div>
  )
}

export default Users