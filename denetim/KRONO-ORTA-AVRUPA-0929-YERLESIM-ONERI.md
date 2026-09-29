# KRONO-ORTA-AVRUPA-0929 — YERLEŞİM ÖNERİLERİ (harita tarafı)

29 Eylül 2026. `data/yerlesimler*.js` dosyasına **DOKUNULMADI**; o dosya Oturum 0'ın (ORTAK §1). Her öneri
dosya · yerleşim · mevcut `s:` · önerilen · kaynak · gerekçe sırasıyla yazıldı. "Sayfa okundu" ayrımı
DUZELTME.md'deki gibidir.

🔴 **Genel tespit.** Senkron defterinde bana düşen açık kırılmaların en büyük kümesi
(1526-08-29 almanya→avusturya, 24 yerleşim) **kronoloji eksikliği değil, harita artefaktıdır.**
Buna madde yazmak yanlış kırılmayı kalıcılaştırırdı (DALGA2-ORTAK §4). Bu yüzden madde yazılmadı.

---

## Y1 — Bohemya taç ülkeleri: devir günü Mohaç değil, seçim

| Dosya | Yerleşim | Mevcut | Öneri |
|---|---|---|---|
| `yerlesimler.js` | Prag | `{t:"1526-08-29",d:"almanya"}` → `{f:"1526-08-29",d:"avusturya"}` | kırılma **1526-10-22** |
| `yerlesimler_a78_avrupa.js` | České Budějovice (Budweis) · Třeboň (Wittingau) | aynı | 1526-10-22 |
| `yerlesimler.js` | Hradec Králové · Broumov (Braunau) | aynı | 1526-10-22 |
| `yerlesimler.js` | Brno · Olomouc (Moravya) · Breslau · Liegnitz · Oppeln · Gleiwitz · Kattowitz · Jeseník (Silezya) · Glatz | aynı | **ölçülemedi**. Moravya ve Silezya zümrelerinin Ferdinand'ı kabul günü bulunamadı (ajan: "1527, tur sırasında biat", kaynak zayıf). Bohemya tacına bağlı oldukları için 1526-10-22 savunulabilir, ama günü kaynak vermiyor. |

**Kaynak (sayfa okundu):** Wien Geschichte Wiki, "Ferdinand I. (Heiliges Römisches Reich)": *"König von Böhmen (Wahl 22. Oktober 1526, Krönung 24. Februar 1527 in Prag)"*.
**Karşılayan madde:** `kronoloji_cok_habsburg.js` 1526-10-22, yer_id Prag. Kırılma o güne taşınırsa madde onu yer adıyla kapatır.
⚠️ **Ters yön (§3.5):** Mohaç ile 22 Ekim arasındaki 54 günde bu yerler kimindi? Bohemya kralı II. Lajos ölmüştü, taç boştu. `bohemya` künyesinin `t:` alanı 1526-08-29. ⇒ Kırılma kaydırılırsa `bohemya` künyesi de 1526-10-22'ye uzatılmalı, yoksa 54 günlük sahipsizlik (Değişmez 1) doğar. `bohemya` künyesi `harita:null`, yani BOYANMIYOR. Bu yüzden Bohemya bugün 1526'ya kadar `almanya` rengiyle çiziliyor (bkz. KUNYE.md K5).

## Y2 — Avusturya veraset ülkeleri: 1526'dan ÖNCE de Habsburg'du

| Dosya | Yerleşim | Mevcut | Öneri | Kaynak |
|---|---|---|---|---|
| `yerlesimler_a78_avrupa.js` | Linz · Freistadt · Gmünd (Aşağı Avusturya) | almanya 1281→1526-08-29, sonra avusturya | avusturya **1282-12-27**'den | Österreichisches Staatsarchiv, HHStA AUR 1792 (sayfa okundu): Rudolf I. oğullarına Avusturya ve Steiermark'ı veriyor, 27.12.1282 |
| `yerlesimler_p77_avrupa.js` | Maribor (Marburg) | aynı | 1282-12-27 (Steiermark) | aynı |
| `yerlesimler_a78_avrupa.js` | Innsbruck · Landeck | aynı | **1363-01-26** | ÖSTA "Archivale des Monats" (sayfa okundu): *"Am 26. Jänner 1363 übertrug Margarete 'Maultasch' ihre Rechte auf das Land Tirol…"* |
| `yerlesimler_a78_avrupa.js` | Klagenfurt | aynı (kaynak alanı "1335'ten Habsburg" diyor) | 1335 | gün kaynakla DOĞRULANMADI (ajan: 2 Mayıs 1335, yalnız Vikipedi aynası) |
| `yerlesimler_a78_avrupa.js` | Feldkirch | aynı | 1375/1390 | ajan: HHStA AUR 1375 V 22 satış, 1390 fiilî devir; **sayfa okunmadı** |
| `yerlesimler_a78_avrupa.js` | Bregenz | aynı | 1451 / 1523 (iki yarı) | zayıf (Vikipedi aynası) — ölçülemedi |
| `yerlesimler_a78_avrupa.js` | Lienz | aynı (kaynak alanı "Görz 1500'de Habsburg-Tirol'e geçti" diyor) | 1500 | gün doğrulanmadı |

