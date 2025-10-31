import React, { useContext, useState } from "react";
import logo from "/NexBuy.png";
import { FaSearch } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { userDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { authDataContext } from "../context/authContext";
import { IoHome } from "react-icons/io5";
import { MdCollectionsBookmark } from "react-icons/md";
import { MdContacts } from "react-icons/md";

function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const { getCurrentUser, userData } = useContext(userDataContext);
  const { serverUrl } = useContext(authDataContext);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.get(`${serverUrl}/api/auth/logout`, {
        withCredentials: true,
      });
      console.log(response.data);
      getCurrentUser();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-[100vw] h-[70px] bg-[#ecfafaec] z-10 fixed top-0 flex items-center justify-between px-[30px] shadow-md shadow-black">
      <div className="w-[20%] lg:w-[35%] flex items-center justify-start gap-[30px] ">
        <img src={logo} alt="" className="w-[40px] rounded-full" />
        <h1 className="text-[25px] text-black font-sans">NexBuy</h1>
      </div>
      <div className="w-[45%] lg:w-[35%] hidden md:flex">
        <ul className="flex items-center justify-center gap-[19px] text-white">
          <li className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl">
            Home
          </li>
          <li className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl">
            Collections
          </li>
          <li className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl">
            About
          </li>
          <li className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl">
            Contact
          </li>
        </ul>
      </div>
      <div className="w-[30%] flex items-center justify-end gap-[20px]">
        <FaSearch
          className="w-[30px] h-[30px] text-[#000000] cursor-pointer"
          onClick={() => setShowSearch((prev) => !prev)}
        />
        {!userData ? (
          <FaRegUserCircle
            className="w-[30px] h-[30px] text-[#000000] cursor-pointer"
            onClick={() => setShowProfile((prev) => !prev)}
          />
        ) : (
          <div
            className="w-[30px] h-[30px] bg-[#080808] text-white rounded-full flex items-center justify-center cursor-pointer"
            onClick={() => setShowProfile((prev) => !prev)}
          >
            {userData?.name?.slice(0, 1)?.toUpperCase()}
          </div>
        )}
        <FaShoppingCart className="w-[30px] h-[30px] text-[#000000] cursor-pointer hidden md:block" />
        <p className="absolute w-[18px] h-[18px] items-center md:flex justify-center bg-black px-[5px] py-[2px] text-white rounded-full text-[9px] top-[10px] right-[18px] hidden md:block">
          10
        </p>
      </div>
      {showSearch && (
        <div className="w-[100%] h-[80px] bg-[#d8f6f9dd] absolute top-[100%] left-0 right-0 flex items-center justify-center">
          <input
            type="text"
            className="w-[50%] h-[60%] bg-[#233533] rounded-[30px] px-[50px] placeholder:text-white text-white text-[18px]"
            placeholder="Search Here"
          />
        </div>
      )}
      {showProfile && (
        <div className="absolute w-[220px] h-[150px] bg-[#000000d7] top-[110%] right-[4%] border-[1px] border-[#aaa9a9] rounded-[10px] z-10">
          <ul className="w-[100%] h-[100%] flex items-start justify-around flex-col text-[17px] py-[10px] text-white">
            {!userData ? (
              <li
                onClick={() => {
                  navigate("/login");
                  setShowProfile((prev) => !prev);
                }}
                className="w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer"
              >
                Login
              </li>
            ) : (
              <li
                onClick={() => {
                  handleLogout();
                  setShowProfile((prev) => !prev);
                }}
                className="w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer"
              >
                Logout
              </li>
            )}
            <li className="w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer">
              Orders
            </li>
            <li className="w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer">
              About
            </li>
          </ul>
        </div>
      )}
      <div className="w-[100vw] h-[90px] flex items-center justify-between px-[20px] fixed bottom-0 left-0 bg-[#191818] md:hidden">
        <button className="text-white flex items-center justify-center flex-col gap-[2px]">
          <IoHome className="w-[25px] h-[25px] text-white md:hidden" />
          Home
        </button>
        <button className="text-white flex items-center justify-center flex-col gap-[2px]">
          <MdCollectionsBookmark className="w-[25px] h-[25px] text-white md:hidden" />
          Collections
        </button>
        <button className="text-white flex items-center justify-center flex-col gap-[2px]">
          <MdContacts className="w-[25px] h-[25px] text-white md:hidden" />
          Contact
        </button>
        <button className="text-white flex items-center justify-center flex-col gap-[2px]">
          <FaShoppingCart className="w-[25px] h-[25px] text-white md:hidden" />
          Cart
        </button>
      </div>
    </div>
  );
}

export default Navbar;
