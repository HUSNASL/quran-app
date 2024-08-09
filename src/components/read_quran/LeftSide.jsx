import HeaderSection from "./Headersection";
import ItemAyat from "./ItemAyat";

export default function LeftSide({
  verses,
  surahName,
  surahNumber,
  loadingDetail
}) {
  return (
    <>
      <div className="bg-white basis-3/4 flex flex-col">
        <HeaderSection surahName={surahName} surahNumber={surahNumber?.id} />
        {/* List Ayat */}
        <div className=" w-full h-full">
          {Array.isArray(verses) &&
            verses.map((verse, index) => (
              <ItemAyat
                key={index}
                verseArab={verse.text_uthmani}
                meaning={verse.translation}
                loadingDetail={loadingDetail}
              />
            ))}
        </div>
      </div>
    </>
  );
}
