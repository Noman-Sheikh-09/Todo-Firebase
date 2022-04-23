import Navbar from "./components/navbar/Navbar";
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Myday from "./modules/myday/Myday";
import Important from './modules/important/Important'
import Planning from './modules/planning/Planning'
import Tasks from './modules/tasks/Tasks'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Myday/>} />
          <Route path="/important" element={<Important/>} />
          <Route path="/planning" element={<Planning/>} />
          <Route path="/tasks" element={<Tasks/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
