import React from "react";
import jobServices from "../services/jobService";

class EditJobForm extends React.Component {
  state = {
    jobForm: {}
  };
  componentDidMount() {
    this.getCurrentJob();
  }

  getCurrentJob = () => {
    let id = this.props.match.params.jobId;
    jobServices.getJobById(id, this.onSuccess, this.onError);
  };
  handleInputChange = e => {
    let jobForm = { ...this.state.jobForm };
    jobForm[e.target.name] = e.target.value;
    this.setState({ jobForm });
  };
  handleEditClick = () => {
    if (sessionStorage.length === 0) {
      alert("YOU CAN'T DO THAT!");
      return;
    }
    let payload = this.state.jobForm;
    console.log(this.state.jobForm);
    jobServices.editJob(payload, this.onEditSuccess, this.onError);
  };
  onSuccess = data => {
    let jobForm = { ...this.state.jobForm };
    jobForm = data.data[0];
    this.setState({ jobForm });
    console.log(jobForm);
  };
  onEditSuccess = data => {
    let jobForm = { ...this.state.jobForm };
    jobForm = data.data[0];
    this.setState({ jobForm });
    console.log(jobForm);
    alert("Your update was successful");
    this.props.history.push("/managejobs");
  };
  onError = () => {
    console.log("error");
  };
  handleCancelClick = () => {
    if (window.confirm("are you sure you want to cancel?")) {
      this.props.history.push("/managejobs");
    } else {
      console.log("ok");
    }
  };
  handleBackButton = () => {
    this.props.history.push("/managejobs");
  };
  handleDeleteClick = () => {
    if (sessionStorage.length === 0) {
      alert("YOU CAN'T DO THAT!");
      return;
    }
    if (window.confirm("Are you sure you want to delete this job post?")) {
      let id = this.props.match.params.jobId;
      jobServices.deleteJob(id, this.onDeleteSuccess, this.onDeleteError);
    }
  };
  onDeleteSuccess = () => {
    alert("You have successfully deleted this post");
    this.props.history.push("/managejobs");
  };
  onDeleteError = () => {
    alert("Ooops! Something went wrong while trying to delete");
  };
  render() {
    return (
      <div className="container">
        <button className="btn btn-info" onClick={this.handleBackButton}>
          Back
        </button>
        {this.state.jobForm && (
          <div>
            <h1>Edit job form</h1>
            <div>
              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label">
                  Title
                </label>
                <div className="col-lg-9">
                  <input
                    value={this.state.jobForm.Title}
                    onChange={this.handleInputChange}
                    name="Title"
                    className="form-control"
                    type="text"
                    placeholder="Title"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label">
                  Description
                </label>
                <div className="col-lg-9">
                  <input
                    onChange={this.handleInputChange}
                    placeholder="Description"
                    name="Description"
                    className="form-control"
                    type="text"
                    value={this.state.jobForm.Description}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label">
                  Location
                </label>
                <div className="col-lg-9">
                  <input
                    onChange={this.handleInputChange}
                    placeholder="Location"
                    name="Location"
                    className="form-control"
                    type="email"
                    value={this.state.jobForm.Location}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label">
                  Department
                </label>
                <div className="col-lg-9">
                  <input
                    onChange={this.handleInputChange}
                    placeholder="Department"
                    className="form-control"
                    type="text"
                    name="Department"
                    value={this.state.jobForm.Department}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label">
                  Job-Type
                </label>
                <div className="col-lg-9">
                  <input
                    onChange={this.handleInputChange}
                    placeholder="Job Type"
                    name="JobType"
                    className="form-control"
                    type="text"
                    value={this.state.jobForm.JobType}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label">
                  Salary
                </label>
                <div className="col-lg-9">
                  <input
                    onChange={this.handleInputChange}
                    placeholder="Salary"
                    name="Salary"
                    className="form-control"
                    type="text"
                    value={this.state.jobForm.Salary}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label">
                  Job Number
                </label>
                <div className="col-lg-9">
                  <input
                    onChange={this.handleInputChange}
                    placeholder="Job Number"
                    name="JobNumber"
                    className="form-control"
                    type="text"
                    value={this.state.jobForm.JobNumber}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label">
                  Closing
                </label>
                <div className="col-lg-9">
                  <input
                    onChange={this.handleInputChange}
                    placeholder="Closing Date"
                    name="Closing"
                    className="form-control"
                    type="text"
                    value={this.state.jobForm.Closing}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label">
                  Url
                </label>
                <div className="col-lg-9">
                  <input
                    onChange={this.handleInputChange}
                    placeholder="Url"
                    name="Url"
                    className="form-control"
                    type="text"
                    value={this.state.jobForm.Url}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label">
                  Tags
                </label>
                <div className="col-lg-9">
                  <input
                    onChange={this.handleInputChange}
                    placeholder="Tags"
                    name="tags"
                    type="text"
                  />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label" />
                <div className="col-lg-9">
                  <button
                    onClick={this.handleCancelClick}
                    type="button"
                    className="btn btn-secondary"
                    value="Cancel"
                  >
                    Close
                  </button>
                  <button
                    onClick={this.handleEditClick}
                    type="button"
                    className="btn btn-primary"
                    value="Save Changes"
                  >
                    Edit
                  </button>
                  <button
                    style={{ backgroundColor: "red" }}
                    onClick={this.handleDeleteClick}
                    type="button"
                    className="btn btn-primary"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default EditJobForm;
