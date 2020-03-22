import React, { Component } from "react";
import "./App.css";
import Careers from "./components/Careers";
import Hr from "./components/Hr";
import Login from "./components/Login";
import { Route, withRouter } from "react-router-dom";
import AddJobForm from "./components/AddJobForm";
import ManageJobs from "./components/ManageJobs";
import EditJobForm from "./components/EditJobForm";
import FormikAddJob from "./components/FormikAddJob";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Route exact path="/" component={Hr} />
          <Route exact path="/formik" component={FormikAddJob} />
          <Route exact path="/careers" component={Careers} />
          <Route exact path="/hr" component={Hr} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/addjob" component={AddJobForm} />
          <Route exect path="/managejobs" component={ManageJobs} />
          <Route exect path={"/editjob/:jobId(\\d+)"} component={EditJobForm} />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
