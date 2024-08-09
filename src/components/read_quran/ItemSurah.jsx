export default function ItemSurah({
    number,
    name_simple,
    translated_name,
    revelation_place,
    verses_count,
  }) {
    return (
      <div className="h-25 w-full border-b-2 border-themeColor-400 flex mb-2 hover:cursor-pointer">
        <div className="basis-12 flex justify-end mr-4">
          <h3 className="text-lg font-bold text-themeColor-400">{number}</h3>
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-bold text-themeColor-400">{name_simple}</h3>
          <p className="text-base font-bold text-themeColor-700">
            {translated_name}
          </p>
          <span className="text-base font-light text-themeColor-700">
            {revelation_place}, {verses_count} อายัต
          </span>
        </div>
      </div>
    );
  }