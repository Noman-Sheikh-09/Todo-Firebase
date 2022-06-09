import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { deleteTask, fetchTask } from '../../store/actions/taskAction/TaskAction';


export default function UseTaskList() {
    const dispatch = useDispatch();
    const tasks = useSelector((state)=>state.TaskReducer.tasks)

useEffect(() => {
    dispatch(fetchTask())
},[])

const ctaDeleteHandler=(docID)=>{
dispatch(deleteTask(docID))
}
const ctaUpdateHandler = () =>{

}

  return{
    tasks,
    ctaDeleteHandler,
    ctaUpdateHandler
  }
}
