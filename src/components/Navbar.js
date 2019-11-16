import React, { Component } from "react";
import logo from "../images/logo.svg";
import { FaAlignRight, FaAlignLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header"></div>
          <Link to="/">
            <img src={logo} alt="2201 N 6th" />
          </Link>
          <button type="button" className="nav-btn" onClick={this.handleToggle}>
            <FaAlignLeft className="nav-icon" />
          </button>
        </div>
        <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/rooms">Living Spaces</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
