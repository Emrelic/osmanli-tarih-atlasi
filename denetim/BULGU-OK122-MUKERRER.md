# BULGU — `Ek denetim: mükerrer madde` · 2 şüpheli çift

**Oturum:** OPUS HAZIR KITA 122 · `local_19106e17-7807-4b0d-bf9d-ee54fdf38b56`
**Sevk:** M-2241 · 1.MURAT
**Tarih:** 2 Eylül 2026
**Kapsam:** ÖLÇMEK. Düzeltme yapılmadı, tavan önerilmedi, `arac/` okundu-YAZILMADI
(koşu canlı, PID 27596). Yazdığım tek dosya bu.

---

## 0. ÖLÇÜT NE KURUYOR — üç sorunun öncesinde bu

`denetle.py:2671 mukerrer_maddeler()` okundu. **İki eksen** var, ve
üçüncü bir "kesinleştirme" kademesi:

```
① BAŞLIK   Jaccard(kök kümeleri) ≥ 0.34   ve   |gün farkı| ≤ 400
② KİŞİ     ≥1 ortak "kişi" kökü           ve   |gün farkı| ≤ 3
   kesin?  aynı GÜN  ve  (aynı kaynak | J ≥ 0.10 | ≥3 ortak kişi)
```

```
ham çift üreten                       51
  └ İHLAL   (ölçüt "başlık" | "kişi!")  2   ← denetimin "N şüpheli çift"i
  └ ZAYIF   (ölçüt "kişi:")            49   ← İHLAL DEĞİL
```

⚠️ **Bu ayrımı kendim de neredeyse kaçırdım.** İlk betiğim 51 çiftin
tamamını bastı. `denetle.py:3527` bu tuzağı adıyla kaydediyor — 28 ve 30
Ağustos'ta iki oturum uzun `zayıf` listeyi ihlal sanmış. Süzgeci
denetimin kendi satırlarından (`3519-3521`) kopyalayınca 2'ye indi.

---

## 1. 🔴 SEVKTEKİ İKİNCİ `ÖLÇTÜM` ÖNCÜLÜ ÇÜRÜDÜ — yanlış denetimden alınmış

Sevk şöyle diyordu:

> `ÖLÇTÜM` — *"çıktı bir gerekçe satırı basıyor: **KUŞATMA BAŞLANGICI↔SONUÇ
> kaymasıdır: dizin kuşatmanın …**"*

ve buradan bir soru türetiyordu: *"gerçek mükerrer mi, yoksa
**KUŞATMA BAŞLANGICI ↔ SONUÇ** meşru çifti mi?"*

**Ölçüm:** o satır `denetle.py:3582`de ve **mükerrer denetiminde değil**:

```
denetle.py:3507-3556   Ek denetim — mükerrer kronoloji maddesi
denetle.py:3569-3585   Ek denetim 7 — SAVAŞ ↔ KRONOLOJİ senkronu   ← satır BURADA
                       "…ihlal DEĞİL, çünkü çoğu
                         KUŞATMA BAŞLANGICI↔SONUÇ kaymasıdır: dizin kuşatmanın
                         başladığı günü, kronoloji bittiği günü yazıyor."
```

⇒ Mükerrer denetiminin çıktısında **"kuşatma" diye bir kova yok.** Sevkin
sunduğu ikili seçim (*gerçek mükerrer* / *kuşatma çifti*) bir **sahte
ikilem**di: ikinci şık başka bir denetimden ödünç alınmıştı.

📌 Aynı desenin bugünkü **ikinci** vakası. Birincisi `2i` sevkindeki
*"altı yeni dosyadan geldi"* varsayımıydı; ikisinde de çerçeve iki şıklı
kuruldu ve **gerçekleşen şık listede yoktu.** `CLAUDE.md §11`: *"bir çerçeve
vermek, çerçevenin doğruluğunu peşinen kabul ettirmektir."*
🟢 Zarar oluşmadı, çünkü sevk *"tamamını sen oku"* diyordu — o cümle beni
satırın **kaynağına** bakmaya gönderdi.

---

## 2. ÇİFT ① — `kişi!bitlis,biyikl,diyarb` · **MÜKERRER DEĞİL** (yanlış pozitif)

