import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { authDataContext } from "./AuthContext.jsx";
import axios from "axios";
import { useEffect } from "react";

export const adminDataContext = createContext();
function AdminContext({ children }) {
  const [adminData, setAdminData] = useState(null);
  const { serverUrl } = useContext(authDataContext);
  const getAdmin = async () => {
    try {
      const response = await axios.get(`${serverUrl}/api/user/get-admin`, {
        withCredentials: true,
      });
      setAdminData(response.data);
      console.log(response.data);
    } catch (error) {
      setAdminData(null);
      console.log("Get admin error : ", error);
    }
  };

  const value = {
    adminData,
    setAdminData,
    getAdmin,
  };

  useEffect(() => {
    getAdmin();
  }, []);

  return (
    <adminDataContext.Provider value={value}>
      {children}
    </adminDataContext.Provider>
  );
}

export default AdminContext;
