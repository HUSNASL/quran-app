import LeftSide from "../../components/layouts/LeftSide";
import ReadQuran from "../read_quran/index";
import Bookmark from "../bookmark/index";
import Setting from "../setting/index";
import {  useState } from "react";
import Home from '../home/index';

export default function Layouts() {
  const menus = [
    { name: "Home", page: <Home /> },
    { name: "Read Quran", page: <ReadQuran /> },
    { name: "Bookmarks", page: <Bookmark /> },
    { name: "Settings", page: <Setting /> },
  ];
  const [selectedPage, setSelectedPage] = useState(menus[0]);
  const [isMenuVisible, setIsMenuVisible] = useState(true);
function onHandleClickMenu(menu) {
  console.log(menu)
  setSelectedPage(menu)
  setIsMenuVisible(false)
}
  return (
    <div className="h-screen w-full flex">
      {isMenuVisible && (
        <LeftSide
          menus={menus}
          onHandleClickMenu={onHandleClickMenu}
          selectedPage={selectedPage}
          isMenuVisible={isMenuVisible}
        />
      )}
      <div className="h-full w-full">{selectedPage.page}</div>
    </div>
  );
}

