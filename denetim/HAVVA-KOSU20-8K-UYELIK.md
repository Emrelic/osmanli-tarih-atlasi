# HAVVA-KOSU20-8K-UYELIK — Değişmez 8k körlük üyeliği, KOŞU 20 öncesi ↔ sonrası

**İzolasyon:** aynı veri tabanı `fc380975`, yalnız gövde değişti
(önce: main'deki kodlanmış eski gövde, `coz-c` ile çözüldü · sonra: KOŞU 20 gövdesi).
Fark bu yüzden YALNIZ gövdeden gelir.

| | kaynak | 8k |
|---|---|---|
| önce | `denetim/HAVVA-KOSU-ONCESI-8K-1006.md` | 75 tam kör · 19 yarım · 169 (hat,gün) · defter dışı **10** |
| sonra | `denetim/DEGISMEZ-KOSU20-HAVVA-b.log` (`--ayrinti` ile tam liste) | 78 tam kör · 22 yarım · 178 (hat,gün) · defter dışı **18** |

⚠️ "Sonra" ölçümünde yerel `devletler_harita.js`/`donemler.js`, koşunun YAZDIĞI
dosyalar değil, kodlanmış sürümden `kodla.py coz-c` ile TÜRETİLMİŞ dosyalardır.
Sebep: motor ham `.js`'leri CRLF yazdı, `denetle._d8_govde_kimlik` baytı, `kodla.py`
metni (LF) özetliyor. CRLF→LF sonrası özetler birebir: `f44960ee3ce1` · `6c62bce017bf`.
Ham CRLF kopyalar: `C:\atlas-kosu-kayit\ham\` (HAVVA, depoda değil).
Kanıt çifti: `DEGISMEZ-KOSU20-HAVVA.log` (uyuşmazlık) + `DEGISMEZ-KOSU20-HAVVA-b.log` (kapanmış).

## KALDI — 10/10
```
d1918-kenya-almanya-dogu-afrika¦1890-07-01
d1919-pl-ro-fiili¦1919-08-27
d1919-pl-ro-fiili¦1923-03-14
d1923-pl-ro¦1923-03-15
d1923-pl-ro¦1923-10-28
d1923-si-ih-2¦1894-10-17
d1923-si-ih-2¦1923-10-28
g4-bna-us-bati-2¦1846-01-01
gdasya-si-ih-pakchan-1868¦1868-07-03
gdasya-si-ih-pakchan-1868¦1923-10-28
```

## KALKTI — 0

## YENİ — 8
```
d1919-hu-cs-fiili-2¦1919-07-25
d1919-hu-cs-fiili-3¦1919-07-25
g3-bg-ro-tuna-p1¦1878-07-13
g3-bg-ro-tuna-p1¦1879-12-31
g3-bg-ro-tuna-p2¦1880-01-01
g3-bg-ro-tuna-p2¦1881-03-25
g3-bg-ro-tuna-p3¦1881-03-26
g3-bg-ro-tuna-p3¦1908-10-04
```
6/8 Bulgaristan–Romanya **Tuna** hattı, 1878–1908 uç günleri: 4 Ekim gerilemesinin
bölgesi. Bu bir İHLAL değil, KÖRLÜK artışıdır: Değişmez 8 bu çiftlerde artık sorulamıyor.
