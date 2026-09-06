// ⑨ TRİYAJ ÇIKTISI — ÜRETEÇ. Sayılar iddia değil, ÖLÇÜM.
//
// Kovalar `YONTEM-1923-SINIR.md §②a`dan:
//   İLHAK   → metropol kimliği DOĞRU        HİMAYE → kendi kimliği + isg:
//   MANDA   → kendi kimliği                 SÖMÜRGE → kendi kimliği
// 🔴 BEŞİNCİ KOVA EKLENDİ — `KUSUR`: dördü de bu vakayı ifade edemiyor,
//   çünkü orada metropol kimliği YANLIŞ ÜLKEDE. Bu bir hukukî statü
//   sorusu değil bir VERİ HATASI.
//
// Üreteç her adayın TAM BİR kovaya düştüğünü sınar; düşmezse YAZMAZ.
const fs = require("fs"), path = require("path");
process.chdir(path.dirname(__dirname));

const taban = JSON.parse(fs.readFileSync("denetim/_triyaj_taban_amerika.json", "utf8"));
const ulke = JSON.parse(fs.readFileSync("denetim/_1783_ulke.json", "utf8"));
const yanlisUlke = new Set(ulke.filter(u => !u.abd_1923_dogru).map(u => u.ad));

// ---- KOVA KURALLARI — her biri GEREKÇELİ ----
const KURAL = [
  { kova: "KUSUR", test: a => yanlisUlke.has(a.ad),
    gerekce: "nokta-poligon (ne_10m_admin_0_countries) modern ülkeyi ABD DIŞI veriyor; 1923'te ABD/Kanada/Meksika sınırları bugünküydü ⇒ `abd` kimliği YANLIŞ ÜLKEDE" },
  { kova: "İLHAK", test: a => a.kimlik === "abd" && a.lon <= -129,
    gerekce: "ALASKA — 1867 Alaska Purchase, 1884 District, 1912 ORGANIZE TERRITORY (incorporated) ⇒ ABD'nin parçası, `abd` DOĞRU" },
  { kova: "İLHAK", test: a => a.ad === "Honolulu",
    gerekce: "HAWAII — 1898 ilhak (joint resolution), 1900 Territory of Hawaii (incorporated) ⇒ `abd` DOĞRU" },
  { kova: "İLHAK", test: a => a.ad === "San Juan" || a.ad === "San Germán",
    gerekce: "PORTO RİKO — 1898 Paris Antlaşması'yla İspanya'dan devredildi, 1917 Jones Act ile sakinleri ABD vatandaşı. 🟡 EN AZ NET KOVA: 'unincorporated territory' Avrupa sömürge modellerinden hiçbirine tam oturmuyor; §②a'nın dört kovası ABD toprak hukuku için TASARLANMAMIŞ" },
  { kova: "SÖMÜRGE", test: a => ["Belize Town"].includes(a.ad),
    gerekce: "İNGİLİZ HONDURASI — ayrı idare, 1862 koloni ilânı, 1871 taç kolonisi ⇒ kendi kimliği. Künye YOK (ölçüldü), `f:` tarihi açık" },
  { kova: "SÖMÜRGE", test: a => ["Spanish Town (Villa de la Vega)", "Port Royal", "Kingston"].includes(a.ad),
    gerekce: "JAMAİKA KOLONİSİ — 1655 fetih, 1670 Madrid Antlaşması. Künye ÖNERİLDİ: `ingiliz-jamaika`" },
  { kova: "SÖMÜRGE", test: a => ["Port of Spain (Puerto de España)", "San José de Oruña (St. Joseph)"].includes(a.ad),
    gerekce: "TRİNİDAD KOLONİSİ — 1797 fetih, 1802 Amiens. Künye ÖNERİLDİ: `ingiliz-trinidad`" },
  { kova: "SÖMÜRGE", test: a => ["Suva", "Levuka"].includes(a.ad),
    gerekce: "FİJİ KOLONİSİ — 1874 Deed of Cession (TDV `fiji` DOĞRULADI). Künye ÖNERİLDİ: `ingiliz-fiji`" },
  { kova: "SÖMÜRGE", test: a => a.ad === "Güney Georgia (Grytviken)",
    gerekce: "FALKLAND BAĞIMLILIKLARI — 🟡 kaydın KENDİ `not:`ı tarihi doğrulanmamış ilân ediyor; künye ÖNERİLMEDİ" },
  { kova: "SÖMÜRGE", test: a => a.ad === "Noumea (Yeni Kaledonya)",
    gerekce: "YENİ KALEDONYA — 1853 Fransız ilhakı, ayrı idare ⇒ kendi kimliği. ⚪ hukukî statü AYRICA ölçülmedi (ilhak mı sömürge mi — Fransa onu 'colonie' saydı)" },
  { kova: "SÖMÜRGE", test: a => ["Sisimiut (Holsteinsborg)", "Qeqertarsuaq (Godhavn)"].includes(a.ad),
    gerekce: "GRÖNLAND — Danimarka kolonisi 1721'den 1953'e (1953'te Danimarka'nın PARÇASI oldu, yani 1923'te DEĞİL) ⇒ kendi kimliği. 🔴 `danimarka` koordinatörün METROPOL listesinde YOKTU" },
];

