import React from "react";
import watch from "../../images/icons/watch-series5-logo.png";
import card from "../../images/icons/apple-card-logo.png";
import { FaChevronRight } from "react-icons/fa";
import "../../General css/All-in-One.css";

const Sec4 = () => {
  return (
    <div>
      <section className="Section-4">
        <div className="Upper-Div">
          <div className="Rapper">
            <div className="Left-Side">
              <div>
                <img src={watch} alt="watch-series-5" />
              </div>

              <div className="Discription">
                With the new Always-On Retina display. You’ve never seen a watch
                like this
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

            <div className="Right-Side">
              <div>
                <img src={card} alt="apple-card" />
              </div>

              <div className="Discription">
                Get 3% Daily Cash on purchases from Apple website here using
                Apple Card.
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

export default Sec4;
