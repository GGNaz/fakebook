import React from "react";
import { Route, Routes } from "react-router";
import { LineChart } from "../../Components/Charts/LineChart";

import Sidebar from "../../Components/DashboardComponents/Sidebar";
import { getAllComponentsRoutes } from "../../middleware/getAllComponentsRoutes";
import { dashboardList } from "../../routes";
import user from "../../Assets/png/user.png";

function Dashboard() {
  let noteList = [
    {
      title: "Meeting at school.",
      time: "8:00am",
    },
    {
      title: "100km run",
      time: "5:00am",
    },
    {
      title: "Bebe time",
      time: "6:00pm",
    },
    {
      title: "Code code code.",
      time: "5:00am",
    },
  ];

  return (
    <div className="flex flex-col h-screen w-full gap-2">
      <div className="flex flex-row justify-between items-center">
        <div className="text-xl text-neutralblack font-medium flex flex-col">
          <div>Dashboard</div>
          <div className="text-lightgray/70 text-xs">Good morning, Nazer!</div>
          </div>
        <div className="flex flex-row gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            />
          </svg>
          <img src={user} alt="userImg" className="h-9 w-9 rounded-full" />
        </div>
      </div>
      <div className="flex flex-row gap-2 w-full">
        <div className="basis-4/6 ">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2 w-full">
              <div className="p-2 bg-white shadow-md w-full rounded-lg flex flex-row">
              <div className="basis1/2 w-full">
                <div className="flex flex-col justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-skytheme w-24 h-24"
                  >
                    <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                  </svg>

                  <div className="text-neutralgray font-semibold text-sm">Total no. of Users</div>
                </div>
                </div>
                <div className="basis1/2 w-full">
                <div className="flex w-full h-full items-center justify-center font-bold text-neutralgray text-3xl">
                  200
                </div>
                </div>
              </div>
              <div className="p-2 bg-white shadow-md w-full rounded-lg flex flex-row">
                <div className="basis1/2 w-full">
                <div className="flex flex-col justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-skytheme w-24 h-24">
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>


                  <div className="text-neutralgray font-semibold text-sm">Total no. of Post</div>
                </div>
                </div>
                <div className="basis1/2 w-full">
                <div className="flex w-full h-full items-center justify-center font-bold text-neutralgray text-3xl">
                  500
                </div>
                </div>
              </div>
            </div>
            <div className="flex w-full bg-white shadow-md rounded-lg p-2">
              <LineChart />
            </div>
          </div>
        </div>
        <div className="basis-2/6">
          <div className="flex flex-col gap-2 bg-white shadow-md rounded-lg p-2">
            <div className="flex flex-row justify-between">
              <div className="font-medium text-neutralblack ">Notes</div>
              <button className="bg-skytheme flex flex-row items-center px-2 gap-1 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-white w-4 h-4"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="text-white text-sm">New</span>
              </button>
            </div>
            {noteList?.map(({ time, title }, index) => (
              <div
                key={index}
                className="bg-white shadow-md p-2 flex flex-row items-center rounded-lg justify-between"
              >
                <div className="flex flex-col ">
                  <div className="text-sm text-neutralblack">{title}</div>
                  <div className="text-lightgray text-xs">{time}</div>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
