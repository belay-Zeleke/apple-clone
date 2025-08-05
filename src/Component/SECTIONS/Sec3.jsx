import React from "react";
import { FaChevronRight } from "react-icons/fa";
import "../../General css/All-in-One.css";

const Sec3 = () => {
  return (
    <section className="section-3">
      <div className="upper-div">
        <div className="mid-div">
          <div className="model">iPhone 11</div>
          <div className="description">
            Just the right amount of everything.
          </div>
          <div className="product-price">
            From $16.62/mo. or $399 with trade‑in.
          </div>
          <div className="more-info">
            <ul>
              <li>
                <a href="#">
                  Learn more <FaChevronRight className="arrow-icon" size={15} />{" "}
                </a>
              </li>
              <li>
                <a href="#">
                  Buy <FaChevronRight className="arrow-icon" size={15} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sec3;
