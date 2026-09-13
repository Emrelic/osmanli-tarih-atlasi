# PAKET-TEMIZ · OKUR METNİNDEN GELİŞTİRİCİ NOTU TEMİZLİĞİ — TESLİM · 14 Eylül 2026

```
OTURUM   PAKET-TEMIZ (1.MURAT sevki · Emre parti-emrelic-0050 H-0004 + H-0003 ikinci kısım)
YAZILAN  34 veri dosyası (yalnız okura çizilen METİN alanları + yeni ic_not_* anahtarları) · 2 bağ dosyası onarıldı
KİLİTLİ  dokunulmadı: olaylar_ek16 · p0051 · ek20 · ek22 · p0052 · ekokuma_magazin/kadin/hanedan/ibrahim/kasrisirin/kirimrus · isyan_tarama · js/ · index.html
COMMIT   YOK
```

## 0 · KABUL

| sınav | sonuç |
|---|---|
| `node --check` (değişen 34 dosya) | **34/34 temiz** |
| metin alanları DIŞINDA fark (`ARAC-TEMIZ-SINAV-0914.js --head`) | **İZİNSİZ FARK 0** · izinli metin değişimi 555 · eklenen `ic_not_*` 520 |
| önce-kopyasına karşı aynı sınav | **0** (uygulama anında) |
| aynı sınav, 01:40 yeniden | İZİNSİZ 2 — `yer_yama.js [598].t 1638-12-25→24` · `[605].t 1623-01-14→11-28`: **UYGULA-BAGDAT'ın** duyurduğu Bağdat bağı düzeltmesi (M-3928), bu işin değil; önce-kopyasına karşı da aynı 2 → uygulamamdan SONRA geldi |
| yeni doğan yazım bozukluğu (değişen 501 dizge: bitişik nokta · boş parantez · çift noktalama …) | **0** (bir kusur yakalandı ve onarıldı — §9) |
| başlık bağları (`ARAC-TEMIZ-BAG-0914.js`: t\|parça · {dosya,t,b} · isyan önek · eski başlık başka dosyada) | **SORUN 0** (2 bağ aynı turda onarıldı — §6) |
| `node denetim/ARAC-A2-BAG-0913.js --hepsi` | **602/602 · HATA 0** · UYARI 146 (açılışta 551/551 · 141; artış yeni kart dosyalarından — ekokuma_ibrahim/kirimrus/kasrisirin başka işçilerin) |
| `py arac/denetle.py` | 🔴 **mükerrer madde 0 → 1 — BENİM başlık değişikliğim, onay bekliyor (§6⑤)** · öteki satırlar bu işten bağımsız |

`denetle.py` önce (00:4x, işe başlamadan) → sonra (01:36, onarımlar dahil):
```
Değişmez 1   ✓ 3818 · 324 sahipsiz                    → ✓ aynı
Değişmez 2   ✓ 528 kırılma · 0 açık                   → ✓ 534 · 0     (sayı artışı eşzamanlı yerleşim/kronoloji yazan oturumlardan; bu iş `t`ye dokunmadı — SINAV)
Değişmez 2s  ✓ 1331 · 102 AÇIK · 356 kapsam dışı      → ✓ 1330 · 100 · 353
Değişmez 2i  ✓ 65 · 3 açık                            → ✓ aynı
Değişmez 2t  ✓ 15 (tavan 42)                          → ✓ aynı
Değişmez 4/4c/4d/4s/5  ✓ 6 · 129 · 356 · 5 · 0          → ✓ aynı
Değişmez 7   ✗ 656 (beklenen 650)                     → ✓ 658 (beklenen 658)  (beklenen değeri başka oturum güncelledi)
dönem sağlığı ✓ 0 · konum ✓ 0                          → ✓ aynı
mükerrer madde ✓ 0                                     → ✗ 1   [kişi!baltac,mehmed] 1711-07-21 Baltacı … rivayeti ↔ Prut Antlaşması
```
⚠️ Önce çıktısının dosyası (`scratchpad/denetle_once.txt`) 01:29'da AYNI ADLA başka bir koşu tarafından ezildi (scratchpad
paylaşılıyor); önce sütunu işe başlarken okunan çıktıdan yazıldı.

