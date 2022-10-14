import { fetchJson } from "../lib/api";
import { useQuery } from "react-query";
import { User } from "../pages/api/user";

export const useUser = () => {
  const query = useQuery(
    "user",
    async () => {
      try {
        return await fetchJson("/api/user");
      } catch (error) {
        return undefined;
      }
    },
    {
      staleTime: 30_000,
      cacheTime: Infinity,
    }
  );

  return query.data as User;
};
