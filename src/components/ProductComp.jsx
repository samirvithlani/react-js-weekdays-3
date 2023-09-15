import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductToStore,removeProductFromStoreaction } from "../redux/ProductSlice";

export const ProductComp = () => {
  const dispacth = useDispatch();
  const state = useSelector((state) => state.products)
  console.log(state);
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
    },
  ];
  const removeProductFromStore = () => {
    dispacth(removeProductFromStoreaction([]));
  }
  const storeproductToRedux = () => {
    dispacth(addProductToStore(products));
  };
  useEffect(() => {
   // storeproductToRedux();
  }, []);

  return <div>
    <button onClick={storeproductToRedux}>Add Product</button>
    <button onClick={removeProductFromStore}>Remove Product</button>
  </div>;
};
