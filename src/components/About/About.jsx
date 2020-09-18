import React from "react";
import NavBar from "../NavBar/NavBar";
import "./About.css";
import vew from "../Images/About.jpg";

const About = () => {
  return (
    <div>
      <NavBar></NavBar>
      <section className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <img src={vew} className="img-fluid " alt=" Common img" />
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <div className="col-lg-6 order-1 order-lg-2 "></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
