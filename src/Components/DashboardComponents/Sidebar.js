import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import logoPng from "../../Assets/png/logo.png"
import { dashboardList } from '../../routes'
function Sidebar() {
    const filteredNavRoutes = dashboardList.filter((item) => {
        return item.roleAccess.indexOf("user") >= 0;
      });
    
  return (
    <div className="flex flex-col gap-2 bg-white shadow-lg">
        <div className='p-2'>
            <img src={logoPng} className="h-12 w-14" alt="logoPng"/>
            <div className='flex flex-col mt-5 '>
              
{/*               
                    {
                        dashboardList?.map((data, index) => {
                            return (
                                <div className='flex justify-center gap-4'>
                                <Link key={index} to={data?.path}>
                                 {data.svg}
                                </Link>
                                </div>
                            )
                        })
                    }
                 */}
               
            </div>
        </div>
       
    </div>
  )
}

export default Sidebar