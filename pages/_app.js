import Head from "next/head";
import Script from "next/script";
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
    image:
      "https://user-images.githubusercontent.com/40691745/155872679-61892ea2-3ac9-43b3-9a03-2ac259324894.png",
  };

  return (
    <>
      <Head>
        <title>Daelimi</title>
        {/* 메타 태그 */}
        {/* https to http 연결 오류 해결 */}
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <meta name="apple-mobile-web-app-title" content="Daelimi" />
        <meta name="description" content={headerData.description} />
        {["og", "twitter"].map((metaMain, index1) =>
          ["title", "url", "image", "description"].map((value, index2) =>
            metaMain === "twitter" ? (
              <meta
                name={`${metaMain}:${value}`}
                content={headerData[value]}
                key={index1 * 10 + index2}
              />
            ) : (
              <meta
                property={`${metaMain}:${value}`}
                content={headerData[value]}
                key={index1 * 10 + index2}
              />
            )
          )
        )}
      </Head>
      <Script src="https://cdn.jsdelivr.net/npm/sweetalert2@10" />
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
