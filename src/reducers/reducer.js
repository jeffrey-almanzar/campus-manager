import axios from 'axios';

const initialCampusState = {
    campuses:[]
}
const initialStudentState ={
    students :[]
}



export const addStudent =(state= initialStudentState, action={})=>{
    //console.log(...state.students);
   switch(action.type){
       case 'ADD_STUDENT':
           console.log(action)
           return {students: [action.payload, ...state.students]}
        case "DELETE_STUDENT":
            console.log(action.payload)
            return {students: state.students.filter((student)=>{
                return !(action.payload == student.name)
            })}
        case 'EDIT_STUDENT':
            console.log(action.payload);
            for(let i=0; i<state.students.length; i++){
                if(state.students[i].name === action.payload.prevState.name){
                    state.students[i] = action.payload.currentState;
                    console.log("Replace "+state.students[i].name +" for "+ action.payload.currentState.name )
                    break;
                }
            }
            return state;

        case 'LOAD STUDENTS':
            console.log("From students load")
            console.log(action.payload)
            return {students: [...action.payload]}

      

        case 'STUDENT_CLICKED':
            console.log(action.payload)
        return state
        default:
            return state;
   }
}



export const addCampus =(state= initialCampusState, action={})=>{
  
   switch(action.type){
       case 'ADD_CAMPUS':
           return {campuses: [ action.payload , ...state.campuses]}

        case 'DELETE_CAMPUS':
            console.log(action.payload)
            return {campuses: state.campuses.filter((campus)=>{
                return !(campus.campusName ==action.payload)
            })}

        case 'ADD_STUDENT_TO_CAMPUS':
            
            for(let i=0; i<state.campuses.length; i++){
                if(state.campuses[i].campusName === action.payload.campusName){
                    state.campuses[i].campusStudents.push(action.payload);;
                    break;
                }

            }
            return state;

        case 'LOAD CAMPUSES':   
            return {campuses: [...action.payload]}

        case 'RE_RENDER':

            return {campuses: [...state.campuses]}

        case 'EDIT_CAMPUS':
            console.log(action.payload);
            for(let i=0; i<state.campuses.length; i++){
                if(state.campuses[i].campusName === action.payload.prevState.campusName){
                    state.campuses[i] = action.payload.currentState;
                    break;
                }
            }
            return state;

        case 'DELETE_STUDENT_FROM_CAMPUS':
            console.log(action.payload)
            let target = null;
            let  campusStudents ;
            let campusName;
            let img;
            let location;
            let description;
            let modifiedCampus;
            console.log("Deleting Student Campus before")
            console.log(state.campuses)

            for(let i=0; i<state.campuses.length; i++){
                if(state.campuses[i].campusName === action.payload.campusName){
                    alert("Campus Found!!")
                    target = i;

                    campusName = state.campuses[i].campusName;
                    img = state.campuses[i].img;
                    location = state.campuses[i].location;
                    description = state.campuses[i].description;
                     
                    campusStudents = state.campuses[i].campusStudents.filter((element)=>{  
                            return element.name != action.payload.name;
                    })

                    modifiedCampus = {
                         campusStudents,
                         campusName,
                         img,
                         location,
                         description
                    }

                    state.campuses[i] = modifiedCampus;
                    console.log("Campuses modified")
                    console.log(state.campuses)
                    // console.log("New modified campus")
                    // console.log(modifiedCampus)
                    break;

    
                }
            }
            return {campuses: [...state.campuses]}

        default:
            return state;
   }
}
