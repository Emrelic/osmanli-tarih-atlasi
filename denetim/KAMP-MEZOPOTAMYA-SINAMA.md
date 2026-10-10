# KAMP-MEZOPOTAMYA-SINAMA — 12 maddelik örneklem sınaması (YAZIMDAN ÖNCE)

Görev: YILDIRIM BAYEZIT hükmü ① ("ÖRNEKLEM SINAMASI — EVET, ŞART, YAZIMDAN ÖNCE"; seçim önce yazılır sonra açılır) · KASA.
**KABUL ÖLÇÜTÜ:** 12/12 TUTTU değilse ikinci tur yazıma değil düzeltmeye girer. Tutmayan her maddenin tabakası baştan
okunur. Oran SAYIYLA verilir.
Her madde için üç satır:
1. Kaynağı AÇ, cümleyi alıntıla.
2. O cümle NEYİ tarihliyor? (D211 ⑧)
3. TUTTU / TUTMADI / ÖLÇÜLEMEDİ.

## SEÇİM (DONDURULDU — kaynak açılmadan önce, ayrı commit)
| # | tabaka | madde (POLITY/KRONOLOJİ satırı) | iddia | dayanılan kaynak |
|---|---|---|---|---|
| S1 | şartname-yanlış | `akkad` t | **-2193** (Şar-kali-şarri'nin ölümü; 2154 kaynaksız) | Britannica History of Mesopotamia 'Shar-kali-sharri (c. 2217–c. 2193)' |
| S2 | şartname-yanlış | `esnunna` t | **-1755** (son yıkım 1757-1755) | Britannica Hammurabi (Renger) |
| S3 | şartname-yanlış | `isin-i` t | **-1794** (⑥ 1792) | Britannica Isin + Renger |
| S4 | şartname-yanlış | `babil-i` f | **-1894** TARTIŞMALI (Goddeeris) | Britannica Babylon (Saggs) + RlA 13 s.300 Goddeeris |
| S5 | bulunamadı | `esnunna` f | başlangıç yılı **bulunamadı** | Britannica Eshnunna — yıl yok iddiası |
| S6 | bulunamadı | `ur-i` t | bitiş **bulunamadı** | Britannica Ur (Woolley) / AMGG |
| S7 | bulunamadı | `hana` t | bitiş **bulunamadı** | RlA 13 Terqa / RlA 4 Ḫana |
| S8 | EVET-en erken | `uruk-gec-uruk` f | **-3500** | ORACC AMGG 'Late Uruk period (ca. 3500-3200/3150)' |
| S9 | EVET-en erken | `uruk-gec-uruk` t | **-3200** | aynı |
| S10 | EVET-en erken | `uruk-ed` f | **-2900** | Met 'Uruk: The First City' 'Early Dynastic period (2900–2350 B.C.)' |
| S11 | rastgele (tohum 1010) | `orta-asur` f | **-1353** (Frahm/RIAo) | ORACC RIAo 'Aššur-uballiṭ I (1353-1318 BC)' |
| S12 | rastgele (tohum 1010) | `yeni-babil` f | **-626-11-23** (Jülyen) | RlA 9 s.12-13 Brinkman 'Nabopolassar' |
Rastgele evren: POLITY'de seçilmemiş 28 kimlik, `random.Random(1010).sample(…, 2)`.

## SONUÇ — **7 / 12 TUTTU · 5 TUTMADI · 0 ÖLÇÜLEMEDİ** (KENDİM açtım; Britannica/Met Wayback, ORACC doğrudan, RlA sayfa taraması görüntü olarak okundu)
| # | açılan kaynak · alıntı | cümle NEYİ tarihliyor? | yargı |
|---|---|---|---|
| S1 | Britannica 'Ascendancy of Akkad': *"Of the kings after Shar-kali-sharri (c. 2217–c. 2193), only the names and a few brief inscriptions have survived. Quarrels arose over the succession, and the dynasty went under"* · Met Akkad: *"the territory ruled over by the last kings of Agade (Dudu and Shu-Turul) had shrunk back to the region directly around the city"* · "The Akkadian Period (ca. 2350–2150 B.C.)" | **Şar-kali-şarri'nin SALTANATINI**, hanedanın sonunu DEĞİL — hanedan ondan SONRA (Dudu, Šu-Turul) sürdü | **TUTMADI** |
| S2 | Britannica Hammurabi (Renger): *"for a third time (1757–1755 bce). The final destruction of Eshnunna during this campaign"* | Eşnunna'nın son yıkımını | TUTTU |
| S3 | Britannica Isin: *"About 1794 Isin lost its independence, first to … Larsa"* · Renger: *"about 1792 … In that same year Rim-Sin of Larsa … conquered Isin"* | İsin'in bağımsızlığını yitirişini (iki kaynak ±2, beyanlı ⑥) | TUTTU |
| S4 | RlA 13 s.300 (Goddeeris), tarama: *"he has for a long time been considered to be the founder of the 1st dynasty of Babylon. However, letters excavated at Tall ad-Dēr … reveal that S. and Sumu-la-el of Babylon are contemporaries … the inclusion of S. in the list of year names appears to be a late OB construct"* · Britannica Babylon (Saggs): *"a small kingdom established in 1894 bce by the Amorite king Sumuabum"* | 1894 = konvansiyonel kuruluş; tartışma kaynakta | TUTTU (TARTIŞMALI iddiası destekli) |
| S5 | Britannica Eshnunna: *"After the collapse of Ur, Eshnunna became independent"* · Met hükümdar listesinde Eşnunna YOK | başlangıç yılı verilmiyor | TUTTU (yokluk okunan kaynaklarda) |
| S6 | Britannica Ur (Woolley): *"1st dynasty of Ur (25th century bce)"* · Met listesi yalnız *"Mesanepada of Ur 2450 B.C."* | bitiş verilmiyor | TUTTU |
| S7 | RlA 4 s.76 (Kupper), tarama: *"L'histoire de ce royaume est à peine connue. Son existence doit avoir été brève … Au XIIIe siècle, Tukulti-Ninurta Ier mentionne encore le pays de Ḫana … Tukulti-Mer, se proclame roi du pays de Ḫana"* | bitiş verilmiyor | TUTTU |
| S8 | ORACC AMGG: *"Late Uruk period (ca. 3500-3200/3150) First city-states; urbanism; complex administration; invention of writing"* | ARKEOLOJİK DÖNEMİ — bir polity'nin doğuşunu DEĞİL | **TUTMADI** |
| S9 | aynı | dönemin sonunu; Uruk bitmedi | **TUTMADI** |
| S10 | Met 'Uruk: The First City': *"During the following Early Dynastic period (2900–2350 B.C.), when city-states dominated Mesopotamia"* | DÖNEMİ — Uruk'un yeni bir polity olarak doğuşunu değil | **TUTMADI** |
| S11 | ORACC RIAo 'Rulers of Assyria': *"From Samsi-Addu to Mittani Cilent (1808-1364 BC) · The Kingdom of Assyria (1363-1306 BC)"* · *"Aššur-uballiṭ I (1353-1318 BC)"* | 1353 bir SALTANAT başı; RIAo'nun kendi krallık başı **1363** | **TUTMADI** |
| S12 | RlA 9 s.13 (Brinkman), tarama: *"According to Babylonian chronicles, N. came to the throne in Babylon on VIII-26-626 (= Nov. 23, 626 in the Julian calendar)"* · *"reigned officially from 625 until 539"* | tahta çıkış günü (resmî sayım 625, beyanlı) | TUTTU |

## Desen (tutmayanların 5'inin 5'i aynı aile)
**SÜRE ≠ OLAY.** Beşi de bir DÖNEM sınırını (S8, S9, S10) ya da bir SALTANAT ucunu (S1, S11) polity'nin doğuşu/yıkılışı
diye yazmış. D211 ⑧'in tam vakası: rakam kaynakta var ama cümle başka bir şeyi tarihliyor.
- Şüpheli aynı aile (yeniden okunacak, ölçülmedi):
  - `lagas-i` f 2520 ("history can be written from about 2520");
  - `kis` f 2700 ("first historical personality");
  - `ur-i` f (25. yy);
  - `umma` f (ED II);
  - `kassit-babil` f 1595 (*"Modern chronology uses the sack … as the dividing line"* — açıkça KONVANSİYON);
  - `orta-asur` t 912 (kral listesi sınırı);
  - Elam evrelerinin hepsi (Vallat'ın dönem başlıkları).

## Kabul ölçütü uygulaması
12/12 DEĞİL ⇒ ikinci tur **YAZIMA DEĞİL DÜZELTMEYE** girer. Tutmayanların tabakaları baştan okunur:
- şartname-yanlış (4/4 — S1 düzeltilecek);
- EVET-en erken ⇒ BÜTÜN harita_degisimi EVET maddeleri "dönem mi olay mı" diye;
- rastgele ⇒ evren TÜMÜ ⇒ POLITY'nin her f/t'si aynı soruyla.
Bu tur düzeltme YAPILMADI; yalnız ölçüldü.
