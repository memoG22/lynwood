import React from "react";
import image1 from "../assets/images/office6.jpg";
import "../css/bootstrap-custom.css";
import "../css/demo.css";
import "../css/LynwoodCss.module.css";

class JobComp extends React.Component {
  render() {
    return (
      <div>
        <div key={this.props.job.Id}>
          <div className="inc_" data-template="./partials/p_header.html" />
          <div className="my-4">
            <div className=" mt-2 px-0">
              <div
                className="inc_"
                data-template="./partials/p_carousel_slider.html"
              />{" "}
            </div>
            <div className=" mt-4">
              <div className="row">
                <div
                  id="blog-content"
                  className="col-md-8 flex-first flex-md-last"
                >
                  <div className="row">
                    <div className="col-12">
                      <div className="card card-default mb-3 pb-3 wow fadeIn">
                        <a href="./">
                          <img
                            src={image1}
                            className="card-img-top img-fluid mb-2"
                            alt="unavailable"
                          />
                        </a>
                        <h2>
                          <div> {this.props.job.Title}</div>
                        </h2>
                        <ul className="list-inline">
                          <li className="list-inline-item tag float-right font-weight-normal">
                            <i className="ion-ios-pricetag-outline" />
                            <span>
                              <a
                                className="badge badge-dark badge-pill"
                                href="./"
                              >
                                {this.props.job.Title}
                                {/* Accounting */}
                              </a>
                            </span>
                            <span>
                              <a
                                className="badge badge-dark badge-pill"
                                href="./"
                              >
                                Finance
                              </a>
                            </span>
                          </li>
                        </ul>
                        <p>
                          Under the general direction of the Finance Director,
                          provides the highest level of technical and complex
                          financial support in the accounting functions to the
                          City and the Successor Agency; and performs related
                          duties as required...
                          <a
                            href="https://www.governmentjobs.com/careers/lynwoodca/jobs/2342178/principal-accountant-open-closed-promotional?pagetype=jobOpportunitiesJobs"
                            className="link"
                          >
                            Read More
                          </a>
                        </p>
                        <a href={this.props.job.Url}>
                          {" "}
                          <button
                            style={{
                              width: "100%",
                              color: "white",
                              cursor: "pointer",
                              backgroundColor: "black"
                            }}
                          >
                            Apply for this position
                          </button>
                        </a>
                      </div>
                    </div>
                    <div className="col-12">
                      <ul className="list-inline text-right">
                        <li className="list-inline-item display-4">
                          <a
                            rel="nofollow"
                            href="//twitter.com/ThemesGuide"
                            title="Twitter"
                          >
                            <i className="ion-social-twitter-outline" />
                          </a>
                          &#xA0;
                        </li>
                        <li className="list-inline-item display-4">
                          <a rel="nofollow" href="./" title="">
                            <i className="ion-social-instagram-outline" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div id="blog-sidebar" className="col-md-4">
                  <div className="card-img-top wow fadeIn" />

                  <div className="bg-alt p-3">
                    <div className="latest-posts mt-2">
                      <h2>{this.props.job.Title}</h2>
                    </div>
                    <hr />
                    <div className="blog-categories">
                      <h2>About</h2>
                      <ul className="nav flex-column text-secondary">
                        <li className="nav-item">
                          <p>
                            Location: <b>{this.props.job.Location}</b>
                          </p>
                        </li>
                        <li className="nav-item">
                          <p>
                            Department: <b>{this.props.job.Department}</b>
                          </p>
                        </li>
                        <li className="nav-item">
                          <p>
                            Job Type: <b>{this.props.job.JobType}</b>
                          </p>
                        </li>
                        <li className="nav-item">
                          <p>
                            Salary: <b> ${this.props.job.Salary}</b>
                          </p>
                        </li>
                        <li className="nav-item">
                          <p>
                            Job Number: <b>{this.props.job.JobNumber}</b>
                          </p>
                        </li>
                        <li className="nav-item">
                          <p>
                            Closing: <b>{this.props.job.Closing}</b>
                          </p>
                        </li>
                      </ul>
                    </div>
                    <hr />
                    <div className="blog-tags">
                      <h2 className="bg-alt">Tags</h2>
                      <div className="text-uppercase font-weight-normal">
                        <a className="badge badge-dark badge-pill" href="./">
                          Finance
                        </a>
                        <a className="badge badge-dark badge-pill" href="./">
                          Accounting
                        </a>
                        <a className="badge badge-dark badge-pill" href="./">
                          Administration
                        </a>
                      </div>
                    </div>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="inc_" data-template="./partials/p_footer.html" />
        </div>
      </div>
    );
  }
}

export default JobComp;
