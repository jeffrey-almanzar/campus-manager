import React from "react";
import "../css/StudentRow.css";
import axios from "axios";
import defaultImage from "../img/profilePicture.jpg";

class StudentRow extends React.Component {
  deleteStudent = () => {
    //this.props.deleteStudent({name: this.props.name, campusName: this.props.campusName})
    axios
      .delete(
        "https://desolate-hollows-41655.herokuapp.com/deleteStudent/" +
          this.props.name
      )
      .then(elem => {
        axios
          .get("https://desolate-hollows-41655.herokuapp.com/students")
          .then(response => {
            this.props.onLoadStudents(response.data.students);
            this.props.refresh();
          })
          .catch(error => {
            alert("Error! try again");
          });
      });
  };

  render() {
    return (
      <div className="st-row-container">
        <div className="row-img">
          <img src={this.props.url || defaultImage} alt="" />
        </div>

        <div className="st-row-info-container">
          <div className="st-row-name-container">{this.props.name}</div>

          <div className="st-row-remove-container">
            <button className="delete-btn" onClick={this.deleteStudent}>
              remove from campus
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentRow;
