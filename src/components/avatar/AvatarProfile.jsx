import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import AvatarPhoto from '../../assets/avatar.jpg'
import './AvatarStyle.css'
export default function Avatar({closeAvatar}) {
  return (
    <div>
        <Box className="avatar-wrapper" boxShadow={0.5}>
          <Button variant='container' color='error' onClick={closeAvatar(false)}>X</Button>
            <img src={AvatarPhoto} alt="" className='avatar-photo' />
            <Typography variant="h5" color="initial">
               Noman Sheikh
               <Typography variant="body1" color="initial">
                    nomanshk310@gmail.com
                </Typography>
                <Button variant='outlined' color='secondary'>Log Out</Button>
            </Typography>
          
        </Box>
    </div>
  )
}
