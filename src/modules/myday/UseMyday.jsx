import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask,deleteTask, fetchTask, updateTask } from "../../store/actions/taskAction/TaskAction";
import MenuItem from '@mui/material/MenuItem'


export default function UseMyday() {
  const [task, setAddTask] = useState('');
  const [flag, setFlag] = useState(false)
  const [id, setId] = useState("")
  // console.log(addTask);
const dispatch = useDispatch();
const tasks = useSelector((state)=>state.TaskReducer.tasks)

useEffect(() => {
dispatch(fetchTask())
},[])

const onSubmitHandler =()=>{
  
  let userTask ={
task : task ,
  }
  dispatch(addTask(userTask));
setAddTask("");
}

const ctaDeleteHandler=(docID)=>{

dispatch(deleteTask(docID))

}


const ctaUpdateHandler = (item) =>{
  setFlag(true)
setAddTask(item.task)
setId(item.docID)
};

const onClickUpdateHandler = ()=>{
  let userTask ={
    task : task ,
      }

      dispatch(updateTask(id,userTask ));
      setAddTask("");
  setFlag(false);

}


  return [
    task,
    setAddTask,
    onSubmitHandler,
    tasks,
    ctaDeleteHandler,
    ctaUpdateHandler,onClickUpdateHandler,
    flag,
    setFlag,

  ]
};
