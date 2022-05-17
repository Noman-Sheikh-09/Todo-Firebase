import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { useState } from 'react'
export default function UseInput() {
    const [addTask, setAddTask] = useState('')
  return{
      setAddTask,
      addTask
  }
}
