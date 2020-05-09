import React from "react";

import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <main>
        <h1>Lorem Ipsum Dolor Lorem Ipsum Dolor Amet.</h1>
        <img className="diamond-img" alt="" src="./images/Diamond.png" />
        <div className="paragraphs">
          <p className="p1">
            Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
          </p>
          <p className="p2">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <img
          className="computer-img shadowed"
          alt="Computer"
          src="./images/Generic-Computer.png"
        />
      </main>
      <footer />
    </div>
  );
}
