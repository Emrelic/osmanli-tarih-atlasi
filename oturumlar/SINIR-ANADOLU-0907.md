# SINIR-ANADOLU-0907 — ilerleme

> Kademe C (hukukî sınır) · bölge: Türkiye 1923 + Kafkasya + İran
> Ortak şartname: `oturumlar/SINIR-HUKUKI-ORTAK-0907.md` · şema:
> `denetim/ONERI-KADEME-C-MODEL-0907.md §②c`
> Çıktı: `denetim/SINIR-HUKUKI-ANADOLU-0907.json` (75.067 bayt)
> Ad alanı: `data/sinir_hukuki_anadolu.js` → `window.SINIR_HUKUKI_ANADOLU`

---

## ⓪ KABUL ÖLÇÜTÜ — dördü de sayıyla

```
② PAYDA — bakılan kenar                                    19
① KOVALAR
     🟢 hukuki      6   C'ye girer
     🔴 bulunamadi  7   arandı, dayanak yok → A/B'de kalır
     🟡 ic-idari    5   ÖNERİ — 1923'te uluslararası sınır DEĞİLDİ
     🟡 tanimsiz    1   ÖNERİ — 1923'te sınır HENÜZ ÇİZİLMEMİŞTİ
③ `kimlik-degil` kovası                                     0
     bölgemin 13 uç ülkesinin 13'ü de NE'de `Sovereign country`;
     Baikonur/Bir Tawil tipi girdi bölgemde YOK
④ ölçemediklerim → §④, adıyla
```

---

## ① ÖNGÖRÜLERİM — ölçümden ÖNCE yazıldı, İKİSİ ÇÜRÜDÜ

Tahtaya (M-3173) ölçüm başlamadan yazıldı. Sonuç:

| # | öngörü | ölçüm | hüküm |
|---|---|---|---|
| ⓐ | kenar sayısı **20-26** | **19** | 🔴 ÇÜRÜDÜ |
| ⓑ | 🟢 değişmemiş: **yarıdan çoğu** | **4 / 19 (%21)** | 🔴 ÇÜRÜDÜ, sert |
| ⓒ | 🟡 değişmiş: **en az 2** | **3** (Hatay · Musul · Şattülarap) | 🟢 TUTTU |
| ⓓ | en az **1** kenar 1923'te iki ucu aynı kimlik | **5** | 🟢 TUTTU, tahminden büyük |

🔴 **ⓑ'nin çürümesi bu turun en öğretici sonucu.** *"Değişmedi"* demek bir
**iddiadır** ve kaynak ister; kaynak bulunamayan 12 kenarda `ne_degisti`
alanına `False` değil **`None`** yazdım.
⇒ *"Değişmedi"* ile *"değişip değişmediğini bilmiyorum"* ayrılmasaydı **12
kenar yanlışlıkla 🟢 sayılacak** ve NE'nin bugünkü çizgisi 1923 için
kullanılabilir ilan edilecekti. ***Bir öngörünün çürümesi, bir veri
kusurunu önledi.***

📌 Ve ⓐ'nın mazereti önceden yazılıydı (*"tabana duyarlı"*), ⓑ'nin **yoktu**
— o yüzden ⓑ bilgi taşıyor, ⓐ taşımıyor.

---

## ② DEVRALDIĞIM İKİ ÖNCÜL — ikisi de DOĞRULANDI, biri GÜNÜYLE

Koordinatör ikisini de `🟡 DEVRALDIM, DOĞRULANMADI` diye damgalamıştı
(*"hafızamdan"*). Kaynağa soruldu:

```
🟡→🟢 HATAY 1939   İKİ bağımsız TDV maddesi, YIL hassasiyetinde
   `iskenderun` : "1939'da Hatay Devleti'nin Türkiye'ye bağlanması üzerine…"
   `suriye`     : "1939'da … Fransa ve Türkiye Cumhuriyeti arasında yapılan
                   bir antlaşma ile Hatay Türkiye sınırlarına dahil edildi."
   🔴 GÜN TDV'de YOK ve UYDURULMADI — `degisim_t:"1939"`,
      `degisim_t_hassasiyet:"yil"` (§4: en kaba güvenli düzey)

🟡→🟢 MUSUL 1926   ve GÜNÜYLE
   `kerkuk` : "5 Haziran 1926'da Ankara'da İngiltere, Irak, Türkiye arasında
               imzalanan 'sınır ve iyi komşuluk ilişkileri' antlaşmasıyla
               İngiliz mandasındaki Irak Devleti'ne bırakıldı."
```

