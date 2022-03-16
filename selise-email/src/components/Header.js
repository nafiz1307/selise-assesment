import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFolderOpen, faMagnifyingGlass, faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header">
      <div className="header__option">
        <span className="option__logo">
          <FontAwesomeIcon className="option__icon" icon={faPen} />
        </span>
        <span className="option__logo">
          <FontAwesomeIcon className="option__icon" icon={faEnvelope} />
        </span>
        <span className="option__logo">
          <FontAwesomeIcon className="option__icon" icon={faFolderOpen} />
        </span>
        <span className="option__logo">
          <FontAwesomeIcon className="option__icon" icon={faTrashCan} />
        </span>
      </div>
      <div className="header__search">
        <input type="text" className="search__bar" />
        <FontAwesomeIcon className="search__icon" icon={faMagnifyingGlass} />
      </div>
    </div>
  );
};

export default Header;
