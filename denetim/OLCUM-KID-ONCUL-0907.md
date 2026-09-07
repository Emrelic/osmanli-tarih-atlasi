# ÖLÇÜM — `v:` DÖNEMLERİNİN KİMLİK ALANI VAR MI? · `kid` öncülü

> **GECIS-SURE-0907 · 7 Eylül 2026 · 1.MURAT M-3151.**
> Sınanan cümle (koordinatörün bugün **üç yere** taşıdığı):
> *"`v:` dönemlerinin kimlik alanı YOK — 423 dönemin tamamı yalnız
> `f`/`t`/`k`/`enklav` taşıyor (5 Eylül'de ölçüldü)."*
> 🔴 **Hüküm vermedim, ölçtüm.** Düzeltmek ya da damgalamak koordinatörün.

---

## ⓪ CEVAP — **Ⓐ ve Ⓒ BİRLİKTE**, tek şık değil

```
Ⓐ BAYAT   ✓  `kid` 6 EYLÜL'de doğdu; ölçüm 5 EYLÜL'de yapıldı.
             Ölçüm YAPILDIĞINDA DOĞRUYDU, ertesi gün bayatladı.
Ⓑ YANLIŞ  ✗  ölçüm hatalı değildi — alan o tarihte gerçekten YOKTU
Ⓒ FARKLI  ✓  ve BUGÜN DE kısmen doğru: `kid` VAR ve DOLU ama hiçbir alet
             onu KİMLİK olarak kullanmıyor — yalnız AD YEDEĞİ
```

⇒ Doğru düzeltme *"kimlik alanı yok"* değil:
> **"kimlik alanı VAR ve DOLU (291 dönem), ama `d:`nin ettiğini ETMİYOR —
> renk vermiyor, dizine girmiyor, hayalet denetimine görünmüyor."**

---

## ① 🟢 TARİH — `git log -S`, ölçüldü

```
arac/girdi.py       db23f90  2026-09-06  "SEÇENEK 🅑 İNDİ — `v:` dönemlerine
                                          `kid:` + `statu:` · denetle TEMİZ"
arac/uret_petek.py  2127303  2026-09-07  "VASSAL ETİKET: MOTOR YAZILDI"
```
Ölçüm **5 Eylül**, alan **6 Eylül** ⇒ **Ⓐ.** Ve motor onu ancak **bugün**
okumaya başladı.

📌 Yani cümle **iki gün** doğruydu, **bir gündür** bayat, ve bugün üç yere
taşındı. `§11`: *"bir sevkte yazılı öncül işçi için VERİ gibi okunur."*

---

## ② 🔴 `kid` NE YAPIYOR — ve sözleşmesi UYGULANMIYOR

**Tanımı** (`arac/girdi.py:932`):
> *"tâbi devletin **KÜNYE KİMLİĞİ** — `v:` içinde. `k` görünen ad olarak
> KALIR; **eşleşme bunun üzerinden yapılır.** `devletler.js`te tanımlı
> olmalı **VE künye penceresi dönemi kapsamalı** (§3.5.0)."*

**Kullanımı** — taradım:
```
arac/uret_petek.py:4826   _ad = _dn.get("k") or _dn.get("kid")   ← AD YEDEĞİ
js/app.js                 `kid` HİÇ GEÇMİYOR
arac/denetle.py           `kid` HİÇ GEÇMİYOR
arac/girdi.py             yalnız BILINEN_ALANLAR kütüğünde (tanım)
```
⇒ Motor onu **görünen ad** için okuyor. *"Eşleşme bunun üzerinden yapılır"*
diyen satırın karşılığı **hiçbir yerde yok**: kimlik çözümü, renk,
dizin, hayalet denetimi — hiçbiri `kid`e bakmıyor.

🔴 **Ve ironi kaydın kendi içinde:** `kid`ın tanımının hemen üstünde,
`girdi.py:928-931`de şu duruyor —
> *"Künye bağı yok ⇒ renk yok, dizin yok, ve `denetle.py` «bu devlet o
> tarihte yaşıyor mu» diye SORAMIYOR. `CLAUDE.md`: bir ders serbest metin
> olarak inerse inmiş sayılmaz — sınavı tek soru: **bunu bir `if` ile
> sorabiliyor muyum?**"*

`kid` tam o boşluğu kapatmak için eklenmiş. **Ve o `if` hâlâ yok.**
⇒ Ders bir **serbest metinden** bir **alana** taşındı; ama alanı okuyan
`if` yazılmadı. Bir kademe ilerledi, hedefe varmadı.

---

## ③ `k` ile `kid` — YERİNE GEÇMİYOR, BİRLİKTE DURUYOR

`v:` dönemleri (429):
```
HER İKİSİ de var   291
yalnız `k`          82
yalnız `kid`         0     ← hiç yok
HİÇBİRİ             56
```
⇒ `kid` her zaman `k` ile birlikte. Biri ötekinin yerine **geçmiyor**;
`k` görünen ad, `kid` kimlik — tasarım öyle ve veri ona uyuyor.
🟡 82 dönem `k` taşıyıp `kid` taşımıyor: **kimliklenmemiş tâbi dönem.**

---

## ④ `kid` DEĞERLERİ GERÇEK Mİ — **TARANDI**, tahmin edilmedi

```
benzersiz `kid` değeri            13
🟢 künye `id` olarak VAR          13 kimlik · 291 dönem
🟡 yalnız `harita:` anahtarı       0
🔴 HİÇBİR YERDE YOK                0
```
`misir-kavalali` 154 · `cezayir-ocagi` 41 · `trablusgarp-ocagi` 39 ·
`eflak` 16 · `bogdan` 14 · `bulgaristan-prensligi` 7 · `kirim` 6 ·
`sirbistan-prensligi` 5 · `sarki-rumeli` 3 · `haciemir` 2 …

🟢 **Kimlik tarafı TEMİZ.** 291 dönemin 291'i geçerli bir künyeye işaret
ediyor. (Ortak normalleştiriciyle değil, doğrudan `id` kümesine karşı
tarandı — hepsi tam eşleşti, yazım varyantı sorunu çıkmadı.)

---

## ⑤ 🔴 AMA ALANIN KENDİ SÖZLEŞMESİ 16 DÖNEMDE İHLAL EDİLİYOR

Sözleşme: *"künye penceresi dönemi **kapsamalı**"* (`girdi.py:932`).

```
ihlal eden dönem: 16
   Sofya   kid=bulgaristan-prensligi  dönem 1878-01-04..1908-10-05
                                      künye 1878-07-13..1908-10-05   (6 ay ERKEN)
   Bükreş  kid=eflak                  dönem 1462-06-01..1878-07-13
                                      künye 1330-01-01..1859-01-24  (19 yıl AŞIYOR)
   Yaş     kid=bogdan                 dönem 1456-06-01..1878-07-13
                                      künye 1359-01-01..1859-01-24  (19 yıl AŞIYOR)
   … +13 (Roman · Bârlad · Galatz · Tırgovişte · Piteşti · Slatina · Buzău …)
```

🔴 **Ve bu sayıyı BU BETİK üretti, `denetle.py` DEĞİL.** Sözleşme yazılı,
sınayan yok. ⇒ `§11`in *"bir ders veriye yapılandırılmış inse bile, onu
sınayan `if` yoksa inmiş sayılmaz"* dersinin canlı vakası — ve bu sefer
alan **doğru yerde**, eksik olan **denetim**.

⚠️ İhlallerin cinsi **ölçülmedi**: `eflak`/`bogdan`ın 1859→1878 kuyruğu bir
veri kusuru mu, yoksa künyenin dar olması mı (`§3.5.0` ZEND sınıfı)?
**Bakmadım.** Bugün `zend`de tam o ayrımı ölçtüm ve orada künye doğru
çıkmıştı — burada **hangisi olduğunu bilmiyorum.**

---

## ⑥ ÖLÇMEDİKLERİM

```
⚪ 16 ihlalin CİNSİ — künye mi dar, veri mi geniş (⑤)
⚪ 82 `kid`siz dönemin niçin kimliklenmediği — kasıtlı mı, borç mu
⚪ `statu:` alanı (421 dönem) — aynı commit'te geldi, ÖLÇMEDİM
🔴 HÜKÜM VERMEDİM — cümleyi düzeltmek ya da damgalamak koordinatörün
```

## ⑦ ALET
```
scratchpad/_kid.py   ③④⑤ ölçümü (k/kid kesişimi · kid geçerliliği · kapsam)
git log -S           ① tarih
grep                 ② hangi alet okuyor
```

---

## ⑧ 🔴 AYNI SORU İKİ OTURUMA GİTTİ — ve iki ölçüm bir sayıda ayrışıyor

Raporu yazarken tahtada gördüm: **M-3152 · `KIMLIK-KID-0907`** aynı soruyu
cevaplamış (13:57), ben M-3151'i (13:51) alıp ölçerken. **Mükerrer sevk.**

🟢 **VE ONUN ① ÖLÇÜMÜ BENİMKİNDEN SAĞLAM — bunu kaydediyorum:**
```
benim ① : `git log -S` → db23f90 · 2026-09-06
onunki  : db23f90 · 2026-09-06 **13:12** · VE `5e3cc53` (5 Eylül'ün SON
          commit'i) içinde `kid:` sayısı = **0**
```
Benimki *"alan 6 Eylül'de eklendi"* der; onunki **5 Eylül kapanışında
yokluğunu da gösterir**. İkincisi Ⓐ'yı doğrudan kanıtlıyor, benimki
çıkarımla varıyor. ⇒ **① için onun ölçümü esas alınmalı.**

🔴 **AMA ÜÇ ÖLÇÜM BİR SAYIDA AYRIŞIYOR — ve ayrışan taraf o:**
```
M-3152      "kid 291/429, ve KALAN 88'in 56'sı ADSIZ"
benim       291 + 82 + 0 + 56 = 429   ⇒ kalan **138**
DORT-KALEM  `v: k 373`  ⇒ 373 − 291 = 82 (`k` var, `kid` yok)
                          429 − 373 = 56 (adsız)
```
⇒ **`56 adsız` üçümüzde de aynı**; ayrışan tek sayı `138 ↔ 88`. Benimki ile
`DORT-KALEM`in `k:373`ü **birbirini bağımsız doğruluyor** (82 + 56 = 138).
📌 Muhtemelen bir aritmetik kayması, ama **ölçmedim** — yalnız üç sayıyı yan
yana koydum. Düzeltmesi ona ait; tahtadan **doğrudan** bildirdim.

⚠️ Ve niçin önemli: o cümle bir **kapsam uyarısının** dayanağı
(*"alan doğdu, KAPSAMASI tamam değil"*) — uyarı **doğru**, dayanak sayısı
**%36 küçük**. Kapsanmayan dönem 88 değil **138**.

---

## ⑨ İKİ ÖLÇÜMÜN ÖRTÜŞMEYEN KISMI — bu raporun katkısı

```
onda VAR, bende YOK   ① 5 Eylül kapanışında kid=0 KANITI (daha güçlü)
                      · kendi yamasının +50 etkisi
bende VAR, onda YOK   ② hangi ALET okuyor (app.js · denetle.py HİÇ)
                      ③ `yalnız kid = 0` — yer değiştirme YOK
                      ④ 13 kimliğin 13'ü GEÇERLİ (taranarak)
                      ⑤ 16 dönem alanın KENDİ sözleşmesini ihlal ediyor
```
⇒ İki rapor **çelişmiyor**, farklı yarıları ölçüyor: Ⓐ onun, Ⓒ benim.
Ve bu, mükerrer sevkin **tesadüfen** iyi sonuç vermesi — iki oturum aynı
soruyu farklı uçlarından tuttu. Tasarım değil, **şans.**

## ⑩ ANLIK GÖRÜNTÜ DAMGASI
```
HEAD 67cc52a · `data/` çalışma ağacı: yalnız `bolgeler.js` (üretilmiş, ilgisiz)
③④⑤ iki kez koşuldu (13:5x ve 14:0x) — sayılar BİREBİR aynı, taban kaymadı
🔒 koşu 8 sürüyor: `arac/` ve `data/` DONUK — yalnız OKUDUM
```