const cikti = { İLHAK: [], HİMAYE: [], MANDA: [], SÖMÜRGE: [], KUSUR: [] };
const atanmayan = [];
for (const a of taban) {
  if (a.kapsanan) continue;                    // bekleyen yamada, konu değil
  const k = KURAL.find(r => r.test(a));
  if (!k) { atanmayan.push(a); continue; }
  cikti[k.kova].push({ ad: a.ad, lat: a.lat, lon: a.lon, kimlik: a.kimlik,
    donem: a.donem, dosya: a.dosya, gerekce: k.gerekce });
}
// 🔴 KUSUR KOVASI TABANDAN EKSİK GELİYOR — ve sebebi KENDİ KUTUM.
//   Kaba anakara kutum (24,5-49,4K / -125..-66,9B) Ontario ve Quebec'i
//   İÇİNE ALIYOR ⇒ Kahnawake · Ossossané · Sainte-Marie "anakarada" sayıldı
//   ve aday listesine HİÇ GİRMEDİ. Nokta-poligon testi onları buldu.
//   ⇒ Bir kutu ölçütü yalnız dışarıyı değil İÇERİYİ de kaçırır.
//   İlk koşuda KUSUR 2 çıktı, gerçek 5; fark tam bu üçü.
const tabanAdlari = new Set(taban.map(a => a.ad));
for (const u of ulke) {
  if (u.abd_1923_dogru || tabanAdlari.has(u.ad)) continue;
  cikti.KUSUR.push({ ad: u.ad, lat: +u.lat.toFixed(3), lon: +u.lon.toFixed(3),
    kimlik: "abd", donem: "1783-09-03 → " + u.son, dosya: u.dosya,
    gerekce: "nokta-poligon: modern ülke " + u.modern_ulke
      + " ⇒ `abd` YANLIŞ ÜLKEDE. 🔴 Aday listesine GİRMEMİŞTİ — kaba anakara"
      + " kutum onu 'anakarada' saydı; yalnız poligon testi buldu." });
}

// MANDA — taban listesinde YOK, çünkü `avustralya` METROPOL sayılmıyor.
// Ayrı ölçüldü (ARAC-MANDA-OKYANUSYA.js + ARAC-YENIGINE-ZINCIR.js).
for (const m of [
  ["Madang", -5.22, 145.79], ["Finschhafen", -6.6013, 147.8406],
  ["Herbertshöhe (Kokopo) — Rabaul", -4.35, 152.26]])
  cikti.MANDA.push({ ad: m[0], lat: m[1], lon: m[2], kimlik: "avustralya",
    donem: "1914-09-17 → 1923-10-29", dosya: "yerlesimler_emilme.js / _okyanusya.js",
    gerekce: "ALMAN YENİ GİNESİ → 17 Aralık 1920 MC C-TİPİ MANDASI (mandater Avustralya). §②a: MANDA → KENDİ KİMLİĞİ. Atlas Ortadoğu mandalarını böyle modelliyor (`suriye-lubnan-mandasi` · `filistin-mandasi`) ama Pasifik mandalarını MANDATERİN kimliğiyle boyuyor" });

