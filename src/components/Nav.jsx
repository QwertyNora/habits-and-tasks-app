import React, { useState } from "react";
import { Link } from "react-router-dom";
import Styles from "../styles/Nav.module.css";
import { IoCloseOutline } from "react-icons/io5";
import { IoMenuOutline } from "react-icons/io5";
import {
  FaClipboardList,
  FaClipboardCheck,
  FaUserFriends,
} from "react-icons/fa";
import { MdOutlineTaskAlt } from "react-icons/md";
import { CiViewList } from "react-icons/ci";
import { IoHome } from "react-icons/io5";

const Nav = () => {
  const [mobile, setMobile] = useState(false);

  const toggleMobileMenu = () => {
    setMobile(!mobile);
  };

  return (
    <>
      <nav className={Styles.navbar}>
        <div className={Styles.container}>
          <h1 className={Styles.logo}>FragmentFriends</h1>

          <ul
            className={
              mobile ? Styles["nav-links-mobile"] : Styles["nav-links"]
            }
          >
            <li>
              <Link className={Styles.link} to="/">
              <IoHome /> Home
              </Link>
              <div className={Styles.mobileHome}>
                <span>ost</span>
              </div>
            </li>
            <li>
              <Link className={Styles.link} to="/habits">
                <CiViewList /> Habits
              </Link>
            </li>
            <li>
              <Link className={Styles.link} to="/tasks">
                <MdOutlineTaskAlt /> Tasks
              </Link>
            </li>
            <li>
              <Link className={Styles.link} to="/friends">
                <FaUserFriends /> Friends
              </Link>
            </li>
          </ul>
          <button className={Styles.mobileLoginButton}>Log in</button>
          <button className={Styles.mobileSignupButton}>Sign up</button>

          <button
            id="hamburger-menu"
            className={Styles.mobileMenuIcon}
            onClick={toggleMobileMenu}
          >
            {mobile ? (
              <IoCloseOutline size={42} color="white" />
            ) : (
              <IoMenuOutline size={42} color="white" />
            )}
          </button>
          <button className={Styles.loginButton}>Log in</button>
          <button className={Styles.signupButton}>Sign up</button>
        </div>
      </nav>
    </>
  );
};

export default Nav;
