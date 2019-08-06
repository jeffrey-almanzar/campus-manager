import React from "react";
import "../css/App.css";
import "../css/Cards.css";
import { Link } from "react-router-dom";
import defaultImage from "../img/profilePicture.jpg";
import axios from "axios";

class StudentCard extends React.Component {
  delete = () => {
    axios
      .delete(
        "https://desolate-hollows-41655.herokuapp.com/deleteStudent/" +
          this.props.name
      )
      .then(elem => {
        this.props.refreshStudents();
        axios
          .get("https://desolate-hollows-41655.herokuapp.com/students")
          .then(response => {
            try {
              //comming from show campus
              this.props.onLoadStudents(response.data.students);
              this.props.refresh();
            } catch (e) {
              this.props.onLoadStudents(response.data.students);
            }
          });
      });
  };

  render() {
    return (
      <div className="stu-card-container">
        <Link
          to={{
            pathname: "/showStudent",
            state: {
              name: this.props.name,
              url: this.props.url,
              students: this.props.students,
              campus: this.props.campusName,
              gpa: this.props.gpa,
              campuses: this.props.campuses
            }
          }}
        >
          <div id="student-img-container" className="student-img-container">
            <img src={this.props.url || defaultImage} alt="Check link" />
          </div>
        </Link>

        <Link
          to={{
            pathname: "/showStudent",
            state: {
              name: this.props.name,
              url: this.props.url,
              students: this.props.students,
              campus: this.props.campusName,
              gpa: this.props.gpa,
              campuses: this.props.campuses
            }
          }}
        >
          {" "}
          <h1 className="student-name">{this.props.name} </h1>
        </Link>

        <p className="student-campus">{this.props.campusName}</p>

        <Link
          to={{
            pathname: "/showStudent",
            state: {
              name: this.props.name,
              url: this.props.url,
              students: this.props.students,
              campus: this.props.campusName,
              gpa: this.props.gpa,
              campuses: this.props.campuses
            }
          }}
        >
          <button className="add-btn">View Student</button>
        </Link>
      </div>
    );
  }
}

export default StudentCard;
