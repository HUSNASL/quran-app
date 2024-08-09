export default function HeaderSection({ surahName, surahNumber }) {
    return (
      <div className="h-16 w-full flex justify-between items-center px-8 py-5 border-b-2 border-themeColor-400 shadow-lg bg-themeColor-500">
        <h3 className="text-2xl font-bold text-themeColor-400 ">
          {surahName} {surahNumber ? `(${surahNumber})` : ""}
        </h3>
  
        <img src="high-volume.png" alt="volume.png" height={30} width={30} />
      </div>
    );
  }