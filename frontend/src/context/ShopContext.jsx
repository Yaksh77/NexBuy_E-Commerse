import React, { createContext, useContext, useEffect, useState } from "react";
import { authDataContext } from "./authContext";
import axios from "axios";

export const shopDataContext = createContext();

function ShopContext({ children }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const { serverUrl } = useContext(authDataContext);
  const currency = "₹";
  const deliveryFee = 40;
  const getProducts = async () => {
    try {
      const response = await axios.get(
        `${serverUrl}/api/product/list-products`,
        {
          withCredentials: true,
        }
      );
      console.log(response.data);
      if (response.data) {
        setProducts(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const value = {
    products,
    currency,
    deliveryFee,
    getProducts,
    search,
    setSearch,
    showSearch,
    setShowSearch,
  };

  return (
    <div>
      <shopDataContext.Provider value={value}>
        {children}
      </shopDataContext.Provider>
    </div>
  );
}

export default ShopContext;
