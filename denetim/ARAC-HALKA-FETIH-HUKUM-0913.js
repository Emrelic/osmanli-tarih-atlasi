// ARAC-HALKA-FETIH-HUKUM-0913 — HALKA-FETIH · 13 Eylül 2026
// ELLE OKUMA HÜKÜMLERİ (her tur) ve isabet. Ölçüt SABİT (rapor ⓪ Ö6): "madde metni bu yerin bu tarihte (verilen
// hassasiyetle) OSMANLI eline geçtiğini AÇIKÇA ya da çekirdek fetih kalıbıyla yabancı özne OLMADAN söylüyor mu;
// tanıklık cümleciği bir ele geçirme anlatıyor mu; kesinlik doğru mu". Kaynak gövdesi OKUNMADI.
// Örneklem: ARAC-HALKA-FETIH-TURET-0913.js --ornek (mulberry32 tohum 20260913).
// Kullanım: node denetim/ARAC-HALKA-FETIH-HUKUM-0913.js
const L = require("./ARAC-HALKA-KRONOLOJI-YUKLE-0913.js");
const TUR = [
  { tur: 1, havuz: 78, n: 50, kural: "a/c/d/e + B3 B4 B5", yanlis: {
      "hf-iskenderiye-1798": "k:savas — Napolyon'un işgali (General Bonapart'ın ordusu özne)",
      "hf-manisa-1390": "gun '1390 kışı' — yıl sınırı; alıntı beylik katılışı (bölge → merkez)",
      "hf-sennar-1821": "'Sennâr (Fûnc) Sultanlığı teslim oldu' — devlet adı, parantez POLITE'i gizledi",
      "hf-kordofan-1821": "'Mısır'ın Sudan hâkimiyeti' — kazanan Kavalalı Mısır'ı",
      "hf-mora-1825": "'Mora'nın merkezi düştü' — bölge noktası + 'Mısır kuvvetlerinin elinde'",
      "hf-sam-1832": "İbrâhim Paşa Şam'ı OSMANLI'dan aldı — ters yön",
      "hf-mekke-1517": "k:siyaset bîat; alıntı 'zaptı için asker sevketmeyi düşünmüş … vazgeçmişti'",
      "hf-mekke-1803": "özne Şerif Gālib (genitif + 'geri alması') — Osmanlı devleti değil",
      "hf-cetinje-1499": "alıntı 'manastırı … yerinde bırakıldı' — ele geçirme değil; bölge (Karadağ) → şehir",
      "hf-cetinje-1482": "k:vassal — tâbiiyet, doğrudan sahiplik değil" } },
  { tur: 2, havuz: 62, n: 50, kural: "+ FT1 k:fetih · FT2 Kavalalı · FT3 parantezli polite · FT4 dar fiil · FT5 kışı · FT6 genitif özne", yanlis: {
      "hf-dongola-1821": "'fetheden Kahire'dir, yöneten de Kahire olacaktır' — Kavalalı Mısır'ı",
      "hf-srebrenik-1512": "'Srebrenik banatlığının ilhakı' — polity adı (banatlık)" } },
  { tur: 3, havuz: 60, n: 60, sayim: true, kural: "+ FT2b Kahire · FT3b banatlık/voyvodalık", yanlis: {
      "hf-kahire-1517": "'ilk girişi' · 'tam kontrolü anlamına gelmiyordu' · alıntı gelecek zaman ('tamamlanacaktır')" } }
];
// Tur 4 (SON): FT7 sonrası havuz = tur 3 sayımının 59 DOĞRU kaydı; yeni kayıt 0 beklenir ve AŞAĞIDA SINANIR.
const TUR3_DOGRU = ["hf-bursa-1326","hf-iznik-1331","hf-izmit-1337","hf-rodos-1522","hf-serez-1383","hf-sofya-1385","hf-kastamonu-1392","hf-uskup-1392","hf-vidin-1396","hf-selanik-1430","hf-yanya-1430","hf-atina-1456","hf-semendire-1459","hf-trablus-1551","hf-temesvar-1552","hf-kanije-1600","hf-uyvar-1663","hf-edirne-1913","hf-mudanya-1321","hf-dimetoka-1361","hf-semendire-1439","hf-tebriz-1585","hf-sakiz-1695","hf-dir-iye-1818","hf-atina-1827","hf-karacahisar-1288","hf-antalya-1423","hf-gelibolu-1354","hf-avlonya-1417","hf-akcahisar-1478","hf-kemah-1515","hf-klis-1537","hf-lefkosa-1570","hf-bihac-1592","hf-yanikkale-1594","hf-bagdat-1638","hf-kamanice-1672","hf-cehrin-1678","hf-tebriz-1725","hf-aden-1538","hf-pecuy-1543","hf-taiz-1547","hf-ibrim-1555","hf-bicaye-1555","hf-sakiz-1566","hf-girne-1570","hf-samahi-1578","hf-baku-1583","hf-anabolu-1715","hf-modon-1715","hf-cuha-adasi-1715","hf-kirmansah-1723","hf-hemedan-1724","hf-revan-1724","hf-nahcivan-1725","hf-batum-1918","hf-kili-1484","hf-foca-1465","hf-mardin-1517"];
// Şüphe notu — YANLIŞ SAYILMADI (madde metnine göre doğru; kaynak/tarih yazımıyla gerilim var):
const SUPHE = {
  "hf-ibrim-1555": "madde 1555; CLAUDE.md §3.5.1 TDV sancak 1573 anıyor — kaynak okunmadı",
  "hf-dir-iye-1818": "ele geçiren İbrâhim Paşa (Kavalalı) — metin adını anmıyor; FT2 bu yüzden yakalamadı",
  "hf-antalya-1423": "metin 'Antalya'yı kuşatmasıyla son buldu' — ele geçirme fiili başlıkta ('alınışı')",
  "hf-mardin-1517": "şehir Ekim 1515'te Osmanlı eline geçmiş; 1517 KALENİN teslimi",
  "hf-cuha-adasi-1715": "üç yıl sonra Venedik'e geri verildi — nokta tanıklık, aralık değil",
  "hf-yanikkale-1594": "madde günü 27 Eylül; yaygın yazım 29 Eylül — kaynak okunmadı",
  "hf-cehrin-1678": "madde günü 19 Temmuz; yaygın yazım Ağustos 1678 — kaynak okunmadı"
};
global.window = {}; eval(L.oku("data/kaynakli_halka_fetih.js"));
const HF = window.KAYNAKLI_HALKA_FETIH || [], idler = HF.map(r => r.id);
console.log("TUR  havuz  n   yanlış  isabet");
for (const t of TUR) { const y = Object.keys(t.yanlis).length; console.log(String(t.tur).padEnd(5) + String(t.havuz).padEnd(7) + String(t.n).padEnd(4) + String(y).padEnd(8) + ((t.n - y) / t.n * 100).toFixed(1) + "%" + (t.sayim ? "  (SAYIM, tüm havuz)" : "") + "  · " + t.kural); }
const hepYanlis = new Set(TUR.flatMap(t => Object.keys(t.yanlis)));
const halaYanlis = idler.filter(i => hepYanlis.has(i));
const yeni = idler.filter(i => !TUR3_DOGRU.includes(i));
const kayip = TUR3_DOGRU.filter(i => !idler.includes(i));
console.log("4    " + String(HF.length).padEnd(7) + String(HF.length).padEnd(4) + String(halaYanlis.length + yeni.length).padEnd(8) +
  (HF.length ? ((HF.length - halaYanlis.length - yeni.length) / HF.length * 100).toFixed(1) : "—") + "%  (SON: yazılan dosya; tur 3 sayımında okunmamış kayıt YANLIŞ sayılır)");
console.log("  dosyada hâlâ yanlış hükümlü: " + halaYanlis.length + (halaYanlis.length ? " " + halaYanlis.join(",") : ""));
console.log("  tur 3'te okunmamış yeni kayıt: " + yeni.length + (yeni.length ? " " + yeni.join(",") : ""));
console.log("  tur 3 doğrusu olup düşen: " + kayip.length + (kayip.length ? " " + kayip.join(",") : ""));
console.log("\nŞÜPHE NOTLARI (yanlış sayılmadı): " + Object.keys(SUPHE).filter(k => idler.includes(k)).length);
for (const [k, v] of Object.entries(SUPHE)) if (idler.includes(k)) console.log("  " + k + ": " + v);
process.exit(halaYanlis.length || yeni.length ? 1 : 0);
