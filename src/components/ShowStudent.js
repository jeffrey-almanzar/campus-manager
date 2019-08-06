import React from "react";
import "../css/App.css";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import CampusCard from "./CampusCard";
import axios from "axios";
import defaultImage from "../img/profilePicture.jpg";

class ShowStudent extends React.Component {
  constructor(props) {
    super(props);
    this.name = this.props.info.location.state.name;
    this.gpa = this.props.info.location.state.gpa;
    this.campus = this.props.info.location.state.campus;
    this.url = this.props.info.location.state.url;

    let allCampuses = this.props.info.location.state.campuses;

    this.campusCompleteInfo = null;

    for (let i = 0; i < allCampuses.length; i++) {
      if (allCampuses[i].campusName === this.campus) {
        this.campusCompleteInfo = allCampuses[i];
        break;
      }
    }
  }

  delete = e => {
    axios
      .delete(
        "https://desolate-hollows-41655.herokuapp.com/deleteStudent/" +
          this.name
      )
      .then(elem => {
        this.props.refreshStudents();
      });
    // this.props.delete(this.name);
  };

  render() {
    let campusInfo;
    if (this.campus) {
      try {
        //campus exits
        campusInfo = (
          <div>
            <h2 className="sub-heading">
              This student is registered in a campus
            </h2>
            <CampusCard
              preview={true}
              campusName={this.campusCompleteInfo.campusName}
              description={this.campusCompleteInfo.description}
              location={this.campusCompleteInfo.location}
              img={this.campusCompleteInfo.img}
              campusStudents={this.props.students}
              link="/showCampus"
            />
          </div>
        );
      } catch (e) {
        axios
          .put("https://desolate-hollows-41655.herokuapp.com/editStudent/1", {
            name: this.name,
            gpa: this.gpa,
            campus: "Unknown Campus",
            url: this.url,
            preVname: this.name
          })
          .then(function(response) {});
        campusInfo = (
          <div>
            <h2 className="sub-heading">
              This student is registered in a campus:
            </h2>
            <CampusCard
              preview={true}
              campusName="Unknown Campus"
              description="Not info available"
              location="Unknown"
              img=""
              campusStudents={[]}
              link="/showCampus"
            />
            {/* delete={this.props.delete} */}
          </div>
        );
      }
    } else {
      campusInfo = (
        <h2 className="sub-heading">
          This student is not registered in a campus.
        </h2>
      );
    }

    return (
      <div>
        <Navigation />
        <div className="show-student-wrapper">
          <h1 className="sh-student-title sub-heading">Show Student</h1>
          <div className="showStudent">
            <div className="student-img-container student-img-container-show show-student">
              <img src={this.url || defaultImage} alt="" />
            </div>

            <div className="student-info-container">
              <div>
                <h1>Name: {this.name} </h1>
                <p>GPA: {this.gpa}</p>
              </div>

              <div className="button2">
                <Link
                  to={{
                    pathname: "/editStudent",
                    state: {
                      name: this.name,
                      url: this.url,
                      gpa: this.gpa,
                      campusName: this.campus
                    }
                  }}
                >
                  <button className="add-btn show-c-bt">Edit</button>
                </Link>
                <Link to="/students">
                  {" "}
                  <button
                    className="delete-btn show-c-bt"
                    onClick={this.delete}
                  >
                    Delete
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {campusInfo}
        </div>
      </div>
    );
  }
}
export default ShowStudent;
