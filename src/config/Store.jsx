import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import logger from "redux-logger";
import RootReducer from "../store/reducers/RootReducer";
const middleware = [thunk];

if (process.env.NODE_ENV === "development") {
    middleware.push(logger);
}
const Store = createStore(RootReducer, applyMiddleware(...middleware)) ;

export default Store;

// const { v4: uuidv4 } = require('uuid');
// uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
