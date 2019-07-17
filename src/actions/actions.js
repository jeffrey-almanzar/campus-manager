import axios from 'axios';

export const addStudent = (event) =>{
    return {
        type: 'ADD_STUDENT',
        payload: event
    }
}

export const loadStudents = (event) =>{
    return{
        type:'LOAD STUDENTS',
        payload: event
    }
}

export const loadCampuses = (event) =>{
    return{
        type:'LOAD CAMPUSES',
        payload: event
    }
}

export const editStudent = (event) =>{
    return {
        type:"EDIT_STUDENT",
        payload: event
    }
}

export const addCampus = (event) =>{
    return {
        type:"ADD_CAMPUS",
        payload:event
    }
}

export const deleteCampus = (event)=>{
    return {
        type:"DELETE_CAMPUS",
        payload: event
    }
}

export const reRender = (event) =>{
    return {
        type:"RE_RENDER"
    }
}
export const deleteStudent = (event) =>{
    return {
        type: "DELETE_STUDENT",
        payload: event
    }
}

export const studentClicked = (student) =>{
    return {
        type:"STUDENT_CLICKED",
        payload:student
    }
}

export const addStudentOnCampus = (student) =>{
    return {
        type:"ADD_STUDENT_TO_CAMPUS",
        payload: student
    }
}

export const editCampus = (event) =>{
    return {
        type:"EDIT_CAMPUS",
        payload: event
    }
}

export const deleteStudentFromCampus = (event) =>{
    return {
        type:"DELETE_STUDENT_FROM_CAMPUS",
        payload: event
    }
}

//redux-thunk
export const requestCampuses =() => (dispatch) =>{
  
    dispatch({type:"REQUEST_CHANGES_PENDING"});
    axios.get('https://desolate-hollows-41655.herokuapp.com/campuses')
        .then((response)=> {
           
            dispatch({type:"REQUEST_CHANGES_SUCCESS", payload:response.data.campuses})
    
        })
        .catch(function (error) {
             dispatch({type:"REQUEST_CHANGES_FAILED", payload:error})
        });    
    
}