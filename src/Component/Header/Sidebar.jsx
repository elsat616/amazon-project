import React, { useState } from "react";
import "./sidebar.css";

const Sidebar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [firstDropDownOpen, setFirstDropDownOpen] = useState(false);
  const [secondDropDownOpen, setSecondDropDownOpen] = useState(false);

  const openNav = () => {
    setIsNavOpen(true);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  function toggleFirstDropDown() {
    setFirstDropDownOpen(!firstDropDownOpen);
  }

  function toggleSecondDropDown() {
    setSecondDropDownOpen(!secondDropDownOpen);
  }

  const openPrimeVideo = () => {
    // Implementation for opening the Prime Video section
  };

  const openAmazonMusic = () => {
    // Implementation for opening the Amazon Music section
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
              <div>Films,TV, Music & Games</div>
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
                  className={`fas fa-chevron-right ${
                    firstDropDownOpen ? "rotate" : ""
                  }`}
                  style={{ color: "#8e9090" }}
                ></i>
              </div>
            </a>
            {firstDropDownOpen && (
              <div className="sidenavSubRow">
                <div>Appliances</div>
                <div>Patio, Lawn & Garden</div>
                <div>Pet Supplies</div>
                <div>Tools & Home Improvement</div>
                <div>Toys & Games</div>
              </div>
            )}
          </div>
          <div>
            <a href="#" onClick={toggleSecondDropDown}>
              <div className="sidenavRow">
                <div>Sports & Outdoors</div>
                <i
                  className={`fas fa-chevron-right ${
                    secondDropDownOpen ? "rotate" : ""
                  }`}
                  style={{ color: "#8e9090" }}
                ></i>
              </div>
            </a>
            {secondDropDownOpen && (
              <div className="sidenavSubRow">
                <div>Sportswear</div>
                <div>Exercise & Fitness</div>
                <div>Camping & Hiking</div>
                <div>Cycling</div>
                <div>Golf</div>
              </div>
            )}
          </div>
          <a href="#">
            <div className="sidenavRow">
              <div>Automotive</div>
              <i
                className="fas fa-chevron-right"
                style={{ color: "#8e9090" }}
              ></i>
            </div>
          </a>
          <a href="#">
            <div className="sidenavRow">
              <div>Health & Personal Care</div>
              <i
                className="fas fa-chevron-right"
                style={{ color: "#8e9090" }}
              ></i>
            </div>
          </a>
          <a href="#">
            <div className="sidenavRow">
              <div>Fashion</div>
              <i
                className="fas fa-chevron-right"
                style={{ color: "#8e9090" }}
              ></i>
            </div>
          </a>
          <a href="#">
            <div className="sidenavRow">
              <div>Gift Cards</div>
              <i
                className="fas fa-chevron-right"
                style={{ color: "#8e9090" }}
              ></i>
            </div>
          </a>
          <hr />
          <div className="sidenavContentHeader">Help & Settings</div>
          <a href="#">
            <div className="sidenavContent">Your Account</div>
          </a>
          <a href="#">
            <div className="sidenavContent">Customer Service</div>
          </a>
          <a href="#">
            <div className="sidenavContent">Sign Out</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
