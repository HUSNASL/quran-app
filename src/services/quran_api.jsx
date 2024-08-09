export const QuranApi = {
  getSurah: async function () {
    try {
      const response = await fetch("https://api.quran.com/api/v4/chapters");
      const surah = await response.json(); // รอการแปลง JSON ก่อนใช้งาน
      console.log("api", surah);
      return surah;
    } catch (e) {
      console.log(e.error());
    }
  },
  //   getDetailSurah: async function (id) {
  //     try {
  //         const response = await fetch(
  //             `https://api.quran.com/api/v4/quran/translations/:translation_id?chapter_number=${id}`
  //           );
  //           const data = await response.json();
  //           return data;

  //     } catch (err) {
  //       console.log(err);
  //     }
  //   },
  getDetailSurah: async function (chapterId) {
    try {
      let allVerses = [];
      let page = 1;
      let hasMorePages = true;
  
      while (hasMorePages) {
        const chapterResponse = await fetch(
          `https://api.quran.com/api/v4/verses/by_chapter/${chapterId}?page=${page}`
        );
        const chapterData = await chapterResponse.json();
  
        allVerses = [...allVerses, ...chapterData.verses];
  
        // ถ้าจำนวนข้อมูลที่ได้รับมาในหน้าน้อยกว่า limit หรือไม่มีข้อมูลแล้ว ให้หยุด
        if (chapterData.verses.length < 10) {
          hasMorePages = false;
        } else {
          page++;
        }
      }
  
      const indopakResponse = await fetch(
        `https://api.quran.com/api/v4/quran/verses/indopak`
      );
      const indopakData = await indopakResponse.json();
  
      const translationResponse = await fetch(
        `https://api.quran.com/api/v4/quran/translations/230?chapter_number=${chapterId}`
      );
      const translationData = await translationResponse.json();
  
      const combinedVerses = allVerses.map((chapterVerse) => {
        const matchingIndopakVerse = indopakData.verses.find(
          (indopakVerse) => indopakVerse.verse_key === chapterVerse.verse_key
        );
  
        const matchingTranslation = translationData.translations.find(
          (translation, index) =>
            translation.text.startsWith(`[${chapterVerse.verse_number}]`) ||
            index === chapterVerse.verse_number - 1
        );
  
        return {
          ...chapterVerse,
          text_uthmani: matchingIndopakVerse
            ? matchingIndopakVerse.text_indopak
            : null,
          translation: matchingTranslation ? matchingTranslation.text : null,
        };
      });
  
      return combinedVerses;
    } catch (err) {
      console.error("Error fetching verses:", err);
      throw err;
    }
  }
}
  