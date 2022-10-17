import React from "react";
import { FC, useState } from "react";
import { useMutation } from "react-query";
import { useRouter } from "next/router";
import { fetchJson } from "../lib/api";
import Button from "./Button";
import { useUser } from "../hooks/user/useUser";
import { useAddToCart } from "../hooks/cart/useAddToCart";

type AddToCartProps = {
  productId: number;
};

const AddToCart: FC<AddToCartProps> = ({ productId }) => {
  const [quantity, setQuantity] = useState("1");

  const router = useRouter();
  const user = useUser();
  const { addToCart, isLoading } = useAddToCart();

  const handleOnClick = async () => {
    await addToCart({ productId, quantity: Number(quantity) });
    router.push("/cart");
  };

  if (!user) return null;
  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <input
        type='number'
        min='1'
        className='border rounded px-3 py-1 mr-2 w-17 text-right'
        value={quantity.toString()}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <Button onClick={handleOnClick}>Add to cart</Button>
    </>
  );
};

export default AddToCart;
