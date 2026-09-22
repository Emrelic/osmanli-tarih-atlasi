# DÖRT HİNT PRENSLİĞİNİN NOKTASI — ÖLÇÜM RAPORU · 12 Eylül 2026 · KITA 8

> Sevk: tahta **M-3553**. Öngörü: `denetim/ONGORU-HINT-NOKTA-0912.json`.
> 🔴 **COMMIT EDİLMEDİ** — sevkin açık talimatı.
> Yazılan tek dosya: `data/yerlesimler_hint0912.js` (TEK kayıt).

---

## ① 🔴🔴 SEVKİN ÖNCÜLÜ ÜÇTE ÜÇ ÇÜRÜDÜ — dört noktadan ÜÇÜ ZATEN VARDI

Sevk: *"ÖLÇTÜM — dört prenslik başkentinin HİÇBİRİNİN noktası yok →
0 kayıt."* İki eksende yeniden ölçüldü (`ARAC-NORMAL-0903.py` + konum):

| aday | ad ekseni | konum ekseni | hüküm |
|---|---|---|---|
| Gvalyar (Gwalior) | eşleşmedi | **0,0 km** | 🔴 **ZATEN VAR** — `yerlesimler_asya.js` |
| İndor (Indore) | eşleşmedi | **0,1 km** | 🔴 **ZATEN VAR** — `yerlesimler_asya.js` |
| Kolhapur | **`Kolhapûr` EŞLEŞTİ** | 0,0 km | 🔴 **ZATEN VAR** — `yerlesimler_asya.js` |
| Baroda / Vadodara | eşleşmedi | en yakın 41,6 km (Çampâner) | 🟢 **GERÇEKTEN YOK** |

⇒ **Dördü de yazılsaydı ÜÇ MÜKERRER nokta doğardı** (`D002`).

### ①b VE AD EKSENİ TEK BAŞINA YETMEDİ — normalleştirici GEREKLİ ama YETERLİ DEĞİL
`Gvalyar` ve `İndor` atlasta **parantezli çift adla** yazılmış:
`"Gvalyar (Gwalior)"` · `"İndor (Indore)"`. Normalleştirilmiş **tam ad**
eşleşmesi ikisini de **kaçırdı**; onları **konum ekseni** yakaladı.
📌 `D054` *"atlasta yok hükmü normalleştiricisiz verilemez"* der. Bu tur bir
kademe daha ekliyor: ***normalleştirici de tek başına yetmez — ad tam
eşleşmesi PARANTEZLİ ÇİFT ADI göremez. İki eksen (ad + konum) birlikte
gerekir.***
🟢 Kolhapur ise normalleştiricinin klasik zaferi: `grep -i kolhapur`
**bulamaz** (`Kolhapûr`, û diakritiği), `norm()` bulur.

---

## ② 🔴 ASIL EKSİK NOKTA DEĞİL, **DÖNEM** — ve bu işin tanımını değiştiriyor

Dört künyenin **dördü de veride 0 kez** kullanılıyor (bütün atlas tarandı):
```
gvalyar 0 · indor 0 · kolhapur 0 · baroda 0   dönem
```
Mevcut üç noktanın zinciri `maratha` ile pencere sonuna kadar gidiyor:
```
Gvalyar (Gwalior)   … 1784-01-01 → 1923-10-29   maratha
İndor (Indore)      … 1732-01-01 → 1923-10-29   maratha
Kolhapûr            … 1659-01-01 → 1923-10-29   maratha
```
🟢 Zincirin öteki halkaları **hazır**: künye ✓ (`devletler.js`) · renk ✓
(`renkler.py:3144-3149`) · nokta 3/4 ✓. **Eksik halka yalnız DÖNEM.**
⇒ O üç künyenin haritada görünmesi için gereken şey **nokta yazmak değil,
`maratha` dönemini BÖLMEK.**
🔴 Ve o kayıtlar `yerlesimler_asya.js`te — **benim dosyam değil** (`§7`).
**Yazmadım.** Teklif aşağıda.

