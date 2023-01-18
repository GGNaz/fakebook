import React from 'react'
import { Route, Routes } from 'react-router';

import Sidebar from '../../Components/DashboardComponents/Sidebar'
import { getAllComponentsRoutes } from '../../middleware/getAllComponentsRoutes';
import { dashboardList } from '../../routes';

function Dashboard() {
  return (
    <div className="flex h-screen w-full gap-2">
      <div className='basis-4/6 border border-red-600'>
          <div className='flex flex-col gap-2'>
            <div className='flex flex-row gap-2 w-full'>
              <div className='p-2 bg-white w-full rounded-lg'>
                No of users
              </div>
              <div className='p-2 bg-white w-full rounded-lg'>
                No of tags
              </div>
            </div>
            <div className='flex w-full bg-green-500'>
              asdas
            </div>
          </div>
      </div>
      <div className='basis-2/6 border border-blue-600'>
          asdasd
      </div>
    </div>
  )
}

export default Dashboard