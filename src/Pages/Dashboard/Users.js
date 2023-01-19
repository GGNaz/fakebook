import React from 'react'
import { Route, Routes } from 'react-router';

import Sidebar from '../../Components/DashboardComponents/Sidebar'
import Navbar from '../../Components/Navbar/Navbar';
import { getAllComponentsRoutes } from '../../middleware/getAllComponentsRoutes';
import { dashboardList } from '../../routes';

function Users() {
  return (
    <div className="flex flex-col h-screen w-full gap-2">
    <Navbar title="Manage Users" desc="Manage user activities"/>
    <div><input type="text" placeholder='search' /></div>
    <table className="table table-auto rounded-lg w-full bg-white p-2">
  <thead className='h-10 '>
    <tr className='bg-skytheme p-1'>
      <th className='text-white'>Username</th>
      <th  className='text-white'>Post</th>
      <th  className='text-white'>Comment</th>
      <th  className='text-white'>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr className='border-b'>
      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
    </tr>
    <tr className='border-b'>
      <td>Witchy Woman</td>
      <td>The Eagles</td>
      <td>1972</td>
    </tr>
    <tr>
      <td>Shining Star</td>
      <td>Earth, Wind, and Fire</td>
      <td>1975</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default Users