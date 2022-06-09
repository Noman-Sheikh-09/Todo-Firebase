import { useState } from "react";
import { useDispatch } from "react-redux";
import { doSignup } from "../../store/actions/authAction/AuthAction";

export default function UseSignup() {
  const [fname, setFirstName] = useState("");
  const [lname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const signupHandler = () => {
    let newUser = {
      fname: fname,
      lname: lname,
      email: email,
      password: password,
    };
    if (email !== "" && password !== "" && fname !== "" && lname !== "") {
      dispatch(doSignup(newUser));
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
