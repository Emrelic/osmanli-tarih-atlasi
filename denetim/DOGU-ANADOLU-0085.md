# DOGU-ANADOLU-0085 — 0085 H-0003 · H-0004 · H-0016

Görev UMIT İRTİBAT · 9 Ekim 2026 · ağaç `C:\atlas-danadolu` (`origin/main` 6865cc87) · commit yok ·
**diff YOK** (§4'te gerekçesi var).
Görseller açıldı ve yalnız okundu (paketten, gizli depo; açık depoya kopyalanmadı):
H-0003-1 · H-0004-1 · H-0016-1.

## 0. Öngörü — ölçümden ÖNCE
- **H-0003:** görüntü sorusu. Petek/emilme ya da renk; veri kusuru beklemiyorum.
- **H-0004 / H-0016:** Şebinkarahisar `akkoyunlu` 1381→1473 ve o pencerede Akkoyunlu'nun yalnız
  iki noktası var (ARTUKLU raporu) ⇒ eksklav **veri kaynaklı**. TDV `sebinkarahisar` büyük
  olasılıkla 1459 öncesini Akkoyunlu saymıyor.

**Sonuç:** ikisi de ✓. Ek olarak TDV iç çelişkisi (§2) ve bir denetim körlüğü (§3) çıktı.

## 1. H-0003 — "sivri çıkıntılar", Iğdır ve Beri "boyamamış"
**Görselin günü ölçüldü:** pembe = `karakoyunlu` #e018e0. Doğubayazıt karakoyunlu 1351-1467.
Iğdır, Beri, Norapat, Eçmiyadzin, Mâku ve Digor:
- 1340-1386 `celayirli` #b5432f (canlı kızıl)
- 1386-1408 `timurlu` #9c7563
- 1408'den sonra `karakoyunlu`

Görselde kızıl yok ⇒ görüntü **1386-1408** arasından.

**"Boyamamış" görünmesinin sebebi — renk, ölçüldü:**
```
              ΔE76 altlık(#e8dfc8)   L*   kroma
timurlu            38,9              53    20    ← çevredeki her rengin en soluğu
celayirli          68,3              44    58
mutahharten        54,6              49    50
akkoyunlu          63,5              63    66
karakoyunlu       115,5              54   102
```
Timurlu kahverengisinin kroması 20, rölyef gölgelemesinin kahverengisine çok yakın. Iğdır ve
Beri aslında boyalı (`timurlu`), ama göze "boş toprak" gibi görünüyor. Veri doğru:
- Iğdır'ın zinciri komşudan alınmış (Kars/Revan, TDV `kars` 788/1386 Timur).
- Doğubayazıt'ın Karakoyunlu olması bölge ankrajına dayanıyor.

**Sivri uçlar:** Doğubayazıt'ın (ve güneydeki Karakoyunlu noktalarının) peteğinden kuzeye, Aras
ovasına doğru iki dar dil uzanıyor: biri Iğdır'ın batısında, biri Iğdır ile Beri arasında.
Hipotez (**ÖLÇÜLMEDİ**): motorun sırta ve nehre yaslama geometrisi (`CLAUDE.md §2`). Veride
sahiplik değişikliği gerektirmiyor. GORUNTU-0087'ye soruldu, cevap henüz gelmedi; sınıf onun
kalemi.

**Öneri:** veriye dokunulmasın. ① Timurlu renginin rölyef üstünde okunurluğu (`renk_olc.py`
yalnız düz altlığa karşı ölçüyor, rölyefe karşı ölçmüyor) ② sivri dil geometrisi →
GORUNTU-0087 / motor kalemi.

## 2. H-0004 · H-0016 — Şebinkarahisar Akkoyunlu eksklavı
**Görsellerin günü:**
- H-0004'te Şebinkarahisar'ın iki yanı koyu kırmızı (Osmanlı Mesudiye/Gölköy ve Osmanlı
  Kemah/Erzincan) ⇒ **1401-02-01 → 1402-07-28**.
- H-0016'da sağ taraf zeytin (`mutahharten` #827717, "E…" etiketi Erzincan) ⇒ **1402-07-28 →
  1410**.
- İkisinde de Şebinkarahisar `akkoyunlu` ve hiçbir Akkoyunlu komşusu yok. 1410'a kadar Kelkit ve
  Erzincan Mutahharten'de; en yakın Akkoyunlu Diyarbakır, ~290 km.

**Veri:** `yerlesimler_ek29.js` Şebinkarahisar: eretna 1335→1381 · **akkoyunlu 1381→1473-08-11**.
Kaydın kendi yorumu bunu bir **SADELEŞTİRME** olarak beyan ediyor: *"1381-1473 arası
`akkoyunlu`ya sıkıştırıldı. Bu bir tercihtir ve gerçeğin tamamı DEĞİLDİR"*.

**TDV (birebir, gövde okundu):**
- `sebinkarahisar`: *"Selçuklular’ın çöküşü üzerine … Eretnaoğulları’nın idaresine girdi. Timur’un
  istilâsının ardından 811’de (1408) Gözleroğlu’nun, on yıl sonra Karakoyunlu Türkmenleri’nin,
  864’te (1459-60) ise Akkoyunlular’ın eline geçti. … Otlukbeli Savaşı ile 878’de (1473) aldı."*
- `akkoyunlular`: *"Şebinkarahisar hâkimi Pîr Hüseyin Bey de Erzincan ve Bayburt’u ele geçirdi
  (1362)"* · Karayülük (1421 sonrası) *"…Karahisar’ı da oğlu Kemah hâkimi Yâkub Bey’e verdi"* ·
  *"Kemah-Erzincan-Karahisar hâkimi olan ağabeyi Yâkub"* · 1464-65: *"Şebinkarahisar’dan Siirt’e
  kadar uzanan bölge Akkoyunlu ülkesi haline geldi"*.
- `eretnaogullari`: Eretna 1352'de öldüğünde *"… Erzincan, Doğu Karahisar ve Dârende onun
  hâkimiyeti altındaydı"*.
- `kadi-burhaneddin` ve `karakoyunlular`: Şebinkarahisar/Karahisar **geçmiyor**.

**Sınıflandırma (D205):**
- **1381-1408: kimlik yanlış.** İki TDV maddesi de bu dönemi Akkoyunlu saymıyor (Eretna halefleri,
  Timur). H-0004 ve H-0016'nın gösterdiği eksklav **veri kusuru**dur, kaynakla desteklenmiyor.
  Ama doğru sahip **bulunamadı**: `eretna` künyesi 1381'de bitiyor (uzatmak 4c'ye düşer);
  `burhaneddin` (1381-1398) için Karahisar'ı anan TDV cümlesi yok, yazılırsa çıkarım olur.
