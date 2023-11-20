import { AuthContext } from "./AuthContext";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const AuthProvider = (props) => {
  const userToken = Cookies.get("token");
  const adminToken = Cookies.get("adminToken");

  const [userIsLoggedIn, setUserIsLoggedIn] = useState(!!userToken);
  const [adminIsLoggedIn, setAdminIsLoggedIn] = useState(!!adminToken);

  useEffect(() => {
    localStorage.setItem("userIsLoggedIn", userIsLoggedIn.toString());
    localStorage.setItem("adminIsLoggedIn", adminIsLoggedIn.toString());
  }, [userIsLoggedIn, adminIsLoggedIn]);

  return (
    <AuthContext.Provider
      value={{
        userIsLoggedIn,
        setUserIsLoggedIn,
        adminIsLoggedIn,
        setAdminIsLoggedIn,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
