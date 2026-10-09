# BIREBIR-TANIM-1006 — ÖNGÖRÜ (mühür 2026-10-06 17:29, kod yazılmadan ve ölçülmeden ÖNCE)

Okunan: `ALINTI-264-1006.md` §0/§2 · `TDV-CIKARICI-OZET-1006.md` · `ALINTI-TARAMA-1006.md` §0-§3 ·
`ARAC-ALINTI-264-1006.py` · `ARAC-TDV-CIKARICI-OZET-OLC-1006.py` · W30 `esle.py`/`rapor.py` (scratchpad).

## Tanım farkı (koddan okundu, ölçülmedi)
| | W30 esle.py / OZET-OLC | ALINTI-264 `birebir()` |
|---|---|---|
| normalleştirme | `nrm.norm` + alfasayısal dışı → boşluk | adım 1 (TAM): yalnız tırnak/tire/boşluk biçimi; adım 2 (NORM): `nrm.norm` kelime dizisi |
| kelime sınırı | VAR (" x y " dolgu) | adım 1'de YOK ⇒ #121 millet buradan geçiyor; adım 2'de VAR |
| parça bölücü | ` · ` `...` `…` `[...]` `[…]`, ≥1 kelime | `...` `…`, kırpılmış ≥3 harf |
| parça sırası | ARANMAZ | aranır |
| özet/gövde | her parça ayrı ayrı gövdede YA DA özette | önce bütün gövde, olmazsa bütün özet |

## Tek tanım için seçimim (koordinatör hükmü + benim açık kalan kararlarım)
kelime sınırlı (hüküm) · `nrm.norm` + alfasayısal dışı → boşluk · W30 bölücüsü · **parçalar SIRAYLA ve
AYNI metinde** (benim kararım: özetin sonu ile gövdenin başı arasında sıra anlamsız; `alinti_metinleri`
zaten ayrı tutuyor) · kelime sınırı yalnız KENARDA bozulursa ADI OLAN kova: `YAKIN-EK` (alıntının son
kelimesi gövde kelimesinin ÖN EKİ — ek kesilmiş) · `YAKIN-ON` (ilk kelime gövde kelimesinin SONU).

## Öngörü — sayı + mekanizma
1. **#121 millet** → iki araçta da `YAKIN-EK`. Mekanizma: *katolikoslukları* ⊂ *katolikosluklarına*, sağ kenar.
2. **264 evreni:** bugün 8 BİREBİR (7 ÖZET + 1 GÖVDE) / 256 YOK. Sonra **7 BİREBİR · 1 YAKIN-EK · 256 YOK**.
   Yalnız #121 değişir. Bant: 0–2 ek değişim (` · ` bölücüsü ya da noktalama farkı taşıyan satır).
3. **W30 korpusu (5.888 güçlü atıflı ölçülebilen cümle ve bütün 9.402 atıf):**
   - BİREBİR → başka: **0–5 satır**. Mekanizma: yalnız SIRA ve AYNI-METİN şartı yeni; ikisinin de nadir olması beklenir.
   - YAKIN → YAKIN-EK: **~25 satır (10–50)**. Mekanizma: yazar son kelimenin ekini kesmiş ya da değiştirmiş.
     W30 bunları benzerlik ≥0,85 diye YAKIN'a koydu; şimdi adlı kovaya geçer.
   - YOK → YAKIN-EK: **0–3**. Ek kesilmiş tırnağın benzerliği zaten yüksek olur.
   - YAKIN-ON: **0–2**.
   - güçlü atıflı YOK oranı (%12,98, 764/5.888): **değişmez** (±2 satır).
4. **YAKIN-EK hiçbir zaman BİREBİR'e sayılmaz.** Sınav bunu ayrıca sorar.
5. **tokoli-imre** (`TÖKÖLİ, İmre (ö. 1705) Osmanlılar'a bağlı Orta Macar kralı ve Erdel prensi`):
   **YAKIN-EK DEĞİL, YOK** (kelime sınırlı tanımda). Mekanizma: başa `TÖKÖLİ, İmre` başlığı eklenmiş. Bu bir
   kenar eki değil, ön ek dizgisi. Sonek kısmı (`(ö. 1705) …`) ayrı ölçülürse BİREBİR olabilir.
   Ölçüm, iki parçayı ayrı ayrı da gösterecek.
