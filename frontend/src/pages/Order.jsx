import React, { useState } from "react";
import Title from "../components/Title";
import { useContext } from "react";
import { shopDataContext } from "../context/ShopContext";
import { authDataContext } from "../context/AuthContext";
import axios from "axios";
import { useEffect } from "react";

function Order() {
  const [orderData, setOrderData] = useState([]);
  const { currency } = useContext(shopDataContext);
  const { serverUrl } = useContext(authDataContext);

  const loadOrderData = async () => {
    try {
      const response = await axios.post(
        `${serverUrl}/api/order/userorder`,
        {},
        { withCredentials: true }
      );
      console.log(response.data);

      if (response.data) {
        let allOrdersItem = [];
        response.data.map((order) => {
          order.items.map((item) => {
            item["status"] = order.status;
            item["payment"] = order.payment;
            item["paymentMethod"] = order.paymentMethod;
            item["date"] = order.date;
            allOrdersItem.push(item);
          });
          setOrderData(allOrdersItem.reverse());
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, []);

  return (
    <div className="w-[99vw] min-h-[100vh] p-[20px] pb-[150px] bg-gradient-to-l from-[#141414] to-[#0c2025] overflow-hidden">
      <div className="h-[8%] w-[100%] text-center mt-[80px]">
        <Title text1={"MY"} text2={" ORDERS"} />
      </div>
      <div className="w-[100%] h-[92%] flex flex-wrap gap-[20px]">
        {orderData.map((item, index) => (
          <div key={index} className="w-[100%] h-[10%] border-t border-b">
            <div className="w-[100%] h-[80%] flex items-start gap-6 bg-[#51808048] py-[10px] px-[20px] relative">
              <img
                src={item.image1}
                alt=""
                className="w-[130px] h-[130px] rounded-md"
              />
              <div className="flex items-start justify-center flex-col gap-[5px]">
                <p className="md:text-[25px] text-[20px] text-[#f3f9fc]">
                  {item.name}
                </p>
                <div className="flex items-center gap-[8px] md:gap-[20px]">
                  <p className="md:text-[18px] text-[12px] text-[#aaf4e7]">
                    Price: {currency} {item.price}
                  </p>
                  <p className="md:text-[18px] text-[12px] text-[#aaf4e7]">
                    Quantity: {item.quantity}
                  </p>
                  <p className="md:text-[18px] text-[12px] text-[#aaf4e7]">
                    Size: {item.size}
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="md:text-[18px] text-[12px] text-[#e4fbff]">
                    Date:
                    <span className="pl-[10px] md:text-[16px] text-[11px]">
                      {new Date(item.date).toDateString()}
                    </span>
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="md:text-[18px] text-[12px] text-[#e4fbff]">
                    Payment Method:
                    <span className="pl-[10px] md:text-[16px] text-[11px]">
                      {item.paymentMethod}
                    </span>
                  </p>
                </div>
                <div className="absolute md:left-[55%] md:top-[35%] right-[25%] top-[35%]">
                  <div className="flex items-center gap-[5px]">
                    <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                    <p className="md:text-[17px] text-[10px] text-[#f3f9fc]">
                      {/* {console.log(item.status)} */}
                      {item.status}
                    </p>
                  </div>
                </div>
                <div className="absolute md:right-[5%] md:top-[34%] right-[5%] top-[33%]">
                  <button
                    className="px-[15px] py-[7px] rounded-md
                  bg-[#101919] text-[#f3f9fc] cursor-pointer active:bg-slate-500"
                    onClick={loadOrderData}
                  >
                    Track Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Order;