🔴 **Bu bir TASARIM KARARIDIR, hata diye düzeltilmesin; hüküm Oturum 0 ve Emre'de.** Kayıtların
`kaynak:` alanları "1526 öncesi zaten Kutsal Roma = almanya, Viyana emsali" diyor. Yani seçim
bilerek yapılmış. Ama `habsburg` künyesi (harita: `avusturya`) 1282'de başlıyor. Viyana'nın kendisi de
1526'ya kadar `almanya` boyanıyorsa künye 244 yıl boyunca kendi merkezinde hiç görünmüyor demektir.
Seçenekler:
- (a) veraset ülkeleri künyeye göre (1282/1363/…) `avusturya` boyansın,
- (b) emsal korunsun ve künyenin `f:` günü haritanın gününe (1526) çekilsin.
Bugünkü hâl ikisinin de değil: künye 1282 diyor, harita 1526 diyor.

## Y3 — Erdel: Harsány günü el değiştirmedi

| Dosya | Yerleşim | Mevcut | Öneri |
|---|---|---|---|
| `yerlesimler_ek29.js` | Brassó (Braşov) · Erdel Belgradı (Gyulafehérvár) · Segesvár (Sighişoara) | `v:` tâbi → `s:` avusturya **1687-08-12** | **1687-10-27** (Balázsfalva: imparatorluk garnizonları); egemenlik **1688-05-09** |

**Kaynak (sayfa okundu):** Magyar Katolikus Lexikon, "Apafi": *"1687. X. 27: a balázsfalvi szerződésben ~ pol. önállósága"* · *"1688. V. 9: a Caraffával kötött megállapodásban ~ követei elismerték I. Lipótot"*.
**Karşılayan maddeler:** `kronoloji_cok_habsburg.js` 1687-10-27 ve 1688-05-09.
📌 KRONO-TUNA-0929 (M-5434) bu kırılmanın çekirdekteki Harsány maddesiyle "karşılandığını" söylüyor. **Doğru, ama yanlış günde karşılanıyor.** Harsány (12 Ağustos) Macaristan'da bir meydan savaşıdır, Erdel o gün tâbi prensliğini korudu.

## Y4 — Tököli 1682: kırılma günü doğru

`yerlesimler_ek.js` / `_ek_macaristan.js`: Kassa · Eperjes · Tokaj · Fülek · Ungvár · Munkács, `v:` Orta Macar Krallığı **1682-09-16**.
TDV `tokoli-imre` (sayfa okundu) Fülek'te alâmetlerin verilişini 16 Eylül'e koyuyor. ⇒ **Değişiklik önerilmiyor.** Ama Kassa'nın Tököli'ye geçişi daha erken, Ağustos 1682 (ajan: Bánlaky, 14 Ağustos; sayfa okunmadı). Ölçülemedi.
Karşılayan madde (düzeltildi): `kronoloji_macaristan.js` 1682-09-16.

## Y5 — 1795 Üçüncü Paylaşım: Kielce ve Radom Prusya'ya değil AVUSTURYA'ya gitti (şüphe · ölçülmedi)

`yerlesimler.js`: Częstochowa · Kielce · Radom (Polonya) · Łódź → `prusya` 1795-10-24.
Genel bilgiye göre 1795'te Kielce ve Radom, **Batı Galiçya** olarak Avusturya'ya geçti. Łódź ve Częstochowa ise İkinci Paylaşım'da (1793) **Güney Prusya** olarak Prusya'ya geçmişti. Ama bu oturumda **kaynak okunmadı**; bu satır bir hüküm değil, KRONO-KUZEY-0929'a devredilen bir şüphedir (Lehistan onun kapsamı). Kaynakla doğrulanmadan uygulanmasın.

## Y6 — Kapsam dışı: bana düşen ama benim olmayanlar

- **Alman sömürgeleri 1883–1914** (Lüderitz, Duala, Togo, Doğu Afrika, Yeni Gine, Mikronezya, Samoa…, **≈28 olay adayı**, kova `kapsam_disi`): M-5421 gereği metropol kronolojisine ait değil. **YAZILMADI**, Dalga 3 / PAKETSİZ. Maddeyle kapatılacaksa bir not: 2s taraf testi `almanya` için "Kutsal Roma / Almanya" adını arıyor, "Almanya" kelimesini aramıyor. Maddede yer adı geçmeli.
- **İsviçre:** Sion 1417, Martigny 1475 (yıl temsilî). Hiçbir paketin kapsamında değil.
- **Çekirdek fetihleri (Osmanlı'nın gözünden):** Böğürdelen 1471, Orsova 1524, Bosna Brod / Dubica / Jasenovaç 1538, Bosna Novi 1556, Gyula 1566-09-02, Yagodina 1690/1739, Lugos 1688-1716. Çekirdek kronolojinin işidir, Habsburg dosyasına mükerrer yazılmadı.
- **1803-02-25 Brixen:** Reichsdeputationshauptschluss maddesi `kronoloji_almanya.js`te var, ama başlıkta Brixen de "Avusturya" da geçmiyor. Fiilî Avusturya devir günü bulunamadı (ajan: "Mart 1803", zayıf).
- **1921-11-13 Eisenstadt:** kırılma günü TRUPPENDIENST'le (sayfa okundu) tutuyor. Madde yazıldı (`kronoloji_cok_habsburg.js`).
