import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/habits"> Habits </Link>
          </li>
          <li>
            <Link to="/tasks"> Tasks</Link>
          </li>
          <li>
            <Link to="/friends"> Friends</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