```
gün      1515-09-19  (fark 0)          Jaccard 0.0909   aynı kaynak? HAYIR
A  Âmid'in (Diyarbekir) fethi ve Diyarbekir beylerbeyiliğinin kuruluşu
   kaynak=selim-i    yer_id=Diyarbakır   dosya=data/olaylar_ek8.js kümesi
B  Nusaybin, Derik ve Silopi'nin Osmanlı'ya katılması — Diyarbekir'in güney kolu
   kaynak=nusaybin   yer_id=Nusaybin     dosya=data/olaylar_ok107.js
```

**CİNS: ayrı olaylar.** Farklı yer (`Diyarbakır` ≠ `Nusaybin`), farklı
kaynak slug, farklı gövde. B'nin kendi `gun:` alanı hicrî karşılığını
taşıyor: **"10 Şâban 921 / 19 Eylül 1515"** — yani tarih ödünç değil,
kaynaktan.

**KÖKEN:** `data/olaylar_ok107.js` · commit **`79d79ae`** · 2026-09-02
**00:47:18** · OPUS HAZIR KITA 107 · `parti-emrelic-0033/H-0015`.
Emre'nin kendi şikâyeti üzerine yazılmış: *"nusaybin derik silopi
osmanlıya katılmış görünüyo ama kronoloji maddesi yok."*

### Niçin öttü — ölçülmüş mekanizma

`kesin` şartı `≥3 ortak kişi` ile sağlandı (7 ortak kök). Ama:

```python
_kisiler_kumesi(o):  ham = (o["kisiler"] or "") + ", " + (o["b"] or "")
```

**Kişi kümesi BAŞLIĞI da yutuyor.** Ölçtüm:

```
A  kisiler[] alanından : bitlis · biyikl · idris- · mehmed · selim · yavuz
   BAŞLIKTAN           : amid'i · beyler · diyarb · fethi · kurulu
B  kisiler[] alanından : bitlis · biyikl · idris- · mehmed · selim · yavuz
   BAŞLIKTAN           : derik · diyarb · guney · katilm · kolu · nusayb · osmanl · silopi

ORTAK toplam           : 7   ← eşik 3, geçti
ORTAK yalnız kisiler[] : 6
BAŞLIKTAN gelen fazla  : diyarb   ← bir YER adı, kişi değil
```

⚠️ Bu vakada `diyarb` **belirleyici değildi** (kisiler[] tek başına 6 ortak
veriyor, eşik 3). Yani çift, kişi alanı yüzünden kuruldu ve **ölçüt
tasarlandığı gibi çalıştı**: aynı gün + aynı üç kişi. Kusur ölçütte değil,
**varsayımında**: *"aynı gün aynı kişiler ⇒ aynı olay."* Bir fetih
harekâtında aynı komutanlar aynı gün **birden çok yeri** alır.

🟡 **Ama `diyarb` yine de bir kayıt:** yer adlarının kişi kümesine
sızması, kisiler[] zayıf olduğu bir çiftte eşiği **tek başına**
doldurabilir. Bugün olmadı; ölçtüm ve **olmadığını** yazıyorum.

**HÜKÜM:** `BILINEN_AYRI`ya aday. **Ben eklemiyorum** — `arac/` benim
değil ve koşu canlı.

---

## 3. ÇİFT ② — `başlık` J=0.556 · **GERÇEK MÜKERRER** ve ÜÇÜNCÜ YAZILIŞI

```
gün      1835-01-01  (fark 0)     Jaccard 0.5556     aynı kaynak? EVET (residiler)
                                  aynı yer_id? EVET (Hâil)
A  Abdullah b. Reşîd Hâil emirliğini ele geçirdi — Şammar (Reşîdî) hânedanının kuruluşu
   dosya=data/olaylar_ek8.js:229      etiket=[siyaset, kurulus]
B  Şammar (Reşîdî) Emirliği'nin kuruluşu — Hâil
   dosya=data/olaylar_sk105.js:34     etiket=[siyaset]  k=kurulus
```

Aynı gün · aynı kaynak slug · aynı yer · aynı kişi · aynı olay.
**Tartışmasız mükerrer.**

🔴 **VE İKİSİ DE `index.html`e BAĞLI** — ölçtüm:
`olaylar_ek8.js` BAĞLI · `olaylar_sk105.js` BAĞLI.
⇒ Kullanıcı bu olayı sağ panelde **iki kez** görüyor. Kâğıt üstünde bir
denetim satırı değil, **yayında görünen** bir kusur.

### KÖKEN — ve bu, olayın en öğretici kısmı