🔴 **AMA MUSUL'DA ASIL SONUÇ TARİH DEĞİL:** Lozan `md. 3/2` sınırı
**ERTELEMİŞ** — *"bunun dokuz ay içinde Türkiye ile Büyük Britanya arasında
dostça belirleneceği hükmüne yer verilmişti"*. ⇒ Çıpa gününde
(1923-10-29) **Türkiye-Irak kenarı henüz YOKTU.**
⚠️ Buna `bulunamadi` demek **yanlış damga** olur: aranan metin *yok değil*,
**henüz yazılmamıştı.** Koordinatörün öngördüğü kova gerçekten gerekiyor.

---

## ③ ÖNERDİĞİM İKİ KOVA — açmadım, ÖNERDİM (biçim ortak)

```
"ic-idari"   1923'te iki uç da AYNI devletin içindeydi ⇒ ULUSLARARASI sınır
             DEĞİLDİ; antlaşma aramak YANLIŞ SORUDUR.        5 kenar
"tanimsiz"   taraflar sınırın yerini 1923'te HENÜZ BELİRLEMEMİŞTİ.  1 kenar
```
Bugün `hal` alanında üç kovadan en dogrusu duruyor, öneri `hal_oneri`
alanında **ayrıca** taşınıyor — onay gelirse **mekanik** olarak taşınır.

🔴 **`ic-idari`nin dayanağı bir ölçüm:** künye taraması
(`ARAC-SINIR-ANADOLU-KIMLIK-0907.py`, 627 künye, node ile okundu) şunu
gösterdi —
```
Georgia · Armenia · Azerbaijan   1923-10-29'da CANLI atlas kimliği: 0
   ermenistan-demokratik-cumhuriyeti  bitiş 1920-12-02
   azerbaycan-demokratik-cumhuriyeti  bitiş 1920-04-27
   gurcistan-demokratik-cumhuriyeti   bitiş 1921-03-16
   ⇒ üçünün de 1923'teki kimliği `sovyet-rusya`
```
🔴 **Ve TDV çıpadan ÜÇ AY ÖNCE o çizginin hâlâ yeniden çizildiğini
gösteriyor** — `karabag`: *"Dağlık Karabağ Özerk Bölgesi'nin tesisine karar
verildi ve bu karar **24 Temmuz 1923**'te ilân edildi … Cevanşir, Şuşa,
Cebrail, **Zengezur** ve Kubatlı'nın bir kısmını kapsıyordu."*
⇒ Ermenistan-Azerbaycan için 1923'te bir *"çizgi"* aramak yalnız zor değil,
**yanlış kurulmuş bir soru** olabilir.

---

## ④ ÖLÇEMEDİKLERİM — adıyla (§⑨ damgaları)

