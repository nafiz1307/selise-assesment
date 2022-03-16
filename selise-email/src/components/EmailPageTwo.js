import React from "react";
import "./EmailPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faEnvelope,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
const EmailPageTwo = () => {
  return (
    <div className="email__page">
      <div className="email__body__subject">
        <div className="email__title">
          <h1>Email From Henry Fox</h1>
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
          <span className="right_date_time"> 2014-06-05 12:04 </span>
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
          <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis et laborum amet ab, dolore sapiente mollitia excepturi ducimus quae vero eos beatae quidem ut incidunt saepe numquam reprehenderit quisquam sint.</h1>
        </div>
        <div className="second__line">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam rerum quos, non placeat nam aliquid exercitationem sint impedit tempora, aspernatur itaque, est iure quae odit! Animi repudiandae quis perferendis repellendus.{" "}
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

export default EmailPageTwo;
