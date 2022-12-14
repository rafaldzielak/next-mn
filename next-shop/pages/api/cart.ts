import { NextApiHandler } from "next";
import { fetchJson } from "../../lib/api";
import { Product } from "../../lib/products";

const CMS_URL = process.env.CMS_URL;

export type CartItem = {
  id: number;
  quantity: number;
  product: Pick<Product, "id" | "title" | "price">;
};

const stripCartItem = (cartItem: CartItem): CartItem => {
  return {
    id: cartItem.id,
    product: {
      id: cartItem.product.id,
      title: cartItem.product.title,
      price: cartItem.product.price,
    },
    quantity: cartItem.quantity,
  };
};

const handleGetCart: NextApiHandler<CartItem[]> = async (req, res) => {
  const { jwt } = req.cookies;
  if (!jwt) {
    res.status(401).end();
    return;
  }
  try {
    const cartItems = await fetchJson(`${CMS_URL}/cart-items`, {
      headers: { Authorization: `Bearer ${jwt}` },
    });
    res.status(200).json(cartItems.map(stripCartItem));
  } catch (error) {
    res.status(401).end();
  }
};

const handlePostCart: NextApiHandler = async (req, res) => {
  const { jwt } = req.cookies;
  if (!jwt) {
    res.status(401).end();
    return;
  }
  try {
    const { productId, quantity } = req.body;
    await fetchJson(`${CMS_URL}/cart-items`, {
      headers: { Authorization: `Bearer ${jwt}`, "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({ product: productId, quantity }),
    });
    res.status(200).json({});
  } catch (error) {
    res.status(401).end();
  }
};

const handleCart: NextApiHandler = async (req, res) => {
  switch (req.method) {
    case "GET":
      handleGetCart(req, res);
      break;
    case "POST":
      handlePostCart(req, res);
      break;

    default:
      res.status(406).end();
  }
};

export default handleCart;
