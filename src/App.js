// import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";

//ℹ️ import pages
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LogInPage from "./pages/LogInPage";
import PortalPage from "./pages/PortalPage";
import ProfilePage from "./pages/ProfilePage";

//ℹ️ import components
import Navbar from "./components/Navbar";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <IsAnon>
              <HomePage />
            </IsAnon>
          }
        ></Route>
        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignUpPage />
            </IsAnon>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <IsAnon>
              <LogInPage />
            </IsAnon>
          }
        ></Route>
        <Route
          path="/portal"
          element={
            <IsPrivate>
              <PortalPage />
            </IsPrivate>
          }
        ></Route>
        <Route
          path="/profile"
          element={
            <IsPrivate>
              <ProfilePage />
            </IsPrivate>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
