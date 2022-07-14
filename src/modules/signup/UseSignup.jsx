import { useState } from "react";
import { useDispatch } from "react-redux";
import { doSignup } from "../../store/actions/authAction/AuthAction";
import { useNavigate } from 'react-router-dom';


export default function UseSignup() {
  const [fname, setFirstName] = useState("");
  const [lname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigate = useNavigate();
  const dispatch = useDispatch();

  const signupHandler = () => {
    let newUser = {
      fname: fname,
      lname: lname,
      email: email,
      password: password,
    };
    if (email !== "" && password !== "" && fname !== "" && lname !== "") {
      dispatch(doSignup(newUser,navigate));
      console.log("data in custom hook", newUser);
    } else {
      alert("All fields are required");
    }
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");

  };

    return [ 
      fname,
      setFirstName,
      lname,
      setLastName,
      email,
      setEmail,
      password,
      setPassword,
      signupHandler,
    ];
}
