import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router";
import { getAllComponentsRoutes } from "../../middleware/getAllComponentsRoutes";
import { PrivateRoutes } from "../../routes";
import * as HiIcons from "react-icons/hi";
import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";
import spectaclesLogo from "../../Assets/Spectacles.png";
import * as FiIcons from "react-icons/fi";

function UserLayout() {
  const { pathname } = useLocation();
  const [openChild, setOpenChild] = useState(false);

  const filteredNavRoutes = PrivateRoutes.filter((item) => {
    return item.roleAccess.indexOf("user") >= 0;
  });

  console.log("filteredNavRoutes", filteredNavRoutes);

  const Navigation = (item, index) => {
    console.log("item", item);
    const currentRoute = item.path === pathname;
    console.log("pathname", currentRoute);
    const NavigationWithChild = () => {
      return (
        item.isdropdown && (
          <div key={index}>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`${
                      openChild
                        ? "bg-customyellow text-customblack hover:text-black"
                        : "bg-transparent text-semiblack hover:text-customyellow transition-transform hover:scale-105"
                    } flex flex-row items-center justify-between rounded-r-full py-4 px-10 w-full`}
                  >
                    <div className="flex flex-row items-center gap-4">
                      <div>{item.svg}</div>
                      <span
                        className={`${
                          openChild ? "font-medium" : "font-normal"
                        } text-xs cursor-pointer w-full`}
                      >
                        {item.name}
                      </span>
                    </div>
                    <div>
                      <HiIcons.HiChevronDown
                        className={`${
                          open ? "transform" : "-rotate-90"
                        } h-5 w-5 text-semiblack`}
                      />
                    </div>
                  </Disclosure.Button>
                  {item.navigationChild.map((child, childIndex) => {
                    const getPath = item.navigationChild.find(
                      (path) => path.path === pathname?.slice(1)
                    );
                    const ChildRoute = child.path === pathname?.slice(1);

                    if (getPath) {
                      setOpenChild(true);
                    } else {
                      setOpenChild(false);
                    }
                    return (
                      <Disclosure.Panel
                        key={childIndex}
                        className="pl-[4.5rem] py-2"
                      >
                        <Link to={child.path}>
                          <span
                            className={`${
                              ChildRoute ? "text-semiorange" : "text-semiblack"
                            } text-xs font-normal`}
                          >
                            {child.title}
                          </span>
                        </Link>
                      </Disclosure.Panel>
                    );
                  })}
                </>
              )}
            </Disclosure>
          </div>
        )
      );
    };

    const Navigation = () => {
      return (
        !item.isdropdown && (
          <div key={index}>
            <Link to={item.path}>
              <div
                className={`${
                  currentRoute
                    ? "bg-white shadow-xl text-gray-900"
                    : "bg-transparent transition-transform hover:scale-105"
                } text-gray-900 flex flex-row items-center gap-3 text-creamwhite p-5 w-full rounded-lg`}
              >
                {currentRoute ? item.activesvg : item.svg}
                <span className="font-normal ">{item.title}</span>
              </div>
            </Link>
          </div>
        )
      );
    };

    return item.showonsidebar ? (
      <>
        {Navigation()}
        {NavigationWithChild()}
      </>
    ) : null;
  };

  const filterList = [
    {
      label: "Price",
      checkList: [
        {
          name: "0 - 1000",
          value: "blue",
        },
        {
          name: "1000 - 2000",
          value: "red",
        },
        {
          name: "2000 - 3000",
          value: "green",
        },
        {
          name: "3000 - 4000",
          value: "green",
        },
        {
          name: "4000 - 5000",
          value: "green",
        },
      ],
    },
    {
      label: "Colors",
      checkList: [
        {
          name: "Blue",
          value: "blue",
        },
        {
          name: "Red",
          value: "red",
        },
        {
          name: "Green",
          value: "green",
        },
      ],
    },
    {
      label: "Brand",
      checkList: [
        {
          name: "Ray-ban",
          value: "blue",
        },
        {
          name: "Prada",
          value: "red",
        },
        {
          name: "Gucci",
          value: "green",
        },
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-row min-h-screen ">
        <div className="basis-1/5 hidden md:flex shadow-xl bg-color bg-glass">
          <div className="flex flex-col px-3">
            <div className="text-4xl font-semibold px-5 py-7 text-primaryBlack">
              {/* <img className="" src={spectaclesLogo} alt="spectaclesLogo"/> */}
              {/* <img src="https://www.pngkit.com/png/full/7-74698_glasses-logo-white-circle.png" className="h-5" alt="logo" /> */}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8"
                viewBox="-108.00495 -32.925 936.0429 197.55"
              >
                <path d="M719.508 67.4l-7.8-7.8c-.7-.7-1.9-.7-2.6 0l-10.3 10.7c-1.1-2.9-2.8-5.7-4.9-8.5l-19.7-23.6c-.7-.8-1.9-.9-2.7-.1l-45.8 47.5c-7.5 7.5-19.7 7.5-27.3 0-7.5-7.5-7.5-19.7 0-27.3 5.7-5.7 14.1-7.1 21.1-4.2l-17.7 17.8c-.7.7-.7 1.9 0 2.6l7.8 7.8c.7.7 1.9.7 2.6 0l27.8-27.9c.7-.7.7-1.9 0-2.6l-3.9-3.9c-13.2-13.2-34.6-13.2-47.8-.2l-41.4 43c-.3.2-.5.4-.9.4-.6 0-1.1-.5-1.1-1.1V53.4l18.3-19.6.3-.3c3.7-3.7 5.7-8.6 5.7-13.9 0-5.2-2-10.2-5.7-13.9-7.6-7.6-20.1-7.6-27.7 0-3.7 3.7-5.8 8.6-5.8 13.9v28l-36 38.1c-7.8 7.8-20.6 7.5-28-.8-6.2-6.9-6.5-17.4-.9-24.7l1.5-1.7c7.1-7.2 18.5-7.7 26.1-1.3.7.6 1.8.6 2.5-.1l7.8-7.8c.8-.8.7-2-.1-2.7-13.3-11.9-33.8-11.4-46.6 1.3-.9.9-1.8 1.9-2.6 2.9l-34.9 39.6-.3.3c-.2.3-.5.4-.9.4-.6 0-1.1-.5-1.1-1.1V72.1c0-18.7-15.2-34-34-34-9.3 0-17.6 3.7-23.8 9.7l-41.4 43c-.3.2-.5.4-.9.4-.6 0-1.1-.5-1.1-1.1v-35h19.4c1 0 1.8-.8 1.8-1.8v-11c0-1-.8-1.8-1.8-1.8h-19.4V8.6c0-1.1-.9-1.9-2-1.8l-11 .9c-.9.1-1.7.9-1.7 1.8v45.3l-29.6 30.9c-7.5 7.5-19.7 7.5-27.3 0-7.5-7.5-7.5-19.7 0-27.2 7.1-7.1 18.5-7.5 26-1.1.7.6 1.8.6 2.5-.1l7.8-7.8c.8-.8.7-2-.1-2.7-13.3-11.9-33.8-11.4-46.6 1.3l-.1.1-36.8 37.6c-7.5 7.5-19.7 7.5-27.3 0-7.5-7.5-7.5-19.7 0-27.3 5.7-5.7 14.1-7.1 21.1-4.2l-17.7 17.8c-.7.7-.7 1.9 0 2.6l7.8 7.8c.7.7 1.9.7 2.6 0l27.8-27.9c.7-.7.7-1.9 0-2.6l-3.9-3.9c-13.2-13.2-34.8-13.2-48 0l-.1.1-18.7 18.2c-2.6-15.2-15.4-27.1-31-28.1-10-.7-19.2 3-25.9 9.3L62.308 68c-3.2-13.9-15.8-24.2-30.9-24.2-8.3 0-15.1-6.5-15.1-14.5s6.8-14.5 15.1-14.5c7.5 0 13.7 5.3 14.8 12.1.2 1 1 1.6 2 1.6l11-.9c1-.1 1.8-1 1.7-2.1-1.9-14.4-14.4-25.5-29.5-25.5-16.4 0-29.7 13.1-29.7 29.2s13.3 29.2 29.7 29.2c9.4 0 17 7.4 17 16.4 0 9.1-7.6 16.4-17 16.4-8.4 0-15.4-6-16.7-13.8-.2-1-1-1.6-2-1.6l-11 .9c-1 .1-1.8 1-1.7 2.1 2.1 15.2 15.3 27 31.4 27 8.5 0 16.1-3.3 21.8-8.6.3-.3.7-.6 1-1l18.4-18v51.7c0 1 .8 1.8 1.8 1.8h11c1 0 1.8-.8 1.8-1.8V72.1h.1c0-11 9.2-19.8 20.3-19.3 9.7.5 17.7 8.5 18.2 18.2.6 10.5-7.4 19.4-17.6 20.3-.9.1-1.7.9-1.7 1.8v11c0 1.1.9 1.9 2 1.8 8.5-.5 16.1-4.1 21.8-9.7l19.1-18.6c1.1 6.7 4.3 13.2 9.4 18.4 6.6 6.6 15.3 9.9 24 9.9s17.4-3.3 24-9.9l17.2-17.5c1.2 6.4 4.3 12.6 9.3 17.5 6.6 6.6 15.3 9.9 24 9.9s17.4-3.3 24-9.9l19.2-20.2v13.8c0 8.8 7 16.2 15.7 16.2 4.7 0 9.2-2 12.2-5.6l20.9-21.4c3.1 15.5 16.9 27.2 33.3 27.2 8.2 0 15.7-2.9 21.5-7.7 2.8 4.6 7.8 7.7 13.5 7.7 4.8 0 9.3-2.1 12.3-5.8l17.5-19.8c1.4 5.8 4.4 11.2 8.9 15.7 6.6 6.6 15.3 9.9 24 9.9s17.4-3.3 24-9.9l26-28.9-.3 22.5c0 8.8 7 16.2 15.7 16.2 4.7 0 9.2-2 12.2-5.6l20.8-21.5c1.3 6.4 4.4 12.4 9.3 17.3 6.6 6.6 15.3 9.9 24 9.9s17.4-3.3 24-9.9l35.4-37.4 10.8 12.2.1.2c4.6 5.8 4.9 10.8.7 15.7-2.1 2.5-4.9 4.2-8.1 4.5-2.9.3-5.8-.5-8.1-2.2-.7-.6-1.8-.5-2.4.1l-7.8 7.8c-.8.8-.7 2 .1 2.7 4.8 4.1 10.7 6.3 17.1 6.3 7 0 13.6-2.7 18.5-7.7l27.2-28.3c.7-.7.7-1.8 0-2.6zm-336.9 23.9c-10.6 0-19.3-8.6-19.3-19.3 0-10.6 8.6-19.3 19.3-19.3 10.6 0 19.3 8.6 19.3 19.3 0 10.7-8.6 19.3-19.3 19.3zm162.1-71.7c0-1.3.5-2.6 1.4-3.5 1.9-1.9 5.1-1.9 7.1 0 .9.9 1.5 2.2 1.5 3.5 0 1.1-.4 2.1-1 3l-10.2 13.5z" />
              </svg>
            </div>
            <div className="flex flex-col gap-2 w-full ">
              <div>
                {filteredNavRoutes.length > 0 &&
                  filteredNavRoutes?.map(Navigation)}
              </div>
              <div className="flex flex-col gap-2 px-5">
                {filterList.map((data) => {
                  const { label, checkList } = data;
                  return (
                    <>
                      <div className="font-medium">{label}</div>
                      <div className="flex flex-col">
                        {checkList?.map((item) => {
                          return (
                            <div className=" flex flex-row gap-1">
                              <input type="checkbox" className="text-black" />
                              <label>{item.name}</label>
                            </div>
                          );
                        })}
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="md:basis-4/5 bg-glass py-8 ">
          <div className="flex flex-col gap-5">
            <div className="flex flex-row items-center justify-between">
              <div className=" mx-1 md:invisible">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8"
                  viewBox="-108.00495 -32.925 936.0429 197.55"
                >
                  <path d="M719.508 67.4l-7.8-7.8c-.7-.7-1.9-.7-2.6 0l-10.3 10.7c-1.1-2.9-2.8-5.7-4.9-8.5l-19.7-23.6c-.7-.8-1.9-.9-2.7-.1l-45.8 47.5c-7.5 7.5-19.7 7.5-27.3 0-7.5-7.5-7.5-19.7 0-27.3 5.7-5.7 14.1-7.1 21.1-4.2l-17.7 17.8c-.7.7-.7 1.9 0 2.6l7.8 7.8c.7.7 1.9.7 2.6 0l27.8-27.9c.7-.7.7-1.9 0-2.6l-3.9-3.9c-13.2-13.2-34.6-13.2-47.8-.2l-41.4 43c-.3.2-.5.4-.9.4-.6 0-1.1-.5-1.1-1.1V53.4l18.3-19.6.3-.3c3.7-3.7 5.7-8.6 5.7-13.9 0-5.2-2-10.2-5.7-13.9-7.6-7.6-20.1-7.6-27.7 0-3.7 3.7-5.8 8.6-5.8 13.9v28l-36 38.1c-7.8 7.8-20.6 7.5-28-.8-6.2-6.9-6.5-17.4-.9-24.7l1.5-1.7c7.1-7.2 18.5-7.7 26.1-1.3.7.6 1.8.6 2.5-.1l7.8-7.8c.8-.8.7-2-.1-2.7-13.3-11.9-33.8-11.4-46.6 1.3-.9.9-1.8 1.9-2.6 2.9l-34.9 39.6-.3.3c-.2.3-.5.4-.9.4-.6 0-1.1-.5-1.1-1.1V72.1c0-18.7-15.2-34-34-34-9.3 0-17.6 3.7-23.8 9.7l-41.4 43c-.3.2-.5.4-.9.4-.6 0-1.1-.5-1.1-1.1v-35h19.4c1 0 1.8-.8 1.8-1.8v-11c0-1-.8-1.8-1.8-1.8h-19.4V8.6c0-1.1-.9-1.9-2-1.8l-11 .9c-.9.1-1.7.9-1.7 1.8v45.3l-29.6 30.9c-7.5 7.5-19.7 7.5-27.3 0-7.5-7.5-7.5-19.7 0-27.2 7.1-7.1 18.5-7.5 26-1.1.7.6 1.8.6 2.5-.1l7.8-7.8c.8-.8.7-2-.1-2.7-13.3-11.9-33.8-11.4-46.6 1.3l-.1.1-36.8 37.6c-7.5 7.5-19.7 7.5-27.3 0-7.5-7.5-7.5-19.7 0-27.3 5.7-5.7 14.1-7.1 21.1-4.2l-17.7 17.8c-.7.7-.7 1.9 0 2.6l7.8 7.8c.7.7 1.9.7 2.6 0l27.8-27.9c.7-.7.7-1.9 0-2.6l-3.9-3.9c-13.2-13.2-34.8-13.2-48 0l-.1.1-18.7 18.2c-2.6-15.2-15.4-27.1-31-28.1-10-.7-19.2 3-25.9 9.3L62.308 68c-3.2-13.9-15.8-24.2-30.9-24.2-8.3 0-15.1-6.5-15.1-14.5s6.8-14.5 15.1-14.5c7.5 0 13.7 5.3 14.8 12.1.2 1 1 1.6 2 1.6l11-.9c1-.1 1.8-1 1.7-2.1-1.9-14.4-14.4-25.5-29.5-25.5-16.4 0-29.7 13.1-29.7 29.2s13.3 29.2 29.7 29.2c9.4 0 17 7.4 17 16.4 0 9.1-7.6 16.4-17 16.4-8.4 0-15.4-6-16.7-13.8-.2-1-1-1.6-2-1.6l-11 .9c-1 .1-1.8 1-1.7 2.1 2.1 15.2 15.3 27 31.4 27 8.5 0 16.1-3.3 21.8-8.6.3-.3.7-.6 1-1l18.4-18v51.7c0 1 .8 1.8 1.8 1.8h11c1 0 1.8-.8 1.8-1.8V72.1h.1c0-11 9.2-19.8 20.3-19.3 9.7.5 17.7 8.5 18.2 18.2.6 10.5-7.4 19.4-17.6 20.3-.9.1-1.7.9-1.7 1.8v11c0 1.1.9 1.9 2 1.8 8.5-.5 16.1-4.1 21.8-9.7l19.1-18.6c1.1 6.7 4.3 13.2 9.4 18.4 6.6 6.6 15.3 9.9 24 9.9s17.4-3.3 24-9.9l17.2-17.5c1.2 6.4 4.3 12.6 9.3 17.5 6.6 6.6 15.3 9.9 24 9.9s17.4-3.3 24-9.9l19.2-20.2v13.8c0 8.8 7 16.2 15.7 16.2 4.7 0 9.2-2 12.2-5.6l20.9-21.4c3.1 15.5 16.9 27.2 33.3 27.2 8.2 0 15.7-2.9 21.5-7.7 2.8 4.6 7.8 7.7 13.5 7.7 4.8 0 9.3-2.1 12.3-5.8l17.5-19.8c1.4 5.8 4.4 11.2 8.9 15.7 6.6 6.6 15.3 9.9 24 9.9s17.4-3.3 24-9.9l26-28.9-.3 22.5c0 8.8 7 16.2 15.7 16.2 4.7 0 9.2-2 12.2-5.6l20.8-21.5c1.3 6.4 4.4 12.4 9.3 17.3 6.6 6.6 15.3 9.9 24 9.9s17.4-3.3 24-9.9l35.4-37.4 10.8 12.2.1.2c4.6 5.8 4.9 10.8.7 15.7-2.1 2.5-4.9 4.2-8.1 4.5-2.9.3-5.8-.5-8.1-2.2-.7-.6-1.8-.5-2.4.1l-7.8 7.8c-.8.8-.7 2 .1 2.7 4.8 4.1 10.7 6.3 17.1 6.3 7 0 13.6-2.7 18.5-7.7l27.2-28.3c.7-.7.7-1.8 0-2.6zm-336.9 23.9c-10.6 0-19.3-8.6-19.3-19.3 0-10.6 8.6-19.3 19.3-19.3 10.6 0 19.3 8.6 19.3 19.3 0 10.7-8.6 19.3-19.3 19.3zm162.1-71.7c0-1.3.5-2.6 1.4-3.5 1.9-1.9 5.1-1.9 7.1 0 .9.9 1.5 2.2 1.5 3.5 0 1.1-.4 2.1-1 3l-10.2 13.5z" />
                </svg>
              </div>
              <div className="flex flex-row justify-end items-center gap-3">
                <button className="-ml-7">
                  <FiIcons.FiSearch size={20} />
                </button>

                <button>
                  <FiIcons.FiShoppingCart size={20} />
                </button>
                <div className="flex flex-row gap-1 items-center">
                  <img
                    src="https://www.memphisveterinaryspecialists.com/files/best-breeds-of-house-cats-memphis-vet-1-1.jpeg"
                    alt="user"
                    className="h-10 w-10 rounded-full"
                  />
                  <HiIcons.HiChevronDown />
                </div>
              </div>
            </div>
            <div className="px-5 md:hidden">
              {filteredNavRoutes?.map((data, i) => {
                const { path, title } = data;
                return (
                  <Link to={path}>
                    <span className="text-gray-700">
                      {title} {i === 0 ? " / " : ""}
                    </span>
                  </Link>
                );
              })}
            </div>
            <div>
              <Routes>
                {PrivateRoutes.map((item, index) => {
                  return <>{getAllComponentsRoutes(item, index)}</>;
                })}
                <Route path="*" element={<>404 PAGE</>} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserLayout;
