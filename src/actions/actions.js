export const addStudent = (event) =>{
    return {
        type: 'ADD_STUDENT',
        payload: event
    }
}

export const addCampus = (event) =>{
    return {
        type:"ADD_CAMPUS",
        payload:event
    }
}