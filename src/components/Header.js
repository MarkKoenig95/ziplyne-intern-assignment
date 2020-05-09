import React from "react";
import { Link, HashRouter } from "react-router-dom";
import TextLink from "./TextLink";
import "./Header.css";

export default function Header() {
  return (
    <HashRouter basename="/">
      <header>
        <div className="header-content">
          <Link className="logo" to="/">
            <img alt="zipline logo" src="./images/ZL-Logo-Long.png" />
          </Link>

          <nav>
            <div className="nav-links">
              <TextLink to="/landing-page" text="Product" />

              <TextLink to="/landing-page" text="Solution" />

              <TextLink to="/landing-page" text="Pricing" />

              <TextLink to="/landing-page" text="Customer Stories" />

              <TextLink to="/landing-page" text="Resources" />
            </div>
          </nav>
          <div className="action-buttons">
            <button>Request A Demo</button>
            <Link to="/landing-page">
              <img
                alt="log in"
                src="https://img.icons8.com/small/32/000000/enter-2.png"
              />
            </Link>
            <a className="hide" href="https://icons8.com/icon/52625/enter">
              Enter icon by Icons8
            </a>
          </div>
        </div>
        <div className="gradient" />
      </header>
    </HashRouter>
  );
}
