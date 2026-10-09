# UMIT-W32b — SESSIZ-SIFIR-KAPI-1006 (T1-T5 yardımcısı + uygulama + tarama)

Görev: UMIT İRTİBAT, SESSIZ-SIFIR-1006'nın devamı. Temel `makine/umit` 47290f11
(diff 5874ef27'ye de `apply --check` TEMİZ). Commit yok, uygulama yok.
**Teslim: `denetim/SESSIZ-SIFIR-KAPI-1006.diff`** (54 dosya, +709/−11).
⚠️ Bu diff ② teslimindeki `OK-RENK-KAPI-1006.diff`in YERİNE geçer (onu kapsar; yardımcıya
`dosya` · `kova` · `bitir` eklendi). İkisi birlikte UYGULANMAZ (aynı yeni dosyayı yaratırlar).

## 0. Önce iki DÜZELTME — kendi önceki raporuma
1. **OK-RENK sessiz sıfır DEĞİLDİ** (② teslimi): `DEVLET_HARITA` kodlanmış
   `devlet_harita_ust.js`ten tam geliyor (584/584 renkli). "devlet: 3" gerçek değer.
   Durağan desen (`X || []`) ≠ gerçek sıfır. Risk yine de gerçekti: dosya kalkınca eski
   betik çıkış 0 + "devlet 0" veriyordu, T1 bunu kapattı.
2. **Öteki beş "sessiz sıfır"ın kökü "üretilmiş dosya yok" DEĞİL, DOSYA ADI DEĞİŞİMİ:**
   29 Eylül kodlamasından beri PETEKLER `donemler_on.js`te, DONEMLER `donemler_ust.js`te
   (ikisi de index.html'de, taze ağaçta VAR). `/donemler\.js/` süzgeci onları görmüyordu.
   🔴 **Kanıt: üretilmiş dosyaların TAM olduğu ağaçta da yamasız betikler yanlış
   sayı basıyordu** (aşağıda §3). Yani bu bir "taze ağaç" sorunu değil, her makinede
   29 Eylül'den beri süren sessiz yanlış.

## 1. Yardımcılar (`denetim/`, kapıya BAĞLI DEĞİL)
| dosya | içerik |
|---|---|
| `OLCU-KAPISI-1006.js` | `girdi` (T1 global boş) · `dosya` (T1 dosya yok + üretme ipucu) · `oran` (T3) · `api` (T4) · `kova`/`bitir` (alt ölçüm ölçülemedi; T5) |
| `olcu_kapisi_1006.py` | Python ikizi: `dosya` · `api` · `kova`/`bitir` |
| `SESSIZ-SIFIR-TARA-1006.py` | **uygulayıcı/tarama**: evren → ayır (mutlak/ağır) → kuru koşu (-P) → kova → `--karsilastir` ile YAN ETKİ listesi |
| `OLCU-KAPISI-SINAV-1006.py` | iki yardımcının birim sınavı **18/18** (gerçek eksik dosya dahil) |
| `OK-RENK-KAPI-SINAV-1006.js` | OK-RENK iki yönlü **13/13** |
Hepsi **çıkış 2**. `bitir(1)`: ihlal varsa hüküm 1 kalır, kova YİNE basılır (denetle.py kuralı).
Üretme ipuçları ölçüldü: `py arac/kodla.py coz-c data data/<dosya> [donem|govde]` —
bu makinede devletler_harita 46 sn (173 MB) · donemler 14 sn (57 MB) · petek_govde 2 sn (11 MB).

## 2. Uygulanan (49 betik)
| kalem | betik | çare |
|---|---|---|
| sessiz sıfır, ad değişimi | UI2-FARK · ANTLASMA-MALIYET · UI3-OLCUM · ISY-OLCUM · ANTLASMA-KAPSAM | süzgeç `donemler(_on\|_ust)?\.js` + T1 `girdi` |
| gövde geometrisi gerçekten gerekli | ANTLASMA-KAPSAM (bütünü) · ISY-OLCUM (⑤ alt ölçümü) | T1 `dosya` / `kova` |
| OK-RENK | ARAC-OK-RENK-0072 | T1 DEVLET_HARITA + SEFERLER · yutulan yükleme hataları basılıyor |
| 33 çöküş 1→2 | A-ASYA-0078-olc · GECIS-SURE ×2 · GEO-0916 ×10 · GOVDE-KIYAS · HARITA-DURUM ×2 · SINIR-DIS · YUK ×2 · YUKLEME-0072 ×3 · SINIR-D-OKYANUSYA ×2 · C-NSEGMENT · D-RENK-0073 ×2 · DIKIS · HALKA-SINA · KITA15 · PETEKSIZ · SINIR-ARABISTAN/UZAKDOGU-govde | T1 `dosya` (yalnız KODDA açılan dosyalar; yorumdaki adlar sayılmadı) |
| odak_olc kaldırılmış API (9) | ODAK-0080: AFRIKA-AMERIKA/AVRUPA-BATI/BALKAN/DOGU-ISLAM/OSMANLI-ANADOLU -uygula · AVRUPA-BATI/BALKAN -dokum · OSMANLI-ANADOLU -dok/-olcer-sinav | T4 `api` (import satırından hemen sonra; **6'sı veriye YAZAN uygula/dokum — artık yazmadan durur**, ölçüldü: data/ değişmedi) |
| T5 | ARAC-VL-SINAV-0907 | `kova` + `bitir` |
Bu temelde odak_olc listesi **9** (W36 ile aynı; ODAK-ASYA-uygula W36'da onarılmış).

**Dokunulmayan 8 çöküş:** MTR-DENIZASIRI · MTR-KOPRU (`C:\atlas\data\…` MUTLAK) ·
YUK-KAPI-SINAV (`C:\atlas-yuk-bolme` MUTLAK) · UI2-YAMA-APP (çöküş sebebi başka: app.js
işareti) · `_bekci_kosu4/4c` · `_tavan200_olc` · `_yukleme0072_dilim_yaz` (atılabilir `_`).

## 3. Tarama — dört koşul, aynı araçla (yan etki + yanlış pozitif)
"Boş" = taze ağaç (üretilmiş 3 dosya yok). "Dolu" = aynı ağaç + `kodla.py coz-c` ile
üç dosya geri çözülmüş. Evren 207 betik (109 koşulan · 98 yalnız listelenen).

| | boş-önce | boş-sonra | dolu-önce | dolu-sonra |
|---|---|---|---|---|
| OLCULEMEDI (2) | 6 | **51** | 3 | 13 |
| T1-COKUS (1) | 42 | 6 | 7 | 4 |
| T4-COKUS (1) | 6 | 0 | 6 | 0 |
| T5 | 3 | 1 | 3 | 1 |
| T1? / T3? aday | 3 / 1 | 1 / 2 | 3 / 2 | 2 / 3 |
| süre | 613 sn | 607 sn | 1925 sn | 1893 sn |

**YAN ETKİ (çıkış kodu değişen, adıyla — `--karsilastir`):**
- boş: **45** değişti, **45'i amaçlanan** (33 T1 çöküş 1→2 · 9 odak 1→2 · KAPSAM/ISY 0→2 · VL 0→2).
- dolu: **10** değişti: VL-SINAV 0→2 (kalıcı, aşağıda) + 9 odak 1→2 (gerçekten koşamazlar).
- **T1 YANLIŞ POZİTİF = 0**: T1 eklenen 38 betiğin (33 + 5) hiçbiri veri varken 2'ye dönmedi.
- ⚠️ **Kalıcı yan etki — ARAC-VL-SINAV-0907:** çapanın KONUMU bu betikte HİÇ ölçülmüyor
  (tasarım). T5 ile artık her koşuda çıkış 2. Ya konum ölçümü eklenir ya bu satır
  "kapsam dışı" beyanına çevrilir — hüküm koordinatörün.
- ⚠️ **Değer değişen ama kodu aynı kalan (0→0) — asıl kazanç:** dolu ağaçta bile
  UI2-FARK PETEKLER 0→4296 ("peteği bulunamayan" boşta 570→2) · ANTLASMA-MALIYET her
  antlaşmayı "peteksiz" sayıyordu → 0 · ANTLASMA-KAPSAM "0 KB" (×NaN) → gerçek boyut ·
  ISY-OLCUM "peteksiz 7" vb. → doğru · UI3-OLCUM Osmanlı kırılması 0→616, istisna 0→4.

**ARACIN KENDİ YANLIŞ POZİTİFİ (? kovaları elle okundu):**
- sonra'daki 4 bayrağın **4'ü yanlış**: OLCULEMEDI-KAPI-SINAV (kavram sınavı, sözcük
  içerikte) · UI3 "(onem undefined)" (gerçek alan eksikliği, NaN türevi değil) ·
  OK-RENK-KAPI-SINAV ("NaN yolu" etiketi) · MALIYET "peteksiz 0" (artık gerçek değer).
- önce'deki 7 bayrağın 6'sı doğru (3 T1? · KAPSAM T3? · UI3/VL T5), 1 yanlış (KAPI-SINAV).
- ⇒ "?" kovaları ADAYDIR; aracın başlığı bunu yazar. OK-RENK vakası (desen ≠ sıfır)
  başlıkta ölçülen örnek olarak duruyor.

**TARAMANIN KENDİ YAN ETKİSİ (ölçüldü):** kuru koşulan betiklerin bir kısmı izlenen
dosyalara YAZIYOR: boş ağaçta 7 dosya (`BEKCI-KOSU4B/4C/7B.log` · `BEKCI-KOSU9.out` ·
`HARITA-DURUM-0074-UFUK-DUNYA.json` · `SINIR-HUKUKI-KAFRIKA-0907.json` ·
`YUKLEME-0072-SINAV-A.json` — sonuncusu −3804 satır), dolu ağaçta 20 + 5 izlenmeyen.
⇒ **Tarama YALNIZ atılabilir worktree'de koşar**; çalışan ağaçta koşturmak raporları
EZER. Bu turdaki diff yalnız benim 54 dosyamdan kuruldu, kirlilik geri alındı.

## 4. Bulamadım / kapsam dışı
- 98 "ayrı tutulan" betiğin dinamik davranışı (mutlak yol / yan etki) ölçülmedi.
- COKUS-OTEKI: boşta 9, dolu 17 (dolu'da artan: büyük dosyayla başka çöküşler, ör.
  D-RENK-0073-MALIYET `SP` argümanı yok → W36'nın "gömülü SP" ailesi). Yamadan önce ve
  sonra AYNI — bu diff'in yan etkisi değil.
- SURE (150/240 sn aşımı): 5/7 — bekçi döngüleri, beklenen.

## 5. Öneri
1. Diff'i tek parça uygula (OK-RENK-KAPI-1006.diff'i değil).
2. VL-SINAV hükmü (kalıcı 2 mi, kapsam beyanı mı).
3. Tarama gece işi: dolu ağaç kurulumu (`coz-c` ×3, ~62 sn) + iki kuru koşu ~65 dk (-P 2).
   Kapıya bağlanmasın; `--karsilastir` çıktısı okunur.
4. Ders adayı: **bir veri dosyası yeniden adlandırılınca/kodlanınca ADA göre süzen
   tüketiciler sessizce boş kalır** — paketleme (29 Eyl) ve kodlama (29 Eyl) aynı gün
   iki kez aynı sınıfı üretti. Yükleme `INDEX-KAYNAK`/`acikListe` gibi tek yerden olmalı.
