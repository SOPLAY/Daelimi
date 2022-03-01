import axios from "axios";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { chatLogsAtom } from "../core/atom/atomChatLogs";
import { userInputFilter } from "../core/filter/userInputFilter";

import SendSvg from "./svg/sendSvg";
export default function MessageBox() {
  const [inputValue, setInputValue] = useState("");

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
    apiRes && funcSetChatLog(false, apiRes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiRes]);

  const onClick = async () => {
    if (inputValue) {
      //채팅로그 추가
      funcSetChatLog(true, inputValue);

      let body = userInputFilter(inputValue);
      setInputValue("");
      //api post 요청
      await axios
        .post(process.env.NEXT_PUBLIC_API_SERVER_URL, body)
        //포스트 받은 값을 apiRes의 값으로 지정한다.
        .then((res) => setApiRes(res.data.answer))
        .catch((e) => setApiRes("서버 연결에 실패했습니다."));
    } else {
      alert("메시지를 입력해주세요");
    }
  };

  return (
    <div className="inpoutMessageBoxContainer h-[10%]">
      <div className="h-full flex px-1 pb-3">
        <textarea
          className="rounded-xl w-[85%] md:w-[90%] border-solid border-2 focus:outline-none focus:border-gray-400 px-3 py-1 text-base dark:text-white md:text-2xl resize-none dark:bg-neutral-800 duration-500"
          onKeyPress={(e) => e.code === "Enter" && onClick()}
          placeholder="문의할 메시지를 입력하세요!"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value.replace(/\n/g, ""))}
        />
        <div className="flex w-[15%] md:w-[10%] justify-center items-center">
          <SendSvg onClick={() => onClick()} />
        </div>
      </div>
    </div>
  );
}
