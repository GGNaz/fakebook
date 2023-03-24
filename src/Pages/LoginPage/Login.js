import React from "react";
import SidePage from "./LoginContent/sidePage";
import LoginPage from "./LoginContent/LoginPage";

function Login() {
  return (
    <div class="flex flex-row text-center">
      <div class="hidden md:flex md:basis-1/2">
      <SidePage/>
      </div>
      <div className="flex md:basis-1/2">
        <LoginPage/>
      </div>
    </div>
  );
}

export default Login;
