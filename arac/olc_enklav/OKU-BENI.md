# `arac/olc_enklav/` — MOTOR ENKLAV'ın ölçüm takımı

**Yazan:** MOTOR ENKLAV oturumu, 11 Ağustos 2026.
**Niçin duruyor:** oturum kapandı; bu betikler olmasa bir sonraki oturum
aynı altı ölçümü sıfırdan yazardı — ve büyük ihtimalle **aynı üç evren
hatasına** yeniden düşerdi (aşağıda).

> ⚠️ Bunlar **ölçüm** aletidir, üretim aleti değil. Hiçbiri `data/` altına
> yazmaz, hiçbiri motoru koşturmaz. Hepsi **koşusuz** çalışır.

---

## ① HER BETİK NE ÖLÇER — tek cümle

| # | betik | ne ölçer |
|---|---|---|
| ① | `olc_kova.py` | Her kesitte noktaları kovalara ayırır: sahipli · varlık epoku dışında · **var ama sahipsiz** (bayraklı / bayraksız). |
| ② | `olc_delik_kendi.py` | Hücreleri sahibe göre kendim birleştirip **motorun DOLDURDUĞU** delikleri döker — yani `delikleri_doldur`ın ne iş yaptığını gösterir. |
| ③ | `olc_delik_yayin.py` | Yayındaki çıktıda **KALAN** delikleri sayar ve ne kadarının kara olduğunu ölçer. **Hüküm veren betik budur.** |
| ④ | `olc_kb_boyanma.py` | Kasten boş bırakılmış bir yer **boyanıyor mu** — `delikleri_doldur` muafiyetinin canlı sağlaması. |
| ⑤ | `c13_delikleri_doldur.py` | Muafiyeti **iki yönde** sınar: geçme (kusur yokken temiz mi) **ve** ateşleme (kusur varken ötüyor mu). Çıkış kodu 0/1. |
| ⑥ | `olc_b_hazirlik.py` | **(b)** için plan sayıları: Sahra'da kaç petek tavana bağlı · iki haritayı yan yana koymanın en ucuz yolu · hangi denetimler kıpırdar. |

`_ortak.py` betik değil, **paylaşılan parçalar** — özellikle
`hizalama_sinavi()`. Altı kopya olsaydı biri güncellenir ötekiler bayatlardı.

---

## ② KOŞMA SIRASI — ve niçin bu sıra

```
③ olc_delik_yayin.py      ← ÖNCE BU. Tek başına yeter mi diye bak.
   ↓  "kapalı kara adacığı var mı" sorusunun cevabı BURADAN çıkar.
      Yoksa ② ve ①'e hiç gerek yok.

④ olc_kb_boyanma.py       ← sonra bu. Muafiyet iş görüyor mu.
   ↓  "BUNUN BOYANANI" sıfırdan farklıysa DUR ve incele.

⑤ c13_delikleri_doldur.py ← `uret_petek.py`ye dokunulduysa ZORUNLU.
   ↓  çıkış kodu 1 ise başka hiçbir ölçüm anlamlı değil.

② olc_delik_kendi.py      ← yalnız ③ bir şey bulursa. TEŞHİS aleti.
   ↓  "motor hangi deliği kapatıyordu, niçin kapatamadı" sorusu.

① olc_kova.py             ← veri tarafına bakacaksan. Geometri okumaz, hızlı.

⑥ olc_b_hazirlik.py       ← (b) gündeme gelirse. Ötekilerden bağımsız.
```

**Sıranın gerekçesi tek cümlede:** *ucuz ve hüküm veren önce, pahalı ve
teşhis eden sonra.* ③ dört saniye sürer ve *"iş var mı"* sorusunu kapatır;
② yirmi saniye sürer ve yalnız *"niçin"* sorusuna cevap verir.

⚠️ **③'ü atlayıp ②'den başlama.** 11 Ağustos'ta tam bunu yaptım ve
*"3-8 delik var"* diye rapor ettim; ③ koşulunca kapalı kara adacığının
**zaten olmadığı** çıktı.

---

## ③ 🔴 HER BETİĞİN EVRENİ — bu bölüm bu dosyanın en önemli kısmı

