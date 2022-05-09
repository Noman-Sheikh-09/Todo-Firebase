import { Paper, InputBase, Button, Icon } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'
import './InputStyle.css'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import UseInput from './UseInput'
export default function Input() {
    const{addTask, setAddTask}= UseInput();
    console.log(addTask);
  return (
    <Paper className='input-bg'>
        <InputBase  placeholder='Add Task Here' value={addTask} onChange={(e)=>setAddTask(e.target.value)} className="input-feild" />
       <Box className="task-icons">
       <div className="three-icons">
       <CalendarMonthIcon  className="three-icons" />
         <NotificationsNoneIcon className="three-icons" />
         <EventRepeatIcon className="three-icons" />
       </div>
         
       
        
       <Button className='add-btn'>Add</Button>

       </Box>
        
    </Paper>
  )
}
