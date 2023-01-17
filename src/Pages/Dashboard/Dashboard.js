import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Sidebar from '../../Components/DashboardComponents/Sidebar'
import { getAllComponentsRoutes } from '../../middleware/getAllComponentsRoutes';
import { dashboardList } from '../../routes';

function Dashboard() {
  return (
    <div className="flex min-h-screen w-full gap-5  bg-slate-200/50">
      <Sidebar/>
      <Routes>
      {dashboardList.map((item, index) => {
							return <>{getAllComponentsRoutes(item, index)}</>;
						})}
                <Route path="*" element={<>404 PAGE</>} />
              </Routes>
    </div>
  )
}

export default Dashboard