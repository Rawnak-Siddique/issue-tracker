import React from "react";
import "./Home.css";
import NavBar from "../NavBar/NavBar";
import feont from "../Images/Cover.jpeg";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    Welcome to
                    <strong className="brand-name"> Name</strong>
                  </h1>
                  <h2 className="my-3">
                    help us help you to create dinamic Software in agile process
                    and build a comunity to promote honest communitacion in
                    Issue Tracking in software's lifecycle.
                  </h2>
                  <div className="mt-3">
                    <NavLink
                      to="/Register"
                      className="nav-link btn btn-outline-primary Join"
                    >
                      Join us
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={feont}
                    className="img-fluid"
                    alt="Cover.img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
