import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <Outlet />
      </div>
    </>
  );
}
