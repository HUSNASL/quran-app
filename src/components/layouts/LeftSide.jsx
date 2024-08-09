import Logo from "./Logo";
import MenuList from "./MenuList";
import InputSearch from "./InputSearch";

export default function LeftSide({
  menus,
  onHandleClickMenu,
  selectedPage,
  isMenuVisible,
}) {
  return (
    <>
      <div className="bg-themeColor-400 basis-1/4 flex flex-col pt-4 px-4 items-center fixed h-full">
        <Logo onHandleClickMenu={onHandleClickMenu} menu={menus[0]} />
        <InputSearch />
          <MenuList
            menus={menus}
            onHandleClickMenu={onHandleClickMenu}
            selectedPage={selectedPage}
            isMenuVisible={isMenuVisible}
          />
      </div>
    </>
  );
}
