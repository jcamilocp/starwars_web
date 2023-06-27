const Layout = ({children}) => {
  return (
    <div className="flex flex-col items-center mt-16 w-full min-h-screen h-full bg-slate-600">
      {children}
    </div>
  );
}

export default Layout;
