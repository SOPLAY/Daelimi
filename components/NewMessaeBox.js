import Logo from "../public/image/logo.svg";
export default function NewMessageBox({ message, user }) {
  return (
    <div className={`flex mt-2 ${user && "justify-end"}`}>
      {user ? (
        <div className="bg-yellow-200 max-w-xs p-2 rounded-md">{message}</div>
      ) : (
        <div className="flex">
          <div className="w-10 h-10 flex justify-center items-center mx-1">
            <Logo />
          </div>
          <div className="bg-blue-300 max-w-xs p-2 rounded-md flex">
            {message}
          </div>
        </div>
      )}
    </div>
  );
}
