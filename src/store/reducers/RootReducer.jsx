
import {combineReducers} from 'redux'
import { AuthReducer } from './authReducer/AuthReducer';
import { TaskReducer } from './taskReducer/TaskReducer';
const RootReducer = combineReducers({
    AuthReducer,
    TaskReducer,
    
})

export default RootReducer; 