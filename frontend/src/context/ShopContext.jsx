import React, { createContext, useContext, useEffect, useState } from "react";
import { authDataContext } from "./authContext";
import axios from "axios";

export const shopDataContext = createContext();

function ShopContext({ children }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItem, setCartItem] = useState([]);
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

  const addToCart = async (itemId, size) => {
    if (!size) {
      console.log("Select product size");
      return;
    }

    let cartData = structuredClone(cartItem);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItem(cartData);
    console.log(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (let items in cartItem) {
      for (let item in cartItem[items]) {
        try {
          if (cartItem[items][item] > 0) {
            totalCount += cartItem[items][item];
          }
        } catch (error) {}
      }
    }
    return totalCount;
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
    cartItem,
    addToCart,
    getCartCount,
    setCartItem,
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