- **1408-1418: Gözleroğlu.** **Künyesi YOK** (`devletler.js` tarandı). Yeni künye ister; gün YIL
  (811/1408).
- **1418-1459: TDV İÇ ÇELİŞKİSİ (tuzak ⑥).** `sebinkarahisar` Karakoyunlu ("on yıl sonra",
  türetilmiş 1418) der, `akkoyunlular` 1420'lerde Karahisar'ı Akkoyunlu Yâkub Bey'e verir. D206
  (iki uç): Kelkit ve Erzincan 1410'dan, Kemah ~1430'dan sonra veride `akkoyunlu`. Karakoyunlu
  yazılırsa 1430-1459 arasında **yeni bir Karakoyunlu eksklavı** doğar. Akkoyunlu
  versiyonu komşularla tutarlı.
- **1459-1473: Akkoyunlu.** İki madde de bunu destekliyor, veriyle uyumlu.

## 3. Denetimin görmediği sınıf — Değişmez 7 bu eksklavı LİSTELEMİYOR
`PYTHONHASHSEED=0 py arac/denetle.py --ayrinti` (main, **çıkış 2**: Değişmez 8 taze ağaçta
ölçülemiyor). Değişmez 7'de (737 enklav) Şebinkarahisar **hiç geçmiyor**; Diyarbakır'ın 1401
Akkoyunlu kırılması da geçmiyor. Akkoyunlu için listelenen ilk ada 1462 (Diyarbakır + Hasankeyf +
Siirt). Hipotez (**ölçülmedi**): Değişmez 7 yalnız sahibi DEĞİŞEN noktanın gününde soruyor. 1381'de
Şebinkarahisar Akkoyunlu'nun **tek** noktası olduğu için "ana gövde" sayılıyor. 1401'de Diyarbakır
eklenince iki parça oluşuyor, ama ya muafiyet kovasına (cografi-tecrit 4673 · kucuk-devlet 304)
düşüyor ya da ana gövde seçimi onu ada saymıyor. Ayırt **edilmedi**.

