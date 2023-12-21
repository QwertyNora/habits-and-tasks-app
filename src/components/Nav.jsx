import React from "react";
import { Link } from "react-router-dom";
import Styles from "../styles/Nav.module.css"

const Nav = () => {

  const showAlert = () => {
    alert("We are still workin on this feature");
  };

  return (
    <>
      <nav className={Styles.navbar}>
      <div className={Styles.appName}>
        <h1>FragmentFriends</h1>
      </div>
      <ul className={Styles.linkList}>
        <li className={Styles.linkListItem}>
          <Link className={Styles.link} to="/">Home</Link>
        </li>
        <li className={Styles.linkListItem}>
          <Link className={Styles.link} to="/habits">Habits</Link>
        </li>
        <li className={Styles.linkListItem}>
          <Link className={Styles.link} to="/tasks">Tasks</Link>
        </li>
        <li className={Styles.linkListItem}>
          <Link className={Styles.link} to="/friends">Friends</Link>
        </li>
      </ul>
      <div>
        <button onClick={showAlert} className={Styles.button}>Sign In</button>
        <button onClick={showAlert} className={Styles.button}>Create Account</button>
      </div>
    </nav>
    </>
  );
};

export default Nav;
