import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { useRouter } from "next/router";

function Layout({ children }) {
  const Router = useRouter();

  return (
    <>
      {!(Router.pathname === "/") && <Header />}
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
