import React from "react";
import logo from "../../images/logo.svg";

import { Link } from "react-router-dom";

export default function Appheader(props) {
  return (
    <div className="app-header">
      <div className="app-header__logo">
        <Link to="/">
          <img src={logo} className="responsive" alt="" />
        </Link>
      </div>
      <div className="app-header__menu">
        <i onClick={() => props.setOpen(true)} className="fa fa-bars"></i>
      </div>
    </div>
  );
}
