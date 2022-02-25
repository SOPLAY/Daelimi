import Image from "next/image";
export default function Splash() {
  return (
    <div className="flex justify-center items-center  bg-white h-full ">
      <Image
        src="/image/univLogo.png"
        alt="로고이미지"
        width={250}
        height={63}
      />
      <Image src="/image/ico.svg" alt="로고이미지" width={63} height={63} />
    </div>
  );
}