import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import adminServices from "../services/adminServices";
import "../css/bootstrap-custom.css";
import "../css/demo.css";
import "../css/animate.min.css";

class Login extends React.Component {
  state = {
    loginForm: {}
  };
  handleInputChange = e => {
    let loginForm = { ...this.state.loginForm };
    loginForm[e.target.name] = e.target.value;
    this.setState({ loginForm });
  };
  handleLoginClick = () => {
    console.log(this.state.loginForm);
    let payload = this.state.loginForm;
    adminServices.adminLogIn(payload, this.onSuccess, this.onError);
  };
  onSuccess = data => {
    sessionStorage.userId = data.data.Id;
    sessionStorage.userEmail = data.data.Email;
    this.props.history.push("/managejobs");
    this.props.setUser(sessionStorage.userEmail);
  };
  onError = () => {
    alert("Invalid username or password");
    console.log("error");
  };
  render() {
    return (
      <div className="container">
        <div className="row wow slideInUp">
          <div className="col-lg-12 ">
            <div className="card h-100">
              <div className="card-img-top" />
              <div className="card-body">
                <h1>Login</h1>
                <div className="form-group">
                  <label className="sr-only form-control-label">Email</label>
                  <div className="mx-auto col-sm-10">
                    <input
                      onChange={this.handleInputChange}
                      name="email"
                      type="text"
                      className="form-control"
                      id="loginEmail"
                      placeholder="email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="mx-auto col-sm-10">
                    <input
                      name="password"
                      onChange={this.handleInputChange}
                      type="password"
                      className="form-control"
                      id="loginPassword"
                      placeholder="password"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="mx-auto col-sm-10 pb-3 pt-2">
                    <button
                      id="loginButton"
                      type="button"
                      className="btn btn-outline-secondary btn-lg btn-block"
                      onClick={this.handleLoginClick}
                    >
                      Sign-in
                    </button>
                  </div>
                </div>
                {/* <ul className="list-inline text-center">
                          <li className="list-inline-item px-3"><a href="" title="Twitter"><i className="display-3 ion-social-twitter-outline"></i></a>&#xA0; </li>
                          <li className="list-inline-item px-3"><a href="" title="Google"><i className="display-3 ion-social-googleplus-outline"></i></a>&#xA0; </li>
                          <li className="list-inline-item px-3"><a href="" title="Facebook"><i className="display-3 ion-social-facebook-outline"></i></a></li>
                      </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    setUserRoles: userRoles =>
      dispatch({
        type: "SET_USERROLES",
        userRoles
      }),
    setUser: user =>
      dispatch({
        type: "SET_USER",
        user
      })
  };
}

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Login)
);
