import React from "react";
import ipad from "../../images/icons/new-ipad-logo.png";
import { FaChevronRight } from "react-icons/fa";
import "../../General css/All-in-One.css";

const Sec6 = () => {
  return (
    <div>
      <section className="Section-6">
        <div className="Upper-Div">
          <div className="Mid-Div">
            <div className="Left-Side">
              <div className="Model">16-inch model</div>

              <div className="Product-Title">MacBook Pro</div>

              <div className="Discription">The best for the brightest.</div>

              <div className="more-info">
                <ul>
                  <li>
                    <a href="#">
                      Learn more{" "}
                      <FaChevronRight className="arrow-icon" size={15} />{" "}
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

            <div className="Right-Side">
              <div>
                <img src={ipad} alt="apple-card" />
              </div>

              <div className="Discription">
                Like a computer. Unlike any computer.
              </div>

              <div className="more-info">
                <ul>
                  <li>
                    <a href="#">
                      Learn more{" "}
                      <FaChevronRight className="arrow-icon" size={15} />{" "}
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
        </div>
      </section>
    </div>
  );
};

export default Sec6;
