# `_sahiplik_uygula.py` — İKİ KUSUR, biri VERİ BOZDU

> 91 sahiplik çakışmasını çözmeye giderken bulundu. İkisi de yıllardır
> oradaydı; ikisi de **sessizdi**; biri ancak öteki düzeltilince ateşledi.

## ① SESSİZ KAYIP — `liste[0]` dışındaki her şey düşüyordu

```python
for ad, liste in sorted(gruplu.items()):
    x = liste[0]
    r = x["r"]          # ← ve YALNIZ bu uygulanıyor
```
Aynı adı birden çok yama taşıyorsa, **yalnız birincisi** uygulanıyordu.
Ölçüldü (`ARAC-AYRIK-KAYIP2-0907.js`):
```
liste[1:]'in alanı CANLIDA ZATEN AYNI (kayıp YOK) : 118
liste[1:]'in alanı CANLIDAN FARKLI  (İNMİYOR)     : 151
dağılım: v 133 · d 10 · s 8
```
🔴 **133'ü TEK DOSYADAN:** `yer_yama_vassal_kid_0906.js` `v:` alanı.
Sebep tarihsel değil **alfabetik** — dosya adı `v` ile başladığı için o
yama neredeyse her zaman `liste[1:]`e düşüyor.

🔴 **VE ALET BUNU İYİ HABER DİYE BASIYORDU:**
> `i 175 ad birden çok yamada geçiyor ama AYRIK alanlara dokunuyor —
>  çakışma DEĞİL`

