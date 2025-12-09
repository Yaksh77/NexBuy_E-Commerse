import React, { createContext, useContext, useEffect, useState } from "react";
import { authDataContext } from "./authContext";
import axios from "axios";
import { userDataContext } from "./UserContext";

export const shopDataContext = createContext();

function ShopContext({ children }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItem, setCartItem] = useState([]);
  const { serverUrl } = useContext(authDataContext);
  const { userData } = useContext(userDataContext);
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

    if (userData) {
      try {
        const response = await axios.post(
          `${serverUrl}/api/cart/add`,
          {
            itemId,
            size,
          },
          { withCredentials: true }
        );
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Add error");
    }

    setCartItem(cartData);
  };

  const getUserCart = async () => {
    try {
      const response = await axios.post(
        `${serverUrl}/api/cart/get`,
        {},
        {
          withCredentials: true,
        }
      );
      setCartItem(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItem);
    cartData[itemId][size] = quantity;

    setCartItem(cartData);

    if (userData) {
      try {
        await axios.post(
          `${serverUrl}/api/cart/update`,
          {
            itemId,
            size,
            quantity,
          },
          { withCredentials: true }
        );
      } catch (error) {
        console.log(error);
      }
    }
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

  const getCartAmmount = () => {
    let totalAmount = 0;
    try {
      for (let items in cartItem) {
        let itemInfo = products.find((product) => product._id === items);
        for (let item in cartItem[items]) {
          if (cartItem[items][item] > 0) {
            totalAmount += itemInfo.price * cartItem[items][item];
          }
        }
      }
    } catch (error) {
      console.log(error);
    }

    return totalAmount;
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getUserCart();
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
    updateQuantity,
    getCartAmmount,
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
