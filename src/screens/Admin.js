import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Normal from "../components/Navbars/Normal";
import DrawerNavbar from "../components/Navbars/DrawerNavbar";

const Admin = () => {
  const navigate = useNavigate();
  const screenWidth = window.screen.width;

  useEffect(() => {
    const user = localStorage.getItem("username");
    if (!user) {
      navigate("/login");
    }
  }, []);

  return <>{screenWidth > 500 ? <Normal /> : <DrawerNavbar />}</>;
};

export default Admin;
