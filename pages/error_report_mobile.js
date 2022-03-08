import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import { useState, useEffect, useRef } from "react";

import { issueApi } from "../core/api/messageApi";

import Back from "../public/image/back.svg";
export default function ErrorReport() {
  const router = useRouter();
  const [inputs, setInputs] = useState({ title: "", message: "" });
  const [sendingErrRepoState, setSendingErrRepoState] = useState(false);
  //제목 ref
  const titleRef = useRef();
  //오류 내용 ref
  const messageRef = useRef();

  useEffect(() => {
    const SendErrRepo = async () => {
      let result = "";

      if (inputs.message != "" && inputs.title != "") {
        result = await issueApi({
          isFilter: "404",
          message: `${inputs.title}||${inputs.message}`,
        });

        const alertState =
          result.data.answer === "isOK"
            ? {
                icon: "success",
                title: "전송 성공",
                text: "감사합니다. 문의주신 내용은 빠르게 해결해드리겠습니다",
              }
            : {
                icon: "error",
                title: "서버 접속 실패..",
                text: "죄송합니다 대림대학교 동아리 ICC로 문의 부탁합니다!",
              };

        await Swal.fire({ icon: alertState.icon, title: alertState.title, text: alertState.text });
      } else {
        Swal.fire({
          icon: "error",
          title: "전송에 실패하였습니다!",
          text: `${inputs.title === "" ? "제목" : "오류 내용"}을 작성해 주세요`,
        });

        //비어있는 값에 포커스 지정
        inputs.title == "" ? titleRef.current.focus() : messageRef.current.focus();
      }
      setSendingErrRepoState(false);
      return result;
    };
    sendingErrRepoState && SendErrRepo().then((res) => res && router.back());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputs, sendingErrRepoState]);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet" />
      </Head>

      <div className="errorReportContainer h-[90%]  ">
        <div className="goToBackButtonContainer w-[15%] mt-8"></div>
        <div className="text-3xl flex justify-center mb-5  dark:text-white font-Jua">문의 등록</div>
        <div className="w-full h-[90%]">
          <p className=" flex justify-center mb-3  dark:text-white text-xl font-Jua">제목</p>
          <div className="inputContainer flex justify-center ">
            <input
              className="w-[90%] rounded-xl text-lg px-2 py-1 focus:outline-[#00a6dd] border-2 dark:bg-neutral-300 dark:border-none"
              ref={titleRef}
              onChange={(e) => {
                setInputs({
                  ...inputs,
                  title: e.target.value,
                });
              }}
              value={inputs.title}
            />
          </div>

          <p className="flex justify-center my-3 dark:text-white text-lg font-Jua ">설명</p>
          <div className="flex justify-center h-[60%]">
            <textarea
              className="w-[90%] resize-none rounded-xl text-xl px-2 py-1 focus:outline-[#00a6dd] border-2 dark:bg-neutral-300 dark:border-none"
              ref={messageRef}
              onChange={(e) => {
                setInputs({
                  ...inputs,
                  message: e.target.value,
                });
              }}
              value={inputs.message}
            />
          </div>
          <div className="flex justify-center mt-5">
            <button
              className="w-[90%] py-2 rounded-xl text-[#00a6dd] font-semibold text-xl duration-200 border-2 border-[#00a6dd]/30 font-Jua
                        hover:bg-[#00a6dd]  hover:text-white focus:ring-2 focus:ring-offset-2 focus:ring-[#00a6dd] focus:outline-none
                        hover:dark:text-white "
              onClick={() => setSendingErrRepoState(true)}
            >
              전송
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
