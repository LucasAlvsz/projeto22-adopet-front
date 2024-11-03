import axios from "axios";
import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const signUp = (name, email, password, cep, phone) => {
    return axios.post(
      `${"https://special-goggles-p5jwqjx65x6275jx-3000.app.github.dev"}/sign-up`,
      {
        name,
        email,
        password,
        cep,
        phone,
      }
    );
  };

  const signIn = (email, password) => {
    return axios.post(
      `${"https://special-goggles-p5jwqjx65x6275jx-3000.app.github.dev"}/sign-in`,
      {
        email,
        password,
      }
    );
  };

  const logout = () => useLocalStorage("user", null);

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
