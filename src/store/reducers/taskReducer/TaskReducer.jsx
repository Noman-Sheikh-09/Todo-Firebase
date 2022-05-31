import {FETCH_TASK,DELETE_TASK, UPDATE_TASK,ADD_TASK, GET_ALL_TASK } from '../../actions/ActionTypes'

const initialState = {
    tasks : []
}

export const TaskReducer=(state=initialState, action)=>{
switch (action.type) {
    case FETCH_TASK:
        // console.log("reducer data", action.payload);
        return{
            ...state,
            tasks: action.payload
        }

        case ADD_TASK:
          const  newTask = [...state.tasks, action.payload]
            console.log("reducer data", action.payload);
            return{
                ...state,
                tasks: newTask
            }

    default:
      return state
}
}