## 1 · ÖLÇÜLEN EVREN — `js/app.js` okura NEYİ çiziyor (yazılmadı, okundu)

```
OLAYLAR*    b · gun · yer · kisiler · d         obGoster · detayAc · olay listesi · aynı-gün pili (title) · olayMetniUret (kopyala)
            kaynak yalnız SLUG olarak bağlantıya gider (metin değil)
KRONOLOJI_* YALNIZ b (+ t)                        maddeAc: ob-detay = "t · b" · birlesikCiz · listeCiz
DEVLETLER   kronoloji[].b · ad · baskent · f/t    (ozet ÇİZİLMİYOR)
EKOKUMA*/MERAK*  tür dalına göre (ekKartHtml):
            sebep-sonuc: sebep.b · sonuc.b · bag · metin      magazin: baslik · metin · not
            merak: soru · kisa · goruşler[].tez/dayanak       edebiyat: baslik · sanatci.* · metin · alinti.metin
            savas-hikayesi: baslik · tarih_metin · yer · taraflar[].ad/komutan/kuvvet · oncesi · akis · sonuc · tartisma
            tursuz antlaşma: ad · taraf_metin · ozet · topraklar · savas_basi
            öteki tanımlı türler (son çare dalı): baslik|ad|soru · ozet · metin · kisa · not · bag · aciklama
            HER türde: kaynak ("Kaynak: …" düz metin) · akordeon başlığı (soru/baslik/ad ya da sebep→sonuç)
            tur EKOKUMA_TUR'da yoksa kart HİÇ çizilmez (mimari 1 · kaside/mersiye/mesnevi · idam 3)
KISILER/PADISAHLAR  ad · donem · not (dizin + madde kutusu) · kartvizit: dogum(_yer) · olum(_yer/_sebep) · baba · anne ·
            tahta · lakap[] · unvan[] · esler[] · skandal · ovgu · yergi · tartisma · tarihciler
GORSEL_MADDE  figcaption: eser · sanatci · yil (+ lisans) · alt: gorsel_alt
ic_not*     HİÇBİR yüzeyde çizilmez: obGoster/kartvizit/figcaption alanları ADIYLA seçer; ekKartHtml `_icNotAyikla`
            ile nesneyi (iç içe nesneler dahil) ayıklar.
```

## 2 · KALIPLAR ve İSABET (`denetim/ARAC-TEMIZ-TARA-0914.js`, 108 dosya · 7709 kayıt)

Açılış taraması: **752 aday alan · 517 sert**. Desen başına isabet (bir alan birden çok desen taşır):
```
bulunamadı 108 · okunmadı/okunan … gövde 81 · atlas 97 · tdv-tartışma (TDV … vermez/der/kaydeder) 74 · http-slug (HTTP · 302 · ölü · Denenen) 66
isaret (⚠️🔴🟢📌) 33 · kart-madde-meta (bağlı madde · karta yazılmadı · bu kart …) 28 · gün-bilinmiyor 20 · doğrulanamadı 16 · dosya-adı 13
ölçülemedi/sınanmalı 6 · koordinatör/OTURUM- 4 · kaynak-parantez 3 · esas-alındı/hizalandı 3 · veri 3 · künye 1 · yerleşim-kimlik 1
yyyy/ham tarih 162 (çoğu padişah kartvizitinde ISO tarih — geliştirici notu değil, biçim; §8)
zayıf (tek başına aday, çoğu meşru): madde 217 · rivayet 75 · haritada 44 · kesinlik 8
```
Taramayla genişletilen kalıplar (sevkte yoktu, ölçerek eklendi): `(atlas ufku)` · `(bkz. [[kimlik]])` · `(TDV x maddesi)` /
`(standart akademik kaynak: …)` başlık parantezleri · `Aynı tarihte haritaya katılan diğer yerleşimler:` üretim cümlesi ·
`gövde okundu / HTTP 200 / ölü: … (302) / Denenen slug` künye süreci · `bulunamadı` dizi/alan değerleri · `atlasın açılışında`.