## 4. Diff neden YOK
- **H-0003:** veri doğru; kusur renk ve motor geometrisinde (başka kalem).
- **H-0004/H-0016:** kusurlu dilimin (1381-1408) doğru sahibi **bulunamadı**. 1408-1418'in sahibinin
  künyesi yok. 1418-1459'da TDV kendisiyle çelişiyor. Diff ancak şunlardan biri yazılabilir:
  ① bilinen yanlışı başka bir çıkarımla değiştiren, ② boyasız kimliğe toprak veren. İkisi de
  bugünkünden kötü olabilir ⇒ **yazmadım**. `denetle` önce/sonra bu yüzden yalnız "önce" olarak
  koştu.

## 5. İstek (karar koordinatörde / Emre'de)
1. **Şebinkarahisar 1381-1408** için üç seçenek:
   - **Ⓐ (önerim)** `burhaneddin` 1381→1398 + Osmanlı/Timurlu ara dönemi araştırması
     (Sivas ile aynı süreç; ÇIKARIM beyanlı)
   - Ⓑ `akkoyunlu` kalsın, yalnız beyan güncellensin (bugünkü hâl)
   - Ⓒ `__BOSLUK__`. Önermiyorum: sahibi vardı, "kimsenin değildi" yanlış olur.
2. **Gözleroğlu künyesi** (1408-~1418, TDV `sebinkarahisar`) açılsın mı? Açılırsa boya gerekir.
3. **1418-1459:** TDV iç çelişkisinin çözümü için ikinci bir akademik kaynak (Woods, *The Aqquyunlu*)
   aranmalı. O gelene kadar `akkoyunlu` kalsın (komşularla tutarlı).
4. Değişmez 7'nin bu eksklavı neden göremediği ayrı bir denetim kalemi olsun.
5. H-0003: renk okunurluğu (Timurlu kroması 20) + sivri dil geometrisi → GORUNTU-0087 / motor.

## Dosyalar
- `denetim/DOGU-ANADOLU-0085.md` (bu rapor). Diff yok.

---

# DEVAM — koordinatör hükümleri uygulandı (9 Ekim 2026, `origin/main` 6865cc87)