| # | betik | EVREN | ne demek |
|---|---|---|---|
| ① | `olc_kova.py` | **yalnız veri** | geometri hiç okumaz; *"bu nokta boyanıyor mu"* diye **soramaz** |
| ② | `olc_delik_kendi.py` | 🔴 **kendi birleşimim** = motorun **ARA ÜRÜNÜ** | **EKRAN DEĞİL.** Motor gövdeyi kurarken `kapat()` + `delikleri_doldur()` uyguluyor; buradan çıkan delikler **motorun doldurduğu** deliklerdir |
| ③ | `olc_delik_yayin.py` | 🟢 **yayındaki çıktı** = EKRAN | `donemler.js` + `devletler_harita.js` |
| ④ | `olc_kb_boyanma.py` | 🟢 **yayındaki çıktı** = EKRAN | |
| ⑤ | `c13_delikleri_doldur.py` | 🟢 **yayındaki çıktı** + sahte girdi | gerçek kod `ast` ile çıkarılır |
| ⑥ | `olc_b_hazirlik.py` | **kendi birleşimim** | plan sayısı üretir, hüküm vermez |

### Bu takımı yazarken düştüğüm ÜÇ EVREN HATASI

Üçü de rapordan **önce** yakalandı, ama üçü de **aynı refleksten** doğdu:
*ölçütü kurarken evreni yazmamak.*

```
① gövde başına delik saydım
   → başkasınca doldurulmuş delikler sahte aday çıktı
     (Savonlinna · Nancy · Ecmîr — bunlar GERÇEK siyasî enklav, dokunulmaz)

② halkaları KARA maskesiyle KESMEDİM
   → gövde KARA'ya kırpılı olduğu için her GÖL interior ring gibi göründü
   → "1700'de OSMANLI'nın 3.486 km² deliği var @ 38,65K 42,96D" diyecektim
     O VAN GÖLÜ. Doldurulsaydı motor gölü boyardı.
   → 162.421 – 591.748 km² su, delik sanılmıştı

③ bayraklı ama SAHİPLİ noktaları saydım
   → "110 kasıtlı boşluk noktası boyanıyor" dedi. Bir nokta HEM bayrak
     taşıyıp HEM o tarihte sahipli olabilir (Kuveyt kur:1716 → 1800'de
     sahipli · Doha · Abu Dabi · Matsumae · Cetinje)
   → evren daraltılınca 110 → 0
```

> **Sınav tek soru:** *"bu sayının içine ne giriyor, ne girmiyor?"*
> Cevabı ölçütle **birlikte** yaz. Sonradan yazılan evren, bulguya uydurulur.

### 🔴 VE İNDEKS TUZAĞI — bu takımı bir kez zaten düşürdü

`data/petek_govde.js` başlığı *"Sıra PETEKLER (donemler.js) ile AYNIDIR"*
diyor. **Bu bir KOŞU İÇİ garantidir, KOŞULAR ARASI DEĞİL.**

11 Ağustos'ta, bu oturum çalışırken, NOKTA HALKA-1 `yerlesimler_ek23.js`i
bağladı:
```
nokta   2308 → 2312          dosya   36 → 37
ve dosya listenin SONUNA değil 26. SIRASINA girdi
⇒ ek23'ten sonraki BÜTÜN indeksler kaydı
```
Testim `IndexError` ile düştü. ⚠️ **Ve gürültülü düşmesi TESADÜFTÜ:**
sayılar farklı olduğu için patladı. **Sayı aynı kalıp sıra değişseydi
sessizce yanlış eşleşirdi ve hiçbir şey uyarmazdı.**

Bunun için `_ortak.hizalama_sinavi()` var ve ② ile ⑥ onu **zorunlu** olarak
çağırır (ayrışırsa çıkış kodu 2 ile durur). İki şeyi birden sınar:
```
① sayı eşitliği        GEREK ama YETER DEĞİL
② URETIM_IZI parmak izi  yayındaki geometri BU veriyle mi üretildi
```

