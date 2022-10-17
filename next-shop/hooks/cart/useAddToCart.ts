import { useMutation } from "react-query";
import { fetchJson } from "../../lib/api";

type AddToCartVariables = {
  productId: number;
  quantity: number;
};

export const useAddToCart = () => {
  const mutation = useMutation<void, Error, AddToCartVariables>(({ productId, quantity }) =>
    fetchJson("/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId, quantity }),
    })
  );
  return {
    isLoading: mutation.isLoading,
    addToCart: async ({ productId, quantity }: AddToCartVariables) => {
      await mutation.mutateAsync({ productId, quantity });
    },
  };
};
