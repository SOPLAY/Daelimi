import Image from "next/image";
import LogoImg from "../public/ico.png";
export default function Splash() {
  return (
    <div className="flex justify-center items-center  bg-blue-100 h-full ">
      <Image src={LogoImg} alt="로고이미지" width={100} height={100} />
    </div>
  );
}
