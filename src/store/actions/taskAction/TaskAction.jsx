import { db } from "../../../config/Firebase";
import { FETCH_TASK, DELETE_TASK, UPDATE_TASK, ADD_TASK } from "../ActionTypes";

export const fetchTask = () => async (dispatch) => {
  try {
    const resValue = await db.collection("Tasks").get();
    const tasks = [];
    resValue.forEach((doc) => {
      tasks.push({ docID: doc.id, ...doc.data() });
    });
    console.log("data in action", tasks);
    dispatch({
      type: FETCH_TASK,
      payload: tasks,
    });
  } catch (error) {
    alert(error.message);
  }
};
// Add 
export const addTask = (data) => async (dispatch) => {
  try {
    await db.collection("Tasks").add(data);
    console.log("data in action", data);
    dispatch({
      type: ADD_TASK,
      payload: data,
      
    });
  } catch (error) {
    alert(error.message);
  }
};
