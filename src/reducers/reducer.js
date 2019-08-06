const initialCampusState = {
  campuses: []
};
const initialStudentState = {
  students: []
};

export const addStudent = (state = initialStudentState, action = {}) => {
  switch (action.type) {
    case "STUDENT_CLICKED":
      return state;
    default:
      return state;
  }
};

export const addCampus = (state = initialCampusState, action = {}) => {
  switch (action.type) {
    case "ADD_CAMPUS":
      return { campuses: [action.payload, ...state.campuses] };

    case "DELETE_CAMPUS":
      return {
        campuses: state.campuses.filter(campus => {
          return !(campus.campusName === action.payload);
        })
      };

    case "ADD_STUDENT_TO_CAMPUS":
      for (let i = 0; i < state.campuses.length; i++) {
        if (state.campuses[i].campusName === action.payload.campusName) {
          state.campuses[i].campusStudents.push(action.payload);
          break;
        }
      }
      return state;

    case "LOAD CAMPUSES":
      return { campuses: [...action.payload] };

    case "RE_RENDER":
      return { campuses: [...state.campuses] };

    case "EDIT_CAMPUS":
      for (let i = 0; i < state.campuses.length; i++) {
        if (
          state.campuses[i].campusName === action.payload.prevState.campusName
        ) {
          state.campuses[i] = action.payload.currentState;
          break;
        }
      }
      return state;

    case "DELETE_STUDENT_FROM_CAMPUS":
      let target = null;
      let campusStudents;
      let campusName;
      let img;
      let location;
      let description;
      let modifiedCampus;

      for (let i = 0; i < state.campuses.length; i++) {
        if (state.campuses[i].campusName === action.payload.campusName) {
          alert("Campus Found!!");
          target = i;

          campusName = state.campuses[i].campusName;
          img = state.campuses[i].img;
          location = state.campuses[i].location;
          description = state.campuses[i].description;

          campusStudents = state.campuses[i].campusStudents.filter(element => {
            return element.name !== action.payload.name;
          });

          modifiedCampus = {
            campusStudents,
            campusName,
            img,
            location,
            description
          };

          state.campuses[i] = modifiedCampus;
          break;
        }
      }
      return { campuses: [...state.campuses] };

    default:
      return state;
  }
};

const requestCampusesInitState = {
  campuses: [],
  isPending: true
};
export const requestCampuses = (
  state = requestCampusesInitState,
  action = {}
) => {
  switch (action.type) {
    case "REQUEST_CAMPUSES_SUCCESS":
      return { isPending: false, campuses: [...action.payload] };

    case "REQUEST_CAMPUSES_PENDING":
      return { isPending: true, campuses: [] };

    default:
      return state;
  }
};

const requestStudentsInitState = {
  students: [],
  isPending: true
};

export const requestStudents = (
  state = requestStudentsInitState,
  action = {}
) => {
  switch (action.type) {
    case "REQUEST_STUDENTS_SUCCESS":
      return { isPending: false, students: [...action.payload] };

    case "REQUEST_STUDENTS_PENDING":
      return { isPending: true, students: [] };

    default:
      return state;
  }
};
