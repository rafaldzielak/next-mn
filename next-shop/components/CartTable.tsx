import React, { FC, PropsWithChildren } from "react";
import { CartItem } from "../pages/api/cart";

type CartTableProps = PropsWithChildren & {
  cartItems: CartItem[];
};

type CartItemWithTotal = CartItem & { total: number };

type Cart = {
  items: CartItemWithTotal[];
  total: number;
};

const buildCart = (cartItems: CartItem[]): Cart => {
  let total = 0;
  const items: CartItemWithTotal[] = [];
  cartItems.forEach((cartItem) => {
    const itemTotal = cartItem.quantity * Number(cartItem.product.price);
    total += itemTotal;
    items.push({ ...cartItem, total: itemTotal });
  });
  return { items, total };
};

const Field: FC<CartTableProps> = ({ cartItems }) => {
  const cart = buildCart(cartItems);

  return (
    <table>
      <thead>
        <tr>
          <th className='px4 py-2'>Product</th>
          <th className='px4 py-2'>Price</th>
          <th className='px4 py-2'>Quantity</th>
          <th className='px4 py-2'>Total</th>
        </tr>
      </thead>
      <tbody>
        {cart.items.map((cartItem) => (
          <tr key={cartItem.id}>
            <td className='px-4 py-2'>{cartItem.product.title}</td>
            <td className='px-4 py-2 text-right'>{cartItem.product.price}</td>
            <td className='px-4 py-2 text-right'>{cartItem.quantity}</td>
            <td className='px-4 py-2 text-right'>${cartItem.total.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <th className='px-4 py-2 text-left'>
            <b>Total</b>
          </th>
          <th></th>
          <th></th>
          <th className='px-4 py-2 text-right'>${cart.total.toFixed(2)}</th>
        </tr>
      </tfoot>
    </table>
  );
};

export default Field;
