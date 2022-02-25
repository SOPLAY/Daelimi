import { useState } from "react";

import SendSvg from "./svg/sendSvg";
export default function MessageBox() {
  const onClick = () => {
    !inputValue
      ? alert("메시지를 입력해주세요")
      : console.log(`입력 값 : ${inputValue}`);
    setInputValue("");
  };
  const [inputValue, setInputValue] = useState("");
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
