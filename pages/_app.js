import Head from "next/head";
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
  const headerData = {
    title: "대림이",
    description: "대림대학교에 대한 질문사항을 검색해 보세요!",
    image: "/favicon.png",
  };

  return (
    <>
      <Head>
        <title>Daelimi</title>
        {/* 메타 태그 */}
        <meta name="apple-mobile-web-app-title" content="Daelimi" />
        <meta name="description" content={headerData.description} />
        {["og", "twitter"].map((metaMain, index1) =>
          ["title", "url", "image", "description"].map((value, index2) => (
            <meta
              name={`${metaMain}:${value}`}
              content={headerData[value]}
              key={index1 * 10 + index2}
            />
          ))
        )}
      </Head>
      {lodingSplash ? (
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
      )}
    </>
  );
}

export default MyApp;
