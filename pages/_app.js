import { useEffect } from "react/cjs/react.development";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    localStorage.getItem("theme") === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  });
  return (
    <div className="h-full w-full dark:bg-neutral-900 duration-500">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
