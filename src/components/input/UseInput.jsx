import React from 'react'
import { useState } from 'react'
export default function UseInput() {
    const [addTask, setAddTask] = useState('')
  return{
      setAddTask,
      addTask
  }
}
