import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { authDataContext } from "./AuthContext";
import { useEffect } from "react";

export const userDataContext = createContext();

function UserContext({ children }) {
  const [userData, setUserData] = useState("");
  const { serverUrl } = useContext(authDataContext);
  const getCurrentUser = async () => {
    try {
      const response = await axios.get(
        `${serverUrl}/api/user/get-current-user`,
        {
          withCredentials: true,
        }
      );
      setUserData(response.data);
    } catch (error) {
      console.log(error);
      setUserData(null);
    }
  };
  let value = {
    userData,
    setUserData,
    getCurrentUser,
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <userDataContext.Provider value={value}>
      {children}
    </userDataContext.Provider>
  );
}

export default UserContext;
