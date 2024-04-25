import './App.scss'
import {BrowserRouter as Router , Routes, Route} from "react-router-dom"
import Home from "./component/Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Home/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
