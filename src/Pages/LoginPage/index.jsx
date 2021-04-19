import React from "react";
import { handleFakeLogin } from './helper';

const LoginPage = () => {
  return <>
    Login Page <br />
    <button onClick={handleFakeLogin}>Click to Login</button>
  </>;
};

export default LoginPage;
