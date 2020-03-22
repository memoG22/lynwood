import React from "react";

import "../css/bootstrap-custom.css";
import "../css/demo.css";
import "../css/animate.min.css";

class Login extends React.Component {
  render() {
    return (
      <div className="container">
        <div class="col-lg-6 col-12 pb-3">
          <div class="card h-100">
            <div class="card-img-top" />
            <div class="card-body">
              <h1>Sign-up</h1>
              <ul class="list-inline text-center">
                <li class="list-inline-item px-3">
                  <a href="" title="Twitter">
                    <i class="display-3 ion-social-twitter-outline" />
                  </a>
                  &#xA0;
                </li>
                <li class="list-inline-item px-3">
                  <a href="" title="Google">
                    <i class="display-3 ion-social-googleplus-outline" />
                  </a>
                  &#xA0;
                </li>
                <li class="list-inline-item px-3">
                  <a href="" title="Facebook">
                    <i class="display-3 ion-social-facebook-outline" />
                  </a>
                </li>
              </ul>
              <form role="form">
                <div class="form-group">
                  <label
                    for="input2EmailForm"
                    class="sr-only form-control-label"
                  >
                    email
                  </label>
                  <div class="mx-auto col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      id="input2EmailForm"
                      placeholder="email"
                      required
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label
                    for="input2PasswordForm"
                    class="sr-only form-control-label"
                  >
                    password
                  </label>
                  <div class="mx-auto col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      id="input2PasswordForm"
                      placeholder="password"
                      required
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label
                    for="input2Password2Form"
                    class="sr-only form-control-label"
                  >
                    verify
                  </label>
                  <div class="mx-auto col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      id="input2PassConfirmForm"
                      placeholder="verify password"
                      required
                    />
                  </div>
                </div>
                <div class="form-group">
                  <div class="mx-auto col-sm-10 pb-3 pt-2">
                    <button
                      type="button"
                      id="registerButton"
                      class="btn btn-outline-secondary btn-lg btn-block"
                    >
                      Register
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
