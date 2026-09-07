# KÜME 1 — BEŞ MISIR NOKTASI · **HÜKÜM: `misir_himaye` KAZANIR**

> **CAKISMA-0907 · 7 Eylül 2026 · VERİ YAZILMADI.**
> Yama: `denetim/yer_yama_misir5_0907.js` · üreteç:
> `denetim/ARAC-CAKISMA-MISIR5-0907.py`
> Kayıtlar: Süveyş · Sina güneyi · Tûr (Sînâ) · Sefâce · Kusayr

---

## ① TARAFLAR — beş yama, ama gerçek yarış İKİ TANE

```
kid20_0907          yalnız `v:` · CANLI ile AYNI          ⇒ yarışta DEĞİL
vassal_kid_0906     yalnız `v:` · CANLI ile AYNI          ⇒ yarışta DEĞİL
ok101               `s:ingiltere 1914-12-18→1923` · CANLI ile AYNI
misir_himaye        `s:misir-sultanligi` + `s:misir-kralligi` + ÜÇ `isg:`
ortadogu_misir_1923 `s:ingiltere 1914→1922` + `s:misir-kralligi`   ← BENİM
```
⇒ Üçü canlının tekrarı; karar `misir_himaye` ile **benim yamam**
arasında.

## ② 🔴 KENDİ YAMAM KAYBEDİYOR — ve sebebi kendi savunduğum kural

```
1914-12-18 → 1922-03-15 aralığında:
   BENİM        s:ingiltere              ← himayeyi SAHİPLİK yazmış
   misir_himaye s:misir-sultanligi + isg:ingiltere ÖRTÜSÜ
1922-03-15 → 1923-10-29: İKİSİ DE s:misir-kralligi ⇒ fark YOK
```
**`misir_himaye` doğru, ben yanlışım.** Gerekçe `YONTEM §②a`nın kendi
satırı — ve o satırın Cezayir ölçümünü ben yapmıştım:
> *HİMAYE → hânedan SÜRDÜ, metbû değişti → KENDİ KİMLİĞİ + `isg:` ÖRTÜSÜ*

🟢 **Ve künye bunu ADIYLA doğruluyor:**
```
misir-sultanligi   ad:"Mısır Sultanlığı (İngiliz Himayesi)"
                   f:1914-12-18  t:1922-03-15
```
Künyenin **adı** himayeyi söylüyor ve **penceresi** aralığı birebir
tutuyor. Yani kimlik tam bu iş için açılmış; ben onu kullanmadım.

📌 **Hatamın cinsi:** Tunus'ta ve Cezayir'de *"himaye ≠ ilhak"* ayrımını
ben kurdum, sonra Mısır'da **kendi ayrımımı uygulamadım.** `§11`:
*"kural yetmiyor, ALIŞKANLIK gerekiyor"* — ve bu sefer kuralı yazan
taraf çiğnedi.

## ③ 🟡 AMA KAZANAN DA BİR YERDE KESİLİYOR — `isg:` ucu

`misir_himaye` `isg:ingiltere` örtüsünü **1923-10-29**'a kadar
sürdürüyor. Bu, koordinatörün bu geceki hükmüne aykırı (M-3096):
```
ÇUKUROVA  Fransız kuvveti Osmanlı toprağında, egemenlik DEVROLMAMIŞ ⇒ isg: DOĞRU
SÜVEYŞ    İngiliz garnizonu BAĞIMSIZ Mısır toprağında, antlaşma HAKKIYLA ⇒ isg: YANLIŞ
```
Ve dayanağı TDV'nin kendi tarifi: dört çekince **hak**tır, işgal değil —
*"haberleşme güvenliği · savunma · azınlık hakları · Sudan'ın
yönetimi"*, hiçbiri toprak devretmiyor.

⇒ **BİRLEŞİM:** `misir_himaye`nin tamamı alınır, yalnız
`isg:ingiltere 1914-12-18 → 1923-10-29` ucu **1922-03-15**'e çekilir.
```
1914-12-18 → 1922-03-15   s:misir-sultanligi  +  isg:ingiltere   HİMAYE
1922-03-15 → 1923-10-29   s:misir-kralligi    ·  örtü YOK        BAĞIMSIZ
```
🟢 Beş kaydın **beşinde de** kesildi (`1923-10-29 → 1922-03-15`).

## ④ SINAV
```
🟢 birleşen kayıt        5 / 5 · atlanan 0
🟢 ters/sıfır dönem      0   (§8 · Tebriz vakası kapısı)
🟢 C13 ATEŞLEME          sıfır dönem dalı ZORLANDI (isg `t`=`f` yapıldı),
                         3 kayıt yakalandı, assert ile kilitlendi
⚪ denetle.py simülasyonu KOŞULMADI — koşu 8 sürüyor; `data/` donuk
                         olduğu için bellekte sınamak anlamlı ama
                         uygulama sırası koordinatörde. ÖLÇMEDİM.
```

## ⑤ ÖLÇMEDİĞİM
```
🔴 `ok101`in `d:` alanı — birleşimde `misir_himaye`nin `d:`si alındı;
   ikisi ayrışıyor mu BAKMADIM (`misir_himaye`de `d:` yok, canlıda var).
   ⚠️ Bu, uygulayıcının `liste[0]` kusurunun DÜZELTİLDİĞİ varsayımına
   dayanıyor; alan kaybı olursa buradan gelir.
🔴 `isg:fransa` (canlı) ↔ `isg:fransa-cumhuriyet` (misir_himaye) —
   1798-1801 Fransız işgalinde İKİ FARKLI KİMLİK yazılı ve ikisinin de
   künyesi VAR. Hangisi doğru, ÖLÇMEDİM. Birleşimde `misir_himaye`nin
   yazımı korundu.
🔴 Öteki dört kaydın (Sina · Tûr · Sefâce · Kusayr) `memluk` bitiş
   günleri ayrışıyor (Süveyş 1517-02-15, Kusayr 1517-04-13) — meşru
   olabilir (farklı fetih günleri), SORMADIM.
```
