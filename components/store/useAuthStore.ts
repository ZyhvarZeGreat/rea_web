import { create } from "zustand";
import { User } from "../types/interfaces";

// Define types for your store state
interface AuthState {
  user: User | null;
  loginState: boolean | null | undefined;
  signupState: boolean | null;
  signoutState: boolean | null;
}

// Define types for your store actions
interface AuthActions {
  setUser: (value: User | null) => void;
  setLoginState: (value: boolean | undefined | null) => void;
  setSignupState: (value: boolean) => void;
  setSignoutState: (value: boolean) => void;
}

// Create your store
const useAuthStore = create<AuthState & AuthActions>((set) => ({
  user: null,
  loginState: false,
  signupState: null,
  signoutState: null,
  setUser: (value: User | null) => set({ user: value }),
  setLoginState: (value) => set({ loginState: value }),
  setSignupState: (value) => set({ signupState: value }),
  setSignoutState: (value) => set({ signoutState: value }),
}));

export default useAuthStore;
