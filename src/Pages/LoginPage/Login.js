import React from "react";
import logoPng from "../../Assets/png/logo.png";

function Login() {
  return (
    <div class="flex flex-row text-center">
      <div class="basis-1/2">
        <img
          src="https://images.pexels.com/photos/10800490/pexels-photo-10800490.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="coverImg"
          className="h-screen w-full"
        />
      </div>
      <div className="basis-1/2 bg-red-700">
        <div className="flex justify-center mt-10 mb-5">
          <img
            src={logoPng}
            className="object-none object-left rounded-full"
            alt="logoPng"
          />
        </div>
        <div className="text-3xl font-medium">Hello Again!</div>
        <div className="text-sm my-3 mx-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          suscipit, augue et vulputate ornare, massa neque dictum urna, sit amet
          rhoncus massa augue id lectus.
        </div>
        <div>
          <label
            for="website-admin"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Username
          </label>
          <div class="flex">
            <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              @
            </span>
            <input
              type="text"
              id="website-admin"
              className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Bonnie Green"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
