import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import RootReducer from "../store/reducers/RootReducer";
const Store = createStore(RootReducer, applyMiddleware(thunk));

export default Store;

// const { v4: uuidv4 } = require('uuid');
// uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
