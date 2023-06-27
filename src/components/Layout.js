const Layout = ({children}) => {
  return (
    <div className="flex flex-col items-center mt-16 w-full">
      {children}
    </div>
  );
}

export default Layout;