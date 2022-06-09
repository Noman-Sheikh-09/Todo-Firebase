import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Routing from "./routing/Routing";
import { doGetActiveUser } from "./store/actions/authAction/AuthAction";
function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(doGetActiveUser());
  }, []);

  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default App;
