// import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";

//ℹ️ import pages
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LogInPage from "./pages/LogInPage";

//ℹ️ import components
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/login" element={<LogInPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