### ②b TEKLİF — üç bölme (YAZILMADI, karar koordinatörün)
```
Gvalyar   maratha 1784-01-01 → 1923-10-29
          ⇒ 1784-01-01 → X  maratha   ·   X → 1923-10-29  gvalyar
İndor     maratha 1732-01-01 → 1923-10-29
          ⇒ künye f:1732-07-29 · bölme günü ZATEN KÜNYEDE
Kolhapûr  maratha 1659-01-01 → 1923-10-29
          ⇒ künye f:1710-01-01
```
⚠️ **Gvalyar'ın bölme günü belirsiz:** künye `f:1731-01-01` (Ranoji Sindiya)
ama noktanın `maratha`sı **1784**'te başlıyor ve TDV `hindistan` hânedan
listesi **"Sindiya hânedanı (1761-1858)"** diyor — **üç ayrı yıl.** Bu bir
kaynak çelişkisi değil, üç ayrı SORUNUN cevabı olabilir (hânedanın doğuşu ·
Gwalior'un ele geçirilişi · listedeki aralık). **Ben seçmiyorum** (`§7.1⑥`:
kaynaklar çelişiyorsa karar bende değil).

---

## ③ YAZILAN TEK KAYIT — Baroda (Vadodara)
```
ad   "Baroda (Vadodara)"   lat 22.3072 · lon 73.1812 · tur sehir · k:2
s:   1281-01-01 → 1304-01-01  racput
     1304-01-01 → 1407-01-01  delhi-sultanligi
     1407-01-01 → 1573-02-26  gucerat-sultanligi
     1573-02-26 → 1721-01-01  babur-imparatorlugu
     1721-01-01 → 1923-10-29  baroda
```
**ZİNCİR EMSALDEN** (`D084`): Kanbâyet · Broaç · Sûrat üçü de aynı zinciri
taşıyor. 🔴 `1407` seçildi, `1484` değil — 1484 Çampâner'in **kendi** fetih
günü (yere özgü), 1407 Gucerât Sultanlığı'nın kuruluşu ve üç komşunun üçü de
onu kullanıyor.
**k:2 bir SEÇİMDİR, ölçüm değil** — gerekçesi dosyada yazılı.

### ③b KAYNAK (`§4`) — ve bir tuzağın İKİ yüzü
```
🟢 TDV `hindistan` (200, gövde okundu) hânedan listesi:
   "Gaikwar hânedanı (1721-1858)"     ⇒ künyenin f:1721 YILI DOĞRULANDI
⚠️ GÜN YOK ⇒ `1721-01-01` §4'ün "yıl biliniyor, gün bilinmiyor" yazımı
⚠️ 1858 bir HÂNEDAN LİSTESİ aralığı · 1923-10-29 atlasın PENCERE SONU
   — ikisi de bir "yıkılış" iddiası DEĞİL
🔴 TDV `baroda` · `vadodara` → 302 ÖLÜ
🔴 TDV `gucerat` (200) "Baroda"yı İKİ KEZ anıyor ama: biri MODERN SANAYİ
   ŞEHRİ cümlesi, öteki BİBLİYOGRAFYADA basım yeri. KÜNYEYİ DESTEKLEMİYOR.
   ⇒ `§4` tuzak ⑧'in birebir vakası: ad gövdede geçiyor ≠ gövde onu TARİHLİYOR.
```
🔴 **VE TUZAĞIN İKİNCİ YÜZÜ BENİ ISIRDI:** ilk aramam `Gaikvad|Gaikwad` idi ve
`hindistan` gövdesinde **0 sonuç** verdi; *"TDV Baroda'yı kapsamıyor"* diye
yazacaktım. TDV **`Gaikwar`** yazıyor. ⇒ `§4`ün Türkçe/İngilizce yazım ekseni,
bu turda **arayanın kendisini** yanılttı — ve doğru cevap `bulunamadı` değil
**bulundu** çıktı.

---

