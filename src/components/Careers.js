import React from "react";
import jobServices from "../services/jobService";
import socialMediaService from "../services/socialMediaService";
import "../css/bootstrap-custom.css";
import "../css/demo.css";
import "../css/LynwoodCss.module.css";

class Blog extends React.Component {
  state = {
    isLoading: true,
    isTrue: false,
    showDocs: false,
    showImages: false,
    jobs: [],
    pageIndex: 0,
    pageSize: 5,
    instagramInfo: []
  };
  componentDidMount() {
    this.checkUserLogIn();
    this.getSocialMedia();
  }
  getSocialMedia = () => {
    socialMediaService.getSocialMedia(
      this.getSocialMediaSuccess,
      this.getError
    );
  };
  getSocialMediaSuccess = data => {
    let instagramData = data.data.data;
    let instagramInfo = this.state.instagramInfo.slice();
    for (let i = 0; i < 6; i++) {
      instagramInfo.push(instagramData[i]);
      this.setState({
        showImages: true,
        instagramInfo
      });
    }
  };
  checkUserLogIn = () => {
    if (sessionStorage.userId) {
      this.setState({ isTrue: true });
    }
  };
  getJobPosts = () => {
    jobServices.jobsGetAll(
      this.state.pageIndex,
      this.state.pageSize,
      this.getSuccess,
      this.getError
    );
  };
  getSuccess = data => {
    let jobs = data.data.PagedItems;
    this.setState({ jobs, isLoading: false });
  };
  getError = () => {
    console.log("error");
  };
  handleManageClick = () => {
    this.props.history.push("/managejobs");
  };
  handleHomeButton = () => {
    this.props.history.push("/hr");
  };
  handleViewDocs = () => {
    let showDocs = this.state.showDocs;
    this.setState({ showDocs: !showDocs });
  };

  render() {
    return (
      <div className="container">
        <div>
          <button
            onClick={this.handleHomeButton}
            className="btn btn-info animationLeft"
          >
            Home
          </button>
          {this.state.isTrue && (
            <button
              className="btn btn-primary"
              onClick={this.handleManageClick}
            >
              Manage Jobs
            </button>
          )}
        </div>
        <div className="row centerText">
          <div className="col-xl-12">
            <video
              controls
              title="lynwoodVideo"
              width="100%"
              height="400"
              src="https://lynwoodvideo2020.s3.amazonaws.com/Lynwood+LEAD-FINAL-Jan.10.2020.mp4"
            />
          </div>
        </div>

        <div className="row centerText">
          <div className="col-xl-12">
            <div className="card-img-top wow fadeIn" />

            <div className="benefitsContainer">
              <h1>Come Aboard!</h1>
              <p className="black-text">
                Join our city and make a difference in our community. Lynwood is
                a small progressive city that provides access to oustanding
                social, cultural, recreational, educational and economic
                opporutnities for residents and businesses.
              </p>
              <p className="black-text">
                The city provides its employees with exciting challenges and
                growth opporutnities.
              </p>
            </div>
          </div>
        </div>
        <br />
        <div className="col-xl-12">
          <a
            className="orangeText"
            onMouseEnter={() => {}}
            href="https://www.governmentjobs.com/careers/lynwoodca"
          >
            <h1>Discover All Open Career Opportunities At Lynwood Here</h1>
          </a>
        </div>
        <br />

        <div className="row centerText">
          <div className="col-xl-12">
            <div className="card-img-top wow fadeIn" />

            <div className="benefitsContainer">
              <h1>Great Benefits</h1>
              <p className="black-text">
                The city offers its employees competitive salaries and an
                attractive benefits package{" "}
              </p>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="benefitColumns">
              <i style={{ color: "red" }} className="fa fa-heartbeat fa-5x" />
              <h3>Group Benefit Plans</h3>
              <p className="black-text">
                Medical
                <br />
                Dental
                <br />
                Vision
                <br />
                Life Insurance
                <br />
                457 Deferred Compensation Plans
              </p>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="benefitColumns">
              <i
                style={{ color: "darkgoldenrod" }}
                className="fa fa-calendar fa-5x"
              />
              <h3>Time-Off</h3>
              <p className="black-text">
                12 Paid Holidays
                <br />
                Maternity &amp; Family Leave
                <br />
                4/10 Work Schedule (Fridays off)
                <br />
                10 Days of Vacation
                <br />6 Days of Personal Leave
                <br />
                12 Days of Sick Leave
              </p>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="benefitColumns">
              <i
                style={{ color: "#eacf10b5" }}
                className="fa fa-lightbulb-o fa-5x"
              />
              <h3>Professional Development</h3>
              <p className="black-text">
                Tuition Reimbursment
                <br />
                Succession Plan
                <br />
                Trainee Program
                <br />
                On-site Training
              </p>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="benefitsContainer">
              <i style={{ color: "gold" }} className="fa fa-star-o fa-5x" />
              <h3>Employee Perks</h3>
              <p className="black-text">
                Wellness Fairs
                <br />
                Employee Assistance Plan
                <br />
                Credit Union
                <br />
                Discounts
              </p>
            </div>
          </div>
        </div>

        <br />
        <div className="col-xl-12">
          <a
            target="blank"
            className="orangeText"
            onMouseEnter={() => {}}
            href="https://www.instagram.com/mylynwoodca/"
          >
            <h1>Follow us on instagram</h1>
          </a>
        </div>
        <br />

        <div className="row centerText fiveMargin">
          {" "}
          {this.state.instagramInfo.map(image => (
            <div className="col-xl-4 bottomMargin" key={image.id}>
              <a target="blank" href="https://www.instagram.com/mylynwoodca/">
                <img
                  className="roundedBorder"
                  alt="Instagram Images"
                  height="200"
                  width="100%"
                  src={image.images.standard_resolution.url}
                />
              </a>
            </div>
          ))}
        </div>
        <div className="row fiveMargin ">
          <div className="col-xl-12 centerText orangeText">
            <h1>Additional Information</h1>
          </div>
        </div>

        <div className="row fiveMargin">
          <div className="col-xl-6 clickable">
            <div className="card-img-top wow fadeIn" />

            <div className="card-body bg-alt">
              <p className="black-text centerText">
                <a
                  target="blank"
                  href="http://lynwood.ca.us/human-resources/title-vi/"
                >
                  TITLE VI INFORMATION
                </a>
              </p>
            </div>
          </div>

          <div className="col-xl-6 clickable">
            <div className="card-img-top wow fadeIn" />

            <div className="card-body bg-alt">
              <p className="black-text centerText">
                <a target="blank" href="https://sco.ca.gov/">
                  EMPLOYEE COMPENSATION DATA
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="inc_" data-template="./partials/p_footer.html" />
      </div>
    );
  }
}
export default Blog;
