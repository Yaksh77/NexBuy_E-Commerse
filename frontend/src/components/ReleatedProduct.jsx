import React, { useContext, useEffect, useState } from "react";
import { shopDataContext } from "../context/ShopContext";
import Title from "./Title";
import Card from "./Card";

function ReleatedProduct({ category, subCategory, currentProdcutId }) {
  const { products } = useContext(shopDataContext);
  const [related, setRealated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();
      productsCopy = productsCopy.filter((item) => category === item.category);
      productsCopy = productsCopy.filter(
        (item) => subCategory === item.subCategory
      );
      productsCopy = productsCopy.filter(
        (item) => currentProdcutId !== item._id
      );
      setRealated(productsCopy.slice(0, 4));
    }
  }, [products, category, subCategory, currentProdcutId]);
  return (
    <div
      className="
  my-[130px] md:my-[40px] md:px-[60px]
  "
    >
      <div className="ml-[20px] lg:ml-[80px]">
        <Title text1={"RELEATED"} text2={" PRODUCTS"} />
      </div>
      <div className="w-[100%] mt-[30px] flex items-center justify-center flex-wrap gap-[50px]">
        {related.map((product, index) => (
          <Card
            key={index}
            id={product._id}
            name={product.name}
            price={product.price}
            image={product.image1}
          />
        ))}
      </div>
    </div>
  );
}

export default ReleatedProduct;
