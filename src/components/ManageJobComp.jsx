import React from "react";
import "../css/bootstrap-custom.css";
import "../css/demo.css";
import "../css/animate.min.css";

class ManageJobComp extends React.Component {
  handleEditClick = job => {
    this.props.handleEditClick(job);
  };
  render() {
    return (
      <div className="col-md-12">
        {" "}
        <div className="table-responsive">
          <table className="table table-striped table-hover table-bordered">
            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Description</th>
                <th>Url</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {this.props.jobs.map(job => (
                <tr key={job.Id}>
                  <td>{job.Id}</td>
                  <td>{job.Title}</td>
                  <td>{job.Description}</td>
                  <td>{job.Url}</td>
                  <td>
                    <button
                      onClick={() => this.handleEditClick(job)}
                      className="btn btn-info"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ManageJobComp;
