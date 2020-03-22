import React from "react";
import "../css/bootstrap-custom.css";
import "../css/demo.css";
import "../css/animate.min.css";
import "../css/LynwoodCss.module.css";
import image1 from "../assets/lynwoodImages/IMG_7699.jpg";
import image2 from "../assets/lynwoodImages/IMG_4556.jpg";
import image3 from "../assets/lynwoodImages/RM296153.jpg";
import image4 from "../assets/lynwoodImages/IMG_1541.jpg";

class Masonry extends React.Component {
  state = {
    isLoggedIn: false
  };
  componentDidMount() {
    this.checkUserLogIn();
  }
  handleCareersClick = () => {
    this.props.history.push("/careers");
  };
  handleLoginClick = () => {
    this.props.history.push("/login");
  };
  handleLogoutClick = () => {
    sessionStorage.clear();
    alert("You are now logged out");
    // this.props.history.push("/hr");
    window.location.reload();
    console.log(sessionStorage);
  };
  checkUserLogIn = () => {
    if (sessionStorage.userId) {
      this.setState({ isLoggedIn: true });
    }
  };
  handleManageClick = () => {
    this.props.history.push("/managejobs");
  };
  render() {
    return (
      <div className="container">
        <div>
          <div className="card-columns mt-2">
            <div className="card card-default mb-2">
              <img
                width="100%"
                style={{ height: "318px" }}
                src={image3}
                alt="Card"
                className="mx-auto img-fluid d-block"
              />
              <div className="card-img-top wow fadeIn" />

              <div className="card-body pt-2 pl-1">
                <h2> Cynthia Stafford </h2>
                <h6 className="small text-wide">
                  Director of Human Resources &amp; Risk Management
                </h6>
              </div>
              <div className="card-img-top wow fadeIn" />
            </div>

            <div className="card card-default mb-2">
              <div className="card-img-top wow fadeIn" />
              <div className="card-body pl-1 py-2">
                <h2 className="card-title">Department Overview</h2>
              </div>
              <div className="card-img-top wow fadeIn" />

              <div className="card card-default mb-2">
                <div className="card-body pt-2 pb-2 bg-alt">
                  <p className="black-text">
                    The purpose of HR is to manage the personnel needs of City
                    Departments and the environment in which they operate. We
                    provide strategic, administrative and operational service to
                    help achieve the City’s overall success, and to ensure the
                    organization is complaint with Federal, State and local laws
                    and regulations.
                  </p>
                </div>
              </div>
            </div>

            <div className="card card-default mb-2">
              <div className="card-img-top wow fadeIn" />

              <div className="card-body pt-2 pb-2 pl-1">
                <h2 className="card-title">
                  The Department also provides staff support and coordinates the
                  activities of the Personnel Commission{" "}
                </h2>
              </div>
              <div className="card-img-top wow fadeIn" />

              <div className="card card-default mb-2">
                <div className="card-body pt-2 pb-2 bg-alt">
                  <p className="black-text">
                    The Risk Management Division’s purpose is to identify and
                    minimize exposures that could result in financial loss to
                    the City. Risk Management is responsible for the
                    administration of comprehensive loss prevention programs
                    that incorporate current practices and philosophies that are
                    most effective in preventing injuries, vehicular collisions,
                    liabilities, and damage to equipment and materials.
                  </p>
                </div>
              </div>
            </div>

            <div className="card card-default mb-2">
              <div className="card-img-top wow fadeIn">
                <img
                  style={{ cursor: "pointer" }}
                  src={image1}
                  alt="card"
                  className="mx-auto img-fluid d-block"
                  onClick={this.handleCareersClick}
                />
              </div>
              <div className="card-body py-2 pl-1">
                <h2 className="card-title" style={{ cursor: "pointer" }}>
                  <div onClick={this.handleCareersClick}>Careers</div>
                </h2>
              </div>
              <div className="card-img-top wow fadeIn" />
            </div>

            <div className="card card-default mb-2">
              <div className="card-img-top wow fadeIn" />

              <div className="card-body pt-2 pl-1">
                <h2>Team Members </h2>
              </div>
              <div className="card-img-top wow fadeIn" />

              <div className="card card-default mb-2">
                <div className="card-body pt-2 pb-2 bg-alt">
                  <p className="black-text">
                    <span>
                      <b>Cynthia Stafford, Human Resources Director</b>
                    </span>
                    <br />
                    <span>
                      <b>T:</b>(310)-603-0220, ext.221
                    </span>
                    <br />
                    <span>
                      <b>Email:</b>
                      <a href={"mailto:cstafford@lynwood.ca.us"}>
                        cstafford@lynwood.ca.us
                      </a>
                    </span>
                    <br />
                    <br />
                    <span>
                      <b>Sara Nazir, Risk & Safety Manager</b>
                    </span>
                    <br />
                    <span>
                      <b>T:</b>(310)-603-0220, ext.221{" "}
                    </span>
                    <span>
                      <b>Email:</b>
                      <a href="mailto:snazir@lynwood.ca.us">
                        snazir@lynwood.ca.us
                      </a>{" "}
                    </span>
                    <br />
                    <br />
                    <span>
                      <b>
                        Yolanda Delgadillo, Sr.Human Resources & Risk Analyst
                      </b>
                    </span>
                    <br />
                    <span>
                      <b>T:</b>(310)-603-0220, ext.221
                    </span>
                    <br />

                    <span>
                      <b>Email:</b>
                      <a href="mailto:ydelgadillo@lynwood.ca.us">
                        ydelgadillo@lynwood.ca.us
                      </a>{" "}
                    </span>
                    <br />
                    <br />
                    <span>
                      <b>Maria Salas, Human Resources & Risk Technician</b>
                    </span>
                    <br />
                    <span>
                      <b>T:</b>(310)-603-0220, ext.221
                    </span>
                    <br />

                    <span>
                      <b>Email:</b>
                      <a href="mailto:msalas@lynwood.ca.us">
                        msalas@lynwood.ca.us
                      </a>{" "}
                    </span>
                    <br />
                    <br />
                    <span>
                      <b>Annette Carillo, Office Assistant</b>
                    </span>
                    <br />
                    <span>
                      <b>T:</b>(310)-603-0220, ext.213
                    </span>
                    <br />

                    <span>
                      <b>Email:</b>
                      <a href="mailto:acarillo@lynwood.ca.us">
                        acarillo@lynwood.ca.us
                      </a>{" "}
                    </span>
                    <br />
                    <br />
                    <span>
                      <b>Human Resources Office</b>
                    </span>
                    <br />
                    <span>11330 Bullis Rd</span>
                    <br />
                    <span>Lynwood, CA 90262</span>
                    <br />
                    <span>
                      <b>T:</b>(310)-603-0220
                    </span>
                    <br />
                    <span>
                      <b>Email:</b>
                      <a href="mailto:careers@lynwood.ca.us">
                        careers@lynwood.ca.us
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="card-img-top">
              <img
                src={image4}
                alt="Unavailable"
                className="mx-auto img-fluid d-block"
              />
            </div>

            <div className="card card-default mb-2">
              <div className="card-img-top wow fadeIn">
                <img
                  src={image2}
                  alt="Unavailable"
                  className="mx-auto img-fluid d-block"
                />
              </div>

              <div className="card-body py-2 pl-1">
                <h2 className="card-title">Mission Statement</h2>
              </div>
              <div className="card-img-top wow fadeIn" />

              <div className="card card-default mb-2">
                <div className="card-body pt-2 pb-2 bg-alt">
                  <p className="black-text">
                    The Department of Human Resources provides full-range
                    hire-thru-retire services, with a dedicated focus on
                    recruiting, hiring, training and retaining high quality
                    personnel. We do this by managing top notch recruitment and
                    selection efforts, engaging, developing and leveraging
                    talent, minimizing risk, maintaining positive labor
                    relations, and achieving strategic HRD goals and objectives.
                  </p>
                </div>
              </div>

              <div className="card card-default mb-2">
                <div className="card-img-top wow fadeIn" />
                <div className="card-body pt-2 pl-1">
                  <h6 className="small text-wide">
                    <b>
                      The Human Resources Division facilitates the following
                      organizational functions and employee transactions:
                    </b>
                  </h6>
                </div>
                <div className="card-img-top wow fadeIn" />

                <div className="card-body pt-2 pb-2 bg-alt">
                  <div className="black-text href">
                    <ul>
                      <li>
                        <a
                          target="blank"
                          href={
                            "http://lynwood.ca.us/wp-content/uploads/2019/11/2020-Employee-Benefits-Guide.pdf"
                          }
                        >
                          {" "}
                          Employee Benefits
                        </a>
                        <br />
                      </li>{" "}
                      <li>
                        <a
                          href={"http://lynwood.ca.us/employee-home-page-2/"}
                          target="blank"
                        >
                          Employee and Labor Relations
                          <br />
                        </a>
                      </li>
                      <li>
                        <a
                          href={
                            "http://lynwood.ca.us/wp-content/uploads/2019/12/COL_LEAD-brochure-12-9-19_final_pages_1-20optimize.pdf"
                          }
                          target="blank"
                        >
                          Employee Training &amp; Development
                        </a>
                        <br />
                      </li>
                      <li>
                        classification and Compensation
                        <br />
                      </li>
                      <li>
                        Discipline and Grievances
                        <br />
                      </li>
                      <li>
                        Leave Program
                        <br />
                      </li>
                      <li>
                        Memoranda of Understanding Administration
                        <br />
                      </li>
                      <li>
                        Performance Evaluations
                        <br />
                      </li>
                      <li>
                        Policies &amp; Resolutions
                        <br />
                      </li>
                      <li>
                        <a
                          href={
                            "https://www.governmentjobs.com/careers/lynwoodca"
                          }
                          target="blank"
                        >
                          Recruitment &amp; Selection
                        </a>
                        <br />
                      </li>
                      <li>
                        <a
                          target="blank"
                          a
                          href={
                            "https://www.governmentjobs.com/careers/lynwoodca/classspecs"
                          }
                        >
                          Job Descriptions and
                        </a>{" "}
                        <a
                          href={
                            "http://lynwood.ca.us/wp-content/uploads/2020/01/Salary-Schedule-1-9-2020.pdf"
                          }
                          target="blank"
                        >
                          Salary Schedules
                        </a>
                      </li>
                      <li>
                        Open Recruitments (Full-Time and Temporary/Part-Time)
                        <br />
                      </li>
                      <li>
                        Promotional Recruitments
                        <br />
                      </li>
                      <li>
                        Federal and State employment law compliance
                        <br />
                      </li>
                      <li>
                        Other functions related to Human Resources
                        Administration
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Masonry;
