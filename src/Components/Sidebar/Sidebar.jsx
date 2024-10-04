import React from "react";
import "./Sidebar.css";

import home from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import autompbile from "../../assets/automobiles.png";
import sports from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.png";
import jeck from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megon from "../../assets/megan.png";
import cameron from "../../assets/cameron.png";

const Sidebar = ({ sidebar, cetagory, setCetagory }) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="sortcurt-links">
        <div
          className={`side-links ${cetagory === 0 ? "active" : ""}`}
          onClick={() => setCetagory(0)}
        >
          <img src={home} alt="" />
          <p>Home</p>
        </div>
        <div
          className={`side-links ${cetagory === 20 ? "active" : ""}`}
          onClick={() => setCetagory(20)}
        >
          <img src={game_icon} alt="" />
          <p>Gaming</p>
        </div>
        <div
          className={`side-links ${cetagory === 2 ? "active" : ""}`}
          onClick={() => setCetagory(2)}
        >
          <img src={autompbile} alt="" />
          <p>Autompbile</p>
        </div>
        <div
          className={`side-links ${cetagory === 17 ? "active" : ""}`}
          onClick={() => setCetagory(17)}
        >
          <img src={sports} alt="" />
          <p>Sports</p>
        </div>
        <div
          className={`side-links ${cetagory === 24 ? "active" : ""}`}
          onClick={() => setCetagory(24)}
        >
          <img src={entertainment} alt="" />
          <p>Entertainment</p>
        </div>
        <div
          className={`side-links ${cetagory === 28 ? "active" : ""}`}
          onClick={() => setCetagory(28)}
        >
          <img src={tech} alt="" />
          <p>Tech</p>
        </div>
        <div
          className={`side-links ${cetagory === 10 ? "active" : ""}`}
          onClick={() => setCetagory(10)}
        >
          <img src={music} alt="" />
          <p>Music</p>
        </div>
        <div
          className={`side-links ${cetagory === 22 ? "active" : ""}`}
          onClick={() => setCetagory(22)}
        >
          <img src={blogs} alt="" />
          <p>Blogs</p>
        </div>
        <div
          className={`side-links ${cetagory === 25 ? "active" : ""}`}
          onClick={() => setCetagory(25)}
        >
          <img src={news} alt="" />
          <p>News</p>
        </div>

        <hr />
      </div>
      <div className="subscribed-links">
        <h3>Subscribe</h3>
        <div className="side-links">
          <img src={jeck} alt="" />
          <p>PewDiePie</p>
        </div>
        <div className="side-links">
          <img src={simon} alt="" />
          <p>MrBeast</p>
        </div>
        <div className="side-links">
          <img src={tom} alt="" />
          <p>Justin Bieber</p>
        </div>
        <div className="side-links">
          <img src={megon} alt="" />
          <p>5-Minute Crafts</p>
        </div>
        <div className="side-links">
          <img src={cameron} alt="" />
          <p>Nas Daily</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
