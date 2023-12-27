import React from "react";
import { Link } from "react-router-dom";
import Styles from "../styles/Footer.module.css";
import { SiLinkedin, SiFacebook, SiGithub, SiTrello } from "react-icons/si";
// import { SiFacebook } from "react-icons/si";

const Footer = () => {
  return (
    <div>
      <footer className={Styles.footer}>
        <div className={Styles.container}>
          <div className={Styles.row}>
            <div className={Styles.footerCol}>
              <h3>Habits</h3>
              <ul>
                <li>
                  <Link to="/Habits">Current habits</Link>
                </li>
                <li>
                  <Link to="/NewHabit">Add new habit</Link>
                </li>
              </ul>
            </div>
            <div className={Styles.footerCol}>
              <h3>Tasks</h3>
              <ul>
                <li>
                  <Link to="/Tasks">Current tasks</Link>
                </li>
                <li>
                  <Link to="/NewTask">Add new task</Link>
                </li>
              </ul>
            </div>
            <div className={Styles.footerCol}>
              <h3>Friends</h3>
              <ul>
                <li>
                  <Link to="/Friends">See all friends</Link>
                </li>
              </ul>
            </div>

            <div className={Styles.footerCol}>
              <h3>Follow us</h3>
              <div className={Styles.socialLinks}>
                <ul>
                  <li>
                    <a href="">
                      <SiGithub /> Github
                    </a>
                  </li>
                  {/* <li>
                    <a href="">
                      <SiTrello /> Trello
                    </a>
                  </li> */}
                  <li>
                    <a href="">
                      <SiFacebook /> Facebook
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <SiLinkedin /> LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
