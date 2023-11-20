import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function NavbarSelect({ children }) {

  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);
  useEffect(() => {
  
    if (location.pathname.includes("/admin")) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [location]);
  return <>{showNavbar &&children}</>;
}