## 6. Yazılan zincir (Şebinkarahisar, `yerlesimler_ek29.js`)
```
eretna       1335 → 1381
burhaneddin  1381 → 1398   ÇIKARIMDIR — gerekçe zinciri kaynak alanında BİREBİR; "KASA çelişen kaynak bulursa hüküm DÜŞER"
__BOSLUK__   1398 → 1408   AÇIK KALEM (KASA): Osmanlı 1398 mi, Timur 1400 mü bilinmiyor   [ÖNERİ]
   (alt.)    akkoyunlu     eski sadeleştirmenin kalıntısı                               [ALTERNATİF diff]
gozleroglu   1408 → 1418   f TDV (811/1408) · bitiş TÜRETİLMİŞ ("on yıl sonra")
akkoyunlu    1418 → 1473-08-11  korundu (D206); TDV iç çelişkisi kaynak alanında
```
- `burhaneddin` künyesi (görevde `kadi-burhaneddin` diye anılan): id `burhaneddin`, f 1381 / t 1398,
  **boyalı** (#155412). Dilim künye penceresinin içinde, 4c ve 4d'ye düşmüyor.
- Kayıttaki "SADELEŞTİRME" yorum bloğuna, sadeleştirmenin açıldığını söyleyen bir satır eklendi.

## 7. 1398-1408: hangisi daha az yanlış — ölçüldü
| | A: akkoyunlu kalır | B: `__BOSLUK__` (önerim) |
|---|---|---|
| H-0004 (1401-02) · H-0016 (1402-1410) | eksklav **aynen durur**: Emre'nin işaret ettiği kusur kapanmaz | eksklav **kalkar** |
| iddia | TDV'nin iki maddesiyle çelişen bir sahip | "kimsenin değildi": o da doğru değil, ama bir sahip uydurmaz |
| harita | yeşil ada | Şebinkarahisar peteği 10 yıl **boyasız** (delik) |
| Değişmez 7 | 737 (değişmez; D7 bu adayı zaten görmüyor) | **738** (+1: `1398-01-01 Şebinkarahisar → __BOSLUK__ 1560 km ada`) |

**Önerim B**, çünkü görevin konusu olan kusuru kapatan tek seçenek bu. Bedeli görünür bir delik ve
bu delik beyanlı. A'nın diff'i de hazır (`-KOORD-ALT-AKKOYUNLU-KALINTI.diff`).

## 8. `denetle.py` önce / sonra (`PYTHONHASHSEED=0 --ayrinti`; dört koşunun hepsi **çıkış 2**, Değişmez 8 taze ağaçta ölçülemiyor)
```
                      ÖNCE        A+künye     B+künye     B (künyesiz)
2s AÇIK               184         184         184         184
2s KAPSAM DIŞI        791         790         790         790
2s YIL-TEMSİLÎ BORÇ   167         170         170         170    (+3: 1381 · 1408 · 1418 kırılmaları, hepsi 01-01)
Değişmez 7            737         737         738         738
kaynaksız s:          1908        1907        1907        1907
Değişmez 4 künyesiz   —           —           —           🔴 "1 dönem KÜNYESİZ kimlik: gozleroglu" (çıkışı 1 yapmıyor, ama GERÇEK borç)
D1 · D2 · 2i · 2t · 4c · 4d   hepsi aynı
```
- **Şebinkarahisar D7'de görünüyor mu:** önce **hayır**. Yamadan sonra Burhâneddin dilimi ada
  sayılmıyor (Sivas'a bitişik), Gözleroğlu dilimi de ada sayılmıyor (tek noktalı devlet kendi ana
  gövdesi). Yalnız B'nin `__BOSLUK__` dilimi görünüyor. Akkoyunlu eksklavının (A) D7'de
  görünmemesi sürüyor; kör nokta LAB'de.
- Burhâneddin'in ada satırları (1381 Kayseri + Kırşehir, 170-174 km) önceden de vardı, benim
  değil.

## 9. Çıktılar
- `denetim/DOGU-ANADOLU-0085-KOORD.diff` (B, öneri) · `-KOORD-ALT-AKKOYUNLU-KALINTI.diff` (A)
  - Yalnız `yerlesimler_ek29.js`, LF, CR 0.
  - İkisi de `git apply --check` ile temiz.
  - Birlikte UYGULANMAZ.
- `denetim/DOGU-ANADOLU-0085-KUNYE.json`: `gozleroglu` yeni (f 1408 yıl; t için öneri
  1418-01-01, türetilmiş üst sınır) + `burhaneddin` notu.
  - 🔴 **Künye + boya, KOORD diff'iyle AYNI commit'te.**
  - Boya C3 listesine: ölçümde geçici #c2185b kullanıldı, bu bir öneri değil.

---

## 10. H-0003 PİKSEL DOĞRULAMASI (9 Ekim 2026, `origin/main` 5921a031, paketler taze)
**Alet:** `C:\atlas-umit\denetim\ARAC-GORUNTU-0087.js`. Headless Chrome, gerçek `index.html`,
`tarihAyarla`. Sahne: **1395-06-15**, merkez 44.05D/39.75K, zoom 9. Ayrı worktree
`C:\atlas-danadolu`, `py -m http.server 8761`. Veriye dokunulmadı. Sunucu ve tarayıcı kapatıldı.
`queryRenderedFeatures` iki yerde çağrıldı:
- üç noktada (Iğdır, Beri, Doğubayazıt)
- **0,01° adımlı ızgarada**: 43.55-44.60 D × 39.45-40.15 K, **7.526 piksel**

Görüntü H-0003'ü birebir yeniden üretti: Doğubayazıt'ın pembe gövdesinden kuzeye **üç diş**
çıkıyor, Timurlu alanı altlıktan ayırt edilemiyor.

### Ayrım — ölçüldü
```
Iğdır        (441,286 px)  → devlet-dolgu {id:"timurlu", renk:"#9c7563"}   TEK dolgu
Beri         (516,287 px)  → devlet-dolgu {id:"timurlu"}                    TEK dolgu
Doğubayazıt  (455,462 px)  → devlet-dolgu {id:"karakoyunlu"}               TEK dolgu
ızgara 7.526 piksel:  timurlu 5.190 · karakoyunlu 2.230 · aynı kimlik çift poligon 106 (timurlu 100, karakoyunlu 6 — zararsız)
                      serbest-* 0 · İKİ FARKLI devletin dolgusu aynı pikselde 0 · dolgusuz piksel 0
```
⇒ **Hâle (serbest-*) DEĞİL, gövde çakışması DEĞİL.**
- Iğdır ve Beri **boyalı**, `timurlu` #9c7563. "Boyamamış" izlenimi tamamen rengin
  solukluğundan geliyor (kroma 20, altlığa ΔE76 38,9, §1).
- Dişler **tek dolgulu Karakoyunlu gövdesinin şekli**. Bu, GORUNTU-0085'in yürüyüş katmanı
  (eğim sürtünmeli Dijkstra) sınıfıdır.

### Diş ölçüleri (ızgaradan; hücre = `YURUYUS_SADE` 0,05°, `uret_petek.py:1166`)
```
ORTA diş  (ucu 43.83D/39.91K, Iğdır'ın ~19 km batısı)
   en: uçta 0,02° (0,4 hücre) → 0,05° (1 hücre) 39.86K'de → 0,10° (2 hücre) 39.75K'de → 0,15° (3 hücre) 39.65K'de
   boy: ≤2 hücre bölüm ≈ 0,16° enlem ≈ 18 km · ≤3 hücre bölüm ≈ 0,26° ≈ 29 km
DOĞU diş  (ucu 44.36D/39.92K, Beri'nin ~10 km doğusu, Iğdır-Beri enleminde)
   en: uçta 0,02° → 0,05° 39.88K'de → 0,10° 39.79K'de → 0,15° 39.74K'de, sonra gövdeye açılıyor
   boy: ≤2 hücre bölüm ≈ 0,13° ≈ 14 km · ≤3 hücre bölüm ≈ 0,18° ≈ 20 km · uçtan gövdeye ≈ 25 km
BATI diş  (ekranda ~43.38D/39.88K) — ızgaranın DIŞINDA kaldı, ÖLÇÜLMEDİ
```
- İki diş de uçta 1 hücreden dar, 20-30 km boyunca ≤2-3 hücre enli.
- Uçları Iğdır/Beri enlemine (39,92) kadar çıkıyor; en yakın Karakoyunlu noktası Doğubayazıt
  (39,55) ise 40 km güneyde.
- ⇒ İmza GORUNTU-0085 ile örtüşüyor ("1-2 hücre enli, 30-50 km"). Bizim dişler biraz daha kısa
  (20-30 km).
- §1'deki kaba piksel tahmini (2,5-5 km en, 35-48 km boy) bunun **yerini aldı**: en tutuyor,
  boy fazla tahmin edilmişti.

### Hüküm (H-0003)
1. **Veri doğru.** Iğdır ve Beri 1386-1408 arasında `timurlu`, boyalı.
2. **"Boyamamış" = renk okunurluğu.** Timurlu #9c7563 rölyef altlığında kayboluyor. Çare renk
   kalemi (C3 / `renk_olc` rölyefe karşı ölçmüyor).
3. **Sivri dişler = motorun yürüyüş katmanı** (`uret_petek.py:1138-1160`, `:1308`; kök
   GORUNTU-0085). Hâle değil, çakışma değil. `YURUYUS_SADE` (1 hücre) dişleri silemiyor. Çare motor
   kalemi, tam inşa koşusu ister.

Artefaktlar (scratchpad, depoya alınmadı): `SINAV-GORUNTU-0087-igdir-1395.png` · `sonuc.json` (ızgara).
