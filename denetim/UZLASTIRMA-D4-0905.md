# UZLAŞTIRMA — `Değişmez 4` · iki alet, aynı evren, ve YAKINSAMA

> Oturum **NEHİR SÜRTÜNME** · sevk `1.MURAT` M-2747 · 5 Eylül 2026
> 🔴 `arac/denetle.py`ye **DOKUNULMADI**. Düzeltilen alet yalnız benim
> `denetim/ARAC-HAYALET-0905.py`m. Koşu 5b canlı.

---

## ⓪ SONUÇ — ÖNCE, çünkü sevkin uyarısı haklıydı

```
🔴 "271 YENİ İHLAL" DİYE BİLDİRİLECEK BİR ŞEY YOK.
   O sayı, `denetle.py`nin ZATEN raporladığı `4c` (280) + `4d` (434)
   kovalarının BAŞKA BİR BÖLÜMLENMESİYDİ.

🟢 AYNI EVRENDE (`s:`) İKİ ALET ARTIK BİREBİR AYNI SAYIYI VERİYOR:
      denetle.py Değişmez 4 : 8
      benim TAM DIŞARIDA    : 8        ← ölçüldü, çıkarım değil
      künyesiz              : 899 = 899

🔴 GERÇEKTEN YENİ OLAN TEK ŞEY: `isg:` alanındaki 7 ihlal.
   O alan `denetle.py`nin evreninde HİÇ YOK.
```

---

## ① `denetle.py`nin `Değişmez 4` DALI — satır satır kapsamı

`arac/denetle.py:1777-1815` okundu. **Ve kodun kendi docstring'i (:1762-1770)
hipotezimi doğruladı:**
> *"Bu değişmez iki soru soruyordu ve ikisi de dönemin devletin ömrünün
> **TAMAMEN DIŞINDA** olmasını arıyordu… **Sormadığı hâl:** dönem devletin
> İÇİNDE başlayıp ölümünü AŞIYOR mu? … ⇒ En sık hâl, en az sorulan hâldi:
> **590 dönem · 35 kimlik**."*

⇒ `4c`/`4d` kovaları **tam bu boşluk için** eklenmiş. Yani "aşan" vakalar
**zaten ölçülüyor ve raporlanıyor** — yalnız `Değişmez 4` başlığı altında
değil, **kendi başlıklarıyla**.

### Kapsam
```
ALAN        yalnız  y.get("s")            ← `d:` `v:` `isg:` HİÇ TARANMIYOR
KİMLİK      p.get("d");  yoksa atlanır
KÜNYESİZ    kim not in K  → ayrı kova (`kunyesiz`)
TOLERANS    HAYALET_TOLERANS_GUN = 400 gün
```
### Dört kova (ve `continue` ile birbirini ELEMESİ)
```
① ihlal   fark(p.f, kt) > 400     dönem BAŞI künye ölümünden SONRA  → continue
② ihlal   fark(kf, p.t) > 400     dönem SONU künye doğumundan ÖNCE  → continue
③ asan    kt < ATLAS_SONU  ve  fark(p.t, kt) > 400        → Değişmez 4c
④ once    kf > ATLAS_BASI  ve  fark(kf, p.f) > 400        → Değişmez 4d
```
🔴 **NEYİ ELİYOR — ve ben burada yanıldım:**
```
③ ve ④ PENCERE UCU GUARD'I TAŞIYOR   (kt < ATLAS_SONU · kf > ATLAS_BASI)
① ve ② HİÇBİR GUARD TAŞIMIYOR
```
⇒ **Pencere-ucu muafiyeti yalnız TAŞMA kovalarına uygulanır, ANA hayalet
testine DEĞİL.** Benim kuralım ikisine birden uyguluyordu.

---

## ② AYNI KAPSAMA DARALTIP ÖLÇTÜM — ve İKİ KUSURUM ÇIKTI

