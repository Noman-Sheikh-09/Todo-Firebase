
import {combineReducers} from 'redux'
import AddReducer from './taskReducer/TaskReducer';

const RootReducer = combineReducers({
    AddReducer,
})

export default RootReducer; 