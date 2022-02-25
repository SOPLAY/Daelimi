import DarkModeSwitch from "./DarkMode";

export default function Header() {
  return (
    <div className="flex  py-2  px-5 items-center dark:bg-blue-900 duration-500 rounded-b-lg">
      <b className="dark:text-white ">Dalimi</b>
      <div className="ml-auto  ">
        <DarkModeSwitch />
      </div>
    </div>
  );
}