let hata = 0;
if (atanmayan.length) {
  console.log("🔴 KOVASIZ KALAN " + atanmayan.length + ":");
  for (const a of atanmayan) console.log("   " + a.ad + "  " + a.kimlik + "  " + a.lon);
  hata++;
}
const toplam = Object.values(cikti).reduce((s, v) => s + v.length, 0);
// taban(kapsanmayan) + 3 MANDA + kutunun İÇİNDE kalıp poligonla bulunanlar
const disKusur = ulke.filter(u => !u.abd_1923_dogru && !tabanAdlari.has(u.ad)).length;
const beklenen = taban.filter(a => !a.kapsanan).length + 3 + disKusur;
console.log("   (beklenen = " + taban.filter(a => !a.kapsanan).length
  + " taban + 3 manda + " + disKusur + " poligonla bulunan = " + beklenen + ")");
if (cikti.KUSUR.length !== ulke.filter(u => !u.abd_1923_dogru).length) {
  console.log("🔴 KUSUR kovası poligon ölçümüyle uyuşmuyor: "
    + cikti.KUSUR.length + " ≠ " + ulke.filter(u => !u.abd_1923_dogru).length);
  hata++;
}
if (toplam !== beklenen) {
  console.log("🔴 SAYI TUTMADI: " + toplam + " ≠ " + beklenen); hata++;
}
for (const [k, v] of Object.entries(cikti))
  console.log((v.length ? "🟢" : "⚪") + " " + k.padEnd(9) + String(v.length).padStart(3));
if (hata) { console.log("\n🔴 " + hata + " kusur — ÇIKTI YAZILMADI"); process.exit(1); }

