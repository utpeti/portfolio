interface MenuBarParams {
    children: React.ReactNode;
};

const MenuBar = ({children} : MenuBarParams) => {
  return (
    <div className="flex items-center flex-row-reverse justify-between pt-4 max-w-[90%] fixed top-5 z-50 rounded-lg shadow-lg w-full self-auto
 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 border border-gray-900">
        {children}
    </div>
  ) 
}

export default MenuBar;
