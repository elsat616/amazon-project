import React, { useContext, useState } from "react";
import classes from "./header.module.css";
import { CiLocationOn } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../Utility/firebase";
import Sidebar from "./Sidebar";
import { Transition } from "react-transition-group";

function Header() {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  const [navOpen, setNavOpen] = useState(false);
  const openNav = () => {
    setNavOpen(true);
  };
  const closeNav = () => {
    setNavOpen(false);
  };

  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.header_container}>
          <div className={classes.logo_container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt=""
              />
            </Link>
            <div className={classes.delivery}>
              <span>
                <CiLocationOn />
              </span>
              <div>
                <p>Deliver to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>

          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" />
            <IoSearch size={38} />
          </div>

          <div className={classes.order_container}>
            <Link to="" className={classes.language}>
              <img
                src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
                alt=""
              />
              <select>
                <option value="">EN</option>
              </select>
            </Link>
            <Link to={!user && "/auth"}>
              <div>
                {user ? (
                  <>
                    <p>Hello {user?.email?.split("@")[0]}</p>
                    <span onClick={() => auth.signOut()}>Sign Out</span>
                  </>
                ) : (
                  <>
                    <p>Hello, Sign In</p>
                    <span>Account & Lists</span>
                  </>
                )}
              </div>
            </Link>
            <Link to="/orders">
              <p>returns</p>
              <span>& Orders</span>
            </Link>
            <Link to="/cart" className={classes.cart}>
              <BiCart size={35} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader click={openNav} />
      <Transition
        in={navOpen}
        mountOnEnter
        unmountOnExit
      >
        {(state) => {
          return (
            <>
              <Sidebar state={state} />
              <div
                className={classes.overlay}
                style={
                  state === "entering"
                    ? { animation: "show .3s forwards" }
                    : state === "entered"
                    ? { opacity: "1" }
                    : { animation: "show .3s reverse forwards" }
                }
                onClick={closeNav}
              ></div>

              <div
                className={classes.closeBtn}
                style={
                  state === "entering"
                    ? { animation: "show .3s forwards" }
                    : state === "entered"
                    ? { opacity: "1" }
                    : { animation: "show .3s reverse forwards" }
                }
                onClick={closeNav}
              >
                &times;
              </div>
            </>
          );
        }}
      </Transition>
    </section>
  );
}

export default Header;
