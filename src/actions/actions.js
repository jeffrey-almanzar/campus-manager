import axios from "axios";

export const loadStudents = event => {
  return {
    type: "LOAD STUDENTS",
    payload: event
  };
};

export const loadCampuses = event => {
  return {
    type: "LOAD CAMPUSES",
    payload: event
  };
};

export const addCampus = event => {
  return {
    type: "ADD_CAMPUS",
    payload: event
  };
};

export const deleteCampus = event => {
  return {
    type: "DELETE_CAMPUS",
    payload: event
  };
};

export const reRender = event => {
  return {
    type: "RE_RENDER"
  };
};

export const studentClicked = student => {
  return {
    type: "STUDENT_CLICKED",
    payload: student
  };
};

export const addStudentOnCampus = student => {
  return {
    type: "ADD_STUDENT_TO_CAMPUS",
    payload: student
  };
};

export const editCampus = event => {
  return {
    type: "EDIT_CAMPUS",
    payload: event
  };
};

export const deleteStudentFromCampus = event => {
  return {
    type: "DELETE_STUDENT_FROM_CAMPUS",
    payload: event
  };
};

//redux-thunk
export const requestCampuses = () => dispatch => {
  dispatch({ type: "REQUEST_CAMPUSES_PENDING" });
  axios
    .get("https://desolate-hollows-41655.herokuapp.com/campuses")
    .then(response => {
      dispatch({
        type: "REQUEST_CAMPUSES_SUCCESS",
        payload: response.data.campuses
      });
    });
};

export const requestStudents = () => dispatch => {
  dispatch({ type: "REQUEST_STUDENTS_PENDING" });
  axios
    .get("https://desolate-hollows-41655.herokuapp.com/students")
    .then(response => {
      dispatch({
        type: "REQUEST_STUDENTS_SUCCESS",
        payload: response.data.students
      });
    });
};