`denetle.py`nin mantığını **birebir yeniden kurdum**, kendi mantığımı
`s:` ile sınırladım, yan yana koydum:

```
                        denetle.py      benim (İLK sürüm)
hayalet (tam dışarıda)      8                4
aşan / taşan            714 (280+434)      267
künyesiz                  899              899   ← 🟢 BİREBİR
sınır işareti              —               314
```

### 🔴 KUSUR 1 — ⚪ kovam ALTI GERÇEK HAYALETİ yuttu
```
denetle'de VAR bende YOK : 6 — HEPSİ `iran`, hepsi f:1281-01-01
   Ağraham burnu · Derbend · Hürmüz Adası · Kiş · Kişm · Tarki
   dönem 1281-01-01 → ~1501-1510   ·   künye iran 1925-12-12 → 2026-08-07
```
Dönem künyeyle **hiç kesişmiyor** (424 yıl uzakta) ama `f:` pencere ucunda
olduğu için benim kuralım onu ⚪'ya attı. **`denetle.py` haklı.**
📌 Bu, kendi ihbarımın (*"kova kuralım fazla geniş, 11 bir ALT SINIR"*)
**sayıyla doğrulanmış hâli** — yönü doğru bilmiştim, miktarı 6.

### 🔴 KUSUR 2 — `<=` bitişikliği boşluk sandı, İKİ YANLIŞ POZİTİF
```
bende VAR denetle'de YOK : 2
   Tenochtitlan  s aztek-imparatorlugu 1325-01-01→1428-01-01
   Tlacopan      s aztek-imparatorlugu 1400-01-01→1428-01-01
   künye aztek-imparatorlugu 1428-01-01 → 1521-08-13
```
Dönem, künyenin **doğduğu gün** bitiyor. `denetle.py` farkı 0 gün hesaplıyor
(`0 > 400` False) ⇒ ihlal değil. Benimki `pt <= kf` yazdığı için **bitişik
devri boşluk saydı**. **`denetle.py` haklı** — bir dönem biterken ötekinin
başlaması **normal devirdir**.

### 🔴 KUSUR 3 — alet `import` edilince çağıranın stdout'unu KAPATIYOR
Uzlaştırma betiği aleti `import` edince patladı:
`ValueError: I/O operation on closed file`. Sebep: `sys.stdout` **modül
düzeyinde** sarılıyordu. Bir alet, import edilmekle çağıranı bozmamalı.

---

## ③ ÜÇ KUSUR DA DÜZELTİLDİ — ve C13 bunu ÖTEREK yakaladı

```
① ⚪ kuralı  : kesişmeyen dönem, ucu nerede olursa olsun 🔴
② karşılaştırma: `pt <= kf` → `pt < kf` · `pf >= kt` → `pf > kt`
③ stdout     : sarma `main()` içine taşındı
```

🟢 **VE SINAV BENİ DÜZELTTİ, BEN SINAVI DEĞİL:** kural değişince `(d)`
dalı **düştü** — çünkü beklentisi eski (yanlış) anlama göre yazılmıştı.
Sınavı yeni anlama göre yeniden yazdım **ve bir dal EKLEDİM**:
```
(d) KESİŞEN + ucu pencerede    → ⚪ sınır işareti   ✓
(f) KESİŞMEYEN + ucu pencerede → 🔴 İHLAL          ✓  ← YENİ, kusuru bekliyor
```
📌 `C13`ün var oluş sebebi tam bu: **anlam değişince sınav ötmeli.** Öttü.

### Düzeltme sonrası C13
```
① GEÇME ✓ · ② (a)✓ (b)✓ (c)✓ (d)✓ (f)✓ (e) 3 HANELİ YIL ✓
③ GİRDİ  gerçek dosyalar (77 → 3.805) · ④ ÇIKTI biçimi basılıyor
SINAV: 🟢 GEÇTİ
```

---

## ④ DÜZELTME SONRASI ÖLÇÜM — ve YAKINSAMA

