import Logo from "./svg/daelimLogo.svg";

export default function MessageOutput({ message, user, time }) {
  return (
    <div className={`flex mt-2 ml-1 mb-2 ${user && "justify-end"}`}>
      {user || (
        <div className="flex justify-center items-start mx-1 mt-2">
          <Logo width={40} height={40} />
        </div>
      )}

      {user ? (
        <div className="flex">
          <div className="flex justify-center items-end mr-2 mb-2 text-gray-400 text-xs">
            {time}
          </div>
          <div className="bg-yellow-200 max-w-xs rounded-md p-2 shadow-lg">
            {message}
          </div>
        </div>
      ) : (
        <div className="flex">
          <div className="flex">
            <div className="flex bg-sky-200 max-w-sm rounded-md p-2 items-center shadow-lg">
              {message}
            </div>
            <div className="flex justify-center items-end ml-2 mb-2 text-gray-400 text-xs">
              {time}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
