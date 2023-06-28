import { useEffect } from "react";
import { useAuth } from "./auth";

const Layout = ({children}) => {
  const auth = useAuth();

  useEffect(() => {
    setTimeout(() => {
      if(auth.message.text)
        auth.setUpMessage();
    }, 3000);
  });

  const resolveClass = () => {
    if(!auth.message || !auth.message.text)
      return "hidden";

    return auth.message.type === auth.MESSAGE_TYPES.success ? "bg-green-800" : "bg-red-800";
  };

  return (
    <div className="flex flex-col items-center mt-16 w-full min-h-screen h-full bg-slate-600">
      {children}
      {
        auth.message.text &&
          <div className={`${resolveClass()} fixed bottom-0 right-0 p-4 text-white`}>{auth.message.text}</div>
      }
    </div>
  );
}

export default Layout;
