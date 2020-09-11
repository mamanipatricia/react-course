import React, { useState } from "react";
import "./App.css";

import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";

function App() {
  const [userName, setUserName] = useState("");

  const usernameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  return (
    <div className="App">
      <UserOutput userName={userName} />
      <UserInput
        userName={userName}
        placeholder={"Enter a username"}
        changed={usernameChangeHandler}
      />
    </div>
  );
}

export default App;
