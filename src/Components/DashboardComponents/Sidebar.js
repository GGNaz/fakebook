import React, { useEffect } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";

import logoPng from "../../Assets/png/logo.png";
import { getAllComponentsRoutes } from "../../middleware/getAllComponentsRoutes";
import { dashboardList } from "../../routes";
function Sidebar() {
  const filteredNavRoutes = dashboardList?.filter((item) => {
    return item.roleAccess.indexOf("user") >= 0;
  });
  const { pathname } = useLocation();

  console.log("location", pathname);
  console.log("filteredNavRoutes", filteredNavRoutes);

  return (
    <div className="flex min-h-screen w-full">
      <div className="basis-1/4">
        <div className="flex flex-col  h-screen gap-2 shadow-lg">
          <div className="py-5">
            <div className="flex flex-row gap-3 justify-center pb-5 border-b-2 border-neutralblack mx-2">
              <img
                src={logoPng}
                className="h-11 w-12 rounded-md"
                alt="logoPng"
              />
              <div className="text-3xl flex items-center font-bold text-neutralblack">
                Twitty
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-5 ">
              <div className=" h-[75vh] ">
                {filteredNavRoutes?.map((data, index) => {
                  const currentRoute = data.path === pathname ? true : false;
                  console.log("currentRoute", currentRoute);
                  return (
                    <Link
                      to={data.path}
                      className={`flex flex-row p-2 rounded-md gap-5 ${
                        currentRoute ? "bg-skytheme text-neutralblack" : ""
                      }`}
                    >
                      <div>{currentRoute ? data.activeSvg : data.svg}</div>
                      <div className={`${currentRoute ? "text-white" : "text-neutralblack" }`}>{data.title}</div>
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="flex flex-row gap-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-neutralblack w-6 h-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                    clip-rule="evenodd"
                  />
                </svg>

                <div className="text-neutralblack">Settings</div>
              </div>
              <div className="flex flex-row gap-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-neutralblack w-6 h-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z"
                    clip-rule="evenodd"
                  />
                </svg>

                <div className="text-neutralblack">Logout</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-skytheme/20 h-screen w-full p-5">
      <Routes>
        {dashboardList.map((item, index) => {
          return <>{getAllComponentsRoutes(item, index)}</>;
        })}
        <Route path="*" element={<>404 PAGE</>} />
      </Routes>

      </div>
    
    </div>
  );
}

export default Sidebar;
