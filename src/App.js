import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="w-full h-full bg-[#333b44]">
      <header>
        <Navbar />
      </header>
      <main>
        <Home />
      </main>
    </div>
  );
};

export default App;
