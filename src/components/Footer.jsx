import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
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
            <div className="footer-col">
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

            <div className="footer-col">
              <h3>Follow us</h3>
              <div className="social-links">
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
