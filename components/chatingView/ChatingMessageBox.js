import Logo from "../../public/image/ico.svg";
export default function ChatingMessageBox({ user, message, time }) {
  return (
    <div className={`flex mt-3 md:mt-8 ml-i mb-2 ${user && "justify-end"}`}>
      <div className={`flex ${user || "flex-row-reverse"}`}>
        <div className={`flex justify-center items-end mx-2 mb-2 text-gray-400 text-xs`}>
          {time}
        </div>

        <div
          className={`text-sm md:text-base md:max-w-md rounded-md p-2 shadow-md ${
            user
              ? "max-w-[250px] bg-yellow-200 shadow-yellow-500/30"
              : "max-w-[220px] bg-blue-200 shadow-blue-500/30 "
          } `}
        >
          {message}
        </div>

        {user || (
          <div className="flex justify-center items-start mr-1 md:mr-2">
            <Logo width={40} height={40} />
          </div>
        )}
      </div>
    </div>
  );
}
