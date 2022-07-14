import {
  FETCH_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  ADD_TASK,
} from "../../actions/ActionTypes";
const initialState = {
  tasks: [],
};

export const TaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASK:
      // console.log("reducer data", action.payload);
      return {
        ...state,
        tasks: action.payload,
      };

    case ADD_TASK:
      const newTask = [...state.tasks, action.payload];
      console.log("reducer data", action.payload);
      return {
        ...state,
        tasks: newTask,
      };

    case DELETE_TASK:
      const delTask = state.tasks.filter(
        (item) => item.docID !== action.payload
      );
      console.log("reducer data", action.payload);
      return {
        ...state,
        tasks: delTask,
      };

      case UPDATE_TASK:
      let updateTask = state.tasks.map((item) =>{
          if(item.docID === action.payload.docID) {
          return action.payload.data;
          } 
          else{
            return item;
          }
        }
      );
      return {
        ...state,
        tasks: updateTask,
      };

    default:
      return state;
  }
};
