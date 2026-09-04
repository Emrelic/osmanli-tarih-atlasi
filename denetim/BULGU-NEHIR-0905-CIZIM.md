# BULGU — NEHİRLER HARİTAYA · çizim katmanı

> Oturum **NEHİR SÜRTÜNME** · sevk `1.MURAT` · 5 Eylül 2026
> 🔴 Motora ve veriye dokunulmadı; `uret_altlik.py` **koşturulmadı**.
> Bütün ölçümler **dosyadan** (tarayıcıdan değil — koşu 5 CPU'yu paylaşıyor).

---

## ÖZET — sevkin çerçevesi kısmen çürüdü, ama YERİNE GERÇEK BİR KUSUR ÇIKTI

```
🔴 ÇÜRÜDÜ   "1454 → 293 → 43, arada kayıp var"
            Kayıp YOK. Üç sayı ÜÇ AYRI İŞ — biri ötekinin alt kümesi değil.
🟢 ÖLÇÜLDÜ  Ekranda çizilen: 1454 parça (HEPSİ), zoom ≥ 3,5
            ⇒ Emre'nin istediği "nehirler akarsular" ZATEN HARİTADA
🔴 GERÇEK KUSUR  `nehir_motorun` tanı katmanı MOTORU YANLIŞ TEMSİL EDİYOR:
            motorun İKİ kapısından yalnız BİRİNİ uyguluyor (43 ≠ 293)
🔴 BAYAT    `js/app.js` İKİ yerde "nehir 329 parça çizer" diyor — gerçek 1454
```

---

## ① ÜÇ SAYI — hangi süzgeç, hangi satır

| sayı | nerede | süzgeç | amaç |
|---|---|---|---|
| **1454** | `ALTLIK.nehir` (`data/altlik.js`) | yalnız pencere kesişimi | **ÇİZİM** |
| **293** | `uret_petek.py` `NEHIRLER` | ad listesi **∪** `scalerank ≤ 5` | **YASLAMA** |
| **43** | `ALTLIK.nehir_motorun` | **yalnız ad listesi** | **TANI** |

**Kod satırları:**
```python
# uret_petek.py:629   — MOTOR: İKİ KAPI
if _ad is None and _sr > NEHIR_ONEM_ESIGI:      # ad YOKSA ve sr>5 ⇒ ELE
    continue                                    # ⇒ ad listesi ∪ sr≤5

# uret_altlik.py:234-236 — TANI: TEK KAPI
adlar = [pr.get("name"), pr.get("name_en"), pr.get("name_alt")]
if any(a and _ad_sadelestir(a) in BUYUK_SADE for a in adlar):
    _nehir_motorun.append(k)                    # ⇒ YALNIZ ad listesi
```

### 🔴 KUSUR: TANI KATMANI MOTORU YANLIŞ TEMSİL EDİYOR

`uret_altlik.py`nin başlığı diyor ki:
> *"`nehir_motorun` yalnız motorun `BUYUK` listesiyle…"*

ve `js/app.js:8409` diyor ki:
> *"**motorun FİİLEN yasladığı hedefler** — bir TANI katmanı"*

**İkisi de yanlış.** Motor 7 Ağustos'ta **ikinci bir kapı** ekledi ve kendi
yorumunda bunu vurguluyor:
> *"🔴 AD LİSTESİ ARTIK TEK KAPI DEĞİL — `scalerank` İKİNCİ KAPI… İki kapı
> BİRBİRİNİN YERİNE GEÇMEZ"* (`uret_petek.py:611-627`)

`uret_altlik.py` o ikinci kapıyı **hiç almadı**. Sonuç:
```
motorun FİİLEN yasladığı        293 parça
tanı katmanının GÖSTERDİĞİ       43 parça
GÖRÜNMEYEN                      250 parça  (%85)
```
⇒ *"Sınır nehri tutuyor mu?"* diye bakan biri, motorun yasladığı hatların
**%85'ini göremiyor** — ve gördüğü 43'ün dışında kalan bir sapmayı
*"motor oraya yaslanmıyor zaten"* diye yorumlar. **Tanı aracı, teşhis ettiği
şey hakkında yanılıyor.**

📌 `CLAUDE.md §11` — *"denetim var ≠ o soruyu soruyor"* ailesinin tanı
katmanı yüzü; ve `§5`in *"iki otorite doğar ve ayrışır"* dersinin somut
vakası: aynı süzgeç iki dosyada yaşıyor, biri güncellendi, öteki kalmadı.

⚠️ **ÖLÇMEDİM:** 250 parçanın hangileri olduğunu tek tek çıkarmadım; farkın
**scalerank kapısından** geldiğini koddan okudum, listeyi üretmedim.

---

## ② EKRANDA NE ÇİZİLİYOR — dosyadan ölçüldü

`data/altlik.js` (10,54 MB) içindeki katmanlar:
```
ALTLIK.kara             1 parça   315.475 nokta   7,65 MB
ALTLIK.gol              1 parça    27.836 nokta   0,60 MB
ALTLIK.nehir         1454 parça    71.130 nokta   1,65 MB   ← ÇİZİLEN
ALTLIK.dag_alan       205 parça     9.509 nokta   0,22 MB
ALTLIK.nehir_motorun   43 parça     2.909 nokta   0,06 MB   ← TANI
ALTLIK.sirt_motorun   205 parça     9.024 nokta   0,35 MB
```

**Harita katmanları** (`js/app.js:713` ve `:722`):
```
g-nehir        kaynak "nehir"          minzoom 3,5   #4a86b8 · genişlik 0,6 · opaklık 0,75
g-nehir-motor  kaynak "nehir_motorun"  minzoom 4,5   #00bcd4 · KESİKLİ · TANI grubu
```

### 🟢 CEVAP: "dereler çaylar" EKRANDA VAR

Sevk soruyordu: *"küçük akarsular (sr ≥ 6, senin ölçtüğün 1191 parça)
EKRANDA VAR MI?"*
**VAR.** `g-nehir` katmanı `ALTLIK.nehir`i çiziyor ve o katman
**hiçbir scalerank süzgeci taşımıyor** — pencere içindeki **1454 parçanın
tamamı**, yani `ne_10m_rivers` dosyasının **1455 feature'ının 1454'ü**.

```
sr ≤ 5   263 parça  ┐
sr ≥ 6  1191 parça  ┴─  1454 · HEPSİ ÇİZİLİYOR
```
⇒ `NEHIR_ONEM_ESIGI = 5` eşiği **çizimi hiç ilgilendirmiyor**; o yalnız
motorun **yaslama** kümesini süzüyor. Sevkteki *"eşik gevşetilirse kaç
parça daha çizilir"* sorusunun cevabı: **sıfır — gevşetilecek eşik yok.**

### 🔴 VE `app.js`İN KENDİ SAYISI BAYAT — iki yerde

```
js/app.js:697    "`nehir` 329 parça çizer, `nehir_motorun` 41"
js/app.js:8411   aynı cümle, aynı sayılar
ÖLÇÜM            nehir 1454 · nehir_motorun 43
```
4,4 kat bayat. ⚠️ Bu **kusur değil bayatlık** — sayı yorumda, kodda değil;
çizim doğru çalışıyor. Ama *"329"* okuyan biri katmanın kapsamını
küçümser. (Bu, aynı nehir işinde bulduğum **üçüncü** bayat sayı:
`uret_petek.py:608` 780/593 · `app.js` ×2 329/41.)

---

## ③ ÖNERİ — ve MB rakamı

### Sayfa yükü ölçüldü: nehir bir yuvarlama hatası

```
index.html'in yüklediği: 176 dosya · 104,17 MB
  devletler_harita.js  53,74 MB   %51,6
  donemler.js          31,99 MB   %30,7   ← ikisi birlikte %82,3
  altlik.js            10,54 MB   %10,1
     └ bunun nehir kısmı  1,65 MB   ← SAYFANIN %1,6'sı
  kalan 173 dosya       ~7,9 MB    %7,6
```
⇒ **Nehir katmanının MB maliyeti yok denecek kadar az.** Sayfa ağırlığı
sorunu iki üretilmiş geometri dosyasında; nehir orada kaldıraç değil.

### Öneri — üç kalem, öncelik sırasıyla

```
① TANI KATMANINI DÜZELT (bedeli ~0,3 MB, işi 3 satır)
   `uret_altlik.py`ye motorun İKİNCİ KAPISINI ekle:
       if _ad is None and _sr > 5: continue     ← uret_petek.py:629'un eşi
   ⇒ nehir_motorun 43 → ~293 parça · katman 0,06 → ~0,35 MB
   ⇒ altlik.js 10,54 → ~10,83 MB  (+%2,7 · sayfanın +%0,3'ü)
   🔴 EN ÖNEMLİ KALEM: bugün tanı aracı motorun %85'ini gizliyor.

② BAYAT SAYILARI DÜZELT (bedeli 0 MB)
   js/app.js:697 ve :8411 → "329/41" yerine ölçülmüş "1454/43"
   uret_petek.py:608-620 → 780/593 ve kümülatif tablo (kalem 1'de bildirdim)

③ DAHA İNCE AKARSU — 🔴 BU VERİYLE YAPILAMAZ
   `ne_10m_rivers` Natural Earth'ün EN İNCE kademesi (10m) ve tamamı
   1455 feature. Zaten hepsi çiziliyor ⇒ bu dosyadan çıkarılacak bir
   şey KALMADI.
   Gerçek "dere ve çay" için BAŞKA VERİ SETİ gerekir (HydroSHEDS /
   HydroRIVERS sınıfı).
   ⚠️ MB TAHMİNİ VEREMİYORUM — o veriyi İNDİRMEDİM ve ÖLÇMEDİM.
      Bildiğim tek şey mertebe farkı: NE 10m'de 1.455 hat var; HydroRIVERS
      sınıfı veri setleri milyonlarca segment taşır. Sayfaya eklenmesi
      104 MB'lık bütçeyi kat kat aşar ⇒ eklenecekse **döşenmiş vektör
      karo** (tile) olarak eklenmeli, `altlik.js` içine gömülü değil.
      Bu bir MİMARÎ karardır, benim kalemim değil.
```

---

## ÖLÇMEDİKLERİM

```
ÖLÇMEDİM   250 parçanın (293−43) hangileri olduğu — farkın SEBEBİNİ koddan
           okudum, LİSTESİNİ üretmedim
ÖLÇMEDİM   HydroSHEDS/HydroRIVERS boyutunu — veri indirilmedi
ÖLÇMEDİM   Tarayıcıda gerçekten kaç parçanın render edildiğini — koşu 5
           CPU'yu paylaşıyor, sevk de "dosyadan" dedi
ÖLÇMEDİM   `g-nehir`in minzoom 3,5 eşiğinin görsel etkisini (hangi zoom'da
           kullanıcı ne görüyor) — gözle doğrulama yapmadım
ÖLÇMEDİM   1454 parçanın kaçının pencere kenarında kırpıldığını
ÖLÇEMEDİM  `uret_altlik.py`yi koşturup ① önerisinin gerçek MB'ını —
           koşturmak YASAK (çıktısı `data/altlik.js`). ~0,35 MB rakamı
           43 parçanın 0,06 MB'ından ORANTIYLA türetildi, ÖLÇÜM DEĞİL.
```

---

## TESLİM — sayıyla

```
üç sayı         1454 ÇİZİM · 293 YASLAMA · 43 TANI — kayıp YOK, üç ayrı iş
gerçek kusur    tanı katmanı motorun 2 kapısından 1'ini uyguluyor
                ⇒ motorun yasladığı 293 hattın 250'si (%85) GÖRÜNMÜYOR
ekranda         1454 parça · zoom ≥ 3,5 · sr≥6 dahil HEPSİ
                ⇒ "dereler çaylar haritaya" isteği ZATEN KARŞILANMIŞ
MB              nehir katmanı 1,65 MB = sayfanın %1,6'sı
                öneri ① : +0,29 MB (10,54 → ~10,83) — orantıyla, ölçüm değil
bayat sayı      3 yer (app.js ×2 "329/41" · uret_petek.py "780/593")
```