🟢 **Ve asıl ders çareyi de veriyor:** indeksi tamir etmek değil, **indekse
hiç güvenmemek.** ③ ④ ⑤ indeksten hiç eşleme yapmaz — yayındaki gövdeler
kendi kendine yeten kapalı poligonlardır. **Taban kaysa bile doğru
çalışırlar.** Yeni bir ölçüm yazacaksan onları örnek al.

#### ⚠️ "Yaklaşık çalışsın" diye gevşetme — ölçtüm, çürüdü

⑥'ya önce `zorunlu=False` koymuştum, gerekçem şuydu: *"② nokta başına hüküm
veriyor, dursun; ⑥ toplam plan sayısı üretiyor, uyarsın yetsin."* Kulağa
makul geliyordu. **Ölçüldü:**
```
hizalı taban (2308)   193 nokta · 6.489.793 km² · TAVANA BAĞLI 75
kaymış taban (2312)   193 nokta · 5.610.810 km² · TAVANA BAĞLI 60
                      ⇒ %13,5 alan · %20 sayı sapması — DÖRT noktalık kaymadan
```
Sebep: indeks kayması bir sayıyı **biraz oynatmaz**; hücreleri **başka
yerleşimlerle eşler.** Sonuç *"yaklaşık"* değil **yanlış**.

> **İndeks eşlemesi ya geçerlidir ya değildir; arası yoktur.**
> Ve *"bu yalnız plan sayısı"* bir bağışıklık değil: **yanlış bir plan
> sayısı da bir sonraki oturumun tabanı olur.**

---

## ④ Bilinen tuzaklar — kısa liste

- **Havuz sırası TERSTİR** (`uret_petek.py:2703-2704`):
  `window.PARCALAR` = **halka** havuzu · `window.PARCA_HALKA` = parça→halka.
  Ters almak `TypeError` verir — ama bir gün sessiz de olabilir.
- **`kasitli_bosluk` ile `enklav:` ayrı şeylerdir.** İlki kasten boş alan
  (çöl, bozkır); ikincisi presidio muafiyeti (hinterlandı **yoktur**, hukukî
  durum, `uret_petek.py:874`). Adları benziyor, mekanizmaları ayrı.
- **`OSMANLI` ile `tabi` boyamada AYRI kimliktir** (koyu / açık ton).
  `CLAUDE.md §3`teki muafiyet **denetim** içindir, boyama için değil.
- **`olc_b_hazirlik.py` `TAVAN_KM`i KOPYALAR.** Betikte bir nöbetçi var:
  motordaki değerle karşılaştırıp ayrışırsa bağırıyor. Yine de gördüğünde
  betiği güncelle.

---

## ⑤ 11 Ağustos 2026 tabanı — sapma ölçmek için

```
veri            2308 nokta (teslim anında 2312) · 138 kasitli_bosluk
yayın           r1140 · donemler.js 500 dönem · devletler_harita.js 305 devlet
kesitler        1300 · 1400 · 1500 · 1600 · 1700 · 1800 · 1900 (hepsi 06-15)

③ yayında kalan KARA deliği
     OSMANLI    0 · 6 · 7 · 21 · 21 · 20 · 19 km²        (gerisi GÖL)
     yabancı    10.017 – 13.782 km²                       (göl yakası artığı)
② kendi birleşimimde delik
     3-8 adet · 5.510 – 154.291 km²
     kasitli_bosluk içeren 0/7 · gerçek siyasî enklav 0/7
④ bayraklı + sahipsiz + epok içi aday   122·122·122·115·77·74·23
   BUNUN BOYANANI                         0·  0·  0·  0· 0· 0· 0
   bayraksız boyanan: Darfur · Somali çölü · Ogaden · Libya iç çölü
⑤ C13   11 sınav, 11 geçti
⑥ Sahra box(-17,15,37,33): 193 nokta, 75'i tavana bağlı · 6.489.793 km²
```

**Bu sayılardan sapma bir bulgudur — ama önce hangisinin kaydığını ölç:**
taban mı (nokta sayısı), yayın mı (r numarası), yoksa motor mu (`git log`).
Üçünü karıştırmak, bu oturumun bütün gün savaştığı hatanın ta kendisi.
