# ÖLÇÜM — KARDEŞ ALET: `_kademe_uygula.py` aynı kusuru taşıyor mu?

**Oturum:** KURE GORUNUM · sevk **M-3018** · 5 Eylül 2026
**Cins:** ÖLÇÜM — hüküm yok, kod yazılmadı, veri yazılmadı (koşu 5b canlı).

---

## SONUÇ

🔴 **EVET — ve `kur`dan daha büyük: 38 kayıtta İKİ alan sessizce
düşüyor, 24'ünde gerçek bir fark var, ve İKİ BAĞIMSIZ KAPI var.**

```
`oneri.m`  38 kayıt · 24'ünde canlıdan FARKLI · model DESTEKLİYOR (792 canlı `m:`)
`donem`    38 kayıt · zamanlı kademe · model DESTEKLİYOR (192 canlı `kd:`)
```
🟢 Ve bir aday **çürüdü**: `yer_yama_kademe_zincir.js`in 17 kaydı
görünmez sanıldı — **öteki alet onları alıyor** (aşağıda ⑤).

---

## ① ALETİN KÜMESİ — döküldü, tahmin edilmedi

`_kademe_uygula.py` 114 satır. Alan kümesi bir sabit değil, **node
izdüşümünde** (satır 32-34):
```js
A.map(r => ({ ad: r.yerlesim, eski: (r.mevcut||{}).k,
              yeni: (r.oneri||{}).k, olcut: r.olcut }))
```
🔴 **Bu bir SÜZGEÇ değil bir İZDÜŞÜM.** `_sahiplik_uygula.py`nin
süzgeci bir kaydı **atar** (ve `atlanan`a düşürür); bu, kaydı **tutar**
ve **öteki bütün alanlarını atar.** Hiçbir yere iz düşmez.
```
okuduğu DOSYALAR      ['data/yer_yama_kademe.js','data/yer_yama_kademe2.js']
                      🔴 SABİT LİSTE — glob DEĞİL
birleştirdiği DEĞİŞKEN YER_YAMA_KADEME · YER_YAMA_KADEME2
yazıcı çıpası          GK_RX = (\bg:\s*-?\d+\s*,\s*k:\s*)(\d+)
                      ⇒ YALNIZ üst düzey `k:` yazılır — `kd:` ve `m:` ASLA
tutulan alan           4 (ad · eski · yeni · olcut)
```

## ② YAMALARIN KULLANDIĞI ALAN KÜMESİ

| dosya | n | üst düzey alanlar | iç |
|---|---|---|---|
| `yer_yama_kademe.js` | 38 | yerlesim · tur · **mevcut** · **oneri** · merkez_kapanis · merkez_km · guven · kaynak · gerekce · **donem** | `mevcut.k` `mevcut.m` `oneri.k` **`oneri.m`** |
| `yer_yama_kademe2.js` | 1091 | yerlesim · tur · mevcut · oneri · olcut · kaynak · gerekce · en_yakin_km · yaricap_km · hucre_degisir | `mevcut.k` `oneri.k` |
| `yer_yama_kademe_zincir.js` | 17 | **ad · m · kaynak · neden** | — |

⇒ `kademe2` aletle **birebir uyumlu** (yalnız `k`).
⇒ `kademe.js` **daha zengin**: `k` + `m` + `donem` üçlüsü — yani
`VERI-YAPISI.md`nin `kd:[{f,t,k,m}]` biçimi. Alet üçlünün **yalnız
birini** uyguluyor.

## ③ ÜÇ KOVA

| kova | alan | ölçüm |
|---|---|---|
| 🟢 **TAŞINIR** | `yerlesim`→ad · `mevcut.k` · `oneri.k` · `olcut` | 4 |
| 🟡 **KASITLI DIŞARIDA** | `tur · gerekce · guven · kaynak · merkez_km · merkez_kapanis · en_yakin_km · yaricap_km · hucre_degisir` | yamanın **kendi gerekçesi**, veriye inmemeli — `kaynak:"TDV tebriz"` bir dayanak notu, kaydın `kaynak:` alanı değil |
| 🔴 **SESSİZ DÜŞER** | `mevcut.m` · `oneri.m` · `donem` | 38 kayıt |