## 3 · SINIF BAŞINA (`denetim/TEMIZ-DUZENLE-0914.json` 526 + `…-EK.json` 1 = **527 kayıt**)

```
a  SERT geliştirici notu → okur metninden çıktı, içerik ic_not_<alan>'a      313
b  okur belirsizliği, geliştirici diliyle → okur diliyle yeniden yazıldı      212   (eski ifade ic_not'ta)
bag  kopan bağın onarımı                                                         2
c  meşru okur metni → dokunulmadı                                         (sonra taramasında kalan 99'un tamamı, §7)
```
Alan başına: devletler kronoloji b **236** · OLAYLAR d 73 · gun 12 · b 3 · KRONOLOJI_ b 17 · ekokuma kaynak 45 · metin 13 ·
not 7 · tartışma 5 · bag 4 · akış 2 · taraflar kuvvet/komutan 12 · merak dayanak 2 · padişah kartviziti 62
(lakap/esler dizisi boşaltma 25 · metin 37) · kişiler 3 · görsel altyazısı 28 · devletler başkent 1.

## 4 · DOSYA BAŞINA

| dosya | uygulanan (a/b) | not |
|---|---|---|
| devletler.js | 237 (159/78) | yalnız `kronoloji[].b` + `cebel-i-lubnan-mutasarrifligi.baskent`; kaynak·ozet·f·t değişmedi (sınav) |
| padisahlar.js | 62 (32/30) | |
| olaylar_ek.js | 21 (0/21) | üretim cümlesi |
| olaylar_ek5.js | 22 (2/20) | |
| gorsel_madde.js | 28 (18/10) | |
| ekokuma_antlasma2.js | 22 (19/3) | |
| ekokuma_savas.js | 21 (14/7) | |
| ekokuma_mimari.js | 18 (17/1) | |
| kronoloji_altinorda.js | 10 (10/0) | 🔴 önekleri |
| ekokuma_dalga2.js | 9 (5/4) | |
| olaylar_ok109.js | 8 (0/8) | |
| olaylar.js | 7 (0/7) | |
| olaylar_ek17.js | 7 (4/3) | H-0003 örneği burada |
| ekokuma.js · olaylar_ek4.js | 6 · 6 | |
| ekokuma_tartisma.js · olaylar_ek14.js · ekokuma_ekonomi.js · olaylar_ek2.js | 6 · 4 · 4 · 4 | |
| kisiler.js · kronoloji_italya_sehir.js | 3 · 3 | |
| olaylar_7a4170 · ek11 · kronoloji_portekiz · ekokuma_statu · merak | 2 · 2 · 2 · 2 · 2 | |
| olaylar_ek13 · ek6 · ek9 · ek3 (+1 onarım) · kronoloji_italya · kronoloji_venedik | 1 · 1 · 1 · 2 · 1 · 1 | |
| yer_yama.js · etiket_yama.js | 1 · 1 | BAĞ onarımı (§6) |

