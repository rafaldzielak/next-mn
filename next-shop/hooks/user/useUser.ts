import { fetchJson } from "../../lib/api";
import { useQuery } from "react-query";
import { User } from "../../pages/api/user";
import { USER_QUERY_KEY } from "./consts";

export const useUser = () => {
  const query = useQuery<User>(
    USER_QUERY_KEY,
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

  return query.data;
};
