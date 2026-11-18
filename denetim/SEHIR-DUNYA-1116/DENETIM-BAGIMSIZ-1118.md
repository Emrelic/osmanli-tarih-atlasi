# Bağımsız denetim — main 0948146f (LAB 17, 18 Kasım 2026)

**1. sehir_tarihce denetle (main'deki hint / orta_asya / afrika_gb):** ihlal 10 / 2 / 3 = 15.
Neden: atlas noktalarının başlangıcı sonradan kaynak yılına (ya da öncesine) çekilmiş; LAB zincirleri
(`__BOSLUK__` köprüleri) atlasla çakışır oldu. Düzeltme (dal `sehir-afrika-1118b`, commit 9126cbaae):
- 12 kayıt (Banavasi, Broaç, Câlandhar, Çaul, Chamba, Gaur, Leknev, Mathura, Mîrat, Patan, Hucend, Sokoto):
  `sahip: []`; önceki zincir `ic_not`a özetlendi (tam metin git 7f770ae5b).
- Enugu / Windhoek: BOSLUK bitişi atlas başlangıcına (1915 / 1840) çekildi + `dikis_beyan`.
- Astana: atlas 1830'a taşınmış, zincir boştu → BOSLUK 1824→1830 + `dikis_beyan`.
- Sonuç: üç dosya da ihlal 0 (82 / 30 / 105 şehir).

**2. Çift id:** `data/sehir_tarihce*.js` 2201 id, çift 0. (LAB'ın 27 kaydı — Agra, Delhi, Buhara, Kabil,
Gao, Kano, Cape Town… — main'de `sehir_tarihce_k12.js`e mükerrer birleştirmeyle taşınmış; kayıp değil.)

**3. GEÇ yerleşim kaynak örneklemesi (canlı sayfa okuma, 18 Kasım):**
| Kayıt | Kaynak cümlesi | Sonuç |
|---|---|---|
| Hucend | TDV Hucend: "(680-683) vuku buldu" | birebir bulundu; ilk.t aralığın SON ucu (683) — atlas 680'de başlıyor |
| Leknev | TDV Leknev: "bilinen tarihi XIII. yüzyılın başlarına kadar gider" | birebir; ilk.t 1233 yüzyıl-hassasiyetli "güvenli uç" (cümle "başlarına" der; 1233 başlangıç değil) |
| Çaul | TDV Bombay: "915'te … Mes'ûdî … 10.000 civarında" | birebir |
| Enugu | Britannica: "discovery of coal on the plateau in 1909" | birebir |
| Mathura | Britannica: "In 1017–18 Maḥmūd of Ghazna pillaged Mathura" | birebir AMA aynı sayfa Kushan dönemi / 2. yy'ı anar → `ilk_anilis 1018` şehrin en erken anılışı değil (atlas −300 Maurya) |
| Windhoek | Dierks (hakemli değil) | kaynak zaten ZAYIF olarak beyanlı |

Bulgu: Mathura `ilk` etiketi yanıltıcı (kayıt "en erken anılış" iddiasında); düzeltme için Kushan/Maurya dönemi
akademik kaynak gerekli — yapılmadı. Leknev 1233 ve Hucend 683 "güvenli uç" kuralının sonucu, tarih uydurma değil.