**KİLİTLİ — bekleyen adaylar (uygulanmadı; sahibine öneri):**
```
olaylar_ek16.js  1309-01-01 gun "XIV. yüzyıl başı — TDV tam tarih vermez"                      → "XIV. yüzyıl başı"
                 1438-01-01 gun "1437-1438 (TDV iki yıl arası bir süreç olarak verir)"          → "1437-1438 (iki yıla yayılan süreç)"
                 1441-01-01 gun "845 (1441-42) — TDV'ye göre en eski Hacı Giray parası bu tarihi taşır" → "845 (1441-42; en eski Hacı Giray parasının tarihi)"
olaylar_ek20.js  1490-01-01 d "Yani atlasın batı ve doğu Gürcistan'ı ayrı efendilere bağlaması bu bölünmeden doğar." → "haritanın" ya da çıkar
                 1870-09-20 d "Bu, atlasın son yarım yüzyılı için doğrudan sonuç doğuran bir olaydır" → "1923'e kadarki yarım yüzyıl için"
                 1807-07-09 d "Atlasta Poznan ve Toruń bu günden itibaren …"                     → "Haritada …"
ekokuma_hanedan.js liste-hanedan-ici-katl-1 not "tarih TDV'nin verdiğidir, atlasın değil"          → "…tarih TDV'nin verdiğidir" (a)
                 liste-hanedan-ici-katl-2 metin "(TDV gün vermez)"                                → "(günü bilinmez)" (b)
                 öteki 4 aday (TDV … kaydeder · "bu kartın yorumudur" · "Bu kart hiçbir görüşü seçmez") → c, dokunulmamalı
ekokuma_kadin.js  2 aday ("bu kartın değil 'Merak' bölümündeki … kartının konusudur") → c (okura çapraz gönderme)
ekokuma_magazin.js açılışta 23 sert aday → bugün 19'u DOSYA SAHİBİNCE temizlenmiş (PAKET-EK-B); kalan 4 c
                 ("doğrulanamadığını yazar" TDV'nin kendi hükmü · "kart taraf tutmaz")
olaylar_p0051 · p0052 · ek22 · ekokuma_ibrahim/kasrisirin/kirimrus · isyan_tarama: aday 0
```

## 5 · ÖRNEK ÖNCE → SONRA

