# GEREKÇE — `denetle.py` `isg:` yaması

> Oturum **NEHİR SÜRTÜNME** · sevk `1.MURAT` M-2755 · 5 Eylül 2026
> 🔴 **`arac/denetle.py`ye DOKUNULMADI.** Yalnız diff hazırlandı:
> `denetim/YAMA-DENETLE-ISG-0905.diff`. Uygulama koşu bitince koordinatörün.

---

## ① NİÇİN

`Değişmez 4` (`denetle.py:1782`) yalnız `y.get("s")` üzerinde dönüyor.
Ölçüldü — **`isg:` de kimlik taşıyor**:
```
isg:[{f:"1737-07-01", t:"1737-10-01", d:"avusturya", kaynak:"nis"}]
```
⇒ İşgal dönemleri künye penceresine karşı **hiç sınanmıyor**.
📌 `§11`: *"denetim var ≠ o soruyu soruyor"* — soru doğru, **evren dar**.

---

## ② PENCERE UCU GUARD'I — DOĞRU TARAFA UYGULANDI

Sevkin şartı: *"guard yalnız taşma kovalarına (4c/4d) uygulanıyor, ANA
hayalet testine DEĞİL. `isg:` dalı ANA testin kardeşidir ⇒ guard ORAYA DA
uygulanmaz."*

🟢 **Yama bunu sağlıyor — çünkü hiçbir guard EKLEMİYOR.** `isg:` dönemleri
`s:` ile **aynı döngüye** giriyor; ① ve ② dalları (ana hayalet testi)
zaten guard'sız, ③ ve ④ (4c/4d) zaten guard'lı. Yapı **değişmiyor**, yalnız
**girdi kümesi** genişliyor.
⇒ Bu, guard'ı yanlış tarafa uygulama riskini **yapısal olarak** ortadan
kaldırıyor: ayrı bir dal yazılmadı.

---

## ③ 🔴 ÖNGÖRÜ — YAMADAN **ÖNCE** YAZILDI, ÇÜRÜTÜLEBİLİR

`denetle.py` mantığı `isg:` üzerinde ayrıca koşturuldu (salt okuma):

```
BUGÜN  (yalnız s:)         dönem 12.340 · 4= 8 · 4c=280 · 4d=434 · künyesiz=899
YAMADAN SONRA (s: + isg:)  dönem 12.438 · 4=15 · 4c=280 · 4d=434 · künyesiz=917
YALNIZ isg:                dönem     98 · 4= 7 · 4c=  0 · 4d=  0 · künyesiz= 18
```

### Yama uygulandığında `denetle.py` ŞUNLARI BASMALI
```
Değişmez 4   8 → 15    (+7, hepsi `isg:` · mesajları "[isg]" ile başlar)
künyesiz   899 → 917   (+18)
Değişmez 4c  280 → 280  DEĞİŞMEZ
Değişmez 4d  434 → 434  DEĞİŞMEZ
```
🔴 **Az ya da çok çıkarsa DUR.** Özellikle `4c`/`4d` oynarsa yama guard'ı
yanlış tarafa taşımış demektir.

**Yedi ihlalin yedisi tek vaka:**
```
Kahire · İskenderiye · Dimyat · Asyut · Süveyş · Sina güneyi · Reşîd
isg: 1798-07-01 → 1801-10-09   d:"fransa"
künye fransa 987-01-01 → 1792-09-22   ⇒ 5,8 yıl SONRA başlıyor
doğrusu: fransa-cumhuriyet 1792-09-22 → 1923-10-29 (devletler.js:805)
```

---

## ④ 🔴 YAN BULGU — 18 `isg:` KAYDI KÜNYE `id`si YERİNE `harita:` ANAHTARI KULLANIYOR

Öngörü koşusu beklemediğim bir şey çıkardı: `isg:` künyesiz **18**.
Sebebini ölçtüm:

```
isg: kayıtlarının yazdığı :  d:"avusturya"
devletler.js'te `avusturya` diye künye  :  🔴 YOK  (grep 0)
GERÇEK künye              :  id:"habsburg"  ad:"Habsburg Avusturya"
                             f:1526-08-29 → t:1918-11-11
                             harita:"avusturya"     ← veri BUNU yazmış
```

⇒ Kayıtlar künye **`id`**si yerine **boya anahtarını** (`harita:`)
kullanıyor. **Çizim bozulmuyor** (motor `harita:` üzerinden boyuyor) ama
**künye doğrulaması yapılamıyor** — kimlik künye tablosunda bulunamıyor.

📌 `CLAUDE.md §4`ün kuralı birebir bu: *"`d:` yazarken kendi
transliterasyonunu değil `devletler.js`teki **GERÇEK `id`**yi kullan."*
Burada transliterasyon değil ama **yanlış anahtar uzayı** — aynı sınıf.

🟢 **Ve `habsburg` künyesi işgalleri TAM kapsıyor:** Niş 1737 · Semendire
1789 · Bosna 1878 — hepsi `1526-08-29 → 1918-11-11` içinde.
⇒ Düzeltme: `isg:` kayıtlarında `d:"avusturya"` → `d:"habsburg"`
(1878 Bosna için daha özel `bosna-isgal` künyesi de var: 1878-07-13 →
1908-10-06 — **hangisinin doğru olduğunu ÖLÇMEDİM**).

⚠️ **VE BU BİR SINIF OLABİLİR:** `s:` alanındaki **899** künyesiz kaydın
kaçının aynı sebepten (künye `id` yerine `harita:` anahtarı) olduğunu
**ÖLÇMEDİM**. Yalnız `isg:`in 18'ini ölçtüm.
🔴 **Bu yama o 18'i DÜZELTMEZ** — yalnız **görünür kılar** (künyesiz
899→917). Düzeltme ayrı bir veri kalemidir.

---

## ⑤ C13 — bu yama için

```
① GEÇME     yama `s:` davranışını DEĞİŞTİRMEMELİ.
            Sınav: 4c/4d değişmemeli (280/434) — öngörüde yazılı.
② ATEŞLEME  `isg:` dalı ötmeli: 7 ihlal, mesajları "[isg]" önekli.
③ GİRDİ     denetle.py zaten gerçek dosyalardan okuyor (girdi.yukle).
④ ÇIKTI     ihlal mesajı artık alan adını taşıyor ⇒ hangi kaydın hangi
            alandan geldiği ÇIKTIDAN okunabilir (önce okunamıyordu).
```
⚠️ **ÖLÇMEDİM:** yamayı UYGULAYIP koşturmadım — `denetle.py` yasak.
Öngörü, `denetle.py` mantığının **bağımsız yeniden kurulumuyla** alındı;
gerçek koşuda birebir tutmalı ama **sınanmadı**.

---

## ⑥ NEYE DOKUNMADIM — kasıtlı

```
kunyesiz / asan / once  DEMET BİÇİMLERİ değişmedi — rapor kodu onlara göre
                        yazılmış, biçim değişikliği sessiz kırılma üretirdi
guard'lar               HİÇ eklenmedi/kaldırılmadı
tolerans                400 gün, aynen
`d:` ve `v:`            eklenmedi — kimlik taşımıyorlar (ölçüldü: 0)
```
