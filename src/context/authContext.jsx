import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  let [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const cookie = document.cookie;
    if (cookie !== "") {
      const token = cookie.split("accessToken=")[1];
      if (token !== "undefined") {
        const decode = jwtDecode(token);
        const exp_time = decode.exp * 1000;
        const now = Date.now();

        if (now + 600 < exp_time) {
          setCurrentUser(decode);
          return;
        }
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
