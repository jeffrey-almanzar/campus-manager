const initialCampusState = {
    campuses:[]
}
const initialStudentState ={
    students :[]
}

export const addStudent =(state= initialStudentState, action={})=>{
   switch(action.type){
      
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
                return !(campus.campusName ===action.payload)
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
                            return element.name !== action.payload.name;
                    })

                    modifiedCampus = {
                         campusStudents,
                         campusName,
                         img,
                         location,
                         description
                    }

                    state.campuses[i] = modifiedCampus;
                    break;

    
                }
            }
            return {campuses: [...state.campuses]}

        default:
            return state;
   }
}

const requestCampusesInitState= {
   campuses:[],
  
}
export const requestCampuses = (state= requestCampusesInitState, action={}) =>{
    switch(action.type){
       case "REQUEST_CAMPUSES_SUCCESS":
           console.log("campuses load");
        return {isPending:false, campuses:[...action.payload] };

       default:
           return state;
    }
}

const requestStudentsInitState= {
    students:[],
  
 }

export const requestStudents = (state= requestStudentsInitState, action={}) =>{
    switch(action.type){
    
       case "REQUEST_STUDENTS_SUCCESS":
          console.log("Refresh") 
        return {isPending:false, students:[...action.payload] };

       default:
           return state;
    }
}