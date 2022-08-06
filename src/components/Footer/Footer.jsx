import React from "react";
import "./Footer.css";
import insta from "../../assets/img/instagram_icon.png";
import facebook from "../../assets/img/facebook_icon.png";
import telegram from "../../assets/img/telegram.png";

function Footer() {
  return (
    <footer>
      <p>Tel:+998(90) 023-46-44</p>
      <div className="social">
        <img src={insta} alt="" />
        <img src={facebook} alt="" />
        <img className="img" src={telegram} alt="" />
      </div>
      <p>disigned by Abdulloh</p>
    </footer>
  );
}

export default Footer;
