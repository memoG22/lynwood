import React from "react";
import jobServices from "../services/jobService";
import "../css/bootstrap-custom.css";
import "../css/demo.css";
import "../css/LynwoodCss.module.css";

class AddJobForm extends React.Component {
  state = {
    jobForm: {}
  };
  handleInputChange = e => {
    let jobForm = { ...this.state.jobForm };
    let value =
      e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
    jobForm[e.target.name] = value;
    this.setState({ jobForm });
  };
  handleSubmitClick = () => {
    if (sessionStorage.length === 0) {
      alert("YOU CAN'T DO THAT!");
      return;
    }
    let payload = this.state.jobForm;
    console.log(this.state.jobForm);
    jobServices.addJob(payload, this.onSuccess, this.onError);
  };
  onSuccess = data => {
    console.log(data);
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

  render() {
    return (
      <div className="container">
        <button className="btn btn-info" onClick={this.handleBackButton}>
          Back
        </button>
        <h1>Add job form</h1>
        <div>
          <div className="form-group row">
            <label className="col-lg-3 col-form-label form-control-label">
              Title
            </label>
            <div className="col-lg-9">
              <input
                onChange={this.handleInputChange}
                name="title"
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
                name="description"
                className="form-control"
                type="text"
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
                name="location"
                className="form-control"
                type="email"
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
                name="department"
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
                name="jobType"
                className="form-control"
                type="text"
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
                name="salary"
                className="form-control"
                type="text"
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
                name="jobNumber"
                className="form-control"
                type="text"
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
                name="closing"
                className="form-control"
                type="text"
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
                name="url"
                className="form-control"
                type="text"
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
                onClick={this.handleSubmitClick}
                type="button"
                className="btn btn-primary"
                value="Save Changes"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AddJobForm;