O satır, **tam da düşürdüğü kayıtlar hakkında** güven veriyordu.
📌 Aletin kendi başlığı alfabetik seçimi mahkûm ediyor (*"karar yargıyla
değil dosya adının alfabetik sırasıyla veriliyordu"*). Burada alfabetik
seçim bir **seçim bile değildi — bir DÜŞÜRMEYDİ**, ve seçimden farkı
şu: bir seçim raporlanır, düşürme raporlanmaz.

**ÇARE:** `liste[1:]`in **yazılabilir** alanları `liste[0]`a katılır ve
**raporlanır**.
⚠️ İlk sürüm `x["r"]`nin BÜTÜN anahtarlarını birleştirdi ve `hukum` ·
`parti` · `koordinat_kontrol` gibi **rapor alanlarını** kayda kattı.
Yazıcı onları zaten yazmıyor — ama **kayda giren her alan bir sonraki
ölçümde VERİ sanılır.** `YAZILABILIR` süzgeci kondu.

## ② DÖNEM İÇİ BEYAN — belgeleme yaması, belgelediği veriyle "çatışıyor"

```
ada_kaynak  isg:[{f,t,d, kaynak:"oniki-ada"}]
onikiada    isg:[{f,t,d}]
```
Çekirdek **birebir aynı**; ayrışan tek şey dönem nesnesinin içindeki
`kaynak:`. Aletin `kaynak` muafiyeti **kayıt** seviyesinde
(`catisan_alanlar == ["kaynak"]`), bu `kaynak` **dönem** seviyesinde ⇒
muafiyet ateşlenmiyor. Ölçüldü: **60 veri çatışmasının 37'si bu.**

🟢 **VE ÇARESİ KAYIT SEVİYESİNDEKİNDEN FARKLI OLMALI:** orada iki taraf
*farklı bir şey söylüyordu* (birini seçmek alfabetik kaza olurdu ⇒
hiçbiri yazılmaz). Burada bir taraf **susuyor**.
⇒ ***Sessizlik rakip bir iddia değildir.*** Tek konuşan varsa **YAZ**;
iki konuşan ayrı şey diyorsa **BLOKE ET**.

## ③ 🔴🔴 VE ①'İ DÜZELTİNCE ÜÇÜNCÜ BİR KUSUR ATEŞLEDİ — VERİ BOZULDU

`Zagem (Kaheti)` kaydına düşmüş bir `neden:` beyanı indi. O beyanın
**metni** şunu içeriyordu:
> *"Veri de aynı günle teyit ediyor: `v:[{f:"1578-08-09",…}]`"*

`ALAN_RX["v"]` = `\bv:\s*\[` o **düzyazıdaki** `v:[`i yakaladı,
`dizi_sonu` cümlenin içindeki `]`i buldu, ve aralığı **ham JS** ile
değiştirdi. `neden:` dizgesi ortasından kapandı ⇒ `yerlesimler.js`
**ayrıştırılamaz** oldu, `denetle.py` `JSONDecodeError` ile öldü.

```
ÇARE  ara_disi(rx, metin) — eşleşmenin DİZGE İÇİNDE olup olmadığını
      `_dizge_maskesi` ile ölçer; dizge içindekini ATLAR.
      ALAN_RX · SKALER_RX · SKALER_NULL_RX · AD_RX — dördü de geçti.
```
📌 `§11`in *"bir alet, aradığı şeyin NEREDE OLMAYACAĞINI da bilmeli"*
ailesinin **yeni ekseni**. Önceki üyeler *yorumda · başlıkta · önsözde*
arıyordu; bu **kaydın KENDİ DÜZYAZISINDA** arıyor — ve o düzyazı veriyle
**aynı sözdizimini** taşıyor, çünkü veriyi **anlatıyor**.
⚠️ Kusur yıllardır oradaydı ve **ateşlemedi**: ancak `v:[…]` içeren bir
metin, `v:` alanı da olan bir kayda inince patlar. ①'in düzeltilmesi onu
ilk kez mümkün kıldı.
🟢 Ve **gürültülü** patladı — sessizce yanlış yazsaydı fark edilmezdi.
`§11`: *"bir aracın çökmesi, yanlış cevap vermesinden İYİDİR."*

## ④ ÖLÇÜLEN SONUÇ

```
çakışma        91 → 26        (Irak birleştirmesi 91→63 · bu iki çare 63→26)
uygulanan               230   (215 + 15 Çukurova)
birleştirilen  dönem içi isg 37 · ayrık v 169 · s 47 · d 41 ·
               kaynak 38 · neden 38 · isg 5 · not 2
```

## ⑤ 🔴 VE BİR GEOMETRİK BEDEL DOĞDU, SONRA KAPANDI

215 kayıt inince `Değişmez 7` **662 → 663** oldu. Ölçüldü
(`ARAC-ENKLAV-FARK-0907.py`): 3 kapandı (Irak `irak-kralligi`), **4
yeni doğdu**:
```
1921-10-20 · Antep · Kilis · Mersin · Payas · OSMANLI adası
```
🔴 **Dördü de DEĞİŞMEMİŞTİ** (`git diff` boş). Köprüleri kesilmişti:
`Karapınar · Ilgın · Kelkit · Tosya` o gün `OSMANLI → tbmm-turkiye`
oldu — bunlar **tam da `liste[1:]`de düşen kayıtlardı.**
⇒ ***Kusur ①'i düzeltmek, ondan gizlenen bir tutarsızlığı görünür
kıldı.*** Enklav sayacı işini yaptı.

🟢 **VE ÇARESİ ZATEN HÜKME BAĞLIYDI:**
`denetim/HUKUM-CUKUROVA-CAKISMA-0907.md` + `YAMA-ISG-FAZ2-cukurova.json`
(15 kayıt, `isg:` örtü modeli, şehir bazlı TDV kaynağı). Yama
`denetim/`de olduğu için **uygulayıcının glob'una hiç girmiyordu.**
Taşındı (`data/yer_yama_cukurova_isg_0907.js`), uygulandı:
```
Değişmez 7   663 → 661     (HEAD 662'nin ALTINDA)
kapanan: Antep · Kilis · Payas
```
⚠️ **Tavan (660) YÜKSELTİLMEDİ.** `CLAUDE.md` FAZ 1'in dersi: *"tavan
yükseltilseydi ihlal susardı ve Sarıkamış ada kalırdı — denetim temiz,
harita yanlış."*
📌 Ve HEAD'in kendisi **zaten 662**'ydi: tavan benden önce de aşılıydı.

## ⑥ AÇIK KALEMLER — ölçüldü, kapatılmadı

```
🔴 Mersin  hâlâ ada (1921-10-20). Çukurova yaması `isg:`i indirdi,
   `d:`/`s:`i İNDİREMEDİ — ve sebebi kaydın KENDİ notunda yazılı:
   «MÜKERRER `s:`/`d:` yüzünden JS'te sonuncusu kazanıyor ve düzeltme
    motora hiç girmiyordu» (yerlesimler_ek27.js)
   ⇒ `ara_disi` İLK eşleşmeyi yazıyor, JS SONUNCUYU okuyor. Mükerrer
     anahtarlı kayıtlarda yazma ETKİSİZ. Ayrı kalem: kayıt tekilleştirilmeli.
🔴 Malikiye (Derik) · 1918-10-30 · fransa-cumhuriyet · tek nokta ada,
   272 km, `A-koridor` kovası. MANDA yamasından geldi. Ölçülmedi.
🔜 `1921-08-23` (Faysal'ın taç giymesi) kronoloji maddesi YOK. En yakın
   madde 21 gün uzakta ve ALÂKASIZ (Sakarya). `Değişmez 2` eşiğini
   geçiyor ⇒ denetim ötmüyor, ama tam da onun önlemek için var olduğu
   durum.
⚪ 26 çakışma kaldı — 23'ü gerçek VERİ farkı, 3'ü kayıt seviyesi beyan.
```