```
① ek17 1639-01-20 b   "I. Mustafa on beş yıllık unutuluşun ardından öldü — kızlarağası rivayeti doğrulanamadı"
                   →  "I. Mustafa on beş yıllık unutuluşun ardından öldü"                                    (H-0003 · a)
② aynı madde d       "TDV İslâm Ansiklopedisi bu döneme dair 'herhangi bir bilgi bulunmamaktadır' diyerek sessizliği açıkça kaydeder"
                   →  "bu yıllara dair kaynaklarda hiçbir bilgi yoktur"
                     "⚠️ RİVAYET DOĞRULANAMADI: kızlarağasının onu bir odaya kilitlediğine dair halk arasında anlatılan hikâye TDV maddesinde yer almıyor; madde yalnızca …"
                   →  "Halk arasında kızlarağasının onu bir odaya kilitlediği anlatılır; ancak bu rivayet kaynaklarca desteklenmez. Kaynaklar yalnızca …"  (b)
③ ek17 1644-01-01 b   "'Deli İbrahim' mi, dalgalı bir hastalık mı? TDV etiketi reddediyor" → "'Deli İbrahim' mi, dalgalı bir hastalık mı?"
④ ek13 1417 gun      "1417 (TDV hanedan sırasını verir, TARİH VERMEZ; yıl komşu Katîf ve Lahsa kayıtlarının deseninden alındı — …)"
                   →  "1417 dolayı (Cebrî hânedanının kuruluşu XV. yüzyıl başına tarihlenir)"
⑤ ek14 Kırkpınar gun "1357 dolayı (rivayete göre, TDV kesin tarih vermiyor)" → "1357 dolayı (rivayete göre)"
⑥ ok109 1918-11-11 d "Bu gün atlasta imparatorluk mirasının toplu devrini gösterir: seksen dokuz yerleşim Avusturya kimliğinden çıkar;"
                   →  "Harita bu gün imparatorluk mirasının toplu devrini gösterir: Avusturya-Macaristan toprakları dağılır;"
⑦ olaylar_ek 1354-08-01 d "Aynı tarihte haritaya katılan diğer yerleşimler: Sivrihisar, Çankırı." → "Aynı tarihte katılan öteki yerler: Sivrihisar, Çankırı."
   (53 madde: 52 yeniden yazım · 1413 Çamurlu'daki 90 adlık liste okura liste değil gürültü → cümle çıktı, liste ic_not_d'de)
⑧ devletler zeta 1482 "Merkez Cetine'ye (Cetinje) taşındı — bu tarih TDV'nin karadag maddesinde doğrulanamadı, yerlesimler.js'teki Cetinje kuruluş tarihiyle (kur:1482) hizalandı"
                   →  "Merkez Cetine'ye (Cetinje) taşındı"
⑨ devletler hollanda 1602 "… gücün temelini attı (TDV hollanda maddesi)" → "… gücün temelini attı"   · 47 başlıkta "(atlas ufku)" soneki çıktı
⑩ kronoloji_portekiz 1923-10-29 "Atlas penceresinin kapanışında Portekiz — …" → "1923'te Portekiz — …" · altinorda 10 başlıkta "🔴 " öneki çıktı
⑪ ekokuma_mimari selimiye kaynak "TDV: selimiye-camii-ve-kulliyesi--edirne (gövde okundu, HTTP 200; ⚠️ soneksiz '…' 302 ÖLÜ). Tarih: data/olaylar_ek14.js:51 (…)"
                   →  "TDV: selimiye-camii-ve-kulliyesi--edirne"
⑫ ekokuma_savas budin taraflar[0].kuvvet "bulunamadı — okunan TDV gövdeleri sayı vermiyor" → "" (satırda kuvvet kısmı çizilmez)
⑬ padisahlar murad3 lakap ["bulunamadı — TDV maddesinde kendine özgü bir lakap zikredilmiyor"] → [] ("Lakap:" satırı çizilmez)
   II. Selim lakap → "resmî lakabı yok (popüler 'Sarı Selim' ve 'Sarhoş Selim' adlandırmaları resmî lakap değildir)"
⑭ kisiler cerkes-hasan-bey not "… idam edildi (TDV'de müstakil maddesi yok, …; doğum yılı ve idam günü doğrulanamadı — bkz. OTURUM-5-ILERLEME.md)" → "… idam edildi"
⑮ gorsel_madde mohaç sanatci "bulunamadı (anonim)" → "Anonim"
⑯ merak galata dayanak "⚠️ Galata'nın teslim GÜNÜNE dair açık bir kayıt TDV Galata maddesinde BULUNAMADI." → "Galata'nın teslim gününe dair açık bir kayıt bilinmiyor."
```

## 6 · BAĞLAR

Başlığı değişen 256 kayıt (OLAYLAR 3 · KRONOLOJI_ 17 · devletler 236). Taranan biçimler ve sonuç:
```
① "t|parça" (ekokuma*/merak*/gorsel_madde)   KOPAN 0 · tutan 3: 1644-01-01|Deli İbrahim ×2 (ekokuma_ibrahim) · 1552-10-02|Kazan (ekokuma_kirimrus)
② {dosya,t,b} BİREBİR                         KOPACAKTI 2 → AYNI TURDA ONARILDI:
     yer_yama.js     kronoloji_venedik 1281-01-01 "Levant imparatorluğu — atlasın açılışında …" (arac/yama_uygula.js [dosya,t,b])
     etiket_yama.js  kronoloji_altinorda 1346-01-01 "🔴 Kara Ölüm Kefe kuşatmasından …"
③ isyan_tarama maddeler[] önek                0 (değişen başlıkların hiçbiri 1594-1606 değil)
④ savaslar/ANTLASMALAR (obGoster kutusu)      etkilenmez: değişen OLAYLAR başlıklarının " —" öncesi aynı; 1711-07-21 "Prut" eşleşmesi zaten yoktu
⑤ 🟡 arac/denetle.py:2681 BILINEN_AYRI       KOPUKTU — 01:40'ta çalışma ağacında anahtar YENİ başlığa çevrilmiş görüldü
                                              (git diff arac/denetle.py; commit'siz — sahibi yazdı, bu iş dokunmadı)
     anahtar BİREBİR eski başlık: "Baltacı Mehmed Paşa ve Çariçe Katerina rivayeti — TDV'nin kendi uyarısı"
     yeni başlık "Baltacı Mehmed Paşa ve Çariçe Katerina rivayeti" anahtarı düşürdü → Prut Antlaşması ile aynı gün + aynı kaynak
     (prut-antlasmasi) ⇒ "mükerrer madde 1". arac/ bu işin dosyası DEĞİL.
     İSTEK: 2681. satırdaki dizge yeni başlığa çevrilsin; istenmezse başlık geri alınır (olaylar_ek17.js tek satır).
```
🔴 **Ve bağ aletimin kör noktası:** `ARAC-TEMIZ-BAG-0914.js` ilk sürümde yalnız `data/`yı tarıyordu; canlı aletlerin içindeki
BİREBİR başlık anahtarını (BILINEN_AYRI) göremedi, `denetle.py` gördü. Alet `arac/*.py|js`yi de tarayacak biçimde genişletildi;
yeniden koşuda tek bulgu budur (SORUN 1 = ⑤).
Madde gövdesi (`d`) değişiklikleri bağ taşımaz (bağlar yalnız `t`+`b` okur).

