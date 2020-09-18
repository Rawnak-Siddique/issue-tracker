import React, { useState } from "react";
import "./JoiProject.css";
import NavBar from "../NavBar/NavBar";

const JoinProject = () => {
  const [projectName, setProjectName] = useState("");
  const [projectId, setProjectId] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <NavBar></NavBar>
      <section>
        <h1>Join a project and help them out</h1>
        <div className="row">
          <div className="col-md-6 col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
            <input
              onChange={(e) => setProjectName(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Project name"
            />
          </div>
          <div className="col-md-6 col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
            <input
              onChange={(e) => setProjectId(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Project Id"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
            <input
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              className="form-control"
              placeholder="User Name"
            />
          </div>
          <div className="col-md-6 col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
            <label for="exampleFormControlInput1">Email address</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="something@gmail.com"
            />
          </div>
          <div className="col-md-6 col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
            <label for="exampleInputPassword1">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
        </div>
        <div>
          <button type="submit" id="createBtn" className="btn btn-primary">
            Submit
          </button>
        </div>
      </section>
    </div>
  );
};

export default JoinProject;
