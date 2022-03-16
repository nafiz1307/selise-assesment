import React from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const Sidebar = () => {
  return (
    <div className="sidebar">
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
    </div>
  );
};

export default Sidebar;
