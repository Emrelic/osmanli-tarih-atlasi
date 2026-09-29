# KRONO-ITALYA-0929 — YERLEŞİM ÖNERİSİ (`data/yerlesimler*.js`e DOKUNULMADI — Oturum 0 biriktirir)
Biçim: dosya · yerleşim · mevcut `s:` · önerilen · kaynak · gerekçe. Hepsi TDV gövdesinden; TDV gün vermeyen yerde **gün yazılmadı**.

## A. Tarih düzeltmesi (hüküm net)
| Dosya | Yerleşim | Mevcut | Önerilen | Kaynak · gerekçe |
|---|---|---|---|---|
| `yerlesimler.js` (İzmir kaydı, satır ~173) | İzmir | `{f:"1344-10-28",t:"1402-07-28",d:"sovalye"},{f:"1402-07-28",t:"1415-06-01",d:"aydin"}` | `sovalye` penceresinin bitişi ve `aydin` başlangıcı **1402-12-??** (Aralık 1402); gün TDV'de yok — koordinatör gün kaynağı bulana dek `1402-12-01` temsilî + kaydına "TDV: Aralık 1402" | TDV `izmir`: "sahil İzmir'i Timur'un **Aralık 1402**'deki zaptına kadar hıristiyanların elinde kaldı". 1402-07-28 Ankara Savaşı günüdür; İzmir'in düşüşüyle ilgisi yok. (Atlasın kendi 1402-12-14/15 maddeleri gün için DAYANAK olamaz.) |
| `yerlesimler.js` (Çeşme, satır ~177) | Çeşme | aynı `1402-07-28` | İzmir'le birlikte hareket eder mi **ölçülemedi**: TDV `cesme` 1402'de İzmir'den ayrı bir olay anmıyor | TDV `cesme` (66 bin karakter) 1402/Timur/Aydın için cümle vermedi |
| `yerlesimler_ek.js` (İnebahtı, `yerlesimler.js:431`) | İnebahtı | `{f:"1687-08-06",t:"1715-07-01",d:"venedik"}` | başlangıç **Temmuz 1687** (gün TDV'de yok) | TDV `inebahti`: "1687 Temmuzunda düştü". Ayrıca TDV: Venedik "Karlofça'dan bir yıl sonrasına kadar" tuttu ⇒ bitiş ≈1700 mü, 1715 mi — ölçülemedi |

## B. Çelişki — hüküm koordinatörde
| Dosya | Yerleşim | Mevcut | Sorun | Kaynak |
|---|---|---|---|---|
| `yerlesimler.js:1609-…` (Kiklad bölümü) | Santorini · Sifnos (Yavuzca) · Kimolos · Koçbaba (Serifos) · Termiye (Kythnos) · Murted (Kea) · Namfi (Anafi) · Folegandros | `s:[{f:"1281-01-01",t:"1566-04-15",d:"venedik"}…]` | (1) eski sahip `venedik` — Kiklad'ın sahibi **Nakşa Dükalığı** (künye `naksa-dukaligi` var; aynı bölümde **Paros** `naksa-dukaligi → 1537-01-01`); (2) geçiş günü 1566-04-15 TDV'de yok: Osmanlı kontrolü **1537-38**, hâkimiyet **1540**'ta resmen devredildi, 1566'da düklük Yasef Nasi'ye (statü aynen) | TDV `naksa` (bkz. DUZELTME D9). Bölgenin iç tutarsızlığı: Paros 1537, öteki sekiz yer 1566 |
| `yerlesimler_ek.js` (Herseknovi) | Herseknovi (Herceg Novi) | `kd`: `…1687-09-30` (Venedik fethi) | TDV `dalmacya`: "1686'da Castelnuovo'yu aldılar" | ölçülemedi — yer maddesi bulunamadı |

## C. Kaynak bulunamadı — kırılma korunuyor, ama yıl-temsili borç
Nikarya (İkarya) 1362 bizans→ceneviz · Butrint 1386 bizans→venedik · Parga 1401 bizans→venedik · Bodrum 1402 →sovalye · Zadar/Nadin/Vrana 1409-01-01 ·
Şibenik 1412-10-30 · Split/Kotor 1420-01-01 · Fornoz 1521 ceneviz→OSMANLI · Sin (Sinj) 1686-09-30 · Elafonisos/Mora(Tripoliçe) 1687-08-01 ·
Damala/Ermiyoni/Kranidi/Methana 1715-07-20 · Karistos 1470-07-12. TDV bunlarda gün (çoğunda yıl) vermiyor; "bulunamadı". Dış kaynak (Treccani/Setton/Fine) ister — atlas dayanak olamaz.
İki not: (i) Zadar/Nadin/Vrana `1409-01-01` yıl-temsili, `venedik.js` 1409-07-09 "gün DOĞRULANMADI" der — iki uç da kaynaksız; (ii) Butrint için TDV `pasarofca`
1718'de "Butrinto'yu aldılar" der ⇒ 1386 Butrint kırılmasında eski sahibin `bizans` olması TDV'yle desteklenmedi.
