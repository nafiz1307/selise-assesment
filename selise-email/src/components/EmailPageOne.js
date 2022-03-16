import React from "react";
import "./EmailPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCircleInfo,
  faEnvelope,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const EmailPageOne = () => {
  return (
    <div className="email__page">
      <div className="email__body__subject">
        <div className="email__title">
          <h1>Last Chance to get Startup Framework - 50% OFF!</h1>
        </div>
        <div className="move__button">
          Move to : <button className="move">Trash</button>
        </div>
      </div>
      <div className="sent__info">
        <div className="info__left">
          <span>
            <FontAwesomeIcon className="starred__gold" icon={faStar} />
          </span>
          <span className="left__black__text"> Designmodo to </span>
          <span className="left__blue__text"> me </span>
        </div>
        <div className="info_right">
          <span className="right_date_time"> 2014-06-05 12:04  </span>
          <span>
            <FontAwesomeIcon className="info__icon" icon={faCircleInfo} />
          </span>
          <span>
            <FontAwesomeIcon className="mail__icon" icon={faEnvelope} />
          </span>
        </div>
      </div>
      <div className="email__body">
        <div className="first__line">
          <h1>LAST DAY:50% OFF Startup FrameWork</h1>
        </div>
        <div className="second__line">
          We offer you a 50% discount on{" "}
          <b>
            <u>Startup Design Framework</u>
          </b>
        </div>
        <div className="third__line">
          Startup Framework is a tool to help create websites and is a nice
        </div>
      </div>
    </div>
  );
};

export default EmailPageOne;
