# Üç "anakronizm" adayı — ve İKİSİ ANAKRONİZM DEĞİL

> Oturum **NEHİR SÜRTÜNME** · sevk `1.MURAT` M-2872 · 5 Eylül 2026
> 🔴 **HÜKÜM YOK, SINIF + SAYI.** Ve manşet bir öz-çürütme.

---

## ⇒ MANŞET: "`sardinya` 439 YIL, GECENİN EN BÜYÜK ANAKRONİZMİ" — ÇÜRÜDÜ

Kalemi ben önerdim ve gerekçem şuydu:
> *"`sardinya` 439 yıl bu gecenin en büyük tek anakronizmi olabilir —
> `meysur`un 124 yılından üç kat büyük."*

**Ölçüldü. Anakronizm DEĞİL.**

```
sardinya   → 🟢 ZEND SINIFI (künye dar, veri doğru)
isvec      → 🟢 ZEND SINIFI
toskana    → 🔴 KÜNYE ÇİFTİ (makdisu sınıfı) · YAZILABİLİR · YAZILDI
```
⇒ Üç adaydan **sıfırı** anakronizm. İkisi künye-dar, biri künye-çifti.

---

## ⓪ VE İLK ADIMDA BİR TUZAK: `sardinya` BİR `id` DEĞİL
```
`sardinya` künye `id` olarak     🔴 YOK
`sardinya` `harita:` anahtarı     🟢 VAR → `sardinya-piyemonte`
                                     1720-08-02 → 1861-03-17
```
🟢 Aletim bunu **sessizce geçmedi, ÇÖKTÜ** (`NoneType.get`) — ve
çökmesi doğru davranıştı. Sessizce `None` dönseydi *"künye yok"* diye
rapor edecektim, ve bu gece o hatayı **bir kez zaten yapmıştım**
(`ingiliz-hindistani`).
📌 ***Bir aracın çökmesi, yanlış cevap vermesinden iyidir.***

## ① `sardinya` — **ZEND SINIFI**, ve iki kayıt Savoya'nın kendisi
```
künye  sardinya-piyemonte  1720-08-02 → 1861-03-17  "(Savoya)"
4d kayıtları:  **Torino** 1281-01-01 · **Chambéry** 1281-01-01
```
⇒ Torino ve Chambéry **Savoya'nın tarihî merkezleridir** ve Savoya
Kontluğu 11. yüzyıldan beri vardı. 1281'de o topraklar **gerçekten
Savoya'nındı** — künye ise **kraliyet unvanının** doğduğu 1720'yi
gösteriyor (Sardinya adasının alınmasıyla krallık unvanı).
🟢 **`napoli`nin birebir aynısı:** ad/unvan ömrü ≠ tasarruf sürekliliği.
Fark yalnız ölçek: `napoli` 15 ay, burada 439 yıl — **ama cins aynı.**
⇒ **Veri doğru, künye adı sonraki dönemi taşıyor. DOKUNMA.**

## ② `isvec` — **ZEND SINIFI**, 42 kayıt
```
künye  isvec  1523-06-06 → 1923-10-29   (Gustav Vasa / bağımsızlık)
4d kayıtları: Stokholm · Uppsala · Örebro · Linköping · Kalmar ·
              Jönköping · Karlstad · Gävle · Falun · Göteborg ·
              Sundsvall · Turku · Hämeenlinna … (hepsi 1281-01-01)
```
⇒ İsveç 1281'de **vardı** (Magnus Ladulås dönemi). Künye Kalmar
Birliği'nden ayrılışı (1523) ölçüyor.
🟢 Ve verinin geri kalanı **titiz**: Malmö/Helsingborg `1658-02-26`
(Roskilde), Visby/Halmstad `1645-08-13` (Brömsebro), Norveç şehirleri
`1814-01-14` (Kiel), Riga `1621-09-15`, Helsinki `1550-06-12`.
**Bu kadar titiz bir veri, 1281'i tesadüfen yazmaz** — pencere başıdır.
⇒ **Veri doğru, künye dar. DOKUNMA** (ya da künye 1281'e çekilir,
ama o `devletler.js` kararıdır).

## ③ `toskana` — 🔴 **KÜNYE ÇİFTİ**, ve YAZILABİLİR
```
künye `floransa`  1115-01-01 → 1532-01-01  🟢 RENGİ VAR · veride 0 DÖNEM
künye `toskana`   1532-01-01 → 1860-03-22  🟢 rengi var
⇒ TAM BİTİŞİK (ölçüldü)
```
🟢 **VE VERİNİN GERİ KALANI ZATEN DOĞRU** — tasarımın bilinçli
olduğunun kanıtı:
```
Pisa   `toskana` 1406-10-09'dan   ← Floransa'nın Pisa'yı alışı
Siena  `toskana` 1557-07-03'ten   ← Siena'nın ilhakı
Floransa · Elba   `toskana` **1281-01-01**'den  ← 251 yıl erken
```
⇒ İki şehir **doğru günlerde** giriyor; yalnız **merkez** yanlış
kimlikle ve pencere başından boyanıyor.

### YAZILDI: `denetim/yer_yama_floransa.js` (1 kayıt)
```
biçim sınavı   YER_YAMA_FLORANSA · 1 kayıt · UYARI YOK
denetim        hayalet 9 (+0) · 4c 287 (+0) · **4d 466 (−1)** · künyesiz 2 (+0)
kırılma        YENİ: YOK · KAYBOLAN: YOK
renk           `floransa` TANIMLI ⇒ delik doğmaz
```
⚠️ **`Elba` KASTEN DIŞARIDA:** o da `toskana` 1281'den boyanıyor ama
ada 1281-1532 arası Floransa'nın **değildi** (Pisa · sonra Piombino).
`floransa` yazmak bir anakronizmi başkasıyla değiştirirdi. **AYRI KALEM.**

---

## 🔴 VE BİR ÖLÇÜM UYARISI — kendi kontrolüm yanlış yerden bakmıştı
Renk kontrolünde `sardinya-piyemonte` (id) aradım ve **🔴 YOK** çıktı.
Sonra `harita:` anahtarını (`sardinya`) aradım — **VAR.**
⇒ Renk `harita:` anahtarına bakar, `id`ye değil. İlk kontrolüm
**yanlış kapıdan** dinliyordu.
📌 Bu gece bunun **dördüncü** vakası (ölçüm filtresi · etiket sırası ·
eşik · şimdi anahtar cinsi). Dördü de veriyi değil **okumayı** bozdu.

## TESLİM — sayıyla
```
sınanan            3 aday
anakronizm çıkan   **0**
ZEND sınıfı        2 (sardinya · isvec) — DOKUNMA
künye çifti        1 (toskana) → 1 kayıt YAZILDI, 4d −1
kendi hipotezim    ÇÜRÜDÜ (439 yıl "en büyük anakronizm" değildi)
```

## ÖLÇMEDİKLERİM
```
OKUMADIM   TDV `italya` gövdesini — `floransa` bölmesi kaynaktan değil
           atlasın KENDİ künye çiftinden geliyor ve yamada öyle beyan
           edildi
ÖLÇMEDİM   `Elba`nın 1281-1532 arası gerçek sahibini (Pisa? Piombino?)
ÖLÇMEDİM   `isvec` künyesini 1281'e çekmenin etkisini — 42 kayıt
           temizlenir ama `renk_olc.py` ön şartı (pencere genişlemesi)
           burada da geçerli
ÖLÇMEDİM   `sardinya` künyesini 1281'e çekmenin etkisini (2 kayıt,
           küçük — ve `napoli` gibi DOKUNMAMAK daha doğru olabilir)
```
