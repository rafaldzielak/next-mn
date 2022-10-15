import { fetchJson } from "../../lib/api";
import { useQuery } from "react-query";
import { CART_QUERY_KEY } from "./consts";
import { CartItem } from "../../pages/api/cart";

export const useCartItems = () => {
  const query = useQuery<CartItem[]>(CART_QUERY_KEY, async () => await fetchJson("/api/cart"));
  return query;
};
