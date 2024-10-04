import React, { useState } from "react";

import "./Home.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Feed from "../../Components/Feed/Feed";

const Home = ({ sidebar}) => {
  const [cetagory, setCetagory] = useState(0);
  return (
    <>
      <Sidebar sidebar={sidebar} cetagory={cetagory} setCetagory={setCetagory}/>
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        <Feed cetagory={cetagory}/>
      </div>
    </>
  );
};

export default Home;
