import { useState, useEffect } from "react";
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
      <h1 className="text-3xl font-bold underline">Hello Daelimi!</h1>
    </>
  );
}

// export default function test() {
//   return <Splash />;
// }
