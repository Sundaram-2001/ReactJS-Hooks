import React from "react";
import Input from "./Input";

function Signin() {
  let url = "shorturl.at/gjrCX";
  return (
    <div>
      <form className="form">
        <Input type="text" placeholder="Enter Username" />
        <Input type="password" placeholder="Enter password" />
        <Input type="password" placeholder="Confirm Your Password" />
        <button type="submit">Sign-In</button> <br /> <br />
        <a href={url}>Sign-In with Google?</a>
      </form>
    </div>
  );
}

export default Signin;
