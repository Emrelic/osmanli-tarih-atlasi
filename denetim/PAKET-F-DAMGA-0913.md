# PAKET-F-DAMGA — 17 bayat hükmün yeniden damgalanması

**PAKET-F · 13 Eylül 2026** · kaynak: `denetim/OLCUM-PAKET-SINIF-0913.md` §F
ClaudEmre commit: **`ecd0f27`** (10 CEVAP.json, adlarıyla, push edildi)

## Sonuç

```
17 kalem sınandı
13 TEYİT → yeniden damgalandı   (12 cozuldu · 1 zaten-dogru)
 4 ÇÜRÜDÜ → DOKUNULMADI
ozet.py açık madde   201 → 187
```

⚠️ **201 → 187 farkı 14, gerçek kapanan 13.** Sebep `kutu/ozet.py:221`
(`p["hukumler"].get(m["no"])`): 0046 PARTI'sinde iki madde aynı `H-0010`
numarasını taşıyor (ekonomi + Nahçıvan). CEVAP'ta Nahçıvan'ın hükmü `H-0010b`
anahtarında, ama ozet onu `H-0010` üzerinden okuyor. Yani ekonomi maddesi
kapanınca Nahçıvan da **sayımda** kapanmış görünüyor. **Gerçek açık 188.**
Nahçıvan'ın `H-0010b` hükmüne dokunulmadı.

## TEYİT EDİLENLER (13)

| madde | eski → yeni | kanıt (ölçüldü) |
|---|---|---|
| `0046/H-0010` | sirada → **cozuldu** | `d5a0618` `data/ekokuma_ekonomi.js` (app.js:7395 yükleyicide) · `158a32b` kaime maddesi `data/olaylar_p0044.js` 1840-01-01, index.html:1012'de bağlı |
| `0045/H-0002` | sirada → **cozuldu** | `7e2cc6d` `gorsel_madde.js` `bekleyen_olay` → `olay:["1566-01-01|Mostar"]` / `["…|Edirnekapı"]`. `app.js:7514 _ekBagEslesir` ayırt ediciyi **başlıkta** arıyor. Başlıklar: `olaylar_ek14.js:36` "Mostar Köprüsü'nün…" · `:45` "Edirnekapı (Mihrimah Sultan) Camii…" (yer_id İstanbul, ama eşleşme başlıktan yapılıyor) |
| `0043/H-0001` | sirada → **cozuldu** + GÖZLE BAK | `038e686` app.js seferGuncelle: `m.fi + (ti-fi)/2` tavanı. Mısır 43→167 · Çaldıran 108→190 gün. Mora hangi SEFERLER kaydı, doğrulanmadı |
| `0040/H-0008` | olculecek → **cozuldu** | index.html:75-79 "⑥ Motor tanı hatları", varsayılan kapalı, yorum "4 Eylül 2026, Emre (H-0008)". Paket 0040 tarihi 2026-09-04 10:42, yani **aynı paket** |
| `0039/H-0001` | sirada → **cozuldu** + GÖZLE BAK Drama | `d333096` `yerlesimler_ek24.js` (girdi.py:348) · `BULGU-SINIR-TRAKYA.md:23-26` %83 · `BULGU-OK109-TRAKYA.md` 18 nokta, en büyük boşluk 39,6 km. Karaağaç açık kalıyor, notta yazılı |
| `0035/H-0015` | sirada → **cozuldu** | `olaylar_ek13.js:301` cümle `ic_not_d` alanında. `js/` altında `ic_not_d` için **0 eşleşme** var, ekranda görünmüyor |
| `0034/H-0022` | sirada → **cozuldu** | app.js:7590-7596 yedi tür tanımlı |
| `0034/H-0040` | sirada → **cozuldu** | app.js:7536 EKOKUMA_TUR · :7531 ekKartBagliMi · `8982dfb` 159→217 kartlı madde |
| `0033/H-0015` | sirada → **cozuldu** + GÖZLE BAK enklav | `olaylar_ok107.js:46` 1515-09-19 Nusaybin-Derik-Silopi · index.html:1128 |
| `0030/H-0006` | sirada → **cozuldu** | app.js:8106 `PANEL_ETIKET` geniş "Daralt" · dar "Kapat" · kapalı "Genişlet" · durum.json sohbet 4 "UYGULANDI" (oradaki satır no 6625 bayat) |
| `0030/H-0013` | sirada → **cozuldu** + GÖZLE BAK | `2eb91e3` dokuz ad `yerlesimler_ok107.js:391-475` · girdi.py:710'da bağlı |
| `0030/H-0014` | sirada → **cozuldu** | index.html:299 devlet seçici (ilk tıklanan ODAK) · :306 dünya eşiği · :334 odak süzgeci · `js/suzgec.js` · sohbet 2. 2. kısım (dünyada olup kronolojide görünmeyen olaylar) notta **ayrı içerik işi** diye yazılı |
| `0019/H-0081` | sirada → **zaten-dogru** | sohbet 10: Emre "hayır hiçbir şey yapma böyle kalsın" · su #bcd6e6 app.js'te |

