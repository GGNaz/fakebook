import React from "react";
import dog from "../../Assets/Image/dogv2.png";
import { useNavigate } from "react-router-dom";
function LandingPage() {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col w-full">
      {/* <div className='bg-white w-[31vw] absolute top-0 h-[20vh] z-20 rounded-tr-full'/> */}
      <div className="flex flex-row justify-between absolute top-0 p-2  w-full z-50">
        <div className="flex flex-row items-center gap-2">
          <img
            src="https://img.icons8.com/cotton/64/null/dog-footprint.png"
            className="h-10"
            alt="logo"
          />
          <div className="font-semibold text-xl text-darkgray">Petbook</div>
        </div>
        <div className="flex flex-row items-center gap-2">
          {/* <div>About</div> */}
          <button className="bg-darkgray text-white text-sm px-5 round py-2 flex flex-row gap-1 items-center rounded-full" onClick={() => navigate("/login")}>
            <span>Login</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex z-50 flex-col justify-center   absolute h-screen items-center just overflow-hidden w-full md:w-[50vw]">
        <div className="flex flex-col">
          <div className="text-white md:text-darkgray text-5xl font-semibold">
            Give endless love
          </div>
          <div className="text-white md:text-darkgray text-5xl font-semibold">
            to your pet.
          </div>
          <div className="text-md pt-5">
            <button className="bg-darkgray text-white text-sm px-5 round py-2 flex flex-row gap-1 items-center rounded-full">
              About us
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-end relative overflow-hidden w-full">
        <img
          src={dog}
          alt="dog"
          className="h-screen z-10 mr-0 md:mr-10 p-16    "
        />
        <div className="bg-[#FEE46B] w-full md:w-[70vw] h-[80vh] rounded-bl-full flex absolute  right-0" />
        <div className="w-full flex absolute z-20 h-[20vh] bg-white bottom-0 " />
      </div>
    </div>
  );
}

export default LandingPage;
