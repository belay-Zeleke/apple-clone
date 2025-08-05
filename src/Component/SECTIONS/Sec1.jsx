import React from "react";
import macLap from "../../images/home/mac-laptop.jpg";
import "../../General css/All-in-One.css";
import { FaChevronRight } from "react-icons/fa";

const Sec1 = () => {
  return (
    <section className="section-1">
      <div className="upper-div">
        <div className="mid-div">
          <div className="model">16-inch model</div>

          <div className="product-title">MacBook Pro</div>

          <div className="description">The best for the brightest.</div>

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

          <div className="mac-photo">
            <img src={macLap} alt="MacBook Pro" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sec1;
