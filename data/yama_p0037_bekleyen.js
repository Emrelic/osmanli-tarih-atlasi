// -*- coding: utf-8 -*-
// YAMA_P0037_BEKLEYEN — PAKET-0037 oturumu (Fable), 2 Eylül 2026 · p0037/H-0003 · H-0008 · H-0010
//
// 🔴 KASTEN GLOB DIŞI AD: `_sahiplik_uygula.py` ve `yama_uygula.js` yalnız `yer_yama*.js` okur.
//    Bu dosya OKUNMAZ, çünkü içindeki 20 kaydın 20'si AD ÇAKIŞMASI veriyor (uygulayıcı çakışmayı
//    alana değil ADA bakarak kuruyor):
//      Romanya 16 nokta      ↔ yer_yama_romanya.js (UYGULAMA-3, s: 1881 bölmesi — ÖLÇTÜM: o s:
//                              dizileri bugünkü veriyle BİREBİR AYNI, yani zaten inmiş / zaten-böyle)
//      Bükreş · Yaş          ↔ yer_yama_gece_v3.js (isg: 1806-12 ve 1828-34 — benimkiyle aynı amaç)
//      Urfa · Maraş · Yumurtalık ↔ yer_yama_uyg2.js (TASNİF şeması {alan,eski,yeni}: uygulayıcı bu
//                              şemayı İNDİREMEZ ama adı gördüğü için çakışma sayıyor; içerik olarak
//                              Maraş ve Yumurtalık BENİMKİYLE AYNI, Urfa'da bitiş günü farklı)
//      Mersin                ↔ yer_yama_ok110.js · yer_yama_p35.js (s:/d: ramazanoglu — bugünkü veriyle
//                              AYNI, zaten inmiş)
//    Kayıtlarım yer_yama_p0037.js'te dursaydı hem benimkiler hem rakiplerinki BLOKE olurdu.
//
// 🟢 HER KAYIT ÜST KÜME (SUPERSET): rakip yamanın alanı OLDUĞU GİBİ (verbatim) + benim eklediğim alan.
//    ⇒ Sıra bağımsız: rakip önce inse de, hiç inmese de, bu dosya tek başına doğru son hâli verir.
//    KOORDİNATÖRÜN YAPACAĞI: rakip kayıtları "zaten-böyle" diye düşür (romanya.js · ok110 · p35 için
//    ölçüm bu yönde) ya da kabul et; sonra bu dosyayı `data/yer_yama_p0037b.js` /
//    `window.YER_YAMA_P0037B` adıyla yeniden adlandır ve `_sahiplik_uygula.py --yaz` koştur.
//
// KAYNAK (§4): TDV `bogdan` · `eflak` · `sanliurfa` · `kahramanmaras` · `adana` · `ibrahim-pasa-kavalali`
// gövdeleri okundu; gün bilinmeyen yerde YYYY-01-01 (kural) ve neden bilinmediği yazılı.
// DEĞİŞMEZ-2 (v: günleri): 1839-06-24 Nizip (0 gün) · 1841-02-25 (0 gün) · 1832-07-29 Belen (0 gün) ·
// 1833-01-01 (Konya 1832-12-21, 11 gün) · 1834-08-01 (Redif teşkilatı 1834-07-08, 24 gün) — ÖLÇÜLDÜ.
// `isg:` motor tarafından okunmaz (girdi.py:704), Değişmez-2'ye girmez; örtü uret_devirler.py'den.

