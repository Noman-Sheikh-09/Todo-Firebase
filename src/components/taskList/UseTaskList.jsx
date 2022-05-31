import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchTask } from '../../store/actions/taskAction/TaskAction';
export default function UseTaskList() {
    const dispatch = useDispatch();
    const tasks = useSelector((state)=>state.TaskReducer.tasks)

useEffect(() => {
    dispatch(fetchTask())
}, [])




  return{
    tasks,
  }
}
