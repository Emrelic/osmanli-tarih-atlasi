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
