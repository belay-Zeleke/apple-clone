import React from "react";
import Tv from "../../images/icons/apple-tv-logo.png";
import Servant from "../../images/icons/servant-logo.png";
import { FaChevronRight } from "react-icons/fa";
import "../../General css/All-in-One.css";

const Sec5 = () => {
  return (
    <div>
      <section class="Section-5">
        <div class="Upper-Div">
          <div class="Mid-Div">
            <div class="Left-Side">
              <div>
                <img src={Tv} alt="appTv" />
              </div>
              <div class="Servant-Logo">
                <img src={Servant} alt="" />
              </div>
              <div class="Trailer">
                <a href="#"> Watch the trailer </a>
              </div>
            </div>

            <div class="Right-Side">
              <div class="Model">AirPods Pro</div>

              <div class="Discription">Magic like you’ve never heard.</div>

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

export default Sec5;
