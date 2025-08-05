import React from "react";
import Hader from "../Hader/Hader";
import Fotter from "../FOTTER/Fotter";
import { Outlet } from "react-router";

const SharedLay = () => {
  return (
    <>
      <Hader />
      <Outlet />
      <Fotter />
    </>
  );
};

export default SharedLay;
