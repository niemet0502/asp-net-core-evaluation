import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SignIn from "./pages/Auth/SignIn";
 
function App() {
  return (
    <div className="App">
      <div className="page-wrapper null compact-wrapper">
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/employe" element={<SignIn />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
