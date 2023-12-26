import { User } from "@firebase/auth-types";
export const setUser = (user: User) => ({
  type: "SET_USER",
  payload: user,
});

export const setLoading = (isLoading: boolean) => ({
  type: "SET_LOADING",
  payload: isLoading,
});
