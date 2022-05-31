import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { doLogin } from "../../store/actions/authAction/AuthAction";
export default function UseLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // console.log(email,password);
  const navigate =useNavigate();
  const dispatch = useDispatch();
  const loginHander = () => {
    let userData = {
      email:email,
      password:password,
    }
    dispatch(doLogin(userData, navigate))
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    loginHander,
  };
}
