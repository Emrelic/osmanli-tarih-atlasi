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


---

## § v2 (ⓑ) — bayat soruyu tanıyan iki araç (10 Ekim 2026)
Koordinatör hükmü ⓑ: reçete/yama zaten işlenmişse sorunun ÖNCÜLÜ kalkmıştır ⇒ ne 0 ne 1, **2 ÖLÇÜLEMEDİ, sebebi ADIYLA**. ⓐ (emekliye ayırma) reddedildi: araç gerileme sezicisi olarak yaşar.
Diff: `denetim/ARAC-CIKIS-KODU-DUZELT-1010-X-v2.diff` — **v1'in YERİNE**, origin/main `616f7066`e karşı TAM diff (v1 + v2 + sınav; 5 dosya +236/−5). LF, BOM yok, CR 0 (16.171 bayt); temiz ağaçta `git apply --check` ✓, uygulanınca sınav 15/15.
NOKTA-KAFKAS ve KIMLIK-SINA hunk'ları v1 ile **bayt bayt aynı** (`cmp` ile ölçüldü).

### Öncül nasıl ölçülüyor (koddan, tahmin değil)
- **KAMERIKA-kunye-sina:** reçete id'si `devletler.js`te VAR **ve** aynı `ad:` ile duruyorsa ⇒ "zaten işlenmiş", ölçülmez, AYRICA sayılır. Kalanlar (OLCULECEK) bütün dallarla gerçek ölçüme girer. Aynı id + FARKLI ad = gerçek çakışma ⇒ ölçüme girer, ⑥ "ZATEN VAR" öter ⇒ 1. (Bugün 46/46 id+ad eşleşiyor; 2'sinin f/t'si sonradan düzeltilmiş — o yüzden ölçüt f/t değil ad.)
- **A-OKYANUSYA-sina:** `DOSYA in girdi.GIRDI_DOSYALARI` ise 3 km taramasında `z._kaynak == DOSYA` + aynı ad + < 0,05 km eşleşmesi (noktanın KENDİSİ) hata değil, ayrıca sayılır (UYGULA4 emsali: aynı ad + <0,05 km). Öteki bütün sorular (öteki dosyalara 3 km, künye, boya, dönem zinciri, sahipsiz) koşmaya devam eder. Pozitif kontrol bu atlamadan muaftır (`kendisi=None`).
- **Öncelik:** ihlal > ölçülemedi. Öncül kalkmışken gerçek bir ihlal varsa çıkış 1 (sınav O5).

### Önce / sonra (bugünkü veri, origin/main 616f7066)
| Araç | v1 | v2 |
|---|---|---|
| KAMERIKA-kunye-sina | 1 (46 "id ZATEN VAR") | **2** |
| A-OKYANUSYA-sina | 1 (61 "3 KM X ↔ X (0.0 km, a78)") | **2** ("GERÇEK: 0 hata") |
| NOKTA-KAFKAS-0077-sina | 0 | 0 (değişmedi) |
| ARAC-KIMLIK-SINA-0903 | 0/1/2 | aynı (değişmedi) |

### Sebep metinleri — BİREBİR (son satır, otomasyon için `SONUÇ:` önekli)
```
SONUÇ: ÖLÇÜLEMEDİ: 46 reçetenin tamamı (46/46) zaten devletler.js'te — soru bayat (teslim-öncesi araç)
SONUÇ: ÖLÇÜLEMEDİ: a78_okyanusya GIRDI_DOSYALARI'nda, 61 nokta kendisiyle eşleşiyor — soru bayat (canlıya alınmadan önceki kabul sınavı)
```
("46'sı" yerine "tamamı (46/46)": Türkçe ek sayıya göre değişir, sabit biçim seçildi.)
KISMİ durum (bir kısmı işlenmiş) ayrı basılır, "tamamı" kelimesi geçmez:
```
zaten işlenmiş (id+ad devletler.js'te): 45 · gerçek ölçüme giren: 1
⚪ ayrıca 45 reçete zaten işlenmiş (ölçülmedi): inuit, dene, ...
SONUÇ: temiz · ayrıca 45 reçete zaten işlenmiş (ölçülmedi)          ← ölçülen 1 reçete temizse
SONUÇ: İHLAL · ayrıca 45 reçete zaten işlenmiş (ölçülmedi)          ← ölçülen reçete öterse
```
A-OKYANUSYA'nın öteki SONUÇ satırları: `SONUÇ: İHLAL` · `SONUÇ: temiz` · `SONUÇ: ÖLÇÜLEMEDİ: pozitif kontrol ateşlemedi`.

