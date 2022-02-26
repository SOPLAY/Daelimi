import Logo from "../../public/image/ico.svg";
export default function ChatingMessageBox({ user, message, time }) {
  return (
    <div className={`flex mt-2 ml-i mb-2 ${user && "justify-end"}`}>
      <div className={`flex ${user || "flex-row-reverse"}`}>
        <div className={`flex justify-center items-end mx-2 mb-2 text-gray-400 text-xs`}>
          {time}
        </div>

        <div
          className={`max-w-xs rounded-md p-2 shadow-lg ${user ? "bg-yellow-200" : "bg-blue-200"} `}
        >
          {message}
        </div>

        {user || (
          <div className="flex justify-center items-start ">
            <Logo width={40} height={40} />
          </div>
        )}
      </div>
    </div>
  );
}
