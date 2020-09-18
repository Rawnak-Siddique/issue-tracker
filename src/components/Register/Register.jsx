import React from "react";
import "./Register.css";
import NavBar from "../NavBar/NavBar";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <NavBar></NavBar>
      <section className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 col-lg-8 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h2 className="my-3">
                    Log into your account and continue your work.
                  </h2>
                </div>
                <div className="col-md-6 col-lg-4 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <form className="my-3">
                    <div className="form-group">
                      <label for="exampleInputEmail1">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                      />
                      <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                      </small>
                    </div>
                    <div className="form-group">
                      <label for="exampleInputPassword1">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h2 className="my-3">
                    Start your new project by filling up the form that pops up
                    after clicking the button below.
                  </h2>
                  <NavLink
                    to="/CreateProject"
                    id="callCreate"
                    className="btn btn-primary"
                  >
                    Create your
                  </NavLink>
                </div>
                <div className="col-md-6 col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h2 className="my-3">
                    Start your new project by filling up the form that pops up
                    after clicking the button below.
                  </h2>
                  <NavLink
                    to="/JoinProject"
                    id="callCreate"
                    className="btn btn-primary"
                  >
                    Join others
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