### 🔴 `oneri.m` — 38 kayıt, 24'ü GERÇEK FARK
`kur` dersinin sınavı uygulandı (**alan adına göre değil, kayda göre**):
```
oneri.k == canlı k     38 / 38   ⇒ `k` yarısı ZATEN İNMİŞ
oneri.m == canlı m     14 / 38
🔴 oneri.m FARKLI      24 / 38   ⇒ ve farkın yönü tek: canlı `m` NULL
canlıda bulunamayan     0 / 38   ⇒ hepsi MEVCUT kayıt (kur sınıfının şartı)
```
| yerleşim | yamanın `mevcut.m` | yamanın `oneri.m` | CANLI `m` |
|---|---|---|---|
| Ahar (Karadağ) | null | **Tebriz** | null |
| Buraydâ (Kasîm) | null | **Medine** | null |
| Burûcird | null | **Hemedan** | null |
| Cenîne | null | **El-Fâşir** | null |
| Eperjes (Prešov) | null | **Kassa (Košice)** | null |
| Fülek (Fiľakovo) | null | **Kassa (Košice)** | null |
| Herseknovi | null | **Mostar** | null |
| Kasr-ı Şîrîn | null | **Şehrizor** | null |

Ve bunlar tahmin değil **ölçülmüş** öneriler — `gerekce` alanı
şöyle diyor: *"1593 Tebriz eyaleti livâ listesi ÖLÇÜLDÜ (Tebriz·Suldus·
Dizmâr·Merâga·Sarukurgân·Saîdâbâd·Alîk); Ahar bu listede…"*,
`kaynak:"TDV tebriz"`, `guven:"GEREKCELI"`.

🔴 **Ve düşen alan tam olarak `Değişmez 3`ün alanı.** `CLAUDE.md §3`:
*359 yerleşim-tarih çiftinde yerleşim ile bağlı olduğu merkez farklı
devletlerin elinde.* Canlı veride **1775 kayıtta `m:` yok**; burada
24'ü için kaynaklı bir merkez **duruyor ve inmiyor.**

### 🔴 `donem` — zamanlı kademe, 38 kayıt
`donem:["1585-09-25..1603-10-21","1725-08-04..1730-08-12"]` — yani
kademenin **hangi pencerelerde** geçerli olduğu.
🟢 Model bunu **destekliyor**: `kd:` alanı `BILINEN_ALANLAR`da ve
**192 canlı kayıtta kullanılıyor** — yani ölü bir tasarım değil.
🔵 *"Bu alanın `kd:`ye dönüşmesi gerektiği" BENİM ÇIKARIMIM* — yama
bunu açıkça söylemiyor, biçim benzerliğinden okudum. Damgalıyorum.

## ④ HANGİ KAPI ELİYOR — İKİSİ, VE BAĞIMSIZ

```
KAPI A  _kademe_uygula.py   node İZDÜŞÜMÜ yalnız `.k` alıyor
                            ⇒ `oneri.m` Python'a HİÇ ULAŞMAZ
KAPI B  _sahiplik_uygula.py `m` ZATEN SKALER_ALANLAR'da (taşıyabilir!)
                            ama node süzgeci `r.ad !== undefined` istiyor
                            ⇒ bu kayıtlar `ad` DEĞİL `yerlesim` taşıyor
                            ⇒ 38'in 38'i SÜZGEÇTE ELENİYOR
```
🔴 **Alanın bir sahibi VAR ama o alete bu kayıtlar ulaşmıyor; ulaşan
alet ise alanı okumuyor.** Birini düzeltmek ötekini gizler — `kur`un
iki kapısıyla birebir aynı desen, ve bu sefer kapılar **iki AYRI
alette.**

## ⑤ 🔴 BİR ADAYI YAYINLAMADAN ÇÜRÜTTÜM — `zincir` dosyası

