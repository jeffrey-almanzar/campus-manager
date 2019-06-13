
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
    //console.log(...state.students);
   switch(action.type){
       case 'ADD_STUDENT':
           return {students: [{
               name: action.payload}, ...state.students]}
        case "DELETE_STUDENT":
            console.log(action.payload)
            return {students: state.students.filter((student)=>{
                return !(action.payload == student.name)
            })}

        case 'STUDENT_CLICKED':
            console.log(action.payload)
        return state
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
        },

        {
            campusName:"City College",
            campusStudents:[
                {
                    name:"Ismael Almanzar",
                    "gpa": "3.0",
                    "url":"",
                    campus:"City College"
                },
        
                {
                    name:"Jose Peres",
                    "gpa": "3.8",
                    "url":"",
                    campus:"City College"
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
        case 'DELETE_CAMPUS':
            console.log(action.payload)
            return {campuses: state.campuses.filter((campus)=>{
                return !(campus.campusName ==action.payload)
            })}
        default:
            return state;
   }
}
