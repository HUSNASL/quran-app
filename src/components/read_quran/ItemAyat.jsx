import Loading from "../Loading";

export default function ItemAyat({ loadingDetail, verseArab, meaning }) {
  if (loadingDetail) {
    return <Loading />;
  }

  return (
    <div className="w-full px-6 py-4 border-b border-gray-200 bg-themeColor-100 relative flex flex-col ">
      <div className="w-full h-full flex justify-end mb-4 amiri-quran-regular">
        <h5 className="text-lg font-bold">{verseArab}</h5>
      </div>
      <span className="text-sm font-light">{meaning}</span>
      <div className=" h-6 w-6 absolute top-5 left-5">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-white rounded"></div>
          <img
            src="unbookmark.png"
            alt="unbookmark"
            width={20}
            height={20}
            className="relative z-10 rounded"
          />
        </div>
      </div>
    </div>
  );
}
