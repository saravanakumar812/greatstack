import { useState } from "react";

import Msg_Icon from "../../assets/msg-icon.png";
import Phone_Icon from "../../assets/phone-icon.png";
import Mail_Icon from "../../assets/mail-icon.png";
import Location_Icon from "../../assets/location-icon.png";
import "./Conatctus.css";
import White_arrow from "../../assets/white-arrow.png";
function ContactUS() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "30d09fe5-74c9-43cf-b843-22654db79da9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={Msg_Icon} alt="" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <img src={Mail_Icon} alt="" />
            Contact@GreatStack.dev
          </li>
          <li>
            <img src={Phone_Icon} alt="" /> +1 123-456-7890
          </li>
          <li>
            <img src={Location_Icon} alt="" />
            77 Massachusetts Ave, Cambridge MA 02139, United States
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            placeholder="Enter your Name"
            name="name"
            required
          />
          <label>Your Mobile Number</label>
          <input
            type="tel"
            placeholder="Enter your Phone Number"
            name="phone number"
            required
          />
          <label htmlFor=""> Write your Message Here</label>
          <textarea
            name="Enter Your Message"
            id=""
            rows="6"
            placeholder="Enter your Message"
          ></textarea>
          <button className="white-arrow-btn dark-btn">
            Submit Now
            <img src={White_arrow} alt="white-arrow" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
}
export default ContactUS;
