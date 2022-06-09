import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../store/actions/taskAction/TaskAction";
export default function UseImportant() {
  const [task, setAddTask] = useState('');
  // console.log(addTask);
const dispatch = useDispatch();

const onSubmitHandler =()=>{
  let userTask ={
task : task ,
  }
  dispatch(addTask(userTask));
setAddTask("");
}
  return {
    task,
    setAddTask,
    onSubmitHandler,
  }
};
