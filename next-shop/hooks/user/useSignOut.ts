import { fetchJson } from "../../lib/api";
import { useMutation, useQueryClient } from "react-query";
import { USER_QUERY_KEY } from "./consts";

export function useSignOut() {
  const queryClient = useQueryClient();
  const mutation = useMutation(() => fetchJson("/api/logout"));

  return async () => {
    await mutation.mutateAsync();
    queryClient.setQueryData(USER_QUERY_KEY, undefined);
  };
}