window.YAMA_P0037_BEKLEYEN = [

// ═══════════════ H-0003 · Mısır (İbrâhim Paşa) — daraltma ve dolgu ═══════════════

{ ad:"Urfa",
  v:[{f:"1839-06-24",t:"1841-02-25",k:"Mısır (İbrâhim Paşa)"}],
  kaynak:"TDV `sanliurfa` (gövdesi okundu): '1839'da Kavalalı Mehmed Ali Paşa'nın oğlu İbrâhim Paşa'nın kısa süre kontrolü altına giren Urfa'. Giriş günü Nizip 24 Haziran 1839 (TDV `ibrahim-pasa-kavalali`: 'Nizip'te tekrar mağlûp olması (24 Haziran 1839) İbrâhim Paşa'ya Anadolu yollarını yeniden açtı'). Bitiş günü TDV'de yok; külliyatın tahliye günü (1841-02-25) esas alındı. yer_yama_uyg2.js (H-0008/p0036) aynı TDV cümlesiyle 1839-01-01→1840-01-01 önermiş; başlangıcı Nizip'e bağlamak daha savunulur, bitişte ikimiz de tahmin — koordinatör seçsin.",
  gerekce:"p0037/H-0003 — Emre: 'Maraş ve Urfa'ya girdi mi?' Mevcut kayıt v: 1832-08-15→1841-02-25 (8,5 yıl); TDV yalnız 1839'u ve 'kısa süre'yi veriyor ⇒ 1832-1839 arası 7 yıl FAZLA boyanıyordu." },

{ ad:"Maraş",
  v:[{f:"1833-01-01",t:"1834-08-01",k:"Mısır (İbrâhim Paşa)"}],
  kaynak:"TDV `kahramanmaras` (gövdesi okundu): 'Maraş 1833'te Kavalalı İbrâhim Paşa'nın işgaline uğradı ve on dokuz aya yakın onun idaresinde kaldı.' Gün yok ⇒ 1833-01-01 (kural). Bitiş 1834-08-01 TÜRETİLMİŞ (1833-01-01 + 19 ay) — ölçüm değil hesap. yer_yama_uyg2.js (H-0011/p0036) BİREBİR AYNI sonuca varmış; bu kayıt onun uygulanabilir şemadaki hâli. TDV `maras` slug'ı 200 ama gövde boilerplate (§4 ④), `kahramanmaras` okundu.",
  gerekce:"p0037/H-0003 — mevcut kayıt v: 1832-07-29→1841-02-25 (8,5 yıl); TDV ~19 ay diyor ⇒ ~6,5 yıl FAZLA. Emre'nin sorusunun cevabı: evet girdi, ama 1833'ten ~1834 ortasına kadar." },

{ ad:"Yumurtalık",
  v:[{f:"1832-07-29",t:"1841-02-25",k:"Mısır (İbrâhim Paşa)"}],
  kaynak:"TDV `adana` (gövdesi okundu): Adana bölgesi 1833-1840 İbrâhim Paşa'da, 1841 Londra Antlaşması ile geri. Başlangıç günü külliyatın Adana kaydı (1832-07-29). yer_yama_uyg2.js (H-0007c/p0036) aynı dönemi önermiş.",
  gerekce:"p0037/H-0003 — Adana peteğinin içindeki yazısız liman, komşu deseni." },

{ ad:"Mersin",
  s:[{f:"1281-01-01",t:"1352-01-01",d:"kilikya-ermeni"},{f:"1352-01-01",t:"1516-08-24",d:"ramazanoglu"},{f:"1918-10-30",t:"1921-10-20",d:"fransa-cumhuriyet"}],
  d:[{f:"1516-08-24",t:"1918-10-30"},{f:"1921-10-20",t:"1923-10-29"}],
  v:[{f:"1832-07-29",t:"1841-02-25",k:"Mısır (İbrâhim Paşa)"}],
  kaynak:"s:/d: dizileri yer_yama_ok110.js'ten VERBATIM (bugünkü veriyle aynı, dokunulmadı). v: için TDV `adana` (aynı cümle); Tarsus kaydı külliyatta zaten aynı dönemi taşıyor; Mersin o tarihte Tarsus'a bağlı iskele.",
  gerekce:"p0037/H-0003 — Tarsus ile Adana arasında yazısız nokta, komşu deseni." },

// ═══════════════ H-0008 / H-0010 · Eflak-Boğdan ═══════════════
// (a) iki uyumsuz kayıt — komşularının `v:` desenine. s: dizisinde 1281-1449 ve 1810-1829 parçaları
//     mevcut kaydın kendisi; 1829-1878 parçası s:'ten v:'ye taşındı; 1878-1881-1923 kuyruğu
//     yer_yama_romanya.js ile aynı.
{ ad:"İbrail",
  s:[{f:"1281-01-01",t:"1462-06-01",d:"eflak"},{f:"1878-07-13",t:"1881-03-26",d:"romanya"},{f:"1881-03-26",t:"1923-10-29",d:"romanya-kralligi"}],
  v:[{f:"1462-06-01",t:"1538-09-01",k:"Eflak Voyvodalığı"},{f:"1829-09-14",t:"1878-07-13",k:"Eflak Voyvodalığı"}],
  isg:[{f:"1809-12-02",t:"1812-05-28",d:"rusya"},{f:"1828-06-23",t:"1834-01-01",d:"rusya",kaynak:"bogdan"},{f:"1848-01-01",t:"1849-05-01",d:"rusya",kaynak:"bogdan"}],
  kaynak:"TDV `eflak`/`bogdan` (gövdeleri okundu): 1859 birleşmesi Osmanlı metbûluğu altında ('Sultan Abdülmecid, Cuza'yı Memleketeyn'in tek reisi olarak tanıyıp ... onayladı'), tam istiklâl 1878 Berlin, krallık 1881. Külliyattaki 16 Eflak-Boğdan noktası 1878'e kadar `v:` taşıyor; 1829 Edirne dönüşü mevcut kaydın kendi günü. isg: 1809-12-02 mevcut kaydın kendisi; 1828 işgali 1829'da bitmiyor, TDV `bogdan`: 'tazminat ödeninceye kadar burada kalmaya karar verdiler ... Kiselef vali ... Sturdza tayinle (1834)' ⇒ bitiş 1834-01-01 (yıl TDV, gün yok); 1848: '1848'de Yaş'ta çıkan ve Rus ordularının işgaliyle sonuçlanan ayaklanmadan sonra ... Baltalimanı' ⇒ 1848-01-01 (gün yok) → 1849-05-01 (çekirdekte maddeli).",
  gerekce:"p0037/H-0008·H-0010 — mevcut kayıt 1829'dan sonra `s:eflak`, 1859'dan sonra `s:romanya` (yabancı devlet, yeşil) yazıyordu; komşuları aynı yılları `v:` (tâbi, açık kırmızı). Emre'nin 1856 görselindeki 'EFLAK VOYVODALIĞI' yeşil adası ve 1877 görselindeki Tuna ağzı 'ROMANYA' beneği BU kayıt. `d:` alanına DOKUNULMADI." },

{ ad:"Yergöğü (Giurgiu)",
  s:[{f:"1281-01-01",t:"1420-01-01",d:"eflak"},{f:"1427-01-01",t:"1449-01-01",d:"eflak"},{f:"1810-09-27",t:"1829-09-14",d:"rusya"},{f:"1878-07-13",t:"1881-03-26",d:"romanya"},{f:"1881-03-26",t:"1923-10-29",d:"romanya-kralligi"}],
  v:[{f:"1829-09-14",t:"1878-07-13",k:"Eflak Voyvodalığı"}],
  isg:[{f:"1848-01-01",t:"1849-05-01",d:"rusya",kaynak:"bogdan"}],
  kaynak:"İbrail kaydıyla aynı dayanak (TDV `eflak`/`bogdan`). 1810-1829 `s:rusya` dönemi mevcut kaydın kendisi, korundu — ama bir İŞGALdir, `isg:` olması gerekir (teslim raporunda koordinatör kararına bırakıldı). 1848-49 isg TDV `bogdan`.",
  gerekce:"p0037/H-0008·H-0010 — 1877 görselindeki Tuna kıyısı 'ROMANYA' yeşil beneği bu kayıt; komşularıyla aynı `v:` desenine çekildi. `d:` alanına DOKUNULMADI." },

// (b) Rus işgalleri — taralı örtü. 1806-11-30 ve 1828-05-01→1834-01-01: yer_yama_gece_v3.js'in
//     Bükreş/Yaş için seçtiği günler AYNEN alındı (külliyat tutarlılığı; 1806 günü Akkirman/Hotin
//     kayıtlarının da günü; 1828-05-01 gece_v3'ün seçimi, TDV yalnız yıl veriyor). 1848-01-01→1849-05-01
//     BENİM EKLEDİĞİM üçüncü pencere (TDV `bogdan`: 1848 Yaş ayaklanması → Rus işgali → Baltalimanı).
//     1853-54 işgali TDV gövdelerinde BULUNAMADI — YAZILMADI. s: dizileri yer_yama_romanya.js'ten VERBATIM.
{ ad:"Bükreş",
  s:[{f:"1281-01-01",t:"1462-06-01",d:"eflak"},{f:"1878-07-13",t:"1881-03-26",d:"romanya"},{f:"1881-03-26",t:"1923-10-29",d:"romanya-kralligi"}],
  isg:[{f:"1806-11-30",t:"1812-05-28",d:"rusya",kaynak:"eflak"},{f:"1828-05-01",t:"1834-01-01",d:"rusya",kaynak:"eflak"},{f:"1848-01-01",t:"1849-05-01",d:"rusya",kaynak:"bogdan"}],
  kaynak:"TDV `bogdan` (gövdesi okundu): '1828-1829 Osmanlı-Rus savaşı sırasında Ruslar Memleketeyn'i tekrar işgal ettiler ve kendilerine savaş tazminatı ödeninceye kadar burada kalmaya karar verdiler. Bu sırada General Kiselef vali sıfatı ile ...' · 'Mihail Sturdza ... tayinle prensliğe getirilmiştir (1834-1849)' · '1848'de Yaş'ta çıkan ve Rus ordularının işgaliyle sonuçlanan ayaklanmadan sonra ... Baltalimanı Antlaşması'. 1806-12: külliyatın Akkirman·Kili·Hotin·İbrail isg kayıtları (aynı savaş) ve gece_v3. İlk iki pencere gece_v3 ile AYNI, üçüncüsü yeni.",
  gerekce:"p0037/H-0008 — Emre: 'Rusya Eflak-Boğdan'ı işgal ediyorsa TARALI gösterilmeli'. Altyapı hazır (isg: örtüsü), veri eksikti: 16 prenslik noktasının 14'ünde hiç isg yoktu, Bükreş/Yaş'ta 1848 penceresi yoktu." },
{ ad:"Yaş",
  s:[{f:"1281-01-01",t:"1456-06-01",d:"bogdan"},{f:"1878-07-13",t:"1881-03-26",d:"romanya"},{f:"1881-03-26",t:"1923-10-29",d:"romanya-kralligi"}],
  isg:[{f:"1806-11-30",t:"1812-05-28",d:"rusya",kaynak:"bogdan"},{f:"1828-05-01",t:"1834-01-01",d:"rusya",kaynak:"bogdan"},{f:"1848-01-01",t:"1849-05-01",d:"rusya",kaynak:"bogdan"}],
  kaynak:"Bükreş kaydıyla aynı (TDV `bogdan`); 1848 ayaklanması TDV'ye göre Yaş'ta çıktı. İlk iki pencere gece_v3 ile AYNI.", gerekce:"p0037/H-0008 — Boğdan merkezi." },
{ ad:"Roman",
  s:[{f:"1281-01-01",t:"1456-06-01",d:"bogdan"},{f:"1878-07-13",t:"1881-03-26",d:"romanya"},{f:"1881-03-26",t:"1923-10-29",d:"romanya-kralligi"}],
  isg:[{f:"1806-11-30",t:"1812-05-28",d:"rusya",kaynak:"bogdan"},{f:"1828-05-01",t:"1834-01-01",d:"rusya",kaynak:"bogdan"},{f:"1848-01-01",t:"1849-05-01",d:"rusya",kaynak:"bogdan"}],
  kaynak:"Yaş kaydıyla aynı (TDV `bogdan`); s: verbatim yer_yama_romanya.js.", gerekce:"p0037/H-0008 — Boğdan." },
{ ad:"Birlad (Bârlad)",
  s:[{f:"1281-01-01",t:"1456-06-01",d:"bogdan"},{f:"1878-07-13",t:"1881-03-26",d:"romanya"},{f:"1881-03-26",t:"1923-10-29",d:"romanya-kralligi"}],
  isg:[{f:"1806-11-30",t:"1812-05-28",d:"rusya",kaynak:"bogdan"},{f:"1828-05-01",t:"1834-01-01",d:"rusya",kaynak:"bogdan"},{f:"1848-01-01",t:"1849-05-01",d:"rusya",kaynak:"bogdan"}],
  kaynak:"Yaş kaydıyla aynı (TDV `bogdan`); s: verbatim yer_yama_romanya.js.", gerekce:"p0037/H-0008 — Boğdan." },
{ ad:"Kalas (Galatz)",
  s:[{f:"1281-01-01",t:"1456-06-01",d:"bogdan"},{f:"1878-07-13",t:"1881-03-26",d:"romanya"},{f:"1881-03-26",t:"1923-10-29",d:"romanya-kralligi"}],
  isg:[{f:"1806-11-30",t:"1812-05-28",d:"rusya",kaynak:"bogdan"},{f:"1828-05-01",t:"1834-01-01",d:"rusya",kaynak:"bogdan"},{f:"1848-01-01",t:"1849-05-01",d:"rusya",kaynak:"bogdan"}],
  kaynak:"Yaş kaydıyla aynı (TDV `bogdan`); s: verbatim yer_yama_romanya.js.", gerekce:"p0037/H-0008 — Boğdan." },
{ ad:"Tırgovişte",
  s:[{f:"1281-01-01",t:"1462-06-01",d:"eflak"},{f:"1878-07-13",t:"1881-03-26",d:"romanya"},{f:"1881-03-26",t:"1923-10-29",d:"romanya-kralligi"}],
  isg:[{f:"1806-11-30",t:"1812-05-28",d:"rusya",kaynak:"eflak"},{f:"1828-05-01",t:"1834-01-01",d:"rusya",kaynak:"eflak"},{f:"1848-01-01",t:"1849-05-01",d:"rusya",kaynak:"bogdan"}],
  kaynak:"Bükreş kaydıyla aynı (TDV `bogdan`); s: verbatim yer_yama_romanya.js.", gerekce:"p0037/H-0008 — Eflak." },
{ ad:"Piteşti",
  s:[{f:"1281-01-01",t:"1462-06-01",d:"eflak"},{f:"1878-07-13",t:"1881-03-26",d:"romanya"},{f:"1881-03-26",t:"1923-10-29",d:"romanya-kralligi"}],
  isg:[{f:"1806-11-30",t:"1812-05-28",d:"rusya",kaynak:"eflak"},{f:"1828-05-01",t:"1834-01-01",d:"rusya",kaynak:"eflak"},{f:"1848-01-01",t:"1849-05-01",d:"rusya",kaynak:"bogdan"}],
  kaynak:"Bükreş kaydıyla aynı (TDV `bogdan`); s: verbatim yer_yama_romanya.js.", gerekce:"p0037/H-0008 — Eflak." },
{ ad:"Slatina",
  s:[{f:"1281-01-01",t:"1462-06-01",d:"eflak"},{f:"1878-07-13",t:"1881-03-26",d:"romanya"},{f:"1881-03-26",t:"1923-10-29",d:"romanya-kralligi"}],
  isg:[{f:"1806-11-30",t:"1812-05-28",d:"rusya",kaynak:"eflak"},{f:"1828-05-01",t:"1834-01-01",d:"rusya",kaynak:"eflak"},{f:"1848-01-01",t:"1849-05-01",d:"rusya",kaynak:"bogdan"}],
  kaynak:"Bükreş kaydıyla aynı (TDV `bogdan`); s: verbatim yer_yama_romanya.js.", gerekce:"p0037/H-0008 — Eflak." },
{ ad:"Buzău",
  s:[{f:"1281-01-01",t:"1462-06-01",d:"eflak"},{f:"1878-07-13",t:"1881-03-26",d:"romanya"},{f:"1881-03-26",t:"1923-10-29",d:"romanya-kralligi"}],
  isg:[{f:"1806-11-30",t:"1812-05-28",d:"rusya",kaynak:"eflak"},{f:"1828-05-01",t:"1834-01-01",d:"rusya",kaynak:"eflak"},{f:"1848-01-01",t:"1849-05-01",d:"rusya",kaynak:"bogdan"}],
  kaynak:"Bükreş kaydıyla aynı (TDV `bogdan`); s: verbatim yer_yama_romanya.js.", gerekce:"p0037/H-0008 — Eflak." },
{ ad:"Rimnik-i Sârat (Râmnicu Sărat)",
  s:[{f:"1281-01-01",t:"1462-06-01",d:"eflak"},{f:"1878-07-13",t:"1881-03-26",d:"romanya"},{f:"1881-03-26",t:"1923-10-29",d:"romanya-kralligi"}],
  isg:[{f:"1806-11-30",t:"1812-05-28",d:"rusya",kaynak:"eflak"},{f:"1828-05-01",t:"1834-01-01",d:"rusya",kaynak:"eflak"},{f:"1848-01-01",t:"1849-05-01",d:"rusya",kaynak:"bogdan"}],
  kaynak:"Bükreş kaydıyla aynı (TDV `bogdan`); s: verbatim yer_yama_romanya.js.", gerekce:"p0037/H-0008 — Eflak." },
{ ad:"Krayova (Craiova)",
  s:[{f:"1281-01-01",t:"1462-06-01",d:"eflak"},{f:"1718-07-21",t:"1739-09-18",d:"avusturya"},{f:"1878-07-13",t:"1881-03-26",d:"romanya"},{f:"1881-03-26",t:"1923-10-29",d:"romanya-kralligi"}],
  isg:[{f:"1806-11-30",t:"1812-05-28",d:"rusya",kaynak:"eflak"},{f:"1828-05-01",t:"1834-01-01",d:"rusya",kaynak:"eflak"},{f:"1848-01-01",t:"1849-05-01",d:"rusya",kaynak:"bogdan"}],
  kaynak:"Bükreş kaydıyla aynı (TDV `bogdan`); s: verbatim yer_yama_romanya.js.", gerekce:"p0037/H-0008 — Eflak (Küçük Eflak)." },
{ ad:"Tırgu Jiu",
  s:[{f:"1281-01-01",t:"1462-06-01",d:"eflak"},{f:"1718-07-21",t:"1739-09-18",d:"avusturya"},{f:"1878-07-13",t:"1881-03-26",d:"romanya"},{f:"1881-03-26",t:"1923-10-29",d:"romanya-kralligi"}],
  isg:[{f:"1806-11-30",t:"1812-05-28",d:"rusya",kaynak:"eflak"},{f:"1828-05-01",t:"1834-01-01",d:"rusya",kaynak:"eflak"},{f:"1848-01-01",t:"1849-05-01",d:"rusya",kaynak:"bogdan"}],
  kaynak:"Bükreş kaydıyla aynı (TDV `bogdan`); s: verbatim yer_yama_romanya.js.", gerekce:"p0037/H-0008 — Eflak (Küçük Eflak)." },
{ ad:"Rimnik (Râmnicu Vâlcea)",
  s:[{f:"1281-01-01",t:"1462-06-01",d:"eflak"},{f:"1718-07-21",t:"1739-09-18",d:"avusturya"},{f:"1878-07-13",t:"1881-03-26",d:"romanya"},{f:"1881-03-26",t:"1923-10-29",d:"romanya-kralligi"}],
  isg:[{f:"1806-11-30",t:"1812-05-28",d:"rusya",kaynak:"eflak"},{f:"1828-05-01",t:"1834-01-01",d:"rusya",kaynak:"eflak"},{f:"1848-01-01",t:"1849-05-01",d:"rusya",kaynak:"bogdan"}],
  kaynak:"Bükreş kaydıyla aynı (TDV `bogdan`); s: verbatim yer_yama_romanya.js.", gerekce:"p0037/H-0008 — Eflak (Küçük Eflak)." },
{ ad:"Turnu Severin",
  s:[{f:"1281-01-01",t:"1462-06-01",d:"eflak"},{f:"1718-07-21",t:"1739-09-18",d:"avusturya"},{f:"1878-07-13",t:"1881-03-26",d:"romanya"},{f:"1881-03-26",t:"1923-10-29",d:"romanya-kralligi"}],
  isg:[{f:"1806-11-30",t:"1812-05-28",d:"rusya",kaynak:"eflak"},{f:"1828-05-01",t:"1834-01-01",d:"rusya",kaynak:"eflak"},{f:"1848-01-01",t:"1849-05-01",d:"rusya",kaynak:"bogdan"}],
  kaynak:"Bükreş kaydıyla aynı (TDV `bogdan`); s: verbatim yer_yama_romanya.js.", gerekce:"p0037/H-0008 — Eflak (Küçük Eflak)." },
{ ad:"Kımpulung (Câmpulung)",
  s:[{f:"1281-01-01",t:"1462-06-01",d:"eflak"},{f:"1878-07-13",t:"1881-03-26",d:"romanya"},{f:"1881-03-26",t:"1923-10-29",d:"romanya-kralligi"}],
  isg:[{f:"1806-11-30",t:"1812-05-28",d:"rusya",kaynak:"eflak"},{f:"1828-05-01",t:"1834-01-01",d:"rusya",kaynak:"eflak"},{f:"1848-01-01",t:"1849-05-01",d:"rusya",kaynak:"bogdan"}],
  kaynak:"Bükreş kaydıyla aynı (TDV `bogdan`); s: verbatim yer_yama_romanya.js.", gerekce:"p0037/H-0008 — Eflak." }

];
