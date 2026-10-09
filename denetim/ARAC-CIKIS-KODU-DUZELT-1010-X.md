# ARAC-CIKIS-KODU-DUZELT-1010-X — 4 araca çıkış kodu bağlandı (10 Ekim 2026)
Model: sonnet · origin/main f0b6fd50'den ayrı worktree · diff: `denetim/ARAC-CIKIS-KODU-DUZELT-1010-X.diff` (LF, BOM yok, CR 0, temiz ağaçta `git apply --check` ✓; 4 dosya +32/-2)
Sözleşme (CLAUDE.md §3): 0 temiz · 1 ihlal · 2 ölçülemedi. İhlal, ölçülemediden önce gelir.

## Önce / sonra çıkış kodu (iki yön)
| Araç | Girdi | ÖNCE | SONRA |
|---|---|---|---|
| NOKTA-KAFKAS-0077-sina | bugünkü veri (kusur 0) | 0 | **0** |
| | yapay düşüş (scratch kopyada `t`'yi `f`'ye eşitle → SIFIR/TERS + DELİK) | 0 | **1** |
| | `--atesle` (≥5 yakalar) | 0 | 0 (değişmedi; kendi çıkışı vardı) |
| ARAC-KIMLIK-SINA-0903 | geçerli JSON (avustralya 1910-1920) | 0 | **0** |
| | kunye'siz `d:` (yok-boyle-devlet) | 0 | **1** |
| | hayalet (donem kunye f'sinden önce) | 0 | **1** |
| | `d:` içermeyen JSON | 0 | **1** |
| | argümansız | 0 | **2** (ölçülemedi) |
| ARAC-KAMERIKA-0903-kunye-sina | geçerli tek reçete (scratch) | 0 | **0** |
| | bugünkü 4 reçete dosyası (46 "id ZATEN VAR") | 0 | **1** |
| | ateşleme dalı ÖTMEZSE (sınav kendini doğrulayamadı) | 0 | 1 |
| A-OKYANUSYA-0078-sina | bugünkü veri (61 hata) | 0 | **1** |
| | dosya canlı listeden çıkarılmış (scratch sarmalayıcı) | 0 | **0** |
| | pozitif kontrol ateşlemiyor (eşik 5→500, scratch) | 0 | **2** (ölçülemedi) |

## "Yazıyor mu" ölçümü
Dördünün kodu okundu: hiçbiri dosya yazmıyor / `data/`'ya dokunmuyor (yalnız `girdi`/`renkler` import + okuma). Koşturma sonrası `git status` temiz (yalnız benim düzenlemelerim). Kopyalar (202 MB) scratchpad'de yapıldı; worktree'ye veri yazılmadı.

## Ölçtüm
- Dördü de düşen sınavda 0 veriyordu (YALAN-0), kod yolundan doğrulandı + bugün koşturuldu.
- BUGÜN iki araç GERÇEKTEN düşüyor (artık 1 verir, eskiden "temiz" görünüyordu):
  - **KAMERIKA-kunye-sina**: reçete 46 künyesi `devletler.js`'e zaten işlenmiş → "id ZATEN VAR" 46. Teslim-öncesi aracı; bayat girdi.
  - **A-OKYANUSYA-sina**: `yerlesimler_a78_okyanusya.js` artık GIRDI_DOSYALARI'nda → her nokta kendine "3 KM 0.0 km" → 61 hata. Dosya canlıya alınmadan önceki sınavdır; bayat.
- NOKTA-KAFKAS bugünkü veride gerçekten temiz (kusur 0), KIMLIK-SINA geçerli girdide temiz.

## Bulamadım
- Dört aracın "canlı kaldığı" bir çağıran/otomasyon (denetle.py vb.) taramadım — kapsam dışı.

## İstiyorum / öneri (karar sende)
1. KAMERIKA-kunye-sina ve A-OKYANUSYA-sina artık 1 verecek: ya emekliye ayır ya "uygulandı" bayrağıyla 0'a bağla. Ben mantığa dokunmadım.
2. Kararım: A-OKYANUSYA'da `SAHİPSİZ` (1923-09-01 sahibi yok) satırını da ihlal saydım (⑤ maddesi başlıkta sınav). Bugün 0 sahipsiz, etkisi yok. Karşıysan tek satır.
3. Ölçülemedi (2) sözleşmesinde "ateşlemedi" = alet kırık seçildi (EKOKUMA ile aynı).

YENİ DOSYALAR: denetim/ARAC-CIKIS-KODU-DUZELT-1010-X.diff · denetim/ARAC-CIKIS-KODU-DUZELT-1010-X.md
