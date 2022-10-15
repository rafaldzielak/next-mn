import { fetchJson } from "../../lib/api";
import { useMutation, useQueryClient } from "react-query";
import { User } from "../../pages/api/user";
import { USER_QUERY_KEY } from "./consts";

interface SignInVariables {
  email: string;
  password: string;
}

interface UseSignInResult {
  signIn: (email: string, password: string) => Promise<boolean>;
  isSignInError: boolean;
  isSignInLoading: boolean;
}

export function useSignIn(): UseSignInResult {
  const queryClient = useQueryClient();
  const mutation = useMutation<User, Error, SignInVariables>(({ email, password }) =>
    fetchJson("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
  );
  return {
    signIn: async (email: string, password: string) => {
      try {
        const user = await mutation.mutateAsync({ email, password });
        queryClient.setQueryData(USER_QUERY_KEY, user);
        return true;
      } catch (err) {
        return false;
      }
    },
    isSignInError: mutation.isError,
    isSignInLoading: mutation.isLoading,
  };
}
