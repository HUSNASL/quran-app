export default function MenuList({ menus, onHandleClickMenu, selectedPage ,isMenuVisible}) {
  return (
    <div className="w-full h-1/2 flex flex-col space-y-5 justify-center mb-4">
      {isMenuVisible && (menus.map((menu, index) =>
        index !== 0 ? (
          <div
            onClick={() => onHandleClickMenu(menu)}
            key={index}
            className={`h-10 flex justify-center items-center text-white font-semibold border-b-[1px] rounded-lg hover:cursor-pointer ${
              selectedPage.name === menu.name
                ? `bg-themeColor-300 rounded-lg`
                : `hover:bg-themeColor-300 hover:rounded-lg`
            }`}
          >
            {menu.name}
          </div>
        ) : (
          <div key={index}></div>
        )
      ))}
    </div>
  );
}
