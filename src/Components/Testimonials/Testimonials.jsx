import { useRef } from "react";

import NextBtn from "../../assets/next-icon.png";
import BackBtn from "../../assets/back-icon.png";
import User_1 from "../../assets/user-1.png";
import User_2 from "../../assets/user-2.png";
import User_3 from "../../assets/user-3.png";
import User_4 from "../../assets/user-4.png";
import "./Testimonials.css";
function Testimonials() {
  const slider = useRef();
  let tx = 0;
  function ForwardClick() {
    if (tx > -50) {
      //   tx -= 25;
      tx = tx - 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }
  function BackWordClick() {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  return (
    <div className="testimonials">
      <img
        src={NextBtn}
        alt="img-left"
        className="next-btn"
        onClick={ForwardClick}
      />
      <img
        src={BackBtn}
        alt="img-left"
        className="back-btn"
        onClick={BackWordClick}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={User_1} alt="user-1" />
                <div>
                  <h3>Emily Williams1</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={User_2} alt="user-1" />
                <div>
                  <h3>William Jackson2</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={User_3} alt="user-1" />
                <div>
                  <h3>Emily Williams3</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={User_4} alt="user-1" />
                <div>
                  <h3>William Jackson4</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Testimonials;
