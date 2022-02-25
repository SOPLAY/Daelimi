import DarkModeSwitch from "./DarkMode";

export default function Header({ HeaderTitle }) {
  return (
    <div className="flex py-2 px-5 items-center dark:bg-blue-900 duration-500 rounded-b-xl h-[5%]">
      <b className="text-black dark:text-white ">{HeaderTitle}</b>
      <div className="ml-auto  ">
        <DarkModeSwitch />
      </div>
    </div>
  );
}
