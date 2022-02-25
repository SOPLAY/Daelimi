// import SendMessage from "../components/SendMessage";
import MessageBox from "../components/InputMessageBox";
let chatlog = [
  { user: true, message: "안녕하세요!" },
  { user: false, message: "서버응답: 안녕하세요!" },
  { user: true, message: "안녕하세요asdasd!" },
  { user: false, message: "서버응답: 안녕하세요!" },
  { user: true, message: "안녕하세요!" },
  { user: false, message: "서버응답: 안녕하세요!" },
  { user: true, message: "안녕하세요!" },
  { user: false, message: "서버응답: 안녕하세요!" },
];
export default function Home() {
  return (
    <>
      <div className=" chatLogContainer h-[85%] pt-1">
        <div className="px-5">
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
        {/* {chatlog.map((value, index) => (
          <SendMessage key={index} message={value.message} user={value.user} />
        ))} */}
      </div>
      <MessageBox />
    </>
  );
}

// export default function test() {
//   return <Splash />;
// }