```
⚪ ÖLÇMEDİM  1932 Türkiye-İran sınır düzeltmesi (Küçük Ağrı). Bu bilgi BENİM
   HAFIZAMDAN; TDV üç gövdede de DOĞRULAMADI (`iran` 308.849 kar ·
   `agri` 9.653 · `dogubayazit` 14.385 — "Türk-İran" dizgisi `iran`da 0 kez,
   "1932"nin beş geçişi de EDEBİYAT bağlamında: roman/hikâye yılları).
   ⇒ VERİYE YAZILMADI (§4: tarih uydurma). Akademik kaynak aranmalı.
⚪ ÖLÇMEDİM  Türkiye-Bulgaristan hattının hukukî dayanağı. `lozan-antlasmasi`
   gövdesi (19.059 kar, TAM okundu) bu sınırı HİÇ ANMIYOR; `bulgaristan`
   gövdesi (124.918 kar) "Lozan" kelimesini SIFIR kez taşıyor.
   ⇒ §4 TANECİKLİK boşluğu; akademik kaynak MEŞRU ama bu turda ARANMADI.
⚪ ÖLÇMEDİM  İran'ın doğu üç kenarının (Türkmenistan · Afganistan · Pakistan)
   hukukî dayanağı. Üç gövde de yalnız COĞRAFÎ tarif veriyor.
⚪ ÖLÇMEDİM  1975 Şattülarap Antlaşması'nın İÇERİĞİ — TDV onu ADIYLA ve
   YILIYLA anıyor, hükmünü (thalweg'e geçiş) VERMİYOR ⇒ değişimin BOYUTU
   ölçülemedi.
⚪ ÖLÇMEDİM  Moskova/Kars antlaşmalarının MADDE numaraları. `batum` (8.863) ve
   `nahcivan` (25.468) gövdeleri ÇEKİLDİ ama madde no için OKUNMADI.
   ⇒ `madde` alanı üç Kafkas kenarında "bulunamadi".
⚪ ÖLÇMEDİM  NE'nin Abhazya ve Güney Osetya'yı Gürcistan İÇİNDE göstermesi.
   Bu bir 2020'ler tercihi; 1923 için önemsiz ama C çizilirken bilinmeli.
🔴 ÖLÇÜLEMEDİ `hatay` slug'ı: HTTP 200 döndü, gövde 2.457 karakter ve
   **"Müellif" 0 kez** ⇒ BOİLERPLATE (§4④). "TDV'de yok" DEMEDİM —
   içerik ALINAMADI. (Konu `iskenderun` + `suriye` üzerinden kapatıldı.)
🔴 ÖLÜ SLUG (302, ölçüldü): `ankara-itilafnamesi` · `ankara-antlasmasi` ·
   `kars-antlasmasi` · `moskova-antlasmasi` · `musul` · `erzurum-antlasmasi` ·
   `kasr-i-sirin-antlasmasi` · `zuhab-antlasmasi` · `cezayir-antlasmasi` ·
   `istanbul-antlasmasi` · `lozan` · `karaagac` · `irak` · `ermenistan` ·
   `zengezur`
   📌 Ve bu, `CLAUDE.md §4`ün 2 Eylül ölçümünü BÖLGEMDE DOĞRULUYOR:
      ANTLAŞMA slug'ları ölü, YER/KİŞİ slug'ları canlı. Bütün antlaşma
      bilgisi YER maddelerinden geldi (`kerkuk` · `agri` · `kars` ·
      `iskenderun` · `suriye`).
```

---

## ⑤ ARAÇLARIM

```
denetim/ARAC-SINIR-ANADOLU-KENAR-0907.py    NE → kenar (19) + birebirlik sınavı
denetim/ARAC-SINIR-ANADOLU-SLUG-0907.py     TDV slug HTTP taraması
denetim/ARAC-SINIR-ANADOLU-GOVDE-0907.py    gövde çekme (SERİ, kesme YOK)
denetim/ARAC-SINIR-ANADOLU-KIMLIK-0907.py   NE adı → atlas kimliği adayları
denetim/ARAC-SINIR-ANADOLU-URET-0907.py     hüküm + geometri → çıktı JSON
```