const J = {
  _NOT: "⑨ TRİYAJ METROPOL · AMERİKA + OKYANUSYA DİLİMİ · koordinatör 1.MURAT HÜDAVENDİGAR. Kovalar `YONTEM-1923-SINIR.md §②a`dan. 🔴 YAMA YAZILMADI — sevk 'kova ayrımı ve gerekçe yeter' diyor.",
  durum: "🔒 data/ ve arac/ DONUK (koşu 7b) — bütün çıktı `denetim/` altında",
  taban: {
    dilim: "KUZEY-AMERIKA 477 · GUNEY-ORTA-AMERIKA 180 · OKYANUSYA 165 = 822 nokta",
    aday: taban.length,
    bekleyen_yamada: taban.filter(a => a.kapsanan).length,
    triyaj_edilen: toplam,
    "🔴_KOORDINATORUN_METROPOL_LISTESI_EKSIKTI":
      "Alet sekiz Avrupa metropolüyle sınırlıydı. Dilimimde CANLI olan ikisi listede YOKTU: `danimarka` (Grönland 2 nokta) ve `abd` (44 nokta). Listeyi genişletmek 46 aday getirdi — ve İÇLERİNDEN BEŞ GERÇEK KUSUR çıktı. Bu bir kusur değil bir KAPSAM sınırı, ama sayılmasaydı dilimim eksik olurdu.",
    "🔴_VE_KENDI_KUTUM_DA_EKSIKTI":
      "Kaba anakara kutum (24,5-49,4K / -125..-66,9B) Ontario ve Quebec'i İÇİNE ALIYOR ⇒ `Kahnawake` · `Ossossané` · `Sainte-Marie` KUTUNUN İÇİNDE kaldı ve aday sayılmadı. Onları NOKTA-POLİGON testi buldu. ⇒ Bir kutu ölçütü hem dışarıyı hem İÇERİYİ kaçırabilir.",
  },
  YONTEM: {
    "🔴_KOMSU_OLCUTU_CURUDU":
      "İlk ölçütüm 'en yakın 6 komşunun 1923 kimliği' idi. İKİ YÖNDE DE yanıldı: SAHTE POZİTİF Chequamegon (Wisconsin) ve Michilimackinac (Michigan) — ikisi de ABD'de; SAHTE NEGATİF Ossossané ve Sainte-Marie (Ontario) — 'temiz' çıktılar. Ölçüt ülkeyi değil ATLASIN NOKTA YOĞUNLUĞUNU ölçüyordu (§11'in nehir geçiş metriği dersinin aynısı).",
    "🟢_YERINE_KONAN":
      "`veri-kaynak/ne_10m_admin_0_countries.geojson` (258 poligon) ile NOKTA-POLİGON. C13 ④ gereği kontrol satırları kondu ve GEÇTİ: Washington DC → United States · Ottawa → Canada · Mexico City → Mexico. Kontroller düşseydi sonuç KULLANILMAYACAKTI.",
    sinir: "⚠️ Modern ülke 1783 egemenliği DEĞİLDİR. Test 1923 UCUNU sınar, 1783 BAŞLANGICINI değil — ABD/Kanada/Meksika sınırları 1923'te bugünküydü. Başlangıç ayrı bir soru (Mound Key aşağıda).",
  },
  kovalar: cikti,
  "🔴_BESINCI_KOVA_NICIN_GEREKTI":
    "§②a'nın dört kovası HUKUKÎ STATÜ soruyor: bu toprak ilhak mı, himaye mi, manda mı, sömürge mi? Beş kayıt bu sorunun HİÇBİR cevabına girmiyor, çünkü orada metropol kimliği YANLIŞ ÜLKEDE — statü sorusu değil VERİ HATASI. Dördü zorlansaydı ya 'İLHAK' (yani DOĞRU) sayılıp gizlenirlerdi ya 'SÖMÜRGE' sayılıp yanlış bir künye önerisi doğururlardı.",
  "🔴_KUSUR_KIMIN": "Beş kusurlu kaydın BEŞİ DE `yerlesimler_kamerika.js`te — DUNYA-KAMERIKA-0903 partisi, yani BENİM. KAMERIKA turumda kaba Kanada kutumun ABD noktalarını yuttuğunu bulup elle düzeltmiştim; TERS YÖNÜ (ABD verilen noktaların Kanada/Meksika'da olması) HİÇ SINAMADIM. §3.5.1: bir sınır kayması önerildiğinde İKİ UÇ DA ölçülür.",
  AYRI_KALEM_MOUND_KEY: {
    olcum: "`Mound Key (Kalusa başkenti)` (26,43 · -81,85) modern ABD'de ⇒ 1923 ucu DOĞRU. AMA `abd 1783-09-03 → 1923-10-29` başlangıcı yanlış: 1783 Paris Antlaşması FLORİDA'YI İSPANYA'YA GERİ VERDİ ve Florida 1821'e kadar İspanyol kaldı.",
    kanit: "Atlasın KENDİ külliyatı bunu zaten doğru yazıyor: `St. Augustine` → `ingiltere 1763-02-10 → 1783-09-03 · ispanya 1783-09-03 → 1821-07-10`. Aynı gün, aynı yarımada, DOĞRU zincir.",
    sinif: "🔴 Kova dışı — 1923 kimliği doğru, 1783-1821 ARALIĞI yanlış. Kova ayrımı bunu göremez çünkü kovalar 1923 kesitine bakıyor.",
  },
  HIMAYE_KOVASI_BOS_AMA_BITISIGINDE_BIR_BULGU: {
    "0_mi_bakmadim_mi": "🟢 BAKTIM. Dilimimde metropol kimliği taşıyan HİÇBİR himaye kaydı yok.",
    bitisik_bulgu: "AMA `Lapaha (Muʻa)` (Tonga) §②a'nın HİMAYE tarifinin YARISINI karşılıyor: kendi kimliği VAR (`tonga-kralligi`) ama `isg:` ÖRTÜSÜ YOK (alan kümesi döküldü: `ad · g · k · kaynak · kur · lat · lon · s · tur`). Tonga 1900-1970 arası İngiliz HİMAYE devletiydi. §②a: HİMAYE → kendi kimliği **+ `isg:` örtüsü**.",
    damga: "🟡 Bu triyaj adayı DEĞİL (kimlik zaten doğru) — bitişik bir kalem. ⚪ Tonga himayesinin günü ÖLÇÜLMEDİ.",
  },
  ILHAK_MANDA_AYRIMI_TEK_ADADA: {
    olcum: "Yeni Gine adası 1923'te ÜÇ hukukî statü taşıyor ve atlas TARİHLERİ doğru ayırıyor ama KİMLİĞİ ayırmıyor:",
    PAPUA: "`Port Moresby` · `Samarai` → `ingiltere 1884-11-06 → 1906-09-01 · avustralya 1906-09-01 → 1923`. Papua 1888 İngiliz ilhakı, 1906'da Avustralya TOPRAĞI ⇒ İLHAK, `avustralya` DOĞRU.",
    MANDA: "`Madang` · `Finschhafen` · `Herbertshöhe (Kokopo) — Rabaul` → `almanya 1884-11-03 → 1914-09-17 · avustralya 1914-09-17 → 1923`. Alman Kaiser-Wilhelmsland, 17 Aralık 1920'de MC C-TİPİ MANDASI ⇒ MANDA, kendi kimliği olmalı.",
    HOLLANDA: "`Jayapura (Hollandia)` → `hollanda-dogu-hint` ⇒ zaten ayrı kimlik, DOĞRU.",
    "🔴_ASIL_BULGU": "Atlas AYNI HUKUKÎ KATEGORİYİ İKİ BÖLGEDE FARKLI modelliyor: Ortadoğu mandaları KENDİ kimliklerini almış (`suriye-lubnan-mandasi` 1920-07-01 · `filistin-mandasi` 1920-07-01 · `irak-kralligi` 1921-08-23 — üçü de künyede VAR), Pasifik mandaları MANDATERİN kimliğiyle boyanıyor. Bu bir tanecik tercihi değil, bölgeler arası TUTARSIZLIK.",
    kunye_taramasi: "🔴 617 künye Türkçe normalleştiriciyle `gine` · `papua` · `nauru` · `samoa` · `mikronezya` · `karolin` · `marshall` · `bismarck` · `kaiser` anahtarlarıyla tarandı — DOKUZUNDA DA eşleşme 0. Pasifik manda künyesi YOK.",
    tarih_notu: "⚠️ `1914-09-17` MANDA günü DEĞİL, Avustralya ASKERÎ İŞGALİ (Rabaul'ün teslimi). Manda 17 Aralık 1920'de verildi. ⇒ Doğru model muhtemelen İKİ dönem: 1914-1920 işgal (`isg:` katmanı) + 1920-1923 manda. Bu ÖLÇÜLMEDİ, bildiriliyor.",
  },
  OLCMEDIKLERIM: {
    porto_riko: "⚪ 'unincorporated territory'nin §②a kovalarına oturup oturmadığı bir HUKUK sorusu ve ben SEÇTİM (İLHAK). Kovalar Avrupa sömürge modelleri için tasarlanmış; ABD toprak hukuku için sınanmadı.",
    yeni_kaledonya: "⚪ 1853 Fransız ilhakının hukukî cinsi (ilhak mı sömürge mi) ölçülmedi; `SÖMÜRGE` kovasına ayrı idare gerekçesiyle konuldu.",
    manda_gunleri: "⚪ 1920-12-17 manda günü ve Tonga himaye günü kaynağa SORULMADI — bu tur kova ayrımıydı, tarih araştırması değil.",
    alaska_39: "⚪ 39 Alaska noktasının tek tek hukukî durumu sorulmadı; hepsi aynı kovaya (İLHAK) toplu atandı çünkü Alaska tek bir hukukî birimdi.",
  },
};
fs.writeFileSync("denetim/TRIYAJ-METROPOL-AMERIKA-0907.json",
  JSON.stringify(J, null, 2) + "\n", "utf8");
console.log("\n-> denetim/TRIYAJ-METROPOL-AMERIKA-0907.json (" + toplam + " kayıt)");
