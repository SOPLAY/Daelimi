import MessageBox from "../components/InputMessageBox";

export default function Home() {
  return (
    <>
      <div className="flex h-[87%] justify-center items-center ">
        <h1 className="text-3xl font-bold underline text-duc-blue dark:text-white duration-500">
          해당페이지는 임시페이지 입니다
        </h1>
      </div>
      <MessageBox />
    </>
  );
}

// export default function test() {
//   return <Splash />;
// }