🟢 **DEVRALDIĞIM TABANI KENDİ BÖLGEMDE YENİDEN ÖLÇTÜM** (§ortak③ *"devralma,
ama yeniden ölçme de"*):
```
KADEME-MODEL: "342/342 birebir, tolerans YOK"
BENDE       : 19/19 birebir · eksik tepe 0 / 3.060 · yalnız noktada değen 0
              değmiyor ama yakın: Iran|Kuwait 0,216° · Iran|Oman 0,442°
              ⇒ ikisi de GERÇEK boşluk (Basra Körfezi · Hürmüz), artefakt DEĞİL
```

🔴 **VE BİR ALET KUSURU KENDİ ÜZERİMDE ÇIKTI:** `node script.js arg` çağrısında
`process.argv[1]` **betiğin kendisidir**, argüman `argv[2]`dir. Betik kendini
`eval` etti ve `RangeError: Maximum call stack size exceeded` verdi.
🟢 **Ve çökmesi doğru davranıştı** (`§3.5.0`: *"bir aracın çökmesi, yanlış
cevap vermesinden İYİDİR"*) — sessizce boş dönseydi *"künye bulunamadı"*
diye 13 kimliği birden yanlış damgalayacaktım.

---

## ⑥ ÇIPA TUZAĞI — uyarı geldi, DEVRALINMADI, ÖLÇÜLDÜ

1.MURAT `M-3191` ile **acil** yazdı: *"çıpa günü atlasa sorulamaz; dönemler
yarı açık (`f <= g < t`) ve `UFUK[1] == 1923-10-29` ⇒ o gün canlı kimlik 1,
sahipsiz 3804. Yanlış günle ölçtüysen sonucun sessizce boş çıkmıştır —
**tekrarla**."*

🔴 **Tekrarlamadım; önce tekrarlamam gerekip gerekmediğini ölçtüm** —
*tekrarlamak da bir varsayımdır.* Alet:
`denetim/ARAC-SINIR-ANADOLU-CIPA-0907.py`

```
gün ekseni      10-29 taraması ↔ 10-28 taraması   →  FARK 0 EKSEN (birebir)
aralık ekseni   aynı gün YARI AÇIK denendi        →  13 ucun 10'u BOŞ
```
Sebep tek satırda: bu tarama `girdi.yukle()` değil **`devletler.js` künye
tablosunu** okuyor ve karşılaştırma **kapalı** — `f <= ÇIPA <= t`
(`ARAC-SINIR-ANADOLU-KIMLIK-0907.py:82`).
⇒ ***Tuzak GERÇEK ve tarifi doğru; bu alete ateşlemiyor.*** Yarı açık
kullansaydım on ucu birden *"kimlik yok"* diye yazacaktım.
📌 Uyarı boşa gitmedi: **aleti sınadı ve sınav geçti.**

🟢 **VE UYARIYLA GELEN VERİ HÜKMÜMÜ GÜÇLENDİRDİ.**
`denetim/KIMLIK-1923-0907-ADIM1.json` (girdi.yukle, 1923-10-28):
```
tbmm-turkiye 238 · kacar 108 · irak-kralligi 31 · suriye-lubnan-mandasi 17
sovyet-rusya 392 · bulgaristan-kralligi 22 · yunanistan 97 · afganistan 5
ingiliz-hindistani 114        ⇒ dokuz kimliğin dokuzu da VERİDE
AYRI Kafkas kimliği (ermeni/gurc/azerb/transkaf)  →  YOK
```
⇒ `ic-idari` önerisi artık **iki bağımsız ölçüme** dayanıyor: künye tablosu
**ve** yetkili yükleyici.
🟢 Bir damga yükseldi: `Turkmenistan → sovyet-rusya`, 🟡 DEVRALDIM → 🟢
**ÖLÇTÜM** (`buhara-halk-cumhuriyeti` ve `harezm-halk-cumhuriyeti` künyeleri
1923-10-28'de canlı ama **veride 0 nokta**).

🔴 **UYGULAMADIĞIM KISIM, ve sessiz değil:** *"36 `v:` dönemi `kid:`
taşımıyor ⇒ `olculemedi`"* uyarısı bu kayıtlara **uygulanmaz** — kenar
kayıtları `v:` dönemi kullanmıyor. Eklemek yanlış damga olurdu: ölçülemeyen
bir şey yok, **ölçülecek bir şey yok.**

---

## ⑦ KAYBOLAN GEREKÇE — süpürücü commit, ve bu bölüm onun KAYDI

Bu dosya ve iki kardeşi (`denetim/ARAC-SINIR-ANADOLU-URET-0907.py` ·
`denetim/SINIR-HUKUKI-ANADOLU-0907.json`) **kendi commit'imle değil**,
koordinatörün sevk commit'iyle depoya girdi:
```
ec869d9 | 15:03:20 | "ALTI KITA DAHA SEVK EDILDI — kadro 21 oturum"  →  23 dosya
d143e65 |          | "IKI DERS + KOSU 8 BITIS TAHMINI DUZELDI"       → 140 dosya
```
`git commit -F <msg> -- oturumlar/SINIR-ANADOLU-0907.md` denemem şu cevabı
aldı: **`no changes added to commit`** — yani hakkımın hükümsüz kalışı bir
hata değil, **bir başarı cümlesi** gibi göründü.

🟢 **ZARARIN CİNSİ:** veri kaybı **yok** (ölçüldü: `git status --porcelain`
üç dosya için de boş, commit'teki hâl diskteki hâlle aynı).
🔴 **Kaybolan şey GEREKÇEYDİ** — ve aşağıdaki üç cümle o commit mesajında
yazacaktı, bugün burada duruyor:
```
① İki öngörü çürüdü (ⓐ 20-26 → 19 · ⓑ "yarıdan çoğu" → 4/19), ve ⓑ'nin
   MAZERETİ YOKTU ⇒ bilgi taşıyan tek kalem oydu.
② `ne_degisti` alanına kaynaksız 12 kenarda `False` DEĞİL `None` yazıldı,
   çünkü "DEĞİŞMEDİ" bir İDDİADIR ve kaynak ister. Ayrılmasaydı 12 kenar
   yanlışlıkla 🟢 sayılacak, NE'nin BUGÜNKÜ çizgisi 1923 için
   "kullanılabilir" ilan edilecekti.
③ İki kova ÖNERİLDİ, AÇILMADI (`ic-idari` · `tanimsiz`) — biçim ortak.
```
⚠️ **Ve asıl risk bende değildi:** dosyalarım o an TAM olduğu için şanslıydım.
Yarım yazılmış bir dosyası olan bir oturumun bozuk hâli commit'lenirdi **ve
kimse bilmezdi** — commit mesajı o dosyadan hiç söz etmiyor.

🟢 **HÜKÜM VE KURAL DEĞİŞİKLİĞİ** (`25e3250`, koordinatör; ölçerek
doğruladım): `§7` istisnası genişledi — bir oturum artık `oturumlar/<KENDİ
ADI>.md` **ve** `denetim/<KENDİ ÖNEKİ>` dosyalarını kendi commit'ler; şart
değişmedi: **her dosya ADIYLA**, dizin pathspec'i (`git add -- denetim/`)
yasak.
📌 Ve dersin kendisi `CLAUDE.md §7`ye indi:
***"`§7` istisnası bir HAK verir ama onu KORUMAZ."***

⚠️ **Geçmiş yeniden yazılmadı** — paylaşılan bir index'te force-push,
kurtardığından pahalı. ***Kusur silinmedi, KAYDEDİLDİ*** (`kavalali` ve
`-F <dosya>` vakalarında verilen kararın aynısı).

---

## ⑧ COMMIT ETMEDİKLERİM — ve niçin

```
🔴 denetim/_govde/*.txt   19 TDV madde gövdesi, ~1 MB düz metin
   ⇒ COMMIT EDİLMEDİ. İkisi de gerekçe: (a) TDV'nin telifli metnini depoya
     KOPYALAMAK olur — kaynak GÖSTERİLİR, ÇOĞALTILMAZ; (b) önekim değil.
     İzlenebilirlik zaten sağlanıyor: her kayıtta `kaynak` slug'ı + `alinti`
     alanı var, ve gövde `ARAC-SINIR-ANADOLU-GOVDE-0907.py` ile YENİDEN
     ÜRETİLEBİLİR.
⚪ denetim/_kunye_oku_anadolu.js · _kunye_oku_cipa.js
   ⇒ COMMIT EDİLMEDİ. Aletlerimin koşarken ürettiği geçici node köprüleri;
     her koşuda yeniden yazılıyorlar, ve önekim değiller.
```

---

## ⑩ İKİNCİ TUR — TDV TÜKENDİ, BİRİNCİL METİN AÇTI

`§4`: TDV bir tanecikte susuyorsa akademik kaynak **meşrudur**. Türkiye-Bulgaristan
için TDV iki gövdede de tükenmişti; dışarı çıkıldı.

```
🔴 ELENEN (§4 kırmızı liste)  haberturk · milliyet/molatik · antlasmalar.com ·
                              nukteler · sosyalbilgiler · kpss-wordpress
🟡 TEK DAYANAK DEĞİL          Vikipedi
🟢 KULLANILAN                 ① M. Yamaç, CTTAD 23/47 (2023), s.699-732 — HAKEMLİ
                              ② Türk Tarih Kurumu — Lozan TAM METİN (birincil neşir)
```

🔴 **VE `§4⑦` İKİNCİ KEZ DOĞRULANDI — bu sefer benim üzerimde.** `WebFetch`
TTK'nin PDF'i için *"binary/encoded, okuyamıyorum"* dedi. `pypdf` ile
denendi: **346 sayfa · 630.931 karakter.**
⇒ ***Bir çıkarıcının "okuyamadım"ı, belgenin içeriği hakkında hiçbir şey
söylemez.*** İkinci çıkarıcı denenmeden `bulunamadi` yazılamaz — yazsaydım
dört kaydım birden eksik kalacaktı.

### 🔴🔴 VE BİRİNCİL METİN, İKİNCİL KAYNAĞI ÇÜRÜTTÜ

Hakemli makale ve genel anlatı şunu diyor: *"Türkiye-Bulgaristan sınırı
**29 Eylül 1913 tarihli İstanbul Antlaşması**'ndaki sınır olarak kabul
edildi."* Lozan'ın **kendi metni 1913'e hiç atıf yapmıyor**:

> **MADDE 2** — *"Bahrisiyahtan Adalardenizine kadar Türkiyenin hududu
> berveçhi zir tesbit edilmiştir. **Evvelâ — Bulgaristan ile:** Rezvaya
> munsabından … üç hududun Meriç üzerinde kâin noktai iltisakına kadar;
> **Bulgaristanın ELYEVM TAHDİT EDİLMİŞ OLDUĞU ŞEKİLDE cenup hududu.**"*
> Fransızca sütun aynı: *"la frontière Sud de la Bulgarie, **telle
> qu'**[elle est actuellement délimitée]"*

📌 **Ve tarihen tutarlı:** 1913 İstanbul Antlaşması Osmanlı-Bulgar sınırını
çizdi, ama **1919 Neuilly** ile Bulgaristan Batı Trakya'yı kaybetti ⇒ 1923'te
Bulgaristan'ın güney sınırı artık 1913'ünki **değildi.** İkincil kaynak bir
**ara halkayı atlıyor**; birincil metin *"elyevm"* diyerek tam bunu ifade
ediyor.
⇒ ***Bir ikincil kaynağın hakemli olması, bir birincil metnin yerine
geçmez.*** (`§4`: TDV maddesi varsa başkasına dayanma — burada TDV yoktu,
ama **antlaşmanın kendisi** vardı ve kimse ona sormamıştı.)

### DÖRT KAYIT BİRDEN GÜÇLENDİ — madde numaralarıyla
```
Bulgaria|Turkey   🔴 bulunamadi → 🟢 HUKUKI   Lozan md. 2/1
Greece|Turkey     madde + GEOMETRİ            Lozan md. 2/2 (Meriç mecrası ·
                                              Arda · Çörek Köy · Bosna Köy)
Syria|Turkey      madde NO KAZANDI            Ankara İtilâfnâmesi md. 8
                                              (Lozan md. 3/1 onu ADIYLA anıyor)
Iraq|Turkey       birincil metinle DOĞRULANDI Lozan md. 3/2 "dokuz ay zarfında"
KOVA:  hukuki 6 → 7   ·   bulunamadi 7 → 6
```

### 🔴 VE KENDİ KUSURUMU BULDUM — `degisti` 4 → 3
`Greece|Turkey` kaydında `ne_degisti:False` yazmıştım; gerekçem *"1923'ten
bugüne değişim BULUNAMADI"* idi. **Bu bir çıkarımdı, bir kaynak değil** — ve
tam da ⓑ öngörümün çürüdüğü yer. `None`a çekildi.
🟢 Kafkas üçlüsünde `False` **kalıyor**, çünkü orada TDV'nin **kendi
ifadesi** var: *"**bugünkü** Türk-Sovyet sınırı tesbit edilmiştir."*
⇒ Aynı alan, iki kayıtta iki farklı değer, ve farkı **kaynağın cümlesi**
belirliyor — benim kanaatim değil.

---

## ⑫ ÜÇÜNCÜ TUR — TÜRKİYE-İRAN: HAFIZAMDAKİ İDDİA DOĞRULANDI, **AMA EKSİKTİ**

`Iran|Turkey` kaydında `⚪ ÖLÇMEDİM` damgası duruyordu: *"1932 Türkiye-İran
sınır düzeltmesi — bu bilgi BENİM HAFIZAMDAN ve TDV onu DOĞRULAMADI."*
Akademik kaynağa inildi.

```
KAYNAK  H. Efe – M. Kızıl, "Sınır Kavramı ve Tarihsel Süreç İçinde
        Türkiye-İran Sınırının Oluşumu ve Önemi", Erzincan Üniv. Sosyal
        Bilimler Enstitüsü Dergisi (ERZSOSDE) X-I (2017), s. 77-90
🔴 §4⑦ ÜÇÜNCÜ KEZ: `WebFetch` bu PDF için de "binary/encoded, okuyamıyorum"
   dedi; `pypdf` **48.838 karakter** okudu.
```

### ZİNCİR — ve bilmediğim ikinci halka
```
1847-06-01   II. Erzurum Antlaşması (9 madde)
1913-11-17   İstanbul Protokolü — Sait Halim Paşa · Mallet · Mirza Mahmut Han ·
             de Giers ⇒ "1848 yılı statükosu … üzerinde anlaşıldı"
1932-01-23   Türk-İran Sınır Antlaşması, **md. 1**: "Ağrı Dağı'nın tamamı
             Türkiye sınırları içine alınmış, Van civarındaki **Kotur** arazisi
             de İran'a bırakılmıştır"                    ← hafızamdaki iddia
1937-05-27   1932 Anlaşması'nı **DÜZENLEYEN** anlaşma: Mazbişo · Paki · Eli
             bölgelerinde 1932 hükümleri **haritayla uyuşmuyordu**;
             TBMM onayı 1938-06-17  ⇒ "İran sınırımız SON ŞEKLİNİ ALMIŞTIR"
                                                          ← 🔴 BUNU BİLMİYORDUM
```

🔴🔴 **DERS: devralınan bir öncülü doğrulamak, onu TAMAMLAMAK da demektir.**
Yalnız 1932'yi yazsaydım kayıt *"kaynaklı"* görünecek ve **beş yıllık ikinci
bir değişim sessizce kaybolacaktı.** Bir öncül doğru çıktığında iş bitmiyor —
kaynağın onun **etrafında** ne söylediği de okunuyor.

⇒ `Iran|Turkey`: 🔴 bulunamadi → 🟢 **hukuki** · `ne_degisti` **True**
⇒ NE'nin bugünkü çizgisi bu kenar için 1923'e **kullanılamaz** (iki değişim).
⚪ Hâlâ ölçülmedi: 1923 günündeki çizginin **geometrisi** (1913 protokolünün
hattı). Kaynağın kendi ifadesi 1938 sonrası için *"günümüzde halen
geçerliliğini koruyan"* diyor ⇒ **1938→bugün değişmedi, 1923→1938 değişti.**

```
KOVA — üç turun toplamı:  hukuki 6 → 7 → **8**   ·   bulunamadi 7 → 6 → **5**
                          ic-idari 5 (öneri)     ·   tanimsiz 1 (öneri)
```

---

## ⑬ TESLİM DURUMU
```
✅ 19 kenar kayıtlı, geometrisi içinde, hâli damgalı
✅ çıpa tuzağı ÖLÇÜLDÜ — bu alete ateşlemiyor, kanıt `_CIPA_TUZAGI` bölümünde
✅ kaybolan gerekçe GERİ YAZILDI (§⑦)
⏳ BEKLİYORUM: `ic-idari` ve `tanimsiz` kovalarının onayı (§③)
⏳ AÇIK KALEM: §④'teki altı ⚪ — hepsi akademik kaynak işi, TDV tükendi
🔜 KOORDİNATÖRE SORULDU: ADIM1'de `rusya` (künyesi 1917-03-15'te biten
   Rusya Çarlığı) 1923-10-28'de 5 NOKTA taşıyor — hayalet devlet (§3.5).
   Bölgemde olabilir; yerleşim dosyaları benim değil, ÖLÇMEDİM.
```
