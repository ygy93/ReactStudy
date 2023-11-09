import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Book from "../components/Book";

export default function Root(){
  return(
    <>
      <Navbar />
      <Outlet />
      {/* <Book /> */}
    </>
  );
}