## 7 · KANIT — ÇİZİM EVRENİNDE YENİDEN TARAMA

Sonra taraması (`--sert`): **239 alan** (önce 517). Dökümü:
```
140  yalnız ham ISO tarih: padisahlar dogum/olum/tahta 101 · savaslar savas_basi 37 · kisiler olum 1 · ek17 d 1  → biçim, not değil (§8)
 99  öteki — HEPSİ TEK TEK OKUNDU:
     kilitli dosyada                         17  (hanedan 6 · magazin 5 · ek20 3 · kadin 2 · ek16 1 — §4 listesi)
     c · meşru okur metni                    82  — desen başına (ölçüldü):
        gün-bilinmiyor 20   okura belirsizlik bildirimi, okur diliyle: "gün belirsiz" · "günü kaynaklarda ayrışır" · yeni yazılan "kesin günü bilinmez"
        tdv-tartışma   25   tarihyazımı hükmü, çoğu başka kaynakla karşılaştırmalı ("Evliya Çelebi 1452 der; TDV fetihten sonra kabul eder" ·
                            "TDV bu görüşü kabul etmez") — tartışma/merak kartının kendi konusu
        atlas          13   Atlas Okyanusu/Dağları ("Fas Atlas kıyısı" · "Tell Atlası" · "Atlas hattı") · "Kangxi Atlası" · "anatomi atlası"
        okunmadı       10   "hutbe … adına okundu" · "bildirisi okundu" · "unvanı okundu"
        http-slug       5   "ölü" = ölen ("binlerce ölü ve yaralı" · "Ölü Canlar")
        kart-madde-meta 4   tartışma kartının editoryal çerçevesi ("Bu kart taraf seçmiyor" · "gazavatnâmelerdeki sahneler bu kartta kullanılmadı")
        veri 2 · ölçülemedi 1 ("modern koordinatlarla ölçüldüğünde" — içerik) · esas-alındı 1 (antlaşma "sonraki yüzyıllarda esas alındı") ·
        bulunamadı 1 (Cihannümâ "yeterli kaynak bulunamadığı için yarım kaldı" — olgu)
```
⇒ **Kilitsiz dosyalarda okur arayüzünde çizilen alanlarda kalan geliştirici notu: 0.**

## 8 · KAPSAM DIŞI BIRAKILAN / ÖLÇÜLEMEYEN (D107)

- **Tarayıcıda canlı sınanmadı** — js/ kilitli; çizim davranışı kod okunarak ölçüldü (app.js çalışan ağaç, UI oturumunun yazmakta olduğu sürüm).
- **Ham ISO tarihler** okura çiziliyor: kartvizit `Doğum: 1432-03-30` · antlaşma kartı `Bitirdiği savaş: 1463-01-01` (YYYY-01-01 kodlaması okura
  "1 Ocak" gibi okunur). Geliştirici notu değil ama §4 hassasiyet sorunu → **UI2'ye öneri** (js kilitli): `idxYazi`/`kesinlikliYazi` ile biçimle.
