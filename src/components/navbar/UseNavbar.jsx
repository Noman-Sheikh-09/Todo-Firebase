import React from 'react'
import { useState } from 'react'
export default function UseNavbar() {
const [launchOpen, setLaunchOpen] = useState(false)
  return{
setLaunchOpen,
launchOpen
  }
}