```
①  data/olaylar_ek8.js      ORİJİNAL, daha zengin (1818 ön tarihi, tur:/onem:/
                            dunya:/kapsam: dolu). En eski.
②  30 Ağu 00:53  f0b546f    UYGULAMA-3 aynı maddeyi olaylar_ek22.js'e yazdı,
                            SONRA ek8'dekini buldu, KENDİ maddesini SİLDİ.
                            Dosya bugün `window.OLAYLAR_EK22 = []` — BOŞ.
③   2 Eyl 00:50  34135c7    SONNET HAZIR KITA 105 aynı maddeyi ÜÇÜNCÜ KEZ
                            yazdı — data/olaylar_sk105.js
                            şartname parti-emrelic-0036/H-0012:
                            "bu sammar hail yapılanmasının hikâyesini
                             kronolojide görmedim…"
```

### 🔴🔴 UYARI VARDI VE İŞE YARAMADI — çünkü BOŞALTILAN DOSYAYA yazılmıştı

`olaylar_ek22.js`in başında, UYGULAMA-3'ün kendi eliyle, tam da bu
senaryoyu **adıyla yasaklayan** bir not duruyor:

> *"⇒ BİR SONRAKİ OTURUM: 'Şammar/Hâil kronoloji maddesi yok' diye
> YENİDEN YAZMASIN — `olaylar_ek8.js`de zaten var."*

**Üç gün sonra tam o cümlenin yasakladığı şey oldu.** Sebep ölçüldü:

```
uyarı NEREDE     data/olaylar_ek22.js — içeriği SİLİNMİŞ, dizi BOŞ
uyarıya kim bakar  Şammar üzerinde çalışan biri
o kişi BU DOSYAYI niye açsın?   AÇMAZ — adı ilgisiz, içi boş
```

⇒ Uyarı, **korumak istediği bilginin bulunmadığı dosyaya** yazıldı. Kayıt
var, **erişim yok.**

📌 `CLAUDE.md §11`in on birinci kusur sınıfı — *"doğru öğrenilmiş bir dersin
makinenin göremeyeceği yere yazılması"* — burada bir kademe daha ileri:
ders **insanın** da göremeyeceği yere yazılmış. Sınavı aynı tek soru:
***bu uyarıyı bir `if` ile sorabiliyor muyum?*** Hayır — bu yüzden üçüncü
yazılış **hiçbir alarm çaldırmadan** indi ve ancak `mukerrer_maddeler()`
bir gün sonra yakaladı.

⚠️ **ÖLÇMEDİM:** SK105'in ek8'deki maddeyi **niçin** bulamadığını
ölçemedim. Başlığı `Şammar` kelimesini **içeriyor**, yani düz bir arama
bulurdu. Kendi başlığı *"ana kronoloji akışında hiç madde yoktu"* diyor
ama nasıl aradığını yazmıyor. Bunu ancak SK105 söyleyebilir.

---

## 4. ÖLÇÜTÜN KAÇIRDIĞI SINIF — Sırpsındığı / Çirmen

Sevkin sorusu: *"denetimin ölçütü NE KURUYOR? Kaçırdığı sınıf hangisi?"*

### 🔴 ÖNCE KENDİ ÇÜRÜYENİMİ YAZIYORUM

İlk ölçümü **uydurduğum** başlıklarla yaptım (`"Sırpsındığı Savaşı"` /
`"Çirmen Savaşı"`) ve **J = 0,333** buldum — *"eşiği 0,007 ile kaçırdı"*
diye yazacaktım. Gerçek başlıkları `git show 6b955ff`ten okuyunca çürüdü:

```
UYDURDUĞUM   "Sırpsındığı Savaşı" / "Çirmen Savaşı"           J = 0.3333
GERÇEK       "Sırpsındığı baskını"
             "Çirmen Savaşı — Meriç vadisinin denetimi"        J = 0.0000
             ortak kök: HİÇ YOK
```

⇒ Bir sayıyı **veriden değil hafızadan** kurmak, onu tamamen başka bir
hükme götürüyordu. Kayda geçiyor.

### GERÇEK ÖLÇÜM

```
ad ekseni  : J = 0.0000 · ortak kök YOK        (eşik 0.34)
gün ekseni : 2643 gün ayrı                     (tavan 400)
```

**İki eksen de BAĞIMSIZ OLARAK düşüyor.** Bu bir **eşik** sorunu değil,
**eksen** sorunu:

- Eşiği düşürmek çözmez: ortak kök 0 olduğu için hiçbir pozitif eşik
  çifti kurmaz.
- Gün tavanını 2643'e çıkarmak da tek başına çözmez: J yine 0.

