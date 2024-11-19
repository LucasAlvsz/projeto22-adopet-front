import axios from "axios";
import { createContext } from "react";
import { UseLocalStorage } from "../hooks";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = UseLocalStorage("user", null);
  const signUp = (name, email, password, cep, phone) => {
    return axios.post(`${import.meta.env.VITE_API_URL}/sign-up`, {
      name,
      email,
      password,
      cep,
      phone,
    });
  };

  const signIn = (userData) => {
    return axios.post(`${import.meta.env.VITE_API_URL}/sign-in`, userData);
  };

  const logout = () => UseLocalStorage("user", null);

  return (
    <AuthContext.Provider
      value={{
        signUp,
        signIn,
        logout,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
