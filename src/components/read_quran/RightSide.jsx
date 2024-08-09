import { useState } from "react";
import ListSurah from "./ListSurah";
import InputSearch from "./InputSearch";

export default function RightSide({ listSurah, fetchDetailSurah }) {
  const [search, setSearch] = useState("");
  const [listSurahBaru, setListSurahBaru] = useState([]);
  function onChangeHandler(e) {
    const value = e.target.value;
    setSearch(value);
  
    const listSurahTemp = listSurah.filter((surah) =>
      surah.name_simple.toLowerCase().includes(value.toLowerCase()) ||
      surah.id.toString().includes(value)
    );
    
    setListSurahBaru(listSurahTemp);
  }
  
  

  return (
    <>
      <div className="bg-themeColor-500 basis-1/4 flex flex-col h-full fixed right-0 ">
        {/* search surah */}
        <InputSearch value={search} onChange={onChangeHandler} />
        {/* List surah name */}
        <ListSurah
          listSurah={search ? listSurahBaru : listSurah}
          fetchDetailSurah={fetchDetailSurah}
        />
      </div>
    </>
  );
}
