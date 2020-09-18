import React, { useState } from "react";
import "./CreateProject.css";
import firebase from "../Firebase";
import NavBar from "../NavBar/NavBar";

const CreateProject = () => {
  const [projectName, setProjectName] = useState("");
  const [userName, setUserName] = useState("");
  const [emailName, setEmailName] = useState("");
  const [password, setPassword] = useState("");
  const [srsFile, setSrsFile] = useState("");
  const [srsUrl, setSrsUrl] = useState("");

  const AddFile = () => {
    let bucketName = "srsFile";
    let file = srsFile.files[0];
    let storageRef = firebase.storage.ref("${bucketName}/${file.name}");
    let uploadTask = storageRef.put(file);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, () => {
      let Url = uploadTask.snapshot.downloadURL;
      setSrsUrl = Url;
    });
  };

  const StoreData = (e) => {
    e.preventDefault();
    firebase
      .firestore()
      .collection("projects")
      .add({
        projectName,
        userName,
        srsUrl,
      })
      .then(() => {
        setProjectName("");
        setSrsUrl("");
      });
    firebase
      .firestore()
      .collection("user")
      .add({
        userName,
        emailName,
        password,
      })
      .then(() => {
        setUserName("");
        setEmailName("");
        password("");
      });
  };

  return (
    <div>
      <NavBar />
      <section>
        <h1>Create your own Project</h1>
        <form>
          <div className="row">
            <div className="col-md-6 col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
              <input
                onChange={(e) => setProjectName(e.target.value)}
                type="text"
                className="form-control "
                placeholder="Project Name"
              />
            </div>
            <div className="col-md-6 col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
              <input
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                className="form-control "
                placeholder="User Name"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
              <label for="exampleFormControlInput1">Email address</label>
              <input
                onChange={(e) => setEmailName(e.target.value)}
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
          <div className="row">
            <div className="form-group">
              <label for="exampleFormControlFile1">Select local srs file</label>
              <input
                onChange={(e) => setSrsFile(e.target.value)}
                type="file"
                className="form-control-file"
                id="exampleFormControlFile1"
              />
              <button
                onClick={AddFile}
                type="submit"
                id="createBtn"
                className="btn btn-primary"
              >
                Add file
              </button>
            </div>
          </div>
          <div>
            <button
              onClick={StoreData}
              type="submit"
              id="createBtn"
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default CreateProject;
