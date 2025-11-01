import "./App.css";
import { Route, Routes } from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { useContext } from "react";
import { userDataContext } from "./context/UserContext";

function App() {
  const { userData } = useContext(userDataContext);
  return (
    <>
      <Navbar />
      {!userData ? (
        <Login />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      )}
    </>
  );
}

export default App;