⇒ **Kaçırdığı sınıf: "aynı olayın İKİ FARKLI ADI, birbirinden uzak iki
tarihte."** Ölçüt böyle bir şey olabileceğini bilmiyor. Kuramadığı
eksenler:

```
· yer_id eşitliği        (aynı yer, ayrı ad, uzak gün)
· olay kimliği / eşanlam (Sırpsındığı = Çirmen)
· kaynak slug eşitliği   TEK BAŞINA çift KURMUYOR — yalnız zaten kurulmuş
                         bir çifti KESİNLEŞTİRİYOR
```

### 🟢 VE ÜÇÜNCÜ BİR EKSEN ZATEN VARDI — başka bir denetimde

Birleştirme commit'inin (`6b955ff`) kendi ölçümü şunu yazıyor
(**DEVRALDIM — ben doğrulamadım**):

> *"1364-07-01'in ±30 gününde kırılma 0 (madde hiçbir şeyi tutmuyordu),
> 1371-09-26'da 6 kırılma var… Eski `kaynak:"sirpsindigi-savasi"` **302**
> idi — ölü slug tesadüf değil, TDV o savaşı ayrı bir olay olarak
> tanımıyor."*

⇒ Mükerrerin **iki bağımsız izi** vardı ve ikisi de mükerrer denetiminin
dışındaydı: **`Değişmez 2t`** (kırılmasız madde) ve **ölü `kaynak:` slug**.
📌 Yani *"mükerrer denetimi bunu kaçırdı"* doğru ama eksik; doğrusu:
***iki başka denetim onu görüyordu, kimse ikisini birleştirmemişti.***
Sevkin kendi cümlesi bunu zaten söylüyordu: *"soruyu soran bir denetim
değil, ÖLÜ BİR SLUG oldu."*

---

## 5. NE İSTİYORUM

1. **Çift ①** (`Diyarbekir ↔ Nusaybin`) — ayrı olay, `BILINEN_AYRI`ya
   yazılmalı. Karar ve uygulama sende; `arac/` bende değil, koşu canlı.
2. **Çift ②** (`Şammar/Reşîdî`) — gerçek mükerrer, **yayında görünüyor**.
   Hangi kaydın kalacağı bence tartışmalı değil: `olaylar_ek8.js`teki
   daha eski ve daha zengin, UYGULAMA-3 30 Ağustos'ta aynı hükmü vermiş.
   Düşürülecek olan `olaylar_sk105.js:34`. **Ben silmiyorum** — o dosya
   SONNET HAZIR KITA 105'in.
3. **Uyarının yeri** — `olaylar_ek22.js`teki not korumak istediği bilginin
   yanında değil. Öneri: aynı uyarı `olaylar_ek8.js`e, **maddenin
   yanına** düşsün. Bu bir öneri; o dosya da bende değil.
4. **Tavan önermiyorum.** Sevk öyle diyor.

---

## ÖZET DAMGALAR

```
TUTTU       "2 şüpheli çift"                    (51 ham → 2 ihlal, denetimin
                                                 kendi süzgeciyle)
ÇÜRÜDÜ      sevkteki "KUŞATMA BAŞLANGICI↔SONUÇ" öncülü — o satır
            denetle.py:3582, Ek denetim 7 (savaş senkronu); mükerrer
            denetiminde öyle bir kova YOK. Sahte ikilem.
TUTTU       çift ① MÜKERRER DEĞİL — ayrı yer, ayrı kaynak, hicrî günü kendi
TUTTU       çift ② GERÇEK MÜKERRER — üçüncü yazılışı, ve İKİSİ DE YAYINDA
TUTTU       köken: ok107 79d79ae 00:47 · sk105 34135c7 00:50 (ikisi de 2 Eylül)
ÇÜRÜDÜ      kendi ilk J ölçümüm (0.333) — uydurma başlıkla yapılmıştı;
            gerçek başlıklarla 0.000
TUTTU       kaçırma mekanizması: iki eksen de bağımsız düşüyor (J=0 · 2643>400)
DEVRALDIM   6b955ff'in "1364'te kırılma 0, slug 302" ölçümü — doğrulamadım
ÖLÇMEDİM    SK105'in ek8'deki maddeyi niçin bulamadığı
ÖLÇMEDİM    49 ZAYIF çiftin içinde gerçek mükerrer olup olmadığı
            (sevk iki ihlali sordu, zayıf listeyi taramadım)
```
