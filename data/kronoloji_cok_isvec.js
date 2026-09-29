// -*- coding: utf-8 -*-
// =====================================================================
// ISVEC — çok künyeli kronoloji (KRONO-KUZEY-0929, 29 Eylül 2026)
// =====================================================================
// window.KRONOLOJI_COK_ISVEC — şartname oturumlar/KRONO-KUZEY-0929.md + KRONO-DUNYA-0929-ORTAK §4.1
// (COK yolu: app.js cokTarafliKronolojiEkle her maddeyi devlet/devletler künyesine EKLER).
//
// İKİ KESİM:
//  ① TAŞINAN — data/kronoloji_isvec.js'teki, künyenin [f,t) penceresi DIŞINA düşen maddeler
//     (M-5416: madde olayın günü VAR OLAN künyeye bağlanır, ardıla geriye bağlanmaz).
//     Madde METNİ DEĞİŞTİRİLMEDİ; yalnız `devlet`/`devletler` ve `tasindi` eklendi.
//     Eski dosyada bağlayıcı bunları dosya adındaki künyeye (rusya/lehistan/isvec)
//     bağlıyordu — KRONO-BAGLAMA M-5427: "bağlı dosyada devlet: alanı İŞE YARAMAZ".
//  ② YENİ — denetim/SENKRON-DEFTER-0929.json paket["KRONO-KUZEY-0929"] net olay
//     adaylarından, kaynağı bulunanlar. Veri tablosu: denetim/ARAC-KRONO-KUZEY-0929-YENI.py
//
// 🔴 KAYNAK DAMGASI — "[özet]": BRE (bigenc.ru), Britannica ve bazı kurumsal sayfalar
//    bu oturumdan açılamadı (HTTP 401/403). Tarih, arama motorunun o sayfadan çıkardığı
//    özetten okundu; adres yazıldı ki elle teyit edilsin. "[özet]" = sayfa okunarak
//    doğrulandı DEĞİLDİR. TDV slug'ları gövdesi çekilerek okundu.
// 🔴 TAKVİM: kaynağın takvimi ÇEVRİLMEDEN yazıldı (VERI-YAPISI §59); `gun:` söyler.
//    Rus kaynakları 1918 öncesi Jülyen verir; "hesap" yazan karşılık bizim hesabımızdır.
// Rapor: denetim/KRONO-KUZEY-0929.md
// =====================================================================
window.KRONOLOJI_COK_ISVEC = [
// ── ① TAŞINAN (6) — kronoloji_isvec.js ──────────────────────────────
{ t:"1397-06-17", b:"Kalmar Birliği kuruldu", tur:"kurulus", onem:3, dunya:3, kapsam:"dis",
  etiket:["kurulus","siyaset","konu-siyasi"],
  d:"Danimarka Kraliçesi I. Margrethe'nin öncülüğünde Danimarka, Norveç ve İsveç, Kalmar'da tek bir hanedan altında birleşti. İsveç bu birlik içinde 1521'e dek — aralıklı isyanlarla — kaldı; birliğin kendisi bu dosyanın devleti değildir ama İsveç Krallığı'nın doğrudan öncülü olduğu için başlangıç maddesi olarak eklendi.",
  kaynak:"Franklin D. Scott, Sweden: The Nation's History", yer_id:"Kalmar",
  devletler:["isvec-birlik-oncesi", "danimarka", "norvec-kralligi"], tasindi:"kronoloji_isvec.js → KRONO-KUZEY-0929 (künye penceresi dışı; M-5416)" },
{ t:"1434-01-01", b:"Engelbrekt İsyanı başladı", tur:"isyan", onem:4, dunya:2, kapsam:"dis",
  etiket:["isyan","siyaset","konu-siyasi","konu-isyan"],
  yer_id:"",
  d:"Dalarna maden bölgesinin madencileri ve köylüleri, Danimarka kralı Erik'in ağır vergilerine karşı Engelbrekt Engelbrektsson önderliğinde ayaklandı. İsyan bastırıldı ve Engelbrekt 1436'da öldürüldü, ama hareket İsveç'te birlik krallığına karşı ilk geniş çaplı direniş ve sonraki Sture dönemi özerkliğinin öncüsü sayılır.",
  kaynak:"Franklin D. Scott, Sweden: The Nation's History", kapsam_genis:true,
  devlet:"isvec-birlik-oncesi", tasindi:"kronoloji_isvec.js → KRONO-KUZEY-0929 (künye penceresi dışı; M-5416)" },
{ t:"1471-10-10", b:"Brunkeberg Savaşı — Sten Sture'nin zaferi", tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","siyaset","konu-askeri","konu-siyasi"],
  yer_id:"",
  d:"Stockholm yakınlarındaki Brunkeberg tepesinde İsveç kuvvetleri, Danimarka Kralı Christian I'in ordusunu yendi. Zafer, Sten Sture'nin naip (riksföreståndare) olarak fiilî bağımsız yönetimini pekiştirdi ve birlik krallarının İsveç üzerindeki denetimini sonraki elli yıl boyunca aralıklı hâle getirdi.",
  kaynak:"Franklin D. Scott, Sweden: The Nation's History", yer_kon:[59.3293,18.0686],
  devlet:"isvec-birlik-oncesi", tasindi:"kronoloji_isvec.js → KRONO-KUZEY-0929 (künye penceresi dışı; M-5416)" },
{ t:"1477-01-01", b:"Uppsala Üniversitesi kuruldu", tur:"kultur", onem:3, dunya:1, kapsam:"ic",
  etiket:["egitim","kultur","konu-kultur","konu-egitim"], yer_id:"Uppsala",
  d:"İskandinavya'nın ilk üniversitesi, Uppsala Başpiskoposu Jakob Ülvsson'un girişimiyle papalık onayıyla kuruldu. Üniversite sonraki yüzyıllarda Linnaeus ve Celsius gibi isimlerle İsveç'in bilimsel merkezi hâline gelecekti.",
  kaynak:"Franklin D. Scott, Sweden: The Nation's History",
  devlet:"isvec-birlik-oncesi", tasindi:"kronoloji_isvec.js → KRONO-KUZEY-0929 (künye penceresi dışı; M-5416)" },
{ t:"1520-11-08", b:"Stockholm Kanlı Düğünü", tur:"diger", onem:5, dunya:2, kapsam:"dis",
  etiket:["siyaset","kayip","konu-askeri","konu-siyasi","konu-sosyal"],
  yer_id:"",
  d:"Kral Christian II, taç giyme törenini takip eden üç gün boyunca Stockholm'de yaklaşık seksen İsveç soylusunu ve din adamını idam ettirdi. Katliam, Gustav Eriksson (Vasa) önderliğindeki ayaklanmayı tetikledi ve Kalmar Birliği'nin sonunu getiren zincirin ilk halkası oldu.",
  kaynak:"Franklin D. Scott, Sweden: The Nation's History", yer_kon:[59.3293,18.0686],
  devletler:["isvec-birlik-oncesi", "danimarka"], tasindi:"kronoloji_isvec.js → KRONO-KUZEY-0929 (künye penceresi dışı; M-5416)" },
{ t:"1521-01-01", b:"Gustav Vasa'nın ayaklanması Dalarna'da başladı", tur:"isyan", onem:5, dunya:2, kapsam:"ic",
  etiket:["isyan","siyaset","konu-siyasi","konu-isyan"],
  yer_id:"",
  d:"Danimarka'dan kaçan Gustav Eriksson, Dalarna'nın maden köylülerini Christian II'ye karşı silahlandırdı. Lübeck'ten aldığı destekle hızla büyüyen ayaklanma iki yıl içinde bütün İsveç'i kapsayacak ve Vasa hanedanının kuruluşuna yol açacaktı.",
  kaynak:"Franklin D. Scott, Sweden: The Nation's History", kapsam_genis:true,
  devlet:"isvec-birlik-oncesi", tasindi:"kronoloji_isvec.js → KRONO-KUZEY-0929 (künye penceresi dışı; M-5416)" },
];
