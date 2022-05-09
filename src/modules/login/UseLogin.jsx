import React from 'react'
import { useState } from 'react'
export default function UseLogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  return {
      setEmail,
      setPassword,
      email,
      password,
     
  }
}
