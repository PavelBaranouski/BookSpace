import React from "react";
import { useParams } from "react-router-dom";
import { useGetProduct } from "../../features/api/apiSlice";

export const SingleProduct = () => {
  const { isbn13 } = useParams();

  const { data } = useGetProduct({ isbn13 }); // Используйте useGetProduct вместо useGetProductQuery

  console.log(data);
  return <div>SingleProduct</div>;
};
