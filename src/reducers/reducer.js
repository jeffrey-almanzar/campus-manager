const initialCampusState = {
    campuses:[
        {
            campusName:"Lehman College",
            location: '250 Bedford Park Blvd W The Bronx, NY 10468',
            description: "Lehman College is a senior college of the City University of New York in New York, United States. Founded in 1931 as the Bronx campus of Hunter College, the school became an independent college within CUNY in September 1967.",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSwhJxE9QqsclsZaZzu_jn1olfPS4jd_ZE61sGgVlkZN0oyRQHUg",
            campusStudents:[
                {
                    name:"Jeffrey Almanzar",
                    "gpa": "4.0",
                    "url":"https://bronxbroncos.com/images/2018/2/28/2018_BCC_BB_17_Jeffery_Almanzar.jpg?width=300",
                    campusName:"Lehman College"
                },
        
                {
                    name:"Asifa Khan",
                    "gpa": "3.9",
                    "url":"https://media.licdn.com/dms/image/C4D03AQGxHD7Rte3TLQ/profile-displayphoto-shrink_800_800/0?e=1565827200&v=beta&t=566EMNwsEbDTYjd1JLORorJuTeqFtroEZlDEQwpHze0",
                    campusName:"Lehman College"
                }
            ]
        },

        {
            campusName:"City College",
            location:"160 Convent Ave, New York, NY 10031",
            description:"The City College of the City University of New York is a public senior college of the City University of New York in New York City. Located in Hamilton Heights overlooking Harlem in Manhattan, City College's 35-acre Collegiate Gothic campus spans Convent Avenue from 130th to 141st Streets.",
            img:"",
            
            campusStudents:[
                {
                    name:"Ismael Almanzar",
                    "gpa": "3.0",
                    "url":"",
                    campusName:"City College"
                },
        
                {
                    name:"Jose Peres",
                    "gpa": "3.8",
                    "url":"",
                    campusName:"City College"
                }
            ]
        }
    ]
}
const initialStudentState ={
    students :[
        {
            name:"Jeffrey Almanzar",
            "gpa": "4.0",
            "url":"https://bronxbroncos.com/images/2018/2/28/2018_BCC_BB_17_Jeffery_Almanzar.jpg?width=300",
            campusName:"Lehman College"
        },

        {
            name:"Asifa Khan",
            "gpa": "3.9",
            "url":"https://media.licdn.com/dms/image/C4D03AQGxHD7Rte3TLQ/profile-displayphoto-shrink_800_800/0?e=1565827200&v=beta&t=566EMNwsEbDTYjd1JLORorJuTeqFtroEZlDEQwpHze0",
            campusName:"Lehman College"
        }
    ]

    
}

export const addStudent =(state= initialStudentState, action={})=>{
    //console.log(...state.students);
   switch(action.type){
       case 'ADD_STUDENT':
           console.log(action)
        //    {students: [action.payload, ...state.students]}
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
