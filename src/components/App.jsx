import React from "react";
import Signin from "./Signin";
import Counter from "./Counter";

var userExist = false;

function App() {
  return (
    <div className="container">{userExist ? <Counter /> : <Signin />}</div>
  );
}
export default App;
