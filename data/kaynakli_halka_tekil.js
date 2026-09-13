// KAYNAKLI SAHİPLİK HALKASI — tekil tanıklıklar (tohum)
// Yazan: C-HALKA-ALTYAPI · 13 Eylül 2026 · şema: VERI-YAPISI.md "Kaynaklı sahiplik halkası"
// Ad alanı: data/kaynakli_halka_tekil.js → window.KAYNAKLI_HALKA_TEKIL (CLAUDE.md §7)
// 🔴 Yalnız kaynağın söylediği; atlas dönemi/günü dayanak DEĞİL (§4).
window.KAYNAKLI_HALKA_TEKIL = [
{ id:"tk-malaka-tdv", yer:"Malaka", devlet:"portekiz",
  f:"1511-08-10", t:"1641-01-01", kesinlik:{ f:"gun", t:"ay" },
  kaynak:{ ad:"TDV İslâm Ansiklopedisi, «Malaka» (İsmail Hakkı Göksoy, 2003)", slug:"malaka",
    alinti:"Malaka 10 Ağustos 1511 tarihinde Alfonso de Albuquerque tarafından ele geçirildi … Şehir 130 yıl Portekiz işgali altında kaldıktan sonra Ocak 1641'de Hollandalılar'ın eline geçti",
    gelenek:"TR" },
  rapor:"denetim/MALAKA-1511-0913.md §① (başlangıç) · bitiş cümlesi TDV gövdesinden 13 Eylül 2026'da C-HALKA-ALTYAPI okudu",
  not:"Atlas yerleşimi ve künye 1511-08-24 diyor — dayanağı bulunamadı (MALAKA §①). TDV 'işgal' kelimesini kullanıyor; atlasın `isg:` kategorisine EŞLENMEDİ, `tur` yazılmadı." },
{ id:"tk-bargiri-tdv-van", yer:"Bargiri (Muradiye)", devlet:"osmanli",
  f:"1558-01-01", t:"1740-01-01", kesinlik:"yil",
  kaynak:{ ad:"TDV İslâm Ansiklopedisi, «Van»", slug:"van",
    alinti:"Klasik Osmanlı sancakları ve ocaklık diye nitelendirilen sancaklar Adilcevaz, Bitlis, Erciş, Muş, Bargiri, … Mahmudi ve Kotur, Van eyaleti bünyesinde devamlılığı olan sancaklardır. · beylerbeyiliğe bağlı sancak sayısı 1558-1740 yılları arasında 13-34 arasında değişmiştir",
    gelenek:"TR" },
  rapor:"denetim/KOTUR-BARGIRI-0913.md §③",
  not:"Süreklilik ('devamlılığı olan') kaynakta; aralık kaynağın sancak sayımı bağlamı (1558-1740). Sancak başına ayrı başlangıç/bitiş günü VERİLMİYOR. 1548 edinim günü bu kaynakta yok." },
{ id:"tk-kotur-tdv-van", yer:"Kotur", devlet:"osmanli",
  f:"1558-01-01", t:"1639-01-01", kesinlik:"yil",
  kaynak:{ ad:"TDV İslâm Ansiklopedisi, «Van»", slug:"van",
    alinti:"… Mahmudi ve Kotur, Van eyaleti bünyesinde devamlılığı olan sancaklardır. · beylerbeyiliğe bağlı sancak sayısı 1558-1740 yılları arasında 13-34 arasında değişmiştir",
    gelenek:"TR" },
  rapor:"denetim/KOTUR-BARGIRI-0913.md §③",
  not:"Bitiş DARALTILDI: TDV maku — '1639 yılında IV. Murad … Kasrışîrin Antlaşması çerçevesinde Safevîler'den bölgede bulunan Kotur Kalesi'yle birlikte Mâkû Kalesi'nin de yıkılmasını istedi … Kotur ve Mâkû, IV. Murad'ın ölümünden sonra İranlılar tarafından tekrar işgal edildi.' İkinci kaynak yalnız DARALTIR, genişletmez (şema kuralı)." }
];
