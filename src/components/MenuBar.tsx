interface MenuBarParams {
    children: React.ReactNode;
};

const MenuBar = ({children} : MenuBarParams) => {
  return (
    <div className="flex justify-center">
      <div className="fixed top-5 left-1/2 transform -translate-x-1/2 flex items-center flex-row-reverse justify-between 
    pt-4 pb-3 px-5 z-50 rounded-lg shadow-lg w-[90%] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 border border-gray-900">
          {children}
      </div>
    </div>
  );
}

export default MenuBar;
