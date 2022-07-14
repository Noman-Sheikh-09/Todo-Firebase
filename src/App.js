import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Routing from "./routing/Routing";
import { doGetActiveUser } from "./store/actions/authAction/AuthAction";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(doGetActiveUser());
  }, []);

  return (
    <div className="App">
      <ToastContainer />

      <Routing />
    </div>
  );
}

export default App;
