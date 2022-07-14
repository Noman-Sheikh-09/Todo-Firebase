import { db } from "../../../config/Firebase";
import { FETCH_TASK, DELETE_TASK, UPDATE_TASK, ADD_TASK } from "../ActionTypes";
import {toast} from 'react-toastify';

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
    console.log("error", error);
    toast.error(error)
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
    toast.success("Task Added!")

  } catch (error) {
    toast.error(error)

  }
};

// Delete 

export const deleteTask = (docID) => async (dispatch) => {
  try {
    await db.collection("Tasks").doc(docID).delete();
  
    dispatch({
      type: DELETE_TASK,
      payload: docID,
      
    });
    toast.success("Task Deleted!")

  } catch (error) {
    toast.error(error)
  }
}

export const updateTask = (id, userTask ) => async (dispatch) =>{


  try {
    const updatedTask = await db.collection("Tasks").doc(id).update(userTask)
    dispatch({
      type : UPDATE_TASK,
      // payload : data
      payload : {data:userTask, docID:id }
    })
    toast.success("Task Updated!")

  } catch (error) {

  toast.error(error)
  }
}
