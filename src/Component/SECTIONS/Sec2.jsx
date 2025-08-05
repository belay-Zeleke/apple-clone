import React from "react";
import { FaChevronRight } from "react-icons/fa";
import "../../General css/All-in-One.css";

const Sec2 = () => {
  return (
    <div>
      <section className="Section-2">
        <div className="Upper-Div">
          <div className="Mid-Div">
            <div className="Model">iPhone 11 Pro</div>

            <div className="Discription">
              Pro cameras. Pro display. Pro performance.
            </div>

            <div className="product-price">
              From $24.95/mo. or $599 with trade‑in.
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
      </section>
    </div>
  );
};

export default Sec2;
