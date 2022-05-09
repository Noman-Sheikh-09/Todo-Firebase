import React from "react";
import { useState } from "react";
export default function UseMyday() {
  const [addTask, setAddTask] = useState('');
  return {
    addTask,
    setAddTask,
  }
};
