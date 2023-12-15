import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="footer-col">
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
            <div class="footer-col">
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

            <div class="footer-col">
              <h3>Follow us</h3>
              <div class="social-links">
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
