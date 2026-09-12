# KITA 16 — Kartli + Kaheti künyesi (M-3592 İŞ⑤, H-0010)

**Oturum:** KITA 16 (Sonnet) · **Görev veren:** 1.MURAT · **Tarih:** 2026-09-12

## Açılış

- `CLAUDE.md` baştan sona okundu (§3.5 · §4 · §7 · §7.1 dahil).
- Tahtadan M-3592 okundu, iş tanımı doğrulandı.
- Tahtaya "açıldım" + öngörü yazıldı: **M-3594**.

## Yapılan iş

1. **Ölçüm** — `data/yerlesimler*.js`'te `gurcistan` kullanan **16 dönemin
   tamamı** okundu (grep + Read). Yalnız **Tiflis** (Kartli çekirdek) ve
   **Zagem** (Kaheti çekirdek) bu görevin konusu; kalan 13'ü Abhazya/Acara/
   Samtskhe-Meskheti sınır yerleşimleri — kapsam dışı bırakıldı (yeni yanlış
   atıf riski, `CLAUDE.md §3.5.-1`).
2. **Kaynak taraması** — TDV'de `kartli`/`kaheti`/`gurcu`/`bagratlilar`
   ölü (302); `gurcistan` canlı. Mevcut `gurcistan` maddesi WebFetch ile
   tekrar okundu (1490 bölünme, 1578 Osmanlı fethi, 1762 birleşme, 1801
   ilhak — hepsi mevcut künyenin kronolojisiyle birebir). Encyclopaedia
   Iranica denendi, **403 Forbidden** (4 deneme) — yalnız WebSearch
   snippet'i alınabildi, DÜŞÜK GÜVENLİ olarak işaretlendi.
3. **H-0007(a)** — TDV `gurcistan` + `karakoyunlular` maddeleri okundu.
   Cevap: Gürcistan Karakoyunlu'ya **tâbi değildi**, yalnız üç akına
   (1412, 1440, 1444/45) maruz kaldı; TDV açıkça "haraç/tâbiyet belirtimi
   yok" diyor.
4. **Künye taslakları** — `kartli` ve `kaheti`, f:1490-01-01 → t:1762-01-01,
   pencere sınavından geçti (boşluk/çakışma yok, mevcut `gurcistan`/
   `imereti` kronolojileriyle tam sandviç).
5. **Renk önerisi** — `#b5651d` (kartli) / `#2a7f9e` (kaheti), elle CIE76/94
   hesaplandı, tüm komşulardan (gurcistan, karakoyunlu, safevi, imereti,
   akkoyunlu, sirvansah, altlık) eşiğin kat kat üstünde. `renkler.py`'ye
   YAZILMADI (mesgul).

## Teslim edilen dosyalar

- [`denetim/ARASTIRMA-GURCU-0912.md`](../denetim/ARASTIRMA-GURCU-0912.md) — tam araştırma (7 bölüm)
- [`denetim/YAMA-KARTLI-KAHETI-0912.json`](../denetim/YAMA-KARTLI-KAHETI-0912.json) — künye taslakları + öneri s:/renk (geçerli JSON, doğrulandı)
- bu dosya

## Öngörü karnesi (D022)

| öngörü | sonuç |
|---|---|
| Pencere ~1490-1762/1801 | **TUTTU** — tam 1490-01-01→1762-01-01 |
| 2 künye yeterli | **TUTTU** — 13 sınır yerleşimi ayrı sınıf, kapsam dışı |
| TDV Kartli/Kaheti'yi ayrı madde ile anlatır (yazılmamış, ölçüm sırasında çıktı) | ÇÜRÜDÜ — 302, taneciklik boşluğu |

## Açık/bulunamadı (D107)

- Kaheti 1606-1744 arası iç tarihi ölçülemedi.
- Iranica gövdesi okunamadı (403), yalnız arama özeti — düşük güvenli.
- `data/yerlesimler.js`'e gerçek `s:` değişikliği (Tiflis/Zagem'in
  1490-1762 diliminin kartli/kaheti'ye çevrilmesi) **UYGULANMADI** —
  görev dosyalarım arasında yerlesimler.js yoktu, öneri olarak YAMA
  dosyasında bırakıldı. Uygulanması ayrı bir iş.
- Gerçek Voronoi-komşu ΔE testi yapılamadı (yalnız proxy), petek
  koşusundan sonra `renk_olc.py` ile doğrulanmalı.

## Durum

**BİTTİ — teslim tahtaya bildirilecek.** `data/devletler.js` ve
`arac/renkler.py`'ye hiçbir şey yazılmadı (§7, dosyalar meşguldü).