- **ekokuma `kaynak` alanı** hâlâ slug listesi (`Kaynak: TDV: karlofca`) — süreç notları çıktı, slug → madde başlığı çevirisi arayüz işi.
- **devletler.js `ozet`** geliştirici notu taşıyor (ör. hanthawaddy: "🔴 10 Ağustos 2026 YAPISAL ÇELİŞKİ (KOORDİNATÖRE BİLDİRİLDİ …)") ama **çizilmiyor**;
  sevk gereği dokunulmadı. Aynı başlığın okura çizilen kardeşi ("— bkz. yukarıdaki YAPISAL ÇELİŞKİ notu") temizlendi.
- **KRONOLOJI_* `d`/`gun`** çizilmiyor → düzenlenmedi (arayüz ileride çizerse ayrı tur gerekir).
- Tanımsız türdeki kartlar (mimari 1 · kaside/mersiye/mesnevi · idam 3) çizilmiyor → taramada ayrı sayıldı, kendi alanlarında sert aday yok.
- Yeni yazılan okur cümlelerinin **olgu içeriği** kaynağa yeniden sınanmadı: yalnız eski cümlenin söylediği daraltıldı/sadeleştirildi, yeni
  olgu eklenmedi (tek istisna yok). Eski ifadenin tamamı `ic_not_*`de.

## 9 · ARAÇ KUSURU — yakalandı, onarıldı

"Aynı tarihte haritaya katılan diğer yerleşimler" kuralı cümle sonunu **ilk noktada** arıyordu; 1413 Çamurlu listesindeki
`Kirmasti (M.Kemalpaşa)` kısaltmasında durdu ve okur metninde `…birleşti.Kemalpaşa), Mihaliç (Karacabey), …` kuyruğu bıraktı.
`node --check` ve metin-dışı fark sınavı bunu **göremezdi** (sözdizimi ve alan yapısı sağlam, bozuk olan metindi). Yakalayan:
uygulama sonrası örnek metnin okunması → ardından değişen 501 dizgenin tamamı yazım-bozukluğu desenleriyle tarandı (0).
Onarım `TEMIZ-DUZENLE-0914-EK.json`; kural düzeltildi (nokta + boşluk/son). 📌 Tablo **uygulanmış hâliyle** saklanır —
`ARAC-TEMIZ-HAZIRLA-0914.py` bugünkü veride yeniden koşulursa (artık temiz olduğu için) farklı/az kayıt üretir, tabloyu EZMEMELİ.

## 10 · ALETLER (`denetim/`)

```
ARAC-TEMIZ-TARA-0914.js      çizim evreni tarayıcı (tür dalı başına alan · görünür/çizilmez ayrımı · --sert)
ARAC-TEMIZ-HAZIRLA-0914.py   düzenleme tablosu üreticisi (elle kayıtlar + kurallar + DV_ELLE istisnaları)
ARAC-TEMIZ-UYGULA-0914.py    yol-adresli uygulayıcı: JS nesne-literal ayrıştırıcısı (konumlu; "a"+"b" birleştirmesi dahil),
                             seçici (tam/önek, kesme işareti normalleştirmeli), eski/yeni · çoklu çift · değer · dizi boşaltma,
                             ic_not_<alan> ekleme/birleştirme; kuru koşu varsayılan, sessiz atlama yok
ARAC-TEMIZ-SINAV-0914.js     metin alanları dışında fark 0 sınavı (--head ya da önce-kopyası)
ARAC-TEMIZ-BAG-0914.js       başlık değişikliğinin kopardığı bağlar
TEMIZ-DUZENLE-0914.json (526) · TEMIZ-DUZENLE-0914-EK.json (1)
```