```
🔴 TAM DIŞARIDA   15   (önce 11)
🟡 TAŞAN         269   (önce 267)
⚪ SINIR İŞARETİ 308   (önce 314)
```

### 🟢 ALAN AYRIMI — ölçüldü, çıkarım DEĞİL
```
TAM DIŞARIDA 15  =  8 (`s:`)  +  7 (`isg:`)
                    ↑
        denetle.py Değişmez 4 = 8   ⇒ BİREBİR AYNI
```
`--ayrinti` çıktısı alan alan sayılarak doğrulandı (`grep -c " s "` → 8,
`grep -c " isg "` → 7).

### Üç hipotezin hükmü
```
(a) denetle.py başka ölçütle muaf tutuyor   → 🟡 KISMEN: muaf tutmuyor,
    AYRI KOVALARDA (4c/4d) raporluyor. Ben cross-check etmedim.
(b) benim kova kuralım geniş                → 🟢 DOĞRU, 6 vaka, düzeltildi
(c) biri bulup raporlamıyor (sessiz dal)    → 🔴 ÇÜRÜDÜ: ikisi de raporluyor
```

---

## ⑤ GERİYE KALAN TEK YENİ BULGU — `isg:` 7

`denetle.py` bu alanı **hiç taramıyor** (`:1782` yalnız `s:`). Yedi kaydın
yedisi tek vaka:
```
Kahire · İskenderiye · Dimyat · Asyut · Süveyş · Sina güneyi · Reşîd
isg: 1798-07-01 → 1801-10-09   d:"fransa"
künye fransa: 987-01-01 → 1792-09-22      ⇒ 5,8 yıl SONRA başlıyor
doğrusu: fransa-cumhuriyet 1792-09-22 → 1923-10-29 (devletler.js:805)
```
🔴 **UYGULAMADIM** — `data/` kilitli, karar künye sahibinin.

---

## ÖLÇMEDİKLERİM

```
ÖLÇMEDİM   `4c`(280)+`4d`(434)=714 ile benim TAŞAN(269) farkının kayıt
           kayıt dökümünü. Fark BÖLÜMLEME kaynaklı (denetle bir dönemi
           HEM 4c HEM 4d sayabilir; ben tek kovaya koyuyorum) ama
           714−269'un tamamını kalem kalem AÇMADIM.
ÖLÇMEDİM   künyesiz 899'un kaçının Fetret kimliği olduğunu — sayı iki
           alette de aynı çıktı, içeriğini dökmedim
ÖLÇMEDİM   `d:`/`v:` alanlarının 0 çıkmasının doğru olup olmadığını
           BAĞIMSIZ bir yolla — kimlik taşımadıkları varsayımına dayanıyor
OKUMADIM   denetle.py'nin `4c`/`4d` RAPORLAMA satırlarını (kovaları
           okudum, ekrana nasıl bastığını değil)
```

---

## TESLİM — sayıyla

```
uzlaştırma  AYNI EVRENDE (`s:`) İKİ ALET BİREBİR: 8 = 8 · künyesiz 899 = 899
"271"       YENİ DEĞİLDİ — denetle.py'nin 4c(280)+4d(434) kovalarının
            başka bölümlemesi. KİMSEYE "yeni ihlal" diye bildirilmedi.
kusurlarım  3 tane, üçü de ÖLÇÜMLE bulundu ve düzeltildi:
            ⚪ kuralı 6 gerçek hayaleti yutuyordu · `<=` bitişikliği
            boşluk sanıyordu (2 yanlış pozitif) · modül düzeyinde stdout
C13         anlam değişince (d) dalı ÖTTÜ; sınav yeniden yazıldı ve
            (f) dalı EKLENDİ — kusuru bekleyen yeni bir dal
YENİ olan   yalnız `isg:` 7 — denetle.py'nin evreninde olmayan alan
hüküm       (a) kısmen · (b) DOĞRU · (c) ÇÜRÜDÜ
```
