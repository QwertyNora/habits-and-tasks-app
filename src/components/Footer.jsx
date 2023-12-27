import React from "react";
// import "../styles/Footer.css";
import Styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div>
      <footer className={Styles.footer}>
        <div className={Styles.container}>
          <div className={Styles.row}>
            <div className={Styles.footerCol}>
              <h3>Habit & Tasks</h3>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Our Policys</a>
                </li>
                <li>
                  <a href="#">Our Goals</a>
                </li>
              </ul>
            </div>
            <div className={Styles.footerCol}>
              <h3>Customer Service</h3>
              <ul>
                <li>
                  <a href="#">Payment</a>
                </li>
                <li>
                  <a href="#">Shipping</a>
                </li>
                <li>
                  <a href="#">Returns</a>
                </li>
              </ul>
            </div>

            <div className={Styles.footerCol}>
              <h3>Follow us</h3>
              <div className={Styles.socialLinks}>
                <ul>
                  <li>
                    <a href="">Github</a>
                  </li>
                  <li>
                    <a href="">Instagram</a>
                  </li>
                  <li>
                    <a href="">LinkedIn</a>
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
