import Image from "next/image";
import { useEffect } from "react/cjs/react.production.min";
export default function DarkModeSwitch() {
  const darkModeSwap = () => {
    localStorage.setItem(
      "theme",
      localStorage.getItem("theme") === "dark" ? "white" : "dark"
    );
    localStorage.getItem("theme") === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  };
  return (
    <div>
      <svg
        onClick={() => darkModeSwap()}
        width="30px"
        height="30px"
        viewBox="0 0 13 13"
        version="1.1"
        className="fill-black dark:fill-white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(0,-284.29998)">
          <path
            d="m 6.2711185,287.94985 a 2.7010013,2.7010013 0 0 0 -2.6217742,2.69988 2.7010013,2.7010013 0 1 0 5.4018538,0 2.7010013,2.7010013 0 0 0 -2.7800796,-2.69988 z m 0.078799,0.25789 v 4.88468 a 2.4423408,2.4423408 0 0 1 0,-4.88468 z"
            stroke="none"
          ></path>
          <path
            d="m 10.283037,286.53405 -1.3483603,1.34832 a 0.12953382,0.12953382 0 0 0 0.1834294,0.18294 l 1.3476909,-1.34832 a 0.12935123,0.12935123 0 0 0 -0.18276,-0.18294 z"
            stroke="none"
          ></path>
          <path
            d="m 12.041471,290.52064 h -1.906944 a 0.12935122,0.12935122 0 0 0 0,0.25869 h 1.906944 a 0.12935122,0.12935122 0 0 0 0,-0.25869 z"
            stroke="none"
          ></path>
          <path
            d="m 10.465797,294.58299 -1.3476909,-1.34833 a 0.12953141,0.12953141 0 0 0 -0.1834294,0.18293 l 1.3483603,1.34832 a 0.12935123,0.12935123 0 0 0 0.18276,-0.18292 z"
            stroke="none"
          ></path>
          <path
            d="m 6.479452,296.34144 v -1.90681 a 0.12937727,0.12937727 0 0 0 -0.2587545,0 v 1.90681 a 0.12937727,0.12937727 0 0 0 0.2587545,0 z"
            stroke="none"
          ></path>
          <path
            d="m 2.416979,294.76591 1.3484938,-1.34832 a 0.12935122,0.12935122 0 0 0 -0.1827605,-0.18293 l -1.3484938,1.34833 a 0.12935122,0.12935122 0 0 0 0.1827605,0.18292 z"
            stroke="none"
          ></path>
          <path
            d="m 0.6585452,290.77933 h 1.9069434 a 0.12935122,0.12935122 0 0 0 0,-0.25869 H 0.6585452 a 0.12935122,0.12935122 0 0 0 0,0.25869 z"
            stroke="none"
          ></path>
          <path
            d="m 2.2342185,286.71699 1.3484938,1.34832 a 0.12935122,0.12935122 0 0 0 0.1827605,-0.18294 L 2.416979,286.53405 a 0.12935122,0.12935122 0 0 0 -0.1827605,0.18294 z"
            stroke="none"
          ></path>
          <path
            d="m 6.2206975,284.95853 v 1.90682 a 0.12937727,0.12937727 0 0 0 0.2587545,0 v -1.90682 a 0.12937727,0.12937727 0 0 0 -0.2587545,0 z"
            stroke="none"
          ></path>
        </g>
      </svg>
    </div>
  );
}
