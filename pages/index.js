import { useState, useEffect } from "react";
import DarkModeSwitch from "../components/DarkMode";
import Splash from "../components/Splash";

export default function Home() {
  const [lodingSplash, setLodingSplash] = useState(true);
  useEffect(() => {
    lodingSplash &&
      setTimeout(() => {
        setLodingSplash(false);
      }, 1000);
  }, [lodingSplash]);
  return lodingSplash ? (
    <Splash />
  ) : (
    <>
      <DarkModeSwitch />
      <div className="flex h-full justify-center items-center ">
        <h1 className="text-3xl font-bold underline text-duc-green dark:text-white ">
          해당페이지는 임시페이지 입니다
        </h1>
      </div>
    </>
  );
}

// export default function test() {
//   return <Splash />;
// }
