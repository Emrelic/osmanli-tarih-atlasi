// =====================================================================
// H-0095 — BEŞ YENİ NOKTA · SAĞ YAKA UKRAYNA / PODOLYA / VOLHİNYA
// DALGA-0052 · 16 Eylül 2026 · araştıran HARITA-VERI (denetim/YAMA-0052-UKRAYNA.json
// kalem 2-6, rapor denetim/HARITA-VERI-0916.md) · uygulayan UYGULA
//
// AD ALANI (§7): data/yerlesimler_ukrayna_0916.js → window.YERLESIMLER_UKRAYNA_0916
// BAĞLAMA: arac/girdi.py GIRDI_DOSYALARI (UYGULA) + index.html satırı (UI'ye istendi)
//
// NİÇİN (§2 NOKTASIZLIK): Bar ile Meciboj petekleri kuzeye/doğuya, Berdiçev ve
// Jitomir boşluğuna uzuyordu; Bratslav voyvodalığının merkezi Vinnitsa'da ve
// Bar ile Uman arasındaki 150 km'de hiç nokta yoktu.
// KAYNAK: Internet Encyclopedia of Ukraine (CIUS) maddeleri + TDV bucas-antlasmasi;
// koordinatlar GeoNames. Komşu günleri kayıtların kaynak alanında AÇIKÇA yazılı (§4).
// v: 1672-10-18 → 1699-01-26 Bucaş ve Karlofça maddelerine 0 gün (Değişmez 2).
// ⚠️ 1648-1667 Hetmanlık dönemi komşular (Uman, Kiev) gibi lehistan — kimlik yok, borç.
// =====================================================================
window.YERLESIMLER_UKRAYNA_0916 = [
  { ad:"Vinnitsa (Vinnytsia)", tur:"sehir", lat:49.232, lon:28.469, g:0, k:3, kur:"1363-01-01", s:[{f:"1363-01-01",t:"1569-07-01",d:"litvanya-buyuk-dukalik"},{f:"1569-07-01",t:"1672-10-18",d:"lehistan"},{f:"1699-01-26",t:"1793-01-23",d:"lehistan"},{f:"1793-01-23",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], v:[{f:"1672-10-18",t:"1699-01-26",k:"Sağ Yaka Ukrayna (Osmanlı himayesindeki hatmanlık)",statu:"vassal"}], kaynak:"IEU Vinnytsia (CIUS): ilk anılış 1363 Litvanya kalesi; 1672-99 Türk hâkimiyeti; 1793 Rusya. Gün 1672-10-18 = Bucaş (TDV bucas-antlasmasi, 4. madde Ukrayna Kazaklar'a). kur YIL hassasiyetinde." },
  { ad:"Braslav (Bratslav)", tur:"kale", lat:48.823, lon:28.938, g:0, k:3, kur:"1400-01-01", s:[{f:"1400-01-01",t:"1569-07-01",d:"litvanya-buyuk-dukalik"},{f:"1569-07-01",t:"1672-10-18",d:"lehistan"},{f:"1699-01-26",t:"1793-01-23",d:"lehistan"},{f:"1793-01-23",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], v:[{f:"1672-10-18",t:"1699-01-26",k:"Sağ Yaka Ukrayna (Osmanlı himayesindeki hatmanlık)",statu:"vassal"}], kaynak:"IEU Bratslav: 14. yy'da iyi biliniyor (kur 1400 = ALT SINIR, kuruluş yılı değil); 1648-1712 Kazak alay kasabası; Rusya'da Podolya guberniyası. 1793 günü komşudan: Vinnitsa · IEU Vinnytsia (aynı voyvodalık, aynı paylaşım)." },
  { ad:"Kostantinov (Starokostiantyniv)", tur:"kale", lat:49.755, lon:27.212, g:0, k:3, kur:"1571-01-01", s:[{f:"1571-01-01",t:"1793-01-23",d:"lehistan"},{f:"1793-01-23",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"IEU Starokostiantyniv: 1560'larda Ostrozki kurdu, kale kalıntısı 1571 (kur 1571 = ALT SINIR); Volhinya'da; 1793 Rusya." },
  { ad:"Jitomir (Zhytomyr)", tur:"sehir", lat:50.262, lon:28.679, g:0, k:3, s:[{f:"1281-01-01",t:"1320-01-01",d:"altinorda"},{f:"1320-01-01",t:"1569-07-01",d:"litvanya-buyuk-dukalik"},{f:"1569-07-01",t:"1793-01-23",d:"lehistan"},{f:"1793-01-23",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"IEU Zhytomyr: 1240 kroniklerde; 1320 Gediminas Litvanya'ya kattı; 1667 Andruşova ile Lehistan'a iade; 1793 paylaşımda Rusya." },
  { ad:"Berdiçev (Berdychiv)", tur:"sehir", lat:49.894, lon:28.582, g:0, k:3, kur:"1545-01-01", s:[{f:"1545-01-01",t:"1569-07-01",d:"litvanya-buyuk-dukalik"},{f:"1569-07-01",t:"1793-01-23",d:"lehistan"},{f:"1793-01-23",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"IEU Berdychiv: ilk belge 1545; 1569 Litvanya'dan Polonya'ya; 1593 kale. 1793 YILI komşudan: Jitomir · IEU Zhytomyr (aynı Kiev voyvodalığı, 44 km, aynı paylaşım)." }
];
