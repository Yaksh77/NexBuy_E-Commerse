import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "/NexBuy.png";
import axios from "axios";
import { useContext } from "react";
import { authDataContext } from "../../context/AuthContext";
import { adminDataContext } from "../../context/AdminContext";

function Navbar() {
  const navigate = useNavigate();
  const { serverUrl } = useContext(authDataContext);
  const { getAdmin } = useContext(adminDataContext);
  const handleLogout = async () => {
    try {
      const response = await axios.get(`${serverUrl}/api/auth/logout`, {
        withCredentials: true,
      });
      navigate("/login");
    } catch (error) {
      console.log("Admin error : ", error);
    }
  };
  return (
    <div className="w-[100vw] h-[70px] bg-[#ecfafaec] z-10 fixed top-0 flex items-center justify-between px-[30px] shadow-md shadow-black">
      <div
        onClick={() => navigate("/")}
        className="w-[30%] flex items-center justify-start gap-[10px] cursor-pointer"
      >
        <img src={logo} alt="" className="w-[30px]" />
        <h1 className="text-[25px] text-black font-sans">NexBuy</h1>
      </div>
      <button
        onClick={handleLogout}
        className="text-[15px] hover:border-[2px] border-[#89daea] cursor-pointer bg-[#000000ca] py-[10px] px-[20px] rounded-2xl text-white"
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;
