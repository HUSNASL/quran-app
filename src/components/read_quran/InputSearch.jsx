export default function InputSearch({ value, onChange }) {
  return (
    <div className="bg-themeColor-400 w-full h-24 flex justify-center items-center  ">
      <div className="relative bg-white w-full h-1/3 mx-4 px-8 py-1 rounded-lg">
        <img
          src="search.png"
          width={15}
          height={15}
          alt="search icon"
          className="absolute top-2 left-4"
        />
        <input
          className="w-full h-full py-2 ml-2"
          placeholder="Search Surah"
          type="text"
          value={value}
          onChange={(e) => onChange(e)}
        />
        <img
          src="close.png"
          width={12}
          height={12}
          alt="close icon"
          className="absolute top-2 right-4 cursor-pointer"
          onClick={() => onChange({ target: { value: "" } })}
        />
        </div>
        
    </div>
  );
}
