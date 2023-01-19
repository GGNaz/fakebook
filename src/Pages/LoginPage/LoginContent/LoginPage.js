import React from "react";
import logoPng from "../../../Assets/png/logo.png";
// import * as FiIcons from "react-icons/fi";

function LoginPage() {
  return (
    <div>
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
      <div className="flex mx-20">
        <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
          @
        </span>
        <input
          type="text"
          id="website-admin"
          class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="username"
        />
      </div>
      <div className="mx-20 my-5">
        <input
          type="password"
          id="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="password"
          required
        />
      </div>
      <div className="flex justify-between items-center mx-20">
        <div class="form-group form-check">
          <input
            type="checkbox"
            class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            id="exampleCheck3"
            checked
          />
          <label
            class="form-check-label inline-block text-gray-800"
            for="exampleCheck2"
          >
            Remember me
          </label>
        </div>
        <a
          href="#!"
          class="text-white-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
        >
          Forgot password?
        </a>
      </div>
      <div className="mx-20 mt-10 mb-5">
        <button
          type="submit"
          class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
        >
          Sign in
        </button>
      </div>
      <p className="mt-8 text-xs font-light text-center text-gray-700">
        {" "}
        Don't have an account?{" "}
        <a href="#" className="font-medium text-purple-600 hover:underline">
          Sign up
        </a>
      </p>
    </div>
  );
}

export default LoginPage;
