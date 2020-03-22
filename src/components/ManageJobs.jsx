import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Jobs from "./ManageJobComp";
import jobServices from "../services/jobService";
import adminServices from "../services/adminServices";

class ManageJobs extends React.Component {
  state = {
    jobs: [],
    pageIndex: 0,
    pageSize: 5
  };
  componentDidMount() {
    jobServices.jobsGetAll(
      this.state.pageIndex,
      this.state.pageSize,
      this.onSuccess,
      this.onError
    );
  }
  onSuccess = data => {
    console.log(data);
    let jobs = data.data.PagedItems;
    this.setState({ jobs });
  };
  onError = () => {
    console.log("error");
  };
  handleEditClick = job => {
    this.props.history.push("/editjob/" + job.Id);
  };
  handleHomeButton = () => {
    this.props.history.push("/hr");
  };
  handleAddJobClick = () => {
    this.props.history.push("/addjob");
  };

  handleLogoutClick = () => {
    adminServices.logout();
    alert("You are now logged out");
    sessionStorage.clear();
    this.props.history.push("/hr");

    console.log(sessionStorage);
  };

  render() {
    return (
      <div className="container">
        <button className="btn btn-danger" onClick={this.handleLogoutClick}>
          Logout
        </button>
        <button
          className="btn btn-primary"
          style={{ cursor: "pointer", color: "white", background: "black" }}
          onClick={this.handleAddJobClick}
        >
          Add new Job
        </button>

        <button className="btn btn-info" onClick={this.handleHomeButton}>
          Home
        </button>
        <div>
          <h1>Manage job posts</h1>
        </div>
        {this.state.jobs && (
          <div>
            <Jobs
              handleEditClick={this.handleEditClick}
              jobs={this.state.jobs}
            />
          </div>
        )}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { user: state.user };
}
export default withRouter(
  connect(
    mapStateToProps,
    null
  )(ManageJobs)
);
