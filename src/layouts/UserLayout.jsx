import { Outlet } from "react-router-dom";
import React from "react";
import Header from "../components/user/Header/Header";
import Footer from "../components/user/Footer/Footer";

const UserLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default UserLayout;