İlk ölçümde şu göründü ve büyük bir bulgu sanıldı:
```
data/yer_yama_kademe_zincir.js   17 kayıt · 6.308 bayt · 2 Eylül
_kademe_uygula.py sabit listesi  bu dosyayı OKUMUYOR
concat                            YER_YAMA_KADEME_ZINCIR'i BİRLEŞTİRMİYOR
⇒ "17 kayıt görünmez"
```
**Ölçüldü, ÇÜRÜDÜ.** Dosya adı *kademe* diyor ama içeriği bir **`m:`
yamasıdır** (`ad · m · kaynak · neden`), ve doğru sahibi
`_sahiplik_uygula.py`:
```
data/ tarama deseni  ^yer_yama.*\.js$   → bu dosyayla EŞLEŞİYOR ✓
node süzgeci         r.ad ✓  r.m ✓                              ✓
KURU KOŞU çıktısı    "Akmescid  yerlesimler_kirim.js  m+neden"  ← İNİYOR
                     Zâlincî · Ümmü Keddâde · Şa'riyye de çıktıda
yama m: ↔ canlı m:   17 aynı · 0 fark
```
⇒ **Kayıp yok.** Ve ad *"kademe"* olduğu için bu ölçümde (ve sevkte)
kademe kolunun parçası sayıldı.
📌 Bu gecenin *"glob bir ad sözleşmesidir"* dersinin **aynası**: orada
ad dosyayı **yanlış alete** teslim ediyordu; burada alet doğru, ad
**okuyucuyu** yanlış kola yolluyor. ⇒ *Bir dosya adı yalnız aletleri
değil ÖLÇÜMLERİ de yönlendirir.*

## ⑥ İKİNCİ KAPI — `girdi.py` alanları tanıyor mu?
```
k    BILINEN_ALANLAR ✓   BILINEN_DONEM_ALANLARI ✓
kd   BILINEN_ALANLAR ✓   (192 canlı kayıtta kullanılıyor)
m    BILINEN_ALANLAR ✓   (792 canlı kayıtta kullanılıyor)
```
🟢 Motor üçünü de tanıyor ⇒ **kusur ikinci kapıda değil, ilkinde.**
Yani bu bir *model* eksiği değil, **taşıyıcı** eksiği.

---

## 🔴 ASIL DERS — BAŞARILI YARIM, BAŞARISIZ YARIMI ÖRTÜYOR

`yer_yama_kademe.js` her kayıtta **iki teklif** taşıyor: `k` ve `m`.
```
`k` yarısı  38/38 İNDİ   ⇒ dosya "uygulandı" görünüyor
`m` yarısı   0/38 İNDİ   ⇒ 24'ü gerçek fark, hiçbir yerde iz yok
```
Aletin kendi raporu (`uygulandi / zaten-boyle / atlanan`) `m`den hiç
söz etmiyor — çünkü `m` **hiç sorulmadı.** Bir tamamlanma kontrolü
`k` üzerinden %100 der.
📌 `§11`in *"denetim var ≠ o soruyu soruyor"* ailesinin en sinsi üyesi:
burada **bir yamanın bir yarısının başarısı, öteki yarısının sessiz
düşüşünü sertifikalandırıyor.**

## ÖLÇMEDİM
```
⚪ `oneri.m`nin DOĞRULUĞUNU — 24 önerinin kaynağa uygunluğunu
   sınamadım; yalnız DÜŞTÜKLERİNİ ölçtüm
⚪ `donem`in `kd:`ye nasıl yazılacağını — biçim çıkarımı BENİM,
   yamanın beyanı değil
⚪ `kademe2`nin 1091 kaydının uygulanma durumunu — alan kümesi
   uyumlu, ama kaç tanesinin indiğini ayrıca saymadım
⚪ `denetim/` altında kademe yaması YOK (397 kaydın alan sayımında
   `mevcut`/`oneri` hiç geçmiyor) — bu ölçüm `data/`deki üç dosyayı
   kapsıyor
```
