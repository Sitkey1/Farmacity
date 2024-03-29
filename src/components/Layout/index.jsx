import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { useEffect } from "react";
import { WelcomeStore } from "../../Store/WelcomeStore";

export const Layout = () => {
  useEffect(() => {
    window.addEventListener("beforeunload", () => WelcomeStore.set(false));
  }, []);
  return (
    <>
      <main>
        <Outlet />
      </main>
      <Header />
    </>
  );
};
