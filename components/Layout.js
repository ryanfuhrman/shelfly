import { Children } from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
