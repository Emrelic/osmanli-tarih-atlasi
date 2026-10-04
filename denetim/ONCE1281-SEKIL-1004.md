# ONCE1281-SEKIL-1004 — 1281 öncesi kampanyasının BOYU

Oturum: ONCE1281-SEKIL-1004 · 4 Ekim 2026 · görev: YILDIRIM BAYEZIT (send_message)
Bağlam: Emre "1281 öncesini koşulacak, yayınlanacak hâle getir". Bu dosya kampanyayı YAPMAZ,
BOYUNU ölçer. **Veriye yazılmadı.** Koşu sürerken (HAVVA) yalnız OKUMA yapıldı.
Okunan ders: [`D257`](../dersler/D257-olu-nokta-kamera-alamaz.md) (ölü nokta kamera alamaz).

## 0. Yöntem — ölçümden önce sabitlendi

- Evren: `girdi.yukle()` (projenin okuyucusu; regex YOK, `D219`). `UFUK = ("1281-01-01",
  "1923-10-29")` `girdi.py:705`ten.
- Her nokta için `s:` ∪ `d:` ∪ `v:` dönemlerinin EN KÜÇÜK `f:`'si = ilk sahiplik günü.
  (`isg:` örtüdür, sahiplik değil — dışarıda.)
  - 🔴 KENETLİ: ilk `f` tam `1281-01-01`
  - 🟢 GERÇEK: ilk `f` > `1281-01-01` (`kur:` varsa onunla karşılaştırılır)
  - 🟡 ÖNCESİ VAR: ilk `f` < `1281-01-01`
  - ⚪ ÖLÇÜLEMEDİ: hiç dönem yok ya da `f` okunamıyor
- 🔴 kovasında `kur:` taşıyanlar ayrıca sayılır.
- Bölge: yerleşim şemasında `bolge:` alanı YOK (`girdi.BILINEN_ALANLAR`). İki gruplama
  yapılacak: ① **1281'deki ilk sahip kimliği** (`d` için `osmanli`, `s`/`v` için `d:`/`kid:`) —
  "1281 öncesi X = şu" hükmü tam bu kimlik üzerinden verilir; ② 10°×10° koordinat karesi.
  İlk 10 grubun kapattığı nokta sayısı ikisinde de raporlanır.

## 1. ÖNGÖRÜ — ölçümden ÖNCE yazıldı

**Sayı** (4298 noktada):
- 🔴 KENETLİ **~%65 (≈2800, aralık 2200–3300)**
- 🟢 GERÇEK **~%30 (≈1300)** — Osmanlı'nın sonraki fetih/kuruluş bölgeleri (Kuzey Afrika,
  Arabistan, Amerika, ileri tarihli kurulan şehirler)
- 🟡 ÖNCESİ VAR **< 50** — motor UFUK'tan önce okumadığı için yazarların 1281'den eski `f`
  yazma sebebi yok; yalnız birkaç kaynaklı pilot noktası
- ⚪ ÖLÇÜLEMEDİ **~20–40** — `D257`nin ölü noktaları (Askalân, Dvin gibi `bit:` < 1281 olup
  `s:` boş bırakılanlar; D257 "19 nokta `bit:`" diyor)
- 🔴 içinde `kur:` taşıyan: **< 15**

**Mekanizma:**
- KENETLEME mekaniktir, kaynaklı değildir: yazarlar her noktanın sahip zincirini UFUK'un
  tabanından başlatmış — çünkü motor 1281'den öncesini okumuyor, Değişmez 1 "1281'de
  sahipsiz nokta = delik" diye bakıyor. Yani `1281-01-01` çoğunlukla "bilinmiyor/sorulmadı"
  demek; gerçek bir olay günü değil.
- Kenetli noktaların ilk sahip kimliği az sayıda devlette toplanır (Bizans, Anadolu
  Selçuklu/İlhanlı ve beylikler, Bulgar/Sırp, Memlük, Altın Orda) ⇒ **ilk 10 kimlik 🔴'nin
  %70'inden fazlasını** kapatır. Kampanyanın gerçek birimi nokta değil, bu kimliklerin
  1281 öncesi zinciridir.
- 🔴 içinde `kur:` olması bir ÇELİŞKİdir (kur > 1281 ise ilk `f` 1281 olamaz; kur < 1281 ise
  zaten öncesi biliniyor demektir) — az ve araştırmaya değer.

## 2. Ölçüm

(aşağıda)
