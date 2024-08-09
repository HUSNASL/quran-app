import { useState, useEffect } from "react";
import LeftSide from "../../components/read_quran/LeftSide";
import RightSide from "../../components/read_quran/RightSide";
import { QuranApi } from "../../services/quran_api";
import Loading from "../../components/Loading";

export default function ReadQuran() {
  const [listSurah, setListSurah] = useState([]);
  const [verses, setVerses] = useState([]);
  const [selectedSurahName, setSelectedSurahName] = useState("");
  const [selectedSurahNumber, setSelectedSurahNumber] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingDetail, setLoadingDetail] = useState(true);
  useEffect(() => {
    getSurah();
    fetchDetailSurah(1);
  }, []);

  async function getSurah() {
    try {
      await QuranApi.getSurah().then((surah) => {
        setListSurah(surah.chapters);
        setLoading(false);
      });
    } catch (e) {
      console.log("error fetching surah", e);
    }
  }

  async function fetchDetailSurah(chapterId) {
    try {
      setLoadingDetail(true);
      const versesData = await QuranApi.getDetailSurah(chapterId);
      const cleanedVerses = versesData.map((verse) => ({
        ...verse,
        text_uthmani: verse.text_uthmani
          ? verse.text_uthmani.replace(/[^\u0600-\u06FF\s]/g, "")
          : "",
      }));
      setVerses(cleanedVerses);

      // Find the selected surah name from listSurah
      const selectedSurah = listSurah.find((surah) => surah.id === chapterId);
      setSelectedSurahName(selectedSurah ? selectedSurah.name_simple : "");

      const currentSurahData = listSurah.find(
        (surah) => surah.id === chapterId
      );
      setSelectedSurahNumber(currentSurahData);

      console.log("versesData", versesData);
      console.log("currentSurahData", currentSurahData);
    } catch (error) {
      console.error("Error fetching surah details:", error);
    } finally {
      setLoadingDetail(false);
    }
  }

  return (
    <>
      <div className=" flex w-full h-screen">
        <LeftSide
          verses={verses}
          surahName={selectedSurahName}
          surahNumber={selectedSurahNumber}
          loadingDetail={loadingDetail}
        />
        <RightSide listSurah={listSurah} fetchDetailSurah={fetchDetailSurah} />
      </div>
    </>
  );
}
