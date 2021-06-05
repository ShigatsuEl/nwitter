import React, { useState } from "react";
import { Router } from "./routers/router";
import { authService } from "./firebase";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <div className="App">
      <Router isLoggedIn={isLoggedIn} />
      <footer>&copy; Nwitter {new Date().getFullYear()}</footer>
    </div>
  );
}

export default App;