## ÇÜRÜYENLER (4) — CEVAP.json DEĞİŞMEDİ

| madde | F'nin iddiası | ölçüm |
|---|---|---|
| `0016/H-0003` Tuz Gölü | "göller NE poligonundan olduğu gibi kesiliyor, işlem gerekmiyor" (sohbet 11) | **YANLIŞ.** `arac/uret_petek.py:542` `GOLLER…simplify(0.01)` (≈1,1 km) ve `:519` `g.area > 0.02` eşiği. `arac/uret_altlik.py:163` görünen göl katmanı `simplify(SADE_TOL=0.012)` (≈1,3 km). Sadeleştirme **var**. Emre sohbet 11'de "evet" (kalite 6 ile çizilsin) demişti |
| `0014/H-0004` Aral/Baykal | sohbet 12: "zaten birebir kesiliyor" | Aynı kod, aynı çürüme. Emre'nin cevabı "birebir 6. kalite örtüşme ile çiz" |
| `0032/H-0002` Karakoyunlu | sohbet 3: "yer TDV'ye sadık, kusur değil" | Hüküm yalnız **yeri** kapsıyor. Maddenin öteki kısmı olan "Gürcistan rengi Karakoyunlu ile aynı" açık: `renkler.py:534` karakoyunlu `#e018e0` · `:567` gurcistan `#e020b0` → **ΔE2000 7,5** (scratch hesabı, renk_olc.py değil). Odak kısmı da ölçülmedi |
| `0012/H-0002` girintiler | sohbet 14: "gözlem raporuydu, yapılacak iş yok" | PARTI metni: *"BURADA BİRAZ DAHA YUMUŞATILMALI İDİ GİRİNTİLER"*. Bu açık bir **istek**. Koordinatörün "senden bir şey istemiyordu" cevabı Emre'nin yapacağı işi anlatıyor, işin kendisinin gereksiz olduğunu göstermiyor |

## Ölçülmeyenler

- Canlı harita açılmadı. GÖZLE BAK notları (Mora oku · Drama enklavı · Nusaybin enklavı · Vardar boğumu) bu yüzden duruyor.
- Vardar noktalarının son yayına (koşu çıktısına) girip girmediği ölçülmedi. Yalnız girdi.py'de bağlı oldukları ölçüldü.
- ΔE 7,5 elle yazılmış bir CIEDE2000 betiğiyle hesaplandı, `renk_olc.py`nin kompozit ölçüsüyle değil.

## Yan not

- `parti-emrelic-0045/` klasörü ClaudEmre deposunda **hiç izlenmiyordu**. CEVAP.json bu commit'le ilk kez girdi (`create mode`). Klasördeki PARTI.json ve görseller hâlâ izlenmiyor.
- `ozet.py` koşunca `kutu/KUTU.md` ve `BEKLEYENLER-ATLAS.md` yeniden yazıldı. Bunlar commit'e alınmadı.
