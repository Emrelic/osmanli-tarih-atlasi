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
