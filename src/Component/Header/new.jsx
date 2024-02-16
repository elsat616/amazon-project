import React, { useEffect, useState } from "react";
// import classes from "./header.module.css";
import "./sidebar.css";

const Sidebar = () => {
  const [firstDropdownOpen, setFirstDropdownOpen] = useState(false);
  const [secondDropDownOpen, setSecondDropDownOpen] = useState(false);

  const toggleFirstDropDown = () => {
    setFirstDropdownOpen(!firstDropdownOpen);
  };

  const toggleSecondDropDown = () => {
    setSecondDropDownOpen(!secondDropDownOpen);
  };


  return (
    <div id="mySidenav" className="sidenav">
      <span id="closeBtn" className="closebtn" onClick={closeNav}>&times;</span>
      <div className="sidenavRow" onClick={handleRowClick}>
      <div className="sidenavContentHeader">Trending</div>
          <a href="#">
            <div className="sidenavContent">Best Sellers</div>
          </a>
          <a href="#">
            <div className="sidenavContent">New Releases</div>
          </a>
          <a href="#">
            <div className="sidenavContent">Movers and Shakers</div>
          </a>
          <hr />
      </div>
      <div className="sidenavRow" onClick={handleRowClick}>
        {/* Content for the second row */}
      </div>
      <div id="firstDropDown" className="sidenavRow" onClick={toggleFirstDropDown}>
        {/* Content for the first dropdown */}
      </div>
      {firstDropdownOpen && (
        <div id="firstContainer">
          {/* Content for the expanded first dropdown */}
        </div>
      )}
      <div id="secondDropDown" className="sidenavRow" onClick={toggleSecondDropDown}>
        {/* Content for the second dropdown */}
      </div>
      {secondDropDownOpen && (
        <div id="secondContainer">
          {/* Content for the expanded second dropdown */}
        </div>
      )}
    </div>
  );
};

  return (
    <div>
      <div id="overlay" onClick={closeNav}></div>

      <div id="closeBtn" onClick={closeNav}>
        &times;
      </div>
      <div className="sidenav" id="mySidenav">
        <div className="sidenavHeader">
          <i className="fas fa-user-circle"></i> Hello, Sign In
        </div>
        <div id="main-container">
          <div className="sidenavContentHeader">Trending</div>
          <a href="#">
            <div className="sidenavContent">Best Sellers</div>
          </a>
          <a href="#">
            <div className="sidenavContent">New Releases</div>
          </a>
          <a href="#">
            <div className="sidenavContent">Movers and Shakers</div>
          </a>
          <hr />
          <div className="sidenavContentHeader">
            Digital Content And Devices
          </div>
          <a href="#" onClick={openPrimeVideo}>
            <div className="sidenavRow">
              <div>Prime Video</div>
              <i
                className="fas fa-chevron-right"
                style={{ color: "#8e9090" }}
              ></i>
            </div>
          </a>
          <a href="#" onClick={openAmazonMusic}>
            <div className="sidenavRow">
              <div>Amazon Music</div>
              <i
                className="fas fa-chevron-right"
                style={{ color: "#8e9090" }}
              ></i>
            </div>
          </a>
          <a href="#">
            <div className="sidenavRow">
              <div>Apps for Android</div>
              <i
                className="fas fa-chevron-right"
                style={{ color: "#8e9090" }}
              ></i>
            </div>
          </a>
          <a href="#">
            <div className="sidenavRow">
              <div>Echo, Alexa & Smart Home</div>
              <i
                className="fas fa-chevron-right"
                style={{ color: "#8e9090" }}
              ></i>
            </div>
          </a>
          <a href="#">
            <div className="sidenavRow">
              <div>Fire TV</div>
              <i
                className="fas fa-chevron-right"
                style={{ color: "#8e9090" }}
              ></i>
            </div>
          </a>
          <a href="#">
            <div className="sidenavRow">
              <div>Fire Tablets</div>
              <i
                className="fas fa-chevron-right"
                style={{ color: "#8e9090" }}
              ></i>
            </div>
          </a>
          <a href="#">
            <div className="sidenavRow">
              <div>Kindle E-readers & Books</div>
              <i
                className="fas fa-chevron-right"
                style={{ color: "#8e9090" }}
              ></i>
            </div>
          </a>
          <a href="#">
            <div className="sidenavRow">
              <div>Audible Audiobooks</div>
              <i
                className="fas fa-chevron-right"
                style={{ color: "#8e9090" }}
              ></i>
            </div>
          </a>
          <hr />
          <div className="sidenavContentHeader">Shop By Department</div>
          <a href="#">
            <div className="sidenavRow">
              <div>Amazon Fresh</div>
              <i
                className="fas fa-chevron-right"
                style={{ color: "#8e9090" }}
              ></i>
            </div>
          </a>
          <a href="#">
            <div className="sidenavRow">
              <div>Books</div>
              <i
                className="fas fa-chevron-right"
                style={{ color: "#8e9090" }}
              ></i>
            </div>
          </a>
          <a href="#">
            <div className="sidenavRow">
              <div>Films, TV, Music & Games</div>
              <i
                className="fas fa-chevron-right"
                style={{ color: "#8e9090" }}
              ></i>
            </div>
          </a>
          <a href="#">
            <div className="sidenavRow">
              <div>Electronics & Computers</div>
              <i
                className="fas fa-chevron-right"
                style={{ color: "#8e9090" }}
              ></i>
            </div>
          </a>
          <div>
            <a href="#" onClick={toggleFirstDropDown}>
              <div className="sidenavRow">
                <div>Home, Garden & Pets</div>
                <i
                  className="fas fa-chevron-right"
                  style={{ color: "#8e9090" }}
                ></i>
              </div>
            </a>
            <a href="#" onClick={toggleSecondDropDown}>
              <div className="sidenavRow">
                <div>Beauty, Health & Grocery</div>
                <i
                  className="fas fa-chevron-right"
                  style={{ color: "#8e9090" }}
                ></i>
              </div>
            </a>
          </div>
          <a href="#">
            <div className="sidenavRow">
              <div>Toys, Children & Baby</div>
              <i
                className="fas fa-chevron-right"
                style={{ color: "#8e9090" }}
              ></i>
            </div>
          </a>
          <a href="#">
            <div className="sidenavRow">
              <div>Clothes, Shoes & Watches</div>
              <i
                className="fas fa-chevron-right"
                style={{ color: "#8e9090" }}
              ></i>
            </div>
          </a>
          <a href="#">
            <div className="sidenavRow">
              <div>Sports & Outdoors</div>
              <i
                className="fas fa-chevron-right"
                style={{ color: "#8e9090" }}
              ></i>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
