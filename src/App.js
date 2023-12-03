import React from 'react';
import Calculator from "./project2/Calculator.js";
import Clock from "./project4/Clock.js";
import LandingPage from "./project01";
import TodoApplication from "./project3/Todo.js";
import {HashRouter as Router,Routes,Route} from "react-router-dom"
function App(){
  return (
      <Router>
        <Routes>
          <Route  path='/' element={<LandingPage />} />
          <Route  path='/todo_application' element={<TodoApplication />} />
          <Route path='/clock' element={<Clock />} />
          <Route path='/calculator' element={<Calculator />} />
        </Routes>
      </Router>
  );
}
export default App;
