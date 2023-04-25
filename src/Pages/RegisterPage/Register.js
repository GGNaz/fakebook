import React, { useState } from "react";
import { routesPostApi } from "../../Api/api";
import moment from "moment";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    checkPassword: "",
    password: "",
    birthDate: "",
    image: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("formValues", formValues);
    if (
      !formValues.fullName ||
      !formValues.birthDate ||
      !formValues.password ||
      !formValues.checkPassword ||
      !formValues.email
    ) {
      alert("Fill up all fields");
    } else if (formValues.password !== formValues.checkPassword) {
      alert("Password do not match");
    } else {
      const params = {
        ...formValues,
        birthDate: moment(formValues.birthDate).format("LL"),
      };
      console.log(params);

      await routesPostApi("/auth/register", params).then((res) => {
        if (res.status === 201) {
          setFormValues("");
          alert("successfully registered");
          return navigate("/login");
        }
      });
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-white">
        <div>
          <a href="/">
            <h3 className="text-4xl font-bold text-purple-600">Logo</h3>
          </a>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
          <form>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Name
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="name"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  onChange={(e) => {
                    setFormValues({ ...formValues, fullName: e.target.value });
                  }}
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Email
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="email"
                  name="email"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  onChange={(e) => {
                    setFormValues({ ...formValues, email: e.target.value });
                  }}
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700"
              >
                Date
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="date"
                  name="date"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  onChange={(e) => {
                    setFormValues({ ...formValues, birthDate: e.target.value });
                  }}
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  onChange={(e) => {
                    setFormValues({
                      ...formValues,
                      checkPassword: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password_confirmation"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Confirm Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password_confirmation"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  onChange={(e) => {
                    setFormValues({ ...formValues, password: e.target.value });
                  }}
                />
              </div>
            </div>
            <div className="flex items-center justify-end mt-4">
              <a
                className="text-sm text-gray-600 underline hover:text-gray-900"
                href="#"
                onClick={() => navigate("/login")}
              >
                Already registered?
              </a>
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                onClick={handleSubmit}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
