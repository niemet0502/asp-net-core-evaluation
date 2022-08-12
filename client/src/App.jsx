import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SignIn from "./pages/Auth/SignIn";
import List from "./pages/Users/List";
import { getStoredAuthToken } from "./utils/currentUser";
 
function App() {
  return (
    <div className="App">
      <div className="page-wrapper null compact-wrapper">
        <Navbar />
        <Sidebar />
        <Routes>
         {getStoredAuthToken() && <Route path="/employe" element={<List />} />} 
          <Route path="/" element={<SignIn />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
