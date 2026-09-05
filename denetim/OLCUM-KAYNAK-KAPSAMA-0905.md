# `kaynak:` KAPSAMA ÖLÇÜMÜ — desen CONFOUND'U GEÇTİ, ama iki dosyada

> Oturum **NEHİR SÜRTÜNME** · sevk `1.MURAT` M-2898 ① · 5 Eylül 2026
> 🔴 Öngörü ve **sınırlar ölçümden ÖNCE** yazıldı:
> `denetim/ONGORU-KAYNAK-KAPSAMA-0905.txt`
> ⚠️ Bu bir **KORELASYON** ölçümüdür. `kaynak:` yokluğu kusurun SEBEBİ
> değil, olsa olsa **İŞARETİ**dir. Hiçbir yere `kaynak:` yazılmadı,
> hiçbir kaynak turu yapılmadı.

---

## ⇒ MANŞET
```
GENEL          3805 noktanın 1367'sinde `kaynak:` VAR   = %35,9
KUSURLU KÜME     99 noktanın    1'inde `kaynak:` VAR   = % 1,0
🔴 AMA BU SAYI TEK BAŞINA HİÇBİR ŞEY SÖYLEMEZ — confound: DOSYA YAŞI
🟢 CONFOUND SINAVI (aynı dosya içinde): desen İKİ DOSYADA AYAKTA
```

## ① (a) GENEL KAPSAMA
```
nokta toplam      3805
`kaynak:` VAR     1367   %35,9      ← öngörü %25-50  ✓ TUTTU
`kaynak:` YOK     2438   %64,1
```
⚙️ `kaynak:` **iki kademede** sayıldı — kayıt düzeyi **ve** dönem düzeyi
(`s`/`d`/`v`/`isg` içindeki `kaynak`). Yalnız birine bakmak sayıyı bozardı.

## ② (a2) DOSYA DAĞILIMI — öngörü ② TUTTU, varyans uçtan uca
```
  %0,0   yerlesimler_amerika.js          0/133      %58,0  gamerika       65/112
  %0,0   yerlesimler_asya.js             0/344      %62,7  okyanusya      74/118
  %0,0   yerlesimler_avrupa.js           0/237      %79,3  e9353f         23/ 29
  %0,0   yerlesimler_gdasya.js           0/128     %100,0  afrika2      401/401
  %0,0   yerlesimler_h2_rusya.js         0/ 88     %100,0  kamerika     377/377
  %0,0   yerlesimler_h2_kuzeyafrika.js   0/ 64     %100,0  sibirya2      64/ 64
  %0,0   yerlesimler_ek7 · ek8 · emilme            %100,0  amerika3 · ok107 · ortaasya3
  %5,6   yerlesimler_h2_afrika.js       10/180
 %14,0   yerlesimler.js                111/792     ← EN ESKİ, EN BÜYÜK
 %26,1   yerlesimler_afrika.js          48/184
 %33,1   (20'den küçük 54 dosya)       108/326
```
📌 **Sekiz dosya tam %0, altı dosya tam %100.** Bu bir dağılım değil,
bir **kesme çizgisi**: `kaynak:` alanının yaygınlaştığı tarihten önce
yazılan dosyalarda hiç yok, sonrakilerde neredeyse tam.

## ③ (b) KUSUR KÜMESİ — HAM ORAN (🔴 bulgu SAYILMAZ)
```
kusurlu nokta (tekil)  99
`kaynak:` VAR           1   %1,0
```
```
tunus              0/36     onikiada           0/13     fizan          0/12
egeadalari         0/10     hafsi-menzil-dışı  0/17     girit          0/ 5
harput             0/ 3     diyarbakir         0/ 1     sisam          0/ 1
timbuktu           1/ 1  ← 🟢 TEK İSTİSNA
```
🔴 **Bu satırı bir bulgu olarak RAPORLAMIYORUM** — öngörü dosyasında
önceden yazdığım gibi, confound (dosya yaşı) tam olarak bunu üretir.

🟢 **Ve tek istisna anlamlı:** `timbuktu` bir **HATA değil, BEYAN** —
`Değişmez 1b`nin beyanlı boşluğu, ölçülmüş ve kaynaklanmış bırakılmıştı.
⇒ Kümedeki tek kaynaklı kayıt, kümedeki tek **kasıtlı** kayıt.

## ④ 🔴 (c) ASIL SINAV — AYNI DOSYA İÇİNDE KIYAS
```
dosya                            KUSURLU           kusursuz
yerlesimler.js                    1/45   %2,2      110/747   %14,7
yerlesimler_afrika.js             0/34   %0,0       48/150   %32,0
yerlesimler_h2_kuzeyafrika.js     0/20   %0,0        0/ 44   % 0,0   ⚪ ÖLÇÜLEMEZ
────────────────────────────────────────────────────────────────────
TOPLAM (yalnız bu üç dosya)       1/99   %1,0      158/941   %16,8
```

🟢 **DESEN CONFOUND'U GEÇTİ — ama iki dosyada, üçüncüsünde değil:**
```
yerlesimler.js        %2,2  vs %14,7    → 6,7 KAT fark
yerlesimler_afrika.js %0,0  vs %32,0    → oran tanımsız (payda 0)
h2_kuzeyafrika        %0,0  vs  %0,0    → ⚪ FARK YOK
```
⚠️ **Üçüncüsü desen çürütmüyor, ÖLÇEMİYOR:** o dosyanın kendisinde
`kaynak:` alanı **hiç yok** (0/64). Varyansı olmayan bir dosya, bir
farkı gösteremez. ⇒ `ölçülemedi` kovası, `temiz` değil.

