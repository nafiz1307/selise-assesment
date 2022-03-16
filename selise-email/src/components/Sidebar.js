import React from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Sidebar = () => {
    var count =0;
  return (
    <div className="sidebar">
      <Link to="email-two" style={{ color: "black", textDecoration: "none" }} >
        <div className="email__list">
          <img
            src="https://w7.pngwing.com/pngs/481/915/png-transparent-computer-icons-user-avatar-woman-avatar-computer-business-conversation-thumbnail.png"
            alt="demo avatar"
            className="sender__img"
          />
          <div className="email-info">
            <div className="email__header">
              <h4 className="email__name">Henry Fox</h4>
              <h4 className="email__name">15.23</h4>
            </div>
            <p className="email__subject">Re: Subject</p>
            <div className="email__preview">
              <p>
                <FontAwesomeIcon className="starred" icon={faStar} />
              </p>
              <small className="email__body__preview">
                You Know about the last time I was goin..
              </small>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/" style={{ color: "black", textDecoration: "none" }}>
        {" "}
        <div className="email__list">
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="demo avatar"
            className="sender__img"
          />
          <div className="email-info">
            <div className="email__header">
              <h4 className="email__name">Designmodo</h4>
              <h4 className="email__name">12.04</h4>
            </div>
            <p className="email__subject">Last Chance to get St..</p>
            <div className="email__preview">
              <p>
                <FontAwesomeIcon className="starred star__gold" icon={faStar} />
              </p>
              <small className="email__body__preview">
                Exclusive view in Browser
              </small>
            </div>
          </div>
        </div>
      </Link>
      <Link to="email-three" style={{ color: "black", textDecoration: "none" }}>
        <div className="email__list">
          <img
            src="https://cad.gov.jm/wp-content/uploads/2017/10/img_avatar2.png"
            alt="demo avatar"
            className="sender__img"
          />
          <div className="email-info">
            <div className="email__header">
              <h4 className="email__name">Hey Designer</h4>
              <h4 className="email__name">15.23</h4>
            </div>
            <p className="email__subject">Daily Newsletter #156</p>
            <div className="email__preview">
              <p>
                <FontAwesomeIcon className="starred" icon={faStar} />
              </p>
              <small className="email__body__preview">
                Is this email displaying correctly
              </small>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
