import React from "react";
import "bootstrap/js/dist/tab";
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

          <nav className="mt-5">

            <div className="nav nav-tabs" id="nav-tab">
              <a className="nav-item nav-link active" data-toggle="tab" href="#nav-home">Home</a>

              <a className="nav-item nav-link" data-toggle="tab" href="#nav-profile">Profile</a>

              <a className="nav-item nav-link" data-toggle="tab" href="#nav-contact" >Contact</a>
            </div>

          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="nav-home">
              {HomeContent}
            </div>
            <div className="tab-pane fade" id="nav-profile">
              {ProfileContent}
            </div>
            <div className="tab-pane fade" id="nav-contact">
              {ContactContent}
            </div>
          </div>
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