import React from "react";
import Value from "./Components/value/Value";
import NavBar from "./components/navbar/navbar";
import Job from "./Components/Job/Job";
import Search from "./Components/Search/search";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div className="w-[85%] m-auto bg-white">
      <NavBar />
      <Search />
      <Job />
      <Value />
      <Footer />
    </div>
  );
};

export default App;
