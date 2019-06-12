
const initialStudentState ={
    students :[
        {
            name:"Jeffrey Almanzar",
            "gpa": "4.0",
            "url":"jeffreyalmanzar.com",
            campus:"Lehman College"
        },

        {
            name:"Asifa Khan",
            "gpa": "3.9",
            "url":"",
            campus:"Lehman College"
        }
    ]

    
}

export const addStudent =(state= initialStudentState, action={})=>{
    console.log(...state.students);
   switch(action.type){
       case 'ADD_STUDENT':
           return {students: [{
               name: action.payload}, ...state.students]}
        default:
            return state;
   }
}

const initialCampusState = {
    campuses:[
        {
            campusName:"Lehman College",
            campusStudents:[
                {
                    name:"Jeffrey Almanzar",
                    "gpa": "4.0",
                    "url":"jeffreyalmanzar.com",
                    campus:"Lehman College"
                },
        
                {
                    name:"Asifa Khan",
                    "gpa": "3.9",
                    "url":"",
                    campus:"Lehman College"
                }
            ]
        }
    ]
}

export const addCampus =(state= initialCampusState, action={})=>{
  
   switch(action.type){
       case 'ADD_CAMPUS':
           return {campuses: [
               { campusName: action.payload, campusStudents:[]}, ...state.campuses]}
        default:
            return state;
   }
}
