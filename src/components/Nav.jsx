import React, { useState } from "react";
import { Link } from "react-router-dom";
import Styles from "../styles/Nav.module.css";
import { IoCloseOutline } from "react-icons/io5";
import { IoMenuOutline } from "react-icons/io5";

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
                Home
              </Link>
            </li>
            <li>
              <Link className={Styles.link} to="/habits">
                Habits
              </Link>
            </li>
            <li>
              <Link className={Styles.link} to="/tasks">
                Tasks
              </Link>
            </li>
            <li>
              <Link className={Styles.link} to="/friends">
                Friends
              </Link>
            </li>
          </ul>
          <button
            id="hamburger-menu"
            className={Styles.mobileMenuIcon}
            onClick={toggleMobileMenu}
          >
            {mobile ? (
              <IoCloseOutline size={45} color="white" />
            ) : (
              <IoMenuOutline size={45} color="white" />
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
