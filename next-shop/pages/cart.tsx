import React, { FC, PropsWithChildren } from "react";
import PageWrapper from "../components/PageWrapper";
import { useCartItems } from "../hooks/cart/useCartItems";
import CartTable from "../components/CartTable";

type PageProps = PropsWithChildren & {
  title: string;
};

const Cart: FC<PageProps> = () => {
  const { data: cartItems, isLoading } = useCartItems();

  console.log(cartItems);
  return (
    <PageWrapper title='Cart'>
      {isLoading && "Loading..."}
      {cartItems && <CartTable cartItems={cartItems} />}
    </PageWrapper>
  );
};

export default Cart;