🟢 **VE SEÇİM ARACI, ÖLÇÜLEN DEĞİŞKENDEN BAĞIMSIZ** — bu kıyasın
en güçlü ayağı:
```
kusur kümesi nereden geldi?   `4c`/`4d` (KÜNYE penceresi hesabı) ve
                              kronoloji çapraz kontrolü
ölçülen değişken               `kaynak:` alanının VARLIĞI
⇒ İkisi birbirine HİÇ bakmıyor. Kümeyi `kaynak:`sız olduğu için
  seçmedim; seçtikten SONRA baktım.
```

## ⑤ SINIRLAR — ve biri ölçümü GÜÇLENDİRİYOR
```
🔴 n KÜÇÜK        kusurlu taraf 45 · 34 · 20. Tek bir dosyada 1/45
                  ile 0/45 arasındaki fark bile oranı ikiye katlar.
🔴 KÜME RASTGELE DEĞİL  bunlar kusur ARANAN yerler. Tam bir kontrol
                  grubu yok; (c) kıyası en yakın olanı.
🔴 NEDENSELLİK YOK      "kaynaksız olduğu için kusurlu" DEĞİL. İkisi
                  de ortak bir üçüncü şeyin ürünü olabilir:
                  **araştırmasız toplu yazım.**
🟢 VE BİR SINIR ÖLÇÜMÜ GÜÇLENDİRİYOR — "kusursuz" grup KİRLİ:
                  içinde henüz KEŞFEDİLMEMİŞ kusurlar var. Bu, temiz
                  grubun oranını GERÇEĞİNDEN DÜŞÜK gösterir
                  ⇒ ölçülen fark bir **ALT SINIR**, abartı değil.
```

---

## ⑥ 🔴 YAN BULGU — KENDİ SAYIMI DÜZELTİYORUM: **29 DEĞİL 27**

Bu gece `hafsi` için *"menzil dışı 29"* diye rapor etmiştim. Bugünkü
ölçüm **27** verdi ve fark kovalandı:
```
`hafsi` DÖNEM   toplam 76 · menzil dışı 27
`hafsi` NOKTA   toplam 75 · menzil dışı 27      (birim farkı DEĞİL)
```
**Sebep:** `29` iki ayrı ölçütü karıştırıyordu —
```
YAZDIĞIM   12 (Fizan kümesinin TAMAMI) + 17 (öteki) = 29
GERÇEK     Fizan'ın 12 noktasının İKİSİ menzilin İÇİNDE:
              Gât    10,180°D   ┐ Trablus çizgisinin (13,19°D)
              Ubârî  12,777°D   ┘ BATISINDA
           ⇒ 10 + 17 = 27
```
⇒ **COĞRAFÎ bir ölçütle (boylam) KÜMESEL bir ölçütü (Fizan partisi)
aynı sayıya topladım**, ve ikisi kenarda 2 noktada ayrışıyor.

⚠️ **VE BU, FİZAN YAMASINI ÇÜRÜTMEZ.** Yama boylama değil **kaynağa**
dayanıyor: TDV `fizan` Hafsî hâkimiyetini **hiç anmıyor**, Kânim
kontrolünü anıyor. Gât ve Ubârî'nin `kanem-bornu`ya çevrilmesi
doğruluğunu boylamdan almıyor.
📌 Düzelen şey bir **yama** değil, bir **sayı** — ve `§11`in *"aynı
sayı ≠ aynı vaka"* dersinin tersi: **iki farklı ölçüt, tek sayıya
toplanmış.**

---

## ⑦ ÖNGÖRÜ KARNESİ
```
① genel kapsama %25-50        ✓ TUTTU        %35,9
② dosya varyansı BÜYÜK        ✓ TUTTU        %0 ↔ %100, sekiz/altı dosya
③ ham oran ortalamanın altı   ✓ TUTTU  ama BULGU SAYILMADI (önceden yazıldı)
④ aynı-dosya kıyası           🟢 "BİLMİYORUM" demiştim
                                 → 2 dosyada DESEN VAR · 1 dosyada ÖLÇÜLEMEDİ
```
📌 Bilgiyi yine **tahmin edemediğim kalem** taşıdı. ①②③ tuttu ve
hiçbiri bir şey öğretmedi; ④'ün sonucunu önceden yazamazdım.

## ⑧ NE YAPMADIM
```
YAZMADIM     hiçbir kayda `kaynak:` — bu bir ÖLÇÜM turuydu
TÜRETMEDİM   bu sonuçtan iş. Koordinatör "ölçüm türetiyorum, davranış
             değil" dedi; aynı sınırı tuttum.
ÖLÇMEDİM     `kaynak:` alanının DOĞRU olup olmadığını — yalnız VAR/YOK
             saydım. Bir slug ölü ya da yanlış madde olabilir (`§4②`),
             bu ölçüm onu GÖRMEZ.
ÖLÇEMEDİM    `h2_kuzeyafrika` dosyasında farkı (dosyada hiç `kaynak:` yok)
```

## ⇒ HÜKÜM
> Desen **çürümedi ve confound'u geçti**, ama **iki dosyada** ve
> **küçük n** ile. Bir **önceliklendirme sezgisi** olarak kullanılabilir
> (`kaynak:`siz kayıtlar önce taranır); bir **kusur göstergesi** olarak
> KULLANILAMAZ — %64'ü kaynaksız olan bir külliyatta *"kaynaksız"*
> demek, *"çoğunluk"* demektir.

🔜 Genişletmek isteyen için tek cümlelik reçete: **aynı ölçümü, bu
geceden bağımsız bir kusur kümesiyle tekrarla.** Bu küme benim bir
gecelik seçimim; deseni sınayacak şey **başka bir seçicidir.**
