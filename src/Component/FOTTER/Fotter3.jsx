import React from "react";
import Us from "../../images/icons/16.png";
const Fotter3 = () => {
  return (
    <div>
      <div className="fotter1">
        <div className="my-apple-wrapper ">
          More ways to shop: <a href="#">Find an Apple Store</a> or{" "}
          <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
        </div>

        <div className="copyright-wrapper">
          <div className="copyright">
            Copyright © 2019 Apple Inc. All rights reserved.
          </div>

          <div className="footer-links-terms">
            <ul>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Sales and Refunds</a>
              </li>
              <li>
                <a href="#">Legal</a>
              </li>
              <li>
                <a href="#">Site Map</a>
              </li>
            </ul>
          </div>
          <div className="footer-country">
            <div className="flag-wrapper">
              <img src={Us} alt="us" />
            </div>{" "}
            <div className="footer-country-name">United States</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fotter3;
