import React from "react";
import Header from "../../components/Header";

import "./MainPage.css";

export default function MainPage() {
  return (
    <div className="main-page" style={{backgroundImage: 'url(./images/ZL-Sample-Desk.png)'}}>
      <Header />
      <footer>
        <p>Lorem Ipsum Dolor Lorem Ipsum Dolor Amet.</p>
        <img src="./images/BottomMask.png" alt="" />
      </footer>
    </div>
  );
}
