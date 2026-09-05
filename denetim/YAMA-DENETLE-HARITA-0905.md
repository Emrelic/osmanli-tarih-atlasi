# GEREKÇE — `denetle.py` `harita:` uzayı yaması

> Oturum **NEHİR SÜRTÜNME** · sevk `1.MURAT` M-2766 · 5 Eylül 2026
> 🔴 **`arac/denetle.py`ye DOKUNULMADI.** Diff:
> `denetim/YAMA-DENETLE-HARITA-0905.diff` · uygulama koordinatörün.
> ⚠️ Bu, `YAMA-DENETLE-ISG-0905.diff` ile **birlikte** uygulanacak.

---

## ① SORUN — verinin %7,4'ü hiç sınanmıyor

Koordinatörün ölçümü: 12.438 dönemin **915'i** `d:` alanına künye `id`si
değil **`harita:` boya anahtarı** yazıyor. Ve bu **meşru** — bir anahtar
birden çok künyeyi temsil ediyor:

```
sirbistan    1217-01-01 → 1918-12-01   4 künye (nemanjic · despotluk ·
                                        prenslik · krallik)
macaristan   1000-01-01 → 1923-10-29   3 künye
bulgaristan  1185-01-01 → 1923-10-29   3 künye
suud         1744-01-01 → 1923-10-29   3 künye
arnavutluk   1443-01-01 → 1923-10-29   2 künye
romanya      1859-01-24 → 1923-10-29   2 künye
```
(240 `harita:` anahtarının **6'sı** birden çok künye paylaşıyor; ölçüldü.)

🔴 **Kusur veride değil DENETİMDE:** `Değişmez 4` künye `id` bulamayınca
`kunyesiz` kovasına atıp `continue` ediyor ⇒ o 915 dönem **hiçbir hayalet
sınavından geçmiyor.**

---

## ② ÖNGÖRÜ — ÖLÇÜMDEN **ÖNCE** YAZILDI, ve ÜÇÜ DE TUTTU

Öngörü dosyası ölçüm koşulmadan önce yazıldı; buraya **değiştirilmeden**
aktarılıyor.

| # | öngörü | ölçüm | sonuç |
|---|---|---|---|
| ① | künyesiz **917 → 2** | 917 → **2** | 🟢 **TUTTU** — ve kalan ikisi tam öngörüldüğü gibi `__BOSLUK__` (Berat · Kabartay) |
| ② | Değişmez 4 **15 → 15+X**, bandım **X = 0-30** | 15 → **16**, X=**1** | 🟢 **TUTTU** (bandın alt ucunda) |
| ③ | **4c/4d ARTACAK** | 4c 280→**287** · 4d 434→**467** | 🟢 **TUTTU** (+7 · +33) |

### 🔴 AMA ②'nin GEREKÇESİ YANLIŞTI — sayı doğru, sebep değil
Öngörümde şöyle yazmıştım:
> *"`avusturya → habsburg` TEK eşleşme: orada birleşim = tek künye
> (1526→1918) ve 1526 ÖNCESİ bir `avusturya` dönemi varsa ihlal DOĞAR.
> Bu, X'in sıfır ÇIKMAMA ihtimalinin ana kaynağı."*

**Çürüdü.** Tek yeni ihlal `avusturya`dan değil **`arnavutluk`**tan geldi:
```
Leş (Alessio)  s  arnavutluk  1281-01-01 → 1393-05-01
               birleşim arnavutluk: 1443-01-01 → 1923-10-29
               ⇒ 49,7 yıl ÖNCE bitiyor
```
📌 *Sayı tuttu, mekanizma tutmadı.* `§11`in *"ölçüm doğru, çıkarım yanlış"*
ailesi — burada tersine: **çıkarım (sayı) doğru, gerekçe yanlış.**
Bunu yazıyorum çünkü bir sonraki oturum gerekçemi devralırsa yanlış yere
bakar.

### 🟡 VE O TEK İHLAL MUHTEMELEN BİR KÜNYE TANECİĞİ SORUNU
`arnavutluk` birleşimi **1443**'te (İskender Bey) başlıyor. `Leş` kaydı
1281-1393 arasını `arnavutluk` diye boyuyor — oysa o dönemde Balşa ·
Topia · Kastriyoti gibi **beylikler** vardı.
⇒ Hayalet mi, yoksa künye kümesinde **1443 öncesi Arnavut beyliği künyesi
eksik mi**? **ÖLÇMEDİM.** Aztek vakasıyla (Tenochtitlan 1325→1428) aynı
sınıf olabilir.

---

## ③ NİÇİN 4c/4d ARTIYOR — ve bu `isg:` yamasından FARKLI bir sınıf

```
`isg:` yaması   GİRDİ KÜMESİNİ büyütüyordu  → 4c/4d DEĞİŞMEDİ (öngörüldü, tuttu)
bu yama         KOVA AKIŞINI değiştiriyor    → 4c/4d ARTIYOR   (öngörüldü, tuttu)
```
Sebep: 915 dönem bugün `kunyesiz`de **`continue`** ile eleniyor ve ③/④
dallarına **hiç ulaşmıyor**. Kural eklenince ulaşıyorlar.
⚠️ **Bu bir gerileme DEĞİL** — daha önce görülmeyen dönemler artık
görülüyor. Ama **yayın kapısı bu sayılara bakıyorsa** tavanların yeniden
değerlendirilmesi gerekir: `4c` 280→287, `4d` 434→467.
🔴 **Bu bir KARAR ve benim değil.**

---

## ④ TASARIM — `_devletler_yukle()`ye DOKUNULMADI

```
YENİ  _harita_uzayi()  ayrı fonksiyon · modül düzeyinde ÖNBELLEKLİ
                       (`_HARITA_UZAYI`) ⇒ node ikinci kez çağrılmaz
SIRA  künye `id` → `harita:` uzayı → künyesiz   (BU SIRAYLA)
```
`_devletler_yukle()`nin dönüş biçimi **değişmedi** — başka çağıranları var
ve biçim değişikliği sessiz kırılma üretirdi. (`isg:` yamasında da aynı
gerekçeyle demet biçimlerine dokunmamıştım.)

⚠️ **Birleşim KASTEN geniştir.** Amacı ihlal *üretmek* değil, bugün hiç
sınanmayan 915 dönemi **en az bir sınavdan** geçirmek. Daha dar bir kural
(ör. dönem tarihine göre doğru künyeyi seçmek) mümkün ama o **veri
düzeltmesi**dir, denetim işi değil.

---

## ⑤ İKİ YAMANIN BİRLİKTE UYGULANMASI

```
YAMA 1  YAMA-DENETLE-ISG-0905.diff      :1782 döngü + ihlal mesajları
YAMA 2  YAMA-DENETLE-HARITA-0905.diff   :1602 sonrası yeni fonksiyon
                                         :1786 künye arama sırası
```
🟢 **Metinsel çakışma YOK** — farklı satırlara dokunuyorlar.
⚠️ **AMA SAYILARI BİRLİKTE DEĞİŞTİRİYORLAR.** Yukarıdaki öngörü
**yama 1 uygulanmış** taban üzerinden alınmıştır (4=15 · künyesiz=917).
İkisi birlikte uygulanınca beklenen:
```
Değişmez 4   8 → 16      (isg +7 · harita +1)
künyesiz   899 → 2
4c         280 → 287
4d         434 → 467
```
🔴 **Farklı çıkarsa DUR.** Özellikle künyesiz 2'den büyük çıkarsa `harita:`
uzayı eksik kurulmuş demektir.

---

## ÖLÇMEDİKLERİM

```
ÖLÇMEDİM   `Leş` vakasının hayalet mi künye taneciği mi olduğunu
ÖLÇMEDİM   4c'ye eklenen 7 ve 4d'ye eklenen 33 kaydın kim olduğunu
ÖLÇMEDİM   yayın kapısının bu tavanlara bakıp bakmadığını
ÖLÇEMEDİM  yamayı UYGULAYIP koşturmayı — `denetle.py` yasak; öngörü
           denetle.py mantığının BAĞIMSIZ yeniden kurulumuyla alındı
OKUMADIM   240 `harita:` anahtarının tamamını — yalnız çoklu olan 6'sını
```

---

## TESLİM — sayıyla

```
sorun      12.438 dönemin 915'i (%7,4) HİÇ sınanmıyordu — kusur DENETİMDE
çare       künye id → harita: uzayı → künyesiz (üç basamaklı arama)
öngörü     ölçümden ÖNCE yazıldı · ÜÇÜ DE TUTTU
           ⚠️ ama ②'nin GEREKÇESİ çürüdü: kaynak avusturya değil arnavutluk
sonuç      künyesiz 917→2 · Değişmez 4 15→16 · 4c 280→287 · 4d 434→467
diff       denetim/YAMA-DENETLE-HARITA-0905.diff — UYGULANMADI
```
