# KRONO-SENKRON-BOLME-1008 — KRONO-SENKRON-1008 diff çiftinin MOSTAR / GÜRCİSTAN olarak bölünmesi

> 8 Ekim 2026 · makine UMIT · ağaç `C:\atlas-ksbol` (detached `origin/makine/umit` = `c69b890f`).
> Commit/push yok. Orijinal iki diff yerinde (silinmedi).

## 0. ÖNGÖRÜ — ölçümden ÖNCE yazıldı

Bölme hunk düzeyinde temizdir (iki konu hiçbir hunk'ı paylaşmıyor):
MOSTAR = `olaylar_ek5.js` (2 hunk) + `yer_yama.js` + `yerlesimler.js` Mostar hunk'ı +
`yerlesimler_seyrek.js` Trebinye · GÜRCİSTAN = `devletler.js` kaheti-kralligi + `yerlesimler.js`
Zagem hunk'ı. Gürcistan'ın `olaylar_ek5.js` kısmı YOK.

| ölçüt | MOSTAR yalnız | GÜRCİSTAN yalnız | ikisi |
|---|---|---|---|
| çıkış kodu | 2 (taban kovası) | 2 (taban kovası) | 2 |
| Değişmez 2 açık | 0 | 0 | 0 |
| 2s AÇIK | **−1** (Trebinye'nin hersek bitişi Hersek'i anan maddeye düşer) | 0 (1490 Kaheti maddesine, 1762 1762-01-08 maddesine düşer) | −1 |
| 2s yabancı kırılma sayısı | düşer (sayısını bilmiyorum) | **+2** (Zagem 1490, 1762) | raporun 1722→1720'si |
| 2sk yalnız-taraf | 0 | **+1** (Zagem 1490 yalnız "Kaheti" tarafıyla kapanır) | +1 |
| 2t kırılmasız | 13 (1482 maddesi Herseknovi'ye düşer) | 13 | 13 |
| D1 sahipsiz | değişmez | değişmez | değişmez |
| 3z (ihlal değil) | 0 | +2 (Zagem m:Tiflis / egemen kaheti) | +2 |

Risk: iki yarı tavan bakımından birbirine bağımlı DEĞİL; tek başına çıkış 1 beklemiyorum.

---

## 1. Bölme yöntemi
Hunk düzeyinde, bayt koruyarak (`bol.py`, scratchpad): bir hunk `kaheti-kralligi` ya da
`Zagem (Kaheti)` içeriyorsa GÜRCİSTAN, değilse MOSTAR. Hiçbir hunk iki konuyu birden taşımıyor
⇒ @@ satır sayıları elle düzeltme GEREKTİRMEDİ (`yerlesimler.js`in iki hunk'ı ayrı yarılara
düştü; ilki net 0 satır, ikincinin ofseti değişmiyor). `devletler.js` CR sayısı 16 = orijinal 16.

**Doğrulama:** iki yarı birlikte uygulanınca ağaç orijinal çiftle **BİREBİR** (`write-tree`
`917d77e7…` = `917d77e7…`, temel 8b2f5415). `git apply --check` dört kombinasyonda (M · G · M+G ·
G+M) hem `c69b890f` hem `8b2f5415` üstünde temiz. İki temel arasında `data/` ve `arac/` farkı
YOK (yalnız `denetim/`, `oturumlar/`, `VERI-YAPISI.md`) ⇒ c69b890f'teki ölçümler 8b2f5415 için de geçerli.

## 2. Ölçüm — `py arac/denetle.py` (ağaç c69b890f, D8 için `kodla.py coz-c` ile
`devletler_harita.js` + `donemler.js` kuruldu — KRONO-SENKRON-1008.md'nin yolu)

| ölçüt | taban | (a) MOSTAR yalnız | (b) GÜRCİSTAN yalnız | (c) ikisi | orijinal çift |
|---|---|---|---|---|---|
| **çıkış kodu** | **2** | **2** | **2** | **2** | **2** |
| D1 sahipsiz | 309/309 | 309 | 309 | 309 | 309 |
| D2 kırılma · açık | 624 · 0 | 624 · 0 | 624 · 0 | 624 · 0 | 624 · 0 |
| 2s yabancı | 1722 | **1720** | 1722 | 1720 | 1720 |
| 2s AÇIK (tavan 185) | 185 | **184** | 185 | 184 | 184 |
| 2s KAPSAM DIŞI | 791 | 792 | 790 | 791 | 791 |
| 2s YIL-TEMSİLÎ BORÇ | 165 | 164 | 166 | 165 | 165 |
| 2sk yalnız-taraf (tavan 2250) | 2250 | 2250 | **2251 ⚠️** | 2251 ⚠️ | 2251 ⚠️ |
| 2sk kapalı = YER + TARAF | 4184 = 2071+2113 | 4186 = 2073+2113 | 4185 = 2071+2114 | 4187 = 2073+2114 | aynı |
| 2i açık | 1 | 1 | 1 | 1 | 1 |
| 2t kırılmasız (tavan 13) | 13 | 13 | 13 | 13 | 13 |
| 3z `m:`/egemen | 489 | 489 | **491** | 491 | 491 |
| D7 muaf kucuk-devlet | 308 | 308 | 310 | 310 | 310 |
| mükerrer (tavan 95) | 95 | 95 | 95 | 95 | 95 |
| ZAYIF mükerrer (ihlal değil) | 81 | **84** | 81 | 84 | 84 |
| 8b | 82 | 82 | 82 | 82 | 82 |

Çıkış 2'nin kovası beşinde de aynı: "Değişmez 8 körlük — defterde olmayan 18 (hat,gün)". İhlal 0.
(c) ile orijinal çiftin çıktısı yalnız süre satırında ve eşit sayılı bir listenin (`katalan`/`adal`
1 dönem) basım sırasında ayrışıyor — sayı farkı **0**.

### Her yarının tavan hareketi
- **MOSTAR:** 2s AÇIK 185 → **184** (iyileşme ⇒ §3.4-3: tavan 184'e İNER, Mostar commit'inde).
  2s yabancı −2, kapsam dışı +1, yıl-temsilî −1; 2sk YER +2. D2/2t/D1 sabit. Tek başına çıkış 2.
- **GÜRCİSTAN:** 2sk yalnız-taraf 2250 → **2251** (kapı "TAVAN AŞILDI … SINIFI istenir" uyarısı
  basıyor, çıkış 1 VERMİYOR). 2s AÇIK sabit 185; kapsam dışı −1, yıl-temsilî +1; 3z +2 (şema
  borcu). Tek başına çıkış 2.
- **Bağımsızlık:** iki yarının hareketleri toplamsal (a+b = c, her satırda). Sıra fark etmez.
  **Hiçbir yarı tek başına çıkış 1 vermiyor** ⇒ çare gerekmiyor.

### Öngörü ↔ ölçüm
- Tuttu: çıkış kodları (2/2/2) · Mostar 2s AÇIK −1 · Gürcistan 2sk +1 · 2t 13 her yarıda ·
  3z +2'nin Gürcistan'dan gelmesi · bağımsızlık.
- Tutmadı: Gürcistan'ın 2s yabancı sayısını **+2** artıracağını öngördüm; ölçüm **0** (1722 sabit,
  ama KAPSAM DIŞI −1 / YIL-TEMSİLÎ +1 kova geçişi var). Mostar'ın yabancı düşüşü −2 (sayı vermemiştim).
- Öngörmediğim: ZAYIF mükerrer +3 Mostar'dan. ADIYLA (`mukerrer_maddeler`, kişi ölçütü):
  ① 1466-01-01 yeni Hersek maddesi ↔ "İstanbul'da veba salgını ve sarayın Edirne'ye taşınması" (kişi fatih)
  ② 1482-01-01 "Hersek'in ilhakı" ↔ "Crnojeviç Zetası'nın tâbiiyeti…" (kişi bayezid)
  ③ 1482-01-01 "Hersek'in ilhakı" ↔ "Zaklise'nin (Zakynthos) yıllık haraç…" (kişi bayezid).
  Üçü de ayrı olay (aynı yıl-temsilî gün, ortak padişah) — ihlal değil, tavanı yok.

## 3. Ne bulamadım
- KRONO-SENKRON-1008.md "ZAYIF 81 → 82" diyor; ben **84** ölçtüm (hem iki yarıyla hem orijinal
  çiftle). Çiftlerin üçü de e28edfdc'de de var. **Çıkarım, ölçülmedi:** rapordaki 82 büyük olasılıkla
  1483→1482 değişikliğinden ÖNCEKİ "ilk hâl" ölçümü (1482-01-01'in iki çifti o zaman yoktu).
- Rapordaki 2s/2sk/2t birleşik hareketi (185→184 · 2250→2251 · 13) **birebir doğrulandı**.
- İlk ölçüm oturumunda "orijinal" koşusu Windows fork hatasıyla (bash `Resource temporarily
  unavailable`, çıkış 4) yarıda kaldı ve ağaçta orijinal çift uygulu bırakıldı; bu oturumda
  `apply -R --check` ile doğrulanıp geri alındı ve ölçüm yeniden koşturuldu (çıkış 2).

## 4. Ne istiyorum
1. İki yarı ayrı commit'lerle inebilir. **MOSTAR commit'i** `BEKLENEN` 2s AÇIK tavanını 185 → 184
   indirmeli; **GÜRCİSTAN commit'i** 2sk yalnız-taraf tavanını 2250 → 2251 yazmalı (sınıf: Zagem
   1490 yalnız TARAF ile kapanış, künye devralması değil — KRONO-SENKRON-1008.md §kapı). §3.4-0:
   yazmadan hemen önce yeniden ölçün.
2. GÜRCİSTAN'ın f=1490 kaynak tartışması çözülene kadar MOSTAR yarısı tek başına güvenle inebilir.

## 5. Dosyalar
- `denetim/KRONO-SENKRON-1008-MOSTAR.diff` — `data/olaylar_ek5.js` (2 hunk, LF)
- `denetim/KRONO-SENKRON-1008-MOSTAR-KOORD.diff` — `yer_yama.js` · `yerlesimler.js` (Mostar) · `yerlesimler_seyrek.js` (LF)
- `denetim/KRONO-SENKRON-1008-GURCISTAN-KOORD.diff` — `devletler.js` (CRLF hunk, 16 CR) · `yerlesimler.js` (Zagem)
- `-GURCISTAN.diff` YOK (Gürcistan'ın `olaylar_ek5.js` kısmı yok).
- Orijinal `KRONO-SENKRON-1008.diff` + `-KOORD.diff` dokunulmadı.