## ④ 🔴🔴 DOSYA ÖLÜ DOĞDU — VE İKİ AYAK VAR, SEVK BİRİNİ SÖYLEDİ
```
grep hint0912 index.html      → BOŞ    (sevkin uyardığı ayak)
grep hint0912 arac/girdi.py   → BOŞ    ← 🔴 SÖYLENMEYEN AYAK, ve asıl BU
GIRDI_DOSYALARI 77 dosya · 'hint0912' YOK
girdi.yukle() → 3816 nokta · "Baroda" içeren kayıt: YOK
dosya diskte : VAR, 5.605 bayt
```
`CLAUDE.md §5`: *"HANGİ DOSYA CANLI — tek doğru kaynak `arac/girdi.py`
`GIRDI_DOSYALARI`."* **`index.html` tarayıcıyı, `girdi.py` MOTORU besler** —
harita `girdi.py`den doğar. İkisi de benim dosyam değil (`§7`), **yazmadım**,
`D099` gereği açıkça bildiriyorum.

---

## ⑤ 🔴 ÖNCE/SONRA KIYASI BU DEPODA GÜVENİLİR DEĞİL — ölçüldü
Şartname ⑤ `denetle.py` ÖNCE/SONRA istedi. Koştum (151 sn / 96 sn):
```
ÖNCE   3816 yerleşim · 1344 kronoloji · Değişmez 2: 5 açık · 2s KAPSAM DIŞI 361
SONRA  3816 yerleşim · 1347 kronoloji · Değişmez 2: 2 açık · 2s KAPSAM DIŞI 358
```
🔴 Fark VAR — **ama hiçbiri benden değil.** Üç kronoloji maddesi iki koşu
arasında **başka bir oturumdan** geldi. 17 oturum aynı `data/`ye yazıyor;
**taban ölçümün altında kayıyor.**
🟢 **Sağlam olan tek şey DEĞİŞMEYEN sayı: 3816 → 3816** — yani dosyam okunmadı.
Ve doğrudan sınav bunu kesinleştirdi (`girdi.yukle()`de Baroda YOK).
📌 ⇒ ***Paylaşılan bir depoda ÖNCE/SONRA kıyası bir ölçüm değil, bir
GÜRÜLTÜ kaynağıdır; doğru alet DEĞİŞMEMESİ GEREKEN DEĞİŞMEZİ izlemektir.***
Öngörüm **H2 bu yüzden çürüdü** ("birebir aynı çıkacak"): hükmü doğruydu,
**ölçüsü yanlıştı.**

---

## ⑥ ÖNGÖRÜ KARNESİ
```
H1  ÖLÇÜM olarak damgalanmıştı (öngörü değil) — dürüstlük kaydı
H2  ÇÜRÜDÜ — "denetle ÖNCE=SONRA" · sebep: eşzamanlı yazım, benim dosyam değil
H3  TUTTU  — komşuların zinciri birbirini tuttu, emsal kuruldu
H4  ÇÜRÜDÜ — "kapsayıcı maddede tarihleyen cümle BULUNAMAYACAK" dedim;
              TDV `hindistan` "Gaikwar hânedanı (1721-1858)" diyor. BULUNDU.
H5  TUTTU  — dört künyenin dördü de veride 0 kez; asıl iş DÖNEM bölmek
```

## ⑦ ÖLÇÜLEMEYENLER (`D107`)
```
⚪ Gvalyar'ın bölme günü — künye 1731 · veri 1784 · TDV listesi 1761.
   Üç ayrı yıl, ve hangisinin hangi soruyu cevapladığı ARAŞTIRILMADI.
⚪ Baroda'nın k:2 kademesi — SEÇİM, komşu emsaline dayanıyor, ölçülmedi
⚪ 1281-1721 arası Baroda zinciri komşudan DEVRALINDI; Baroda'ya ÖZGÜ
   fetih günleri ARANMADI (`okumadım`, `bulunamadı` değil)
```

## ⑧ NE YAPILMADI
```
🔴 COMMIT EDİLMEDİ (sevkin talimatı)
🔴 index.html'e satır EKLENMEDİ (sevk öyle dedi)
🔴 arac/girdi.py'ye satır EKLENMEDİ (§7 — benim dosyam değil; ve sevk bunu
   söylemedi, ölçüp bildirdim)
🔴 yerlesimler_asya.js'teki üç kayda DOKUNULMADI (§7)
```
