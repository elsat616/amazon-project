import React from "react";
import classes from "./footer.module.css";
import { TbWorld } from "react-icons/tb";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

function Footer() {
  return (
    <>
      <div className={classes.footer}>
        <div className={classes.footer_out_container}>
          <div className={classes.footer_inner_container}>
            <div className={classes.footer_data}>
              <div>
                <h3>Get to Know Us</h3>
                <ul>
                  <li>Careers</li>
                  <li>Blog</li>
                  <li>About Amazon</li>
                  <li>Investor Relations</li>
                  <li>Amazon Devices</li>
                  <li>Amazon Science</li>
                </ul>
              </div>
              <div>
                <h3>Make Money with Us</h3>
                <ul>
                  <li>Sell products on Amazon</li>
                  <li>Sell on Amazon Business</li>
                  <li>Sell apps on Amazon</li>
                  <li>Become an Affiliate</li>
                  <li>Advertise Your Products</li>
                  <li>Self-Publish with Us</li>
                  <li>Host an Amazon Hub</li>
                  <li>See More Make Money with Us</li>
                </ul>
              </div>
              <div>
                <h3>Amazon Payment Products</h3>
                <ul>
                  <li>Amazon Business Card</li>
                  <li>Shop with Points</li>
                  <li>Reload Your Balance</li>
                  <li>Amazon Currency Converter</li>
                </ul>
              </div>
              <div>
                <h3>Let Us Help You</h3>
                <ul>
                  <li>Amazon and COVID-19</li>
                  <li>Your Account</li>
                  <li>Your Orders</li>
                  <li>Shipping Rates & Policies</li>
                  <li>Returns & Replacements</li>
                  <li>Manage Your Content and Devices</li>
                  <li>Amazon Assistant</li>
                  <li>Help</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className={classes.logo_container1}>
          <div>
            <img
              className={classes.logo_img}
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt=""
            />
          </div>
          <div className={classes.allspan}>
            <span className={classes.logo_lng}>
              <TbWorld />
              English
            </span>

            <span className={classes.logo_price}>USD -U.S.Dollar</span>

            <span className={classes.logo_flag}>
              <img
                src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
                alt=""
              />
              United States
            </span>
          </div>
        </div>
        <div className={classes.copy_write}>&copy; 1996-2024, Amazon.com, Inc. or its affiliates</div>
      </div>
    </>
  );
}

export default Footer;
