import { useEffect, useState } from "react/cjs/react.development";
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
      }, 1000);
  }, [lodingSplash]);
  return lodingSplash ? (
    <Splash />
  ) : (
    <div className=" h-full w-full dark:bg-neutral-900 duration-500 ">
      <div className=" h-full mx-auto max-w-2xl box-content ">
        <Header HeaderTitle={"Daelimi"} />
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
