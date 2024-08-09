export default function InputSearch() {
    return (
      <div className="h-20 w-full flex flex-col justify-center items-center mb-4 space-y-2">
        <h5 className="text-white font-medium text-lg">
          Search surah you like...
        </h5>
        <div className="relative bg-white w-full h-8 mx-4 px-8 py-1 rounded-lg">
          <img
            src="search.png"
            width={15}
            height={15}
            alt="search icon"
            className="absolute top-2 left-4"
          />
          <input
            className="w-full h-full py-2 ml-2"
            type="text"
            placeholder="search..."
          />
        </div>
      </div>
    );
  }