# ONCE1281-EISENSTADT-1005 — Eisenstadt / Burgenland 1921 (M-5830 ③)

Oturum: ONCE1281-MOTOR-UFUK-1004 · 5 Ekim 2026 · **Veriye yazılmadı.** Taban HEAD `611f39ee` (taç yarısı indi).

## 0. Atlas bugün
`Eisenstadt (Kismarton)`: `macaristan-habsburg` 1526-08-29 → 1918-11-11 (K3) · `macaristan-naiplik` 1918-11-11 → **1923-10-29**.
⇒ Burgenland'ın Avusturya'ya geçişi atlasta **YOK** (`avus109` borcu).

## 1. Kaynak
- **Hukukî devir:** Trianon md. 27 (Avusturya-Macaristan sınırı) — metin FOROST `19200604-1`; Eisenstadt/Kismarton adı metinde
  GEÇMİYOR (aranmış, §ONCE1281-AVUSTURYA-UYGULA-1005 ①) — antlaşma bölgeyi sınır hattıyla devreder. İmza **1920-06-04**
  (TDV `birinci-dunya-savasi`), yürürlük 1921-07-26.
- **Fiilî devir:** BMI *Öffentliche Sicherheit* 7-8/2021, "Gendarmeriegeschichte — Landnahme 1921" (Schlag, *Aus Trümmern
  geboren … Burgenland 1918-1921*, WAB 106, 2001'e dayanır): ilk deneme 28 Ağustos 1921 (Freischärler ile başarısız);
  *"Die Interalliierte Generalkommission genehmigte am 11. November 1921 offiziell den Einmarsch des Bundesheeres in das
  Burgenland, mit Ausnahme der Region Ödenburg. Zwei Tage später wurde mit der neuerlichen Landnahme begonnen."* · güney
  25 Kasım'da başladı, *"Landesverwalter Robert Davy konnte am 6. Dezember 1921 diesen Teil übernehmen. Die Landnahme war
  nun abgeschlossen."*
- **Eisenstadt'a özgü gün: BULUNAMADI.** 1921-11-13 kuzey bölgenin BAŞLANGIÇ günüdür — şehre taşımak `D208`'in yasakladığı
  bölgeden şehre hüküm olur.

## 2. Model (F8 ile tutarlı — taç yarısının aynısı)
`macaristan-naiplik` 1918-11-11 → **1920-06-04** (Trianon imza) · `avusturya-cumhuriyet` 1920-06-04 → 1923-10-29.
`isg:` (Macar fiilî tutuşu 1920-06-04 → 1921 Kasım): yer düzeyi tam gün YOK ⇒ YAZILMAZ (öteki KABA noktalar gibi).

## 3. ÖNGÖRÜ — ölçümden ÖNCE
4c 127 · 4d 324 (`avusturya-cumhuriyet` f 1918-11-12 < 1920) · 2s: 1920-06-04 Trianon kovasına 1 birim (taraf: başlık
"Macaristan" ⇒ kapanır), AÇIK 188 · 2sk TARAF +1 · D7: Eisenstadt `avusturya-cumhuriyet` gövdesine BİTİŞİK (Viyana 50 km) ⇒ +0 ·
D1 309.

## 4. ÖLÇÜM (öngörü `0d0438ab`'den SONRA · `eis_sim.py`, bellekte)
🔴 **§0 YANLIŞTI:** atlas Eisenstadt'ı ZATEN Avusturya'ya geçiriyor — `data/yerlesimler_p77_avrupa.js` (AVRUPA-SINIR-0077, 27 Eyl):
`macaristan-naiplik` 1918-11-11 → **1921-11-13** · `avusturya-cumhuriyet` 1921-11-13 → 1923-10-29. Kaynak: AEIOU "Burgenland/
Geschichte" + Theresianische Militärakademie (*"Als am 13. November 1921 mit Zustimmung der Alliierten Kommission das Bundesheer
in das Burgenland einrückte"*), **bölge günü olarak beyanlı**. "Atlasta yok" cümlesini `avus109` notundan taşıdım, veriye
bakmadan — `D207`/`D224` ailesi kusurum. (BMI 2021 metni aynı günü bağımsız teyit ediyor: 11 Kasım onay + "zwei Tage später".)

| | 2s AÇIK | 2sk TARAF | 2i | 4c · 4d · D1 · D7 |
|---|---|---|---|---|
| BUGÜN (fiilî 1921-11-13) | 188 | 1635 | 154/1 | 127 · 324 · 309 · 727 |
| **F8: `s:` Trianon 1920-06-04, `isg:` yok** | **187** | 1636 | 154/1 | aynı |
| F8 + `isg: macaristan-naiplik` 1920-06-04 → 1921-11-13 | 187 | 1636 | 155/1 | aynı |
- **Bugünkü 1921-11-13 kırılması 2s'de AÇIK** — en yakın madde *"Büyükelçiler Konferansı Arnavutluk sınırlarını onayladı"*
  (alakasız). F8 kırılmayı Trianon kovasına taşır, taraf koluyla kapanır ⇒ **2s 188 → 187** (öngörü 188 ❌ — bugünkü açığı
  görmemiştim). 2sk +1 (öngörü ✅). D7, 4c, 4d, D1 aynı (öngörü ✅).
- Bu TERS bir F8 vakası: hukukî devir (Trianon) fiilîden (Kasım 1921) ÖNCE. Fiilî Macar tutuşu `isg:` ile yazılırsa (bölge
  günü, beyanlı) 2i'ye 1 kırılma eklenir; o da yakın-alakasız maddeyle kapanır ⇒ yazılacaksa madde ister:
  *"Avusturya Bundesheer'i Burgenland'a girdi (1921-11-13)"* — kaynak milak.at + BMI *Öffentliche Sicherheit* 7-8/2021.

## 5. İSTENEN
F8 tutarlılığı için önerim: `s:` Trianon (1920-06-04) + `isg: macaristan-naiplik` → 1921-11-13 (bölge günü beyanıyla) + 1921-11-13
maddesi. Daha dar seçenek: yalnız `s:` Trianon (`isg:` yok) — 2s yine 187. Karar sende; seçilince diff'i Berlin usulüyle yazarım.
