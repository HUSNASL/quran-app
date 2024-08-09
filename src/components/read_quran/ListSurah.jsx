import ItemSurah from "./ItemSurah";

export default function ListSurah({ listSurah, fetchDetailSurah }) {
  return (
    <div className="h-full w-full p-4 overflow-y-auto  ">
      {Array.isArray(listSurah) &&
        listSurah.map((surah, index) => (
          <div
            key={index}
            onClick={() => {
              fetchDetailSurah(surah.id);
              console.log(surah.id);
            }}
          >
            <ItemSurah
              number={surah.id}
              name_simple={surah.name_simple}
              translated_name={surah.translated_name.name}
              revelation_place={surah.revelation_place}
              verses_count={surah.verses_count}
            />
          </div>
        ))}
    </div>
  );
}
