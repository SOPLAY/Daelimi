import { useEffect, useState } from "react";
import { RecoilRoot } from "recoil";
import Header from "../components/Header";
import Splash from "../components/Splash";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    localStorage.getItem("theme") === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  });
  const [lodingSplash, setLodingSplash] = useState(true);
  useEffect(() => {
    lodingSplash &&
      setTimeout(() => {
        setLodingSplash(false);
        document.documentElement.classList.add("scroll-smooth");
      }, 1000);
  }, [lodingSplash]);
  return lodingSplash ? (
    <Splash />
  ) : (
    <div className=" h-full w-full dark:bg-neutral-800 duration-500 ">
      <div className=" h-full mx-auto max-w-2xl box-content ">
        <Header HeaderTitle={"Daelimi"} />
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </div>
    </div>
  );
}

export default MyApp;
