import "./App.css";
import Header from './components/shared/Header/Header'
import Footer from './components/shared/Footer/Footer'
import Home from "../src/pages/Home/Home";
import TaskView from "../src/pages/TaskView/TaskView";
import EditTask from "../src/pages/EditTask/EditTask";
import Registration from "../src/pages/Registration/Registration";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="app">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/registration" element={<Registration/>} />
        <Route path="/taskview/:id" element={<TaskView/>} />
        <Route path="/edit/:id" element={<EditTask/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
