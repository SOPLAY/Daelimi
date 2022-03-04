import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { messgaeApi } from "../core/api/messageApi";
import { chatLogsAtom } from "../core/atom/atomChatLogs";
import { userInputFilter } from "../core/filter/userInputFilter";

import SendSvg from "./svg/sendSvg";
export default function MessageBox() {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef("");
  const [chatLog, setChatLog] = useRecoilState(chatLogsAtom);
  const [apiRes, setApiRes] = useState("");
  function funcSetChatLog(user = true, message) {
    setChatLog([
      ...chatLog,
      {
        message: message,
        user: user,
        time: new Date().toLocaleTimeString().split(":").slice(0, 2).join(":"),
      },
    ]);
    //만약 서버의 응답일 경우 apiRes를 초기화 한다.
    user || setApiRes("");
  }
  useEffect(() => {
    if (chatLog.length === 0) {
      funcSetChatLog(false, "안녕하세요! 대림이 봇 입니다.");
      setTimeout(() => {
        funcSetChatLog(false, `오류 혹은 문의사항이 있으시다면 "/문의하기"를 치시면 됩니다!`);
      }, 1500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatLog, setChatLog]);
  useEffect(() => {
    apiRes && funcSetChatLog(false, apiRes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiRes]);

  const router = useRouter();
  const onClick = async () => {
    if (inputValue.replace(/ /g, "") === "/문의하기") router.push("/error_report");
    else if (inputValue) {
      //채팅로그 추가
      funcSetChatLog(true, inputValue);

      let body = userInputFilter(inputValue);
      setInputValue("");
      //api post 요청

      await messgaeApi(body)
        //포스트 받은 값을 apiRes의 값으로 지정한다.
        .then((res) => setApiRes(res.data.answer))
        .catch((e) => setApiRes("서버 연결에 실패했습니다."));
    } else {
      Swal.fire({
        icon: "error",
        title: "메시지를 작성해 주세요!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="inpoutMessageBoxContainer h-[10%]">
      <div className="h-full flex px-1 pb-3">
        <textarea
          ref={inputRef}
          className="rounded-xl w-[85%] md:w-[90%] border-solid border-2 focus:outline-none focus:border-gray-400 px-3 py-1 text-base dark:text-white md:text-2xl resize-none dark:bg-neutral-800 duration-500"
          onKeyPress={(e) => e.code === "Enter" && onClick()}
          placeholder="문의할 메시지를 입력하세요!"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value.replace(/\n/g, ""));
            inputRef.current.focus();
          }}
        />
        <div className="flex w-[15%] md:w-[10%] justify-center items-center">
          <SendSvg onClick={() => onClick()} />
        </div>
      </div>
    </div>
  );
}
