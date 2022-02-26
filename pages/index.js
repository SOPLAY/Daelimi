// import SendMessage from "../components/SendMessage";
import { useRecoilValue } from "recoil";
import MessageBox from "../components/InputMessageBox";
import { chatLogsAtom } from "../core/atom/atomChatLogs";
export default function Home() {
  let chatlog = useRecoilValue(chatLogsAtom);
  return (
    <>
      <div className=" chatLogContainer justify-center h-[85%] pt-1 pb-4 ">
        {/* 오버플로 발생시 아래 메시지 고정 및 정렬 */}
        <div className="flex flex-col-reverse overflow-auto h-full">
          <div className="px-5 ">
            {chatlog.map((value, index) => (
              <div
                key={index}
                className={`dark:text-white duration-500 flex ${
                  value.user && "justify-end"
                }`}
              >
                <div className="text-xl">{value.message}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <MessageBox />
    </>
  );
}

// export default function test() {
//   return <Splash />;
// }