### Sınav — `py denetim/ARAC-CIKIS-KODU-X2-SINAV-1010.py` (çıkış 0 = hepsi geçti; ~13 sn)
Veriye yazmaz: KAMERIKA kopyası geçici dizinde (araç + 4 reçete + değiştirilmiş `devletler.js`), A-OKYANUSYA bellekte `runpy` sarmalayıcısıyla.
| # | Soru | Sonuç |
|---|---|---|
| K1-K2 | KAMERIKA bugün: çıkış 2 + sebep birebir | ✓ rc=2 |
| K3-K5 | `kanada` id'si silinince (gerileme): 1 reçete gerçek ölçüme girer, 45'i "ayrıca", çıkış 0/1 (2 DEĞİL) | ✓ rc=0 |
| K6 | `kanada` aynı id + farklı ad: gerçek çakışma ⇒ ZATEN VAR öter, çıkış 1 | ✓ rc=1 |
| O1-O3 | A-OKYANUSYA bugün: çıkış 2 + sebep birebir + "GERÇEK: 0 hata" | ✓ rc=2 |
| O4 | a78 `GIRDI_DOSYALARI`ndan çıkarılınca: gerçek ölçüm, `SONUÇ: temiz` | ✓ rc=0 |
| O5 | canlıdayken gerçek ihlal (bir noktanın `kaynak`ı boşaltıldı): ihlal ölçülemediden önce | ✓ rc=1 |
| N1 | NOKTA-KAFKAS bugün: kusur 0, çıkış 0 | ✓ |
| M1-M3 | KIMLIK-SINA: argümansız 2 · geçerli JSON 0 · künyesiz `d:` 1 | ✓ |
**15/15.** TERS YÖN ölçüldü: aynı sınav yalnız v1 uygulanmış ağaçta **7/15** (K1-K4, O1-O4 KALDI) — sınav v2'yi gerçekten ayırt ediyor.

### Envanter "TARİHÎ" işareti — YAZMADIM, öneri
Üç dosya bulundu; hiçbiri benim değil:
- `denetim/LAB-KAPI-CIKIS-KODU-1009.md` (LAB, b6131aed) — YALAN-0 envanteri. **Sahibi LAB.**
- `denetim/LAB-YALAN0-RISK-1010.md` (LAB) — çağrı grafiği. **Sahibi LAB.**
- `denetim/SINAV-ENVANTER-1006.tsv` (UMIT-W27 ölçüm anlık görüntüsü) — tarihli ölçüm, **elle düzeltilmez**; sonraki envanter koşusunda kendiliğinden düzelir (KAMERIKA/A-OKYANUSYA 2 → "ATLANDI/ÖLÇÜLEMEDİ" kovasına düşer).

Önerilen ekler (LAB ya da koordinatör yazar):
1. `LAB-KAPI-CIKIS-KODU-1009.md`, ikinci tablonun "kategori" sütunu (satır 119, 171, 261 — `**YALAN-0**` hücreleri) ve ilk tablonun "çıkış 0 kanıtı" sütunu (satır 53, 56, 61) sonuna:
   ```
   A-OKYANUSYA-0078-sina   → **YALAN-0** · 🕰 TARİHÎ — teslim-öncesi araç, bugün 2 ÖLÇÜLEMEDİ (a78 GIRDI'de, 61 nokta kendisiyle), gerileme sezicisi · ARAC-CIKIS-KODU-DUZELT-1010-X-v2
   ARAC-KAMERIKA-0903-kunye-sina → **YALAN-0** · 🕰 TARİHÎ — teslim-öncesi araç, bugün 2 ÖLÇÜLEMEDİ (46/46 reçete devletler.js'te), gerileme sezicisi · ARAC-CIKIS-KODU-DUZELT-1010-X-v2
   ARAC-UYGULA4-ONSINAV-0918    → **YALAN-0** · 🕰 TARİHÎ — teslim-öncesi araç, bugün 2 ÖLÇÜLEMEDİ (yama inmiş, nokta kendisi), gerileme sezicisi · ARAC-CIKIS-KODU-DUZELT-1010-Y
   ```
2. `LAB-YALAN0-RISK-1010.md` tablo "Kova" sütunu (satır 114, 117, 120): `YALAN-0` → `YALAN-0 → KAPANDI (TARİHÎ, bugün 2)` ve "Ne içindi" sonuna aynı tek cümle.
⚠️ "KAPANDI" yalnız bu üç araç için; X-v1'in öteki ikisi (NOKTA-KAFKAS, KIMLIK-SINA) TARİHÎ değil, bugün gerçek ölçüm yapıyor (0/1).

### Ölçtüm · bulamadım · istiyorum
- Ölçtüm: yukarıdaki iki SONUÇ satırı bugün origin/main 616f7066 üzerinde; sınav 15/15 (v1-yalnız ağaçta 7/15).
- Bulamadım: `KUNYE-KAMERIKA` reçetelerinden biri bugün silinse **gerçek** hangi dalda öterdi — sınav yalnız `kanada` için koştu (temiz, rc 0).
- İstiyorum: v1 diff'i (`…-1010-X.diff`) bu v2 ile DEĞİŞTİRİLSİN (v2 v1'i içerir; ikisi birlikte uygulanmaz). Envanter eklerini LAB/koordinatör yazsın.

YENİ DOSYALAR: denetim/ARAC-CIKIS-KODU-DUZELT-1010-X-v2.diff · denetim/ARAC-CIKIS-KODU-X2-SINAV-1010.py (diff içinde) · (güncellendi) denetim/ARAC-CIKIS-KODU-DUZELT-1010-X.md
