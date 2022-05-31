import React from 'react'
import { useDispatch } from 'react-redux'
import { doLogout } from '../../store/actions/authAction/AuthAction';
import { useNavigate } from 'react-router-dom';
export default function UseSidebar() {
const dispatch  = useDispatch();
const navigate = useNavigate();

const logoutHandler =()=>{
    dispatch(doLogout(navigate("/login")))
    }
  return {
    logoutHandler,
  }
}
