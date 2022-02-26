import { useRecoilValue } from "recoil";
import { chatLogsAtom } from "../core/atom/atomChatLogs";
import ChatingMessageBox from "./chatingView/ChatingMessageBox";

export default function ChatingView() {
  let chatlog = useRecoilValue(chatLogsAtom);
  return (
    <div className=" chatLogContainer justify-center h-[85%] pt-1 pb-4 ">
      {/* 오버플로 발생시 아래 메시지 고정 및 정렬 */}
      <div className="flex flex-col-reverse overflow-auto h-full">
        <div className="px-5 ">
          {chatlog.map((value, index) => (
            <ChatingMessageBox
              key={index}
              user={value.user}
              message={value.message}
              time={value.time}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
