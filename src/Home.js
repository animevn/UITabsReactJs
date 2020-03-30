import React from "react";
import "bootstrap/js/dist/tab";
import "bootstrap/js/dist/carousel";
import {HomeContent, ContactContent, ProfileContent} from "./data";

function Home() {

  return (
    <div className="container mt-3 px-0">

      <ul className="nav nav-pills mb-3">
        <li className="nav-item">
          <a className="nav-link active" data-toggle="pill" href="#pills-home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="pill" href="#pills-profile">Profile</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="pill" href="#pills-contact">Contact</a>
        </li>
      </ul>

      <div className="tab-content" id="pills-tabContent">

        <div className="tab-pane fade show active text-justify" id="pills-home">
          {HomeContent}
        </div>

        <div className="tab-pane fade text-justify" id="pills-profile">
          {ProfileContent}
        </div>

        <div className="tab-pane fade text-justify" id="pills-contact">
          {ContactContent}
        </div>

      </div>

    </div>
  )
}

export default Home;