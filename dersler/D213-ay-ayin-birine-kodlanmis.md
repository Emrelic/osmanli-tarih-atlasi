# Üçüncü hassasiyet ekseni: ay, ayın 1'ine kodlanmış

> Kimlik `D213` · `CLAUDE.md §4` bölümünden taşındı (17 Eylül 2026, PROTOKOL-BUDAMA).
> Kural CLAUDE.md'de tek satır; gerekçe ve vakalar burada — metin BİREBİR, budama öncesi hâliyle.
> ⚠️ İçindeki `§N` atıfları ve satır numaraları budama ÖNCESİ CLAUDE.md'ye aittir.

---

#### 🔴 ÜÇÜNCÜ HASSASİYET EKSENİ: AY, AYIN 1'İNE KODLANMIŞ — 42 künye

Aynı oturum `tekrur f:1852-09-01` gördü: künye **ay hassasiyetini ayın
1'ine kodluyor**. Tarandı — **42 künyenin `f:`/`t:` değeri `YYYY-MM-01`**
(safevi 1501-07-01 · lehistan 1569-07-01 · bosna-kralligi 1463-05-01 ·
saruhan 1416-09-01 …).

⚠️ **Ve bir kısmı GERÇEKTEN ayın 1'i** — Lublin Birliği *gerçekten* 1
Temmuz 1569'dur. ⇒ **Biçim, "ayın 1'i" ile "ay biliniyor, gün
bilinmiyor"u AYIRT EDEMİYOR.**
```
① gün HİZALAMA ürünü         veriye bakar     (purepecha 1530-02-14)
② gün HAFIZADAN alınmış      hafızaya bakar   (Haiti: kaynak "July 1915",
                                               bilinen 28 Temmuz KULLANILMADI)
③ AY, ayın 1'ine kodlanmış   BİÇİME bakar     🆕 42 künye
```
③'ün farkı: kayıt **yalan söylemiyor**, iki ayrı şeyi **aynı biçimde**
yazıyor. `kaynak` alanına bakmak yetmez; **kaynağın ne dediğini** okumak
gerekir.

🟢 **KURAL — maddede:** tarih alanı kaynağın desteklediği **en kaba
güvenli** düzeyi taşır, gerisi **metinde** durur. Kaynak *"Eylül 1852"*
diyorsa `1852-01-01` yazılır ve ay `b`/`kaynak` metnine konur.

🔴 **VE KURALIN BİR ŞARTI VAR — künye penceresi.** *(5 Eylül 2026 ·
`KRONOLOJİ BOŞ KÜNYE` çatışmayı gösterdi)* Kaba tarihi yazmak, maddeyi
künyenin **kendi penceresinin dışına** düşürebilir:
```
kaynak "1763" diyor      → kural gereği `1763-01-01`
künyenin `f:`            → `1763-02-10`
⇒ madde künyenin BAŞLANGICINDAN 40 GÜN ÖNCE düşer, künye kendi içinde çelişir
```
⇒ **O zaman kaba tarih yazılmaz: künyenin günü DEVRALINIR, ve künyenin
gününün de kaynaksız olduğu BİLDİRİLİR.** Kural *uydurmayı* yasaklar;
devralmak uydurmak değildir — **yazılmadığında** uydurma olur.
📌 Ve ölçen oturumun gerekçesi kuraldan ince: günü TDV'den değil
**künyenin kendi içinden** aldı (aynı olayın mevcut `kurulus` maddesi
zaten o günü taşıyordu), yani yeni bir hassasiyet üretmedi. ⇒ Kusur
yayılmaz, **kayda geçer.**

🟢 **VE BİR KURAL DAHA, aynı turdan:** bir yılı iki cümleden **türetmek**
meşrudur (*"Mart 1886 … bir yıl sonra"* → 1887), **ama türetilen sayı
ALINTIYA YAZILMAZ.** O oturumun cümlesi: *"kaynağın söylemediği bir sayıyı
alıntıya yazmak uydurmaktan KÖTÜDÜR, çünkü SAHTE BİR DAYANAK üretir."*

##### 🔴 VE EKSEN KÜNYELERE ÖZGÜ DEĞİL — BİR ÇELİŞKİYİ YARISINDAN UYDURDU
*(5 Eylül 2026 · `KÜRE GÖRÜNÜM` ölçtü · yanılanlar İKİ İŞÇİ VE KOORDİNATÖR)*

Yukarıdaki 42 vaka **künyelerde** ölçülmüştü. Aynı biçim bir **kronoloji
maddesinde** çıktı ve on yıllık bir "çelişki"nin yarısını tek başına
üretti:
```
veri  `1913-11-01`   ← GÜN sanıldı
madde `gun:` alanı   "Kasım 1913"        ← AY, ayın 1'ine kodlanmış
TDV   "20 Eylül 1923'te kurtarıldı"
⇒ üç oturum bunu "ON YIL FARK" diye taşıdı; farkın yarısı HİÇ YOKTU
```
⚠️ Ve yanılmak için kayda bakmak yetmiyordu: `d:`/`s:` alanında duran
`1913-11-01` **gün gibi görünür**; onu çürüten şey maddenin **kendi
`gun:` metni** oldu. ⇒ ***Bir tarihin hassasiyeti, tarihin YAZILDIĞI
alandan değil, onu AÇIKLAYAN alandan okunur.***
📌 Kural (`§8`: *"kronoloji maddelerinde gün yaz"*) bu biçimi yasaklıyor
ama **veride zaten var**, ve tarandığında `YYYY-MM-01` künye kalıbıyla
aynı görünüyor.

🟢 **VE SAYILDI — `denetim/ARAC-AY-KODLU-MADDE-0905.js`** (evren: `data/`
altındaki 76 `olaylar*`+`kronoloji*` dosyası, yani **çekirdek VE kuyruk**):
```
madde toplam           6154
t: ayın 1'ine denk      2783
🔴 HASSASİYET ŞİŞMİŞ      53   `gun:` AY diyor, `t:` GÜN yazıyor
⚪ `YYYY-01-01`         2052   §4'ün KENDİ yazımı — KUSUR DEĞİL
🟡 şüpheli (ay ≠ 01)     648   `gun:` susuyor, ayırt edilemiyor
🟢 gerçekten ayın 1'i     30   `gun:` gün diyor
```
⇒ Eksen künyelerde **42**, kronolojide **53 kesin + 648 ölçülemeyen.**
⚠️ Ve 2052'yi *"şişmiş"* saymak en kolay hata olurdu: `YYYY-01-01` bu
belgenin **kendi tarif ettiği** yazımdır (*"yıl biliniyor, gün
bilinmiyor"*). Bir ölçüm kovalarını ayırmazsa, **kuralın kendisini kusur
diye raporlar.**
🔴 **HÜKÜM YOK, ve çare `t:`yi bozmak değil:** bu bir kusur değil bir
**beyan uyumsuzluğu** — `t:` gün iddia ediyor, `gun:` etmiyor. `§4`ün
kuralı zaten yazılı: *tarih alanı kaynağın desteklediği en kaba güvenli
düzeyi taşır, gerisi metinde durur.* 53'ün her biri **kaynağına
sorulmadan** değiştirilmez.


- **Vikipedi hiçbir zaman tek dayanak değildir.** "Hangi olaya bakmalıyım" sorusunu
  cevaplar; tarih oradan alınıp doğrulanmadan yazılmaz.
- **Tarih uydurma.** Gün bilinmiyorsa `YYYY-01-01` yaz — bu, "yıl biliniyor, gün
  bilinmiyor" demenin kabul edilmiş yoludur.
