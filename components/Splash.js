import Image from "next/image";
export default function Splash() {
  return (
    <div className="flex justify-center items-center h-full bg-white dark:bg-neutral-900">
      <Image src="/image/univLogo.png" alt="로고이미지" width={236.25} height={63} />
      <Image src="/image/ico.svg" alt="로고이미지" width={63} height={63} />
    </div>
  );
}
