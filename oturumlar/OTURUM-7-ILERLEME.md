# Oturum 7 — İlerleme

## Durum: tamamlandı

Dokuz dönemin tamamı yazıldı, doğrulandı ve `data/olaylar_ek7.js`'e eklendi.

| # | Dönem | Madde | Durum |
|---|---|---|---|
| 1 | 1453-1520 | 20 | ✅ |
| 2 | 1520-1566 | 18 | ✅ |
| 3 | 1566-1603 | 18 | ✅ |
| 4 | 1603-1656 | 22 | ✅ |
| 5 | 1656-1703 | 20 | ✅ |
| 6 | 1703-1774 | 24 | ✅ |
| 7 | 1774-1839 | 24 | ✅ |
| 8 | 1839-1876 | 20 | ✅ |
| 9 | 1876-1923 | 24 (Midhat Paşa'nın azli/idamı dahil, ondan sonrası) | ✅ |

**Toplam: 184 madde** (hedef 150-250 içinde).

## Doğrulama sonucu

```
madde: 184 | farkli slug: 137 | ay hassasiyetli: 0
```

- Bozuk tarih: 0
- Eksik alan: 0
- Ay hassasiyetli (gün yazılmamış): 0
- Tekrar eden başlık: 0
- Kapsam dışı tarih (1453-1923 dışı): 0

## Kaynak doğrulama yöntemi

Her yeni slug (mevcut 372 doğrulanmış slug kümesinde olmayan) WebFetch ile
`https://islamansiklopedisi.org.tr/<slug>` çekilip `<title>` etiketi
"Arama - TDV İslâm Ansiklopedisi" olup olmadığı kontrol edilerek doğrulandı.
Toplam ~50 yeni slug bu yöntemle canlı olarak teyit edildi.

## ⚠️ Entegrasyon oturumuna not — mevcut veride ölü slug bulundu

Bu partiyi hazırlarken **kendi işim dışında**, halihazırda yayında olan
`data/olaylar_ek3.js:32` satırındaki `kaynak:"koprulu-fazil-mustafa-pasa"`
değerinin **ölü slug** olduğu tespit edildi — bu URL sessizce TDV arama
sayfasına yönleniyor. Doğru slug **`kopruluzade-fazil-mustafa-pasa`**.
Ben `olaylar_ek3.js`'e dokunma yetkim olmadığı için düzeltmedim; entegrasyon
oturumunun (Oturum 0) bu satırı düzeltmesi gerekiyor.

## Kapsam disiplini

- Hiçbir madde toprak kazanç/kayıp temasına girmedi (Değişmez 2 dengesi —
  424/424 kırılma eşleşmesi — bu partiyle bozulmadı).
- `yerlesimler.js`'e dokunulmadı.
- `index.html` / `js/app.js`'e dokunulmadı — yeni dosyanın siteye bağlanması
  entegrasyon oturumunun işi.
- Commit atılmadı, `uret_petek.py` çalıştırılmadı.

---

## İkinci tur — merkez oturumun denetim bulgusuna karşılık (2026-07-30)

Merkez oturum, iki temizlik turunda **47 mükerrer** silindiğini ve neredeyse
hepsinin `olaylar_ek7.js`'ten çıktığını bildirdi: kronolojiyi yoğunlaştırırken
zaten var olan maddeyi yeniden yazma hatası. Ayrıca `denetle.py`'nin "zayıf
ölçüt" (aynı kişi + ±3 gün) listesinde **57 şüpheli çift** biriktiğini,
bunların içinde gerçek mükerrerler olduğunu bildirdi.

### Yapılan: 57 çiftin tek tek triyajı

Her çift için hangi dosyada olduğu bulundu (`grep -l`), tam metin okundu ve
karar verildi. Sonuç: **27 gerçek mükerrer** (aynı olay iki kez yazılmış),
**30 meşru ayrı olay** (aynı gün/kişi ama farklı olay — sefer günlerinin ardışık
adımları, cülûs/hal' çiftleri, aynı gün imzalanan farklı belgeler).

### Silinen 27 mükerrerin 25'i `olaylar_ek7.js`'ten temizlendi

Örüntü tekrarlandı: neredeyse hepsi benim partimin, halihazırda `olaylar.js`,
`olaylar_ek2.js` veya `olaylar_ek5.js`'te zaten var olan bir maddeyi yeniden
yazmasıydı (Fâtih Kanunnâmesi, İbrahim Paşa'nın idamı, Şehzade Mustafa'nın
idamı, dört cülûs/hal' çifti, Tıphâne-i Âmire/Mekteb-i Tıbbiyye, Kuleli Vak'ası,
Tercüman-ı Ahvâl, Âli Paşa'nın vefatı, İttihat ve Terakki'nin kuruluşu, Erzurum
ve Sivas kongreleri, VI. Mehmed'in ayrılışı, Takvim-i Vekayi ve 12 kayıt daha).
Kendi dosyamdaki 25 kayıt `// hatalar 10.docx (merkez oturum denetimi) —
SİLİNDİ (...)` yorumuyla değiştirildi; aynı disiplin dosyanın önceki
temizlik turlarında zaten kullanılıyordu. **Diğer dosyalara dokunulmadı** —
kalan (daha ayrıntılı) kayıt olduğu gibi bırakıldı.

Denetim öncesi/sonrası:
```
madde: 938 -> 913 (ek7.js: 184 -> ~157)  (not: sayı diğer oturumların eşzamanlı
                                           yazımı yüzünden koşudan koşuya kayıyor)
mükerrer (kesin): 0 -> 0 (değişmedi, zaten temizdi)
zayıf çift: 57 -> 27
Değişmez 2: 441 kırılma / 0 açık  ->  441 kırılma / 0 açık (bozulmadı)
```

### ⚠️ İki mükerrer BENİM DOSYAMDA DEĞİL — düzeltemedim, Oturum 0'a not

1. **Pasarofça Antlaşması** — `olaylar.js:106` ("...— Lâle Devri") ile
   `olaylar_ek5.js:462` ("...— Mora kazanıldı, Belgrad ve Banat kaybedildi")
   **aynı antlaşmayı, aynı tarihte (1718-07-21), aynı `kaynak:"pasarofca-antlasmasi"`
   ile iki kez anlatıyor.** ek5'teki daha ayrıntılı (ticaret ahidnâmesi, tam
   kişi listesi); olaylar.js'teki Lâle Devri'nin kültürel mirasını (matbaa,
   çiçek aşısı) ekliyor — birleştirilirse ikisi de kaybolmamalı.
2. **Yunanistan'ın bağımsızlığı** — `olaylar.js:131` ("...— Cezayir'in
   işgali", `t:"1830-02"`, ay hassasiyetli) ile `olaylar_ek8.js:21` ("Londra
   Protokolü — Yunanistan'ın bağımsızlığının tanınması", `t:"1830-02-03"`, gün
   hassasiyetli) **aynı olayı anlatıyor.** ek8 Oturum 16'nın dosyası olduğu
   için de dokunamadım. ek8'in gün hassasiyeti tercih edilmeli; olaylar.js'in
   Cezayir işgaliyle bağlantısı (aynı yaz, imparatorluktan kopan iki toprak)
   ayrı bir madde olarak ya da ek8 kaydına ek cümle olarak korunabilir.

### `denetle.py`'nin `BILINEN_AYRI` kümesine önerilen 27 ekleme

`arac/denetle.py` Oturum 6'nın dosyası, ben dokunamadım. Triyaj edilen ve
**gerçekten ayrı** olduğuna karar verilen 27 çift aşağıda — Oturum 6 bunları
`BILINEN_AYRI`'ya eklerse zayıf liste 27'den 0'a iner:

```python
("Osmanlı Beyliği'nin kuruluşu", "Bilecik ve Yarhisar'ın gece baskınıyla fethi"),
("Tâceddinoğulları Beyliği'nin ilhakı: Niksar", "Belgrad'ın Macaristan'a bırakılması — Tata Antlaşması"),
("İstanbul'un Fethi", "Çandarlı Halil Paşa'nın azli ve idamı"),
("Seferin hedefinin Memlükler ve Halep olarak resmen ilanı", "Mercidabık Zaferi"),
("Halep'in Osmanlı hâkimiyetine girişi", "Halep Gökmeydan'da Abbâsî Halifesi III. Mütevekkil'in karşılaması"),
("Trablusşam'ın Osmanlı idaresine girişi", "Şam'ın (Dımaşk) Osmanlı hâkimiyetine girişi"),
("Filistin'in katılışı: Yafa, Nablus ve Amman", "Kudüs'ün Osmanlı idaresine geçişi"),
("Kudüs'ün Osmanlı idaresine geçişi", "Ridaniye — Mısır'ın fethi ve hilâfet"),
("Ridaniye — Mısır'ın fethi ve hilâfet", "Yavuz Sultan Selim'in Gazze'ye girişi ve Sina çölü geçişi"),
("Süveyş'in alınışı — Kızıldeniz'e açılan kapı", "Osmanlı birliklerinin Kahire'ye ilk girişi"),
("Osmanlı birliklerinin Kahire'ye ilk girişi", "Tomanbay'ın Kahire baskını ve üç gün süren sokak çatışması"),
("Yavuz Sultan Selim'in Kahire'den ayrılışı ve Hayr Bey'in atanması", "Kahire Abbâsî hilâfetinin sona ermesi — 'devir teslimi'"),
("Mohaç Meydan Muharebesi", "Macaristan Osmanlı himayesinde"),
("Şehzade Mustafa'nın Konya Ereğlisi'nde idamı", "Kara Ahmed Paşa sadrazamlığa atandı"),
("Sakız'ın Cenevizlilerden alınışı", "Nakşa Dukalığı'nın ilhakı — Kiklad Adaları'nın tamamı"),
("III. Mehmed'in vefatı ve I. Ahmed'in cülûsu", "Kardeş katli geleneğinin fiilen sona ermesi"),
("Sultan İbrahim'in hal'i ve katli", "IV. Mehmed'in yedi yaşında cülusu"),
("Prut Zaferi", "Prut Antlaşması — Azak ve Taygan'ın geri alınması"),
("III. Mustafa'nın ölümü ve I. Abdülhamid'in cülûsu", "Londra'da ilk daimî elçilik"),  # NOT: bu satır hatalı eşleşme olabilir, denetle.py çıktısında yeniden ölçülmeli
("Londra'da ilk daimî elçilik", "İrad-ı Cedîd hazinesi kuruldu"),
("III. Selim tahttan indirildi", "IV. Mustafa tahta çıktı"),
("III. Selim öldürüldü", "II. Mahmud tahta çıktı"),
("Asâkir-i Mansûre-i Muhammediyye kuruldu", "Bektaşî tarikatı kapatıldı"),
("İbrâhim Paşa Suriye'ye girdi — birinci kriz başladı", "Takvim-i Vekayi yayımlanmaya başladı"),
("Kanûn-ı Esâsî — I. Meşrutiyet", "Tersane Konferansı: büyük devletlerin Balkan reform talepleri"),
("Hareket Ordusu'nun İstanbul'a girişi", "Hareket Ordusu ve II. Abdülhamid'in hal'i: V. Mehmed Reşad'ın cülûsu"),
("Karadeniz Baskını: Osmanlı donanmasının Rus limanlarını bombalaması", "I. Dünya Savaşı'na giriş"),
```

⚠️ Bu liste denetim çıktısındaki kısaltılmış (48 karakter kırpılmış) başlıklardan
tam metne genişletilerek çıkarıldı; Oturum 6 eklemeden önce `--ayrinti` ile
tam başlıkları teyit etmeli (özellikle "III. Mustafa'nın ölümü..." satırı —
iki farklı zayıf çiftte aynı başlık göründüğü için karışmış olabilir).

### İmlâ normalizasyonu ihtiyacı (merkez oturumun istediği üçüncü ölçüt)

Bu turda rastlanmadı ama merkez oturumun bahsettiği "Vahran ≠ Vehrân" sınıfı
hâlâ `denetle.py`'nin `_KATLA` tablosunda **yok**: â/î/û zaten katlanıyor
(satır 318-320) ama bu, kelime kökünü etkilemiyor çünkü ilk 6 harfe kırpma
katlamadan SONRA yapılıyor — yani "Vahran" ve "Vehrân" katlandıktan sonra
"vahran" ve "vehran" olup hâlâ farklı 6-harf kökü üretiyor (ilk harf farklı:
a/e). Gerçek sorun katlama değil, ünlü farkı; bunu çözecek bir "ünlü-kör"
ölçüt (yalnız ünsüzleri karşılaştırma) Oturum 6'nın değerlendirmesine bırakıldı.

### Ölçüldü, yapılmadı — sıradaki öncelikler

- **13. yüzyıl (5 madde) ve ETİKETLEME hazırlığı (yer/kisiler serbest metin
  ölçümü)** bu turda ele alınmadı; kapsam ve zaman nedeniyle ayrı bir oturuma
  bırakıldı. 13. yüzyıl için önce Oturum 5'in kişi kimlik listesi bekleniyor
  (merkez oturumun notu — mükerrer doğmasın diye).

---

## Üçüncü tur — 14 oturumluk yeni koordinasyon dalgası (2026-07-30, KOORDINASYON.md)

Görev: `OTURUM-4-KRONOLOJI.md`'yi bekle (Oturum 4 henüz üretmedi — dosya yok),
beklerken bağımsız iki madde.

### md.26 — Sinop Baskını eklendi

`data/olaylar_ek7.js`'e yeni madde: `t:"1853-11-30"`, `b:"Sinop Baskını"`,
`kaynak:"sinop"` (TDV Sinop şehir maddesi — `<title>` ile doğrulandı, canlı).
1839-1876 bölümünün başına, kronolojik sıraya uygun yere eklendi.

⚠️ **Kaynak notu:** TDV'nin Sinop maddesi olayı "1854 yılı başlarında" diye
belirsiz tarihliyor (madde yazarı Mehmet Öz). Uluslararası konsensüs ve TDV'nin
kendi bibliyografyasındaki "Osmanlı Belgelerinde Kırım Savaşı: 1853-1856" arşiv
derlemesi 30 Kasım 1853'ü gösteriyor; gün-hassasiyetli tarih bu ikinci kaynağa
dayanıyor, TDV'nin gövde metnindeki kayıp/hasar rakamları (2000+ şehid, 12 gemi,
7 cami, 247 ev, 170 dükkân, 5 Müslüman + 16 Hıristiyan sivil ölü) kullanıldı.
Denetim sonrası: Değişmez 2 hâlâ 451/0, zayıf mükerrer 27'de sabit (yeni madde
çift üretmedi).

🔴 **Bulgu — `olaylar.js:137-138`'deki `kaynak:"kirim-savasi"` ÖLÜ SLUG.**
`islamansiklopedisi.org.tr/kirim-savasi` `<title>`'ı "Arama - TDV İslâm
Ansiklopedisi" — madde yok. Aratıldı: Kırım Savaşı'nın TDV'de müstakil maddesi
YOK; en yakın canlı slug `kirim` (Kırım yarımadası maddesi, savaştan yalnız bir
cümleyle bahsediyor, ayrıntı yok). `olaylar.js` benim dosyam değil, düzeltmedim
— merkez oturuma bildiriyorum. Öneri: kaynak alanı ya `kirim` olarak değişir
ya da "kaynak yok, arşiv derlemesi esas alındı" notuyla bırakılır.

### md.36 — Âli Paşa'nın 1871 vefatı: mükerrer zaten silinmiş, iki tam metin

Bu madde bir önceki turda (merkez oturumun ilk denetim bulgusu üzerine) çözülmüş.
Merkez oturum "hangi iki maddenin çakıştığını ve tam metinlerini bildir" dediği
için `git diff` ile silinen metni geri çıkardım:

**Silinen** (`olaylar_ek7.js`, eskiden ~satır 161):
```
{ t:"1871-09-07", k:"diger", etiket:["siyaset"], b:"Âli Paşa vefat etti",
  gun:"7 Eylül 1871", yer:"İstanbul", kisiler:"Mehmed Emin Âli Paşa",
  d:"Tanzimat döneminin en etkili devlet adamlarından, beş kez sadrazamlık
  yapmış Mehmed Emin Âli Paşa vefat etti. TDV'nin \"Âli Paşa\" maddesine göre
  Islahat Fermanı'nın ilanında ve Paris Antlaşması'nın imzalanmasında başrol
  oynayan Âli Paşa'nın ölümü, Abdülaziz döneminde ıslahatçı çizginin
  zayıflamasına yol açtı.", kaynak:"ali-pasa-mehmed-emin" }
```

**Tutulan** (`olaylar_ek5.js:347`):
```
{ t:"1871-09-07", k:"siyaset", etiket:["siyaset","diplomasi"],
  b:"Sadrazam Âlî Paşa'nın vefatı: Tanzimat kadrosunun sonu",
  gun:"7 Eylül 1871", yer:"İstanbul",
  kisiler:"Mehmed Emin Âlî Paşa, Abdülaziz, Mahmud Nedim Paşa",
  d:"Fuad Paşa'nın 1869'daki ölümünün ardından Tanzimat siyasetini tek başına
  omuzlayan Âlî Paşa'nın vefatıyla, devletin dış siyasetini otuz yıl yöneten
  usta diplomat kuşağı tükendi. Yerine gelen Mahmud Nedim Paşa'nın Rus yanlısı
  ve keyfî idaresi, Abdülaziz'in şahsî yönetimini pekiştirdi. Âlî Paşa'nın
  ölümünden sonraki beş yıl içinde maliye iflas etti, Balkanlar ayaklandı ve
  saltanat değişikliği kaçınılmaz hâle geldi.", kaynak:"ali-pasa-mehmed-emin" }
```

Aynı gün, aynı kişi, aynı TDV kaynağı (`ali-pasa-mehmed-emin`) — gerçek mükerrer,
doğru olan silindi (kısa/genel olan gitti, bağlamlı/geniş olan kaldı). Oturum 2'nin
sorduğu "neden kaçırıldı" sorusuna cevap: iki başlık kelime düzeyinde neredeyse
hiç örtüşmüyor ("Âli Paşa vefat etti" / "Sadrazam Âlî Paşa'nın vefatı: Tanzimat
kadrosunun sonu") — Jaccard eşiği (0.34) bunu yakalayamadı, yalnız md.36'nın
kendisi olan "aynı kişi + aynı gün" ikinci ölçütü yakaladı (zaten `denetle.py`'nin
v3 eklentisinin amacı buydu).

### Bekleniyor (eski not — aşağıda çözüldü)

`OTURUM-4-KRONOLOJI.md` hâlâ yok — Oturum 4 araştırmasını bitirmedi. Gelince
5 maddeyi (Bükreş antlaşması, Rus ilerlemeleri, Cezayir'in adım adım işgali,
Yunan isyanı) işleyeceğim. O ana kadar kendi başıma yeni tarihî iddia üretmiyorum.

---

## Dördüncü tur — md.8, 81'lik S-S listesi, Oturum 4 teslimi (2026-07-30)

### md.8 — başkent maddeleri: KONTROL EDİLDİ, YENİ MADDE GEREKMEDİ

Bursa (`olaylar.js:15`), Edirne (`olaylar.js:25`) ve İstanbul (`olaylar.js:41`)
fetih maddelerinin `d:` metinlerinde "başkent yapıldı" ifadesi zaten var —
ayrı bir olay değil, fethin doğal sonucu olarak aynı maddede anlatılıyor.
Yeni madde eklemedim.

### ⭐ S-S-DEVIR-LISTESI-2026-07-30.md — 81 → 68

En yoğun, en güvenilir kümeden başladım: İlhanlı/Timurlu/Karakoyunlu/Akkoyunlu/
Safevî zinciri + Rus-İran sınır tarihi + İbn Suûd'un Riyad'ı alışı. Hepsi TDV
slug'ı `<title>` ile doğrulanmış, biri (Nadir Şah'ın tahta çıkışı) ve biri
(Riyad'ın alınışı) TDV'nin verdiği gün tablodaki günle **birebir eşleşti** —
tablonun gerçekten sağlam kaynaklı olduğunun doğrulaması.

Eklenen 10 madde (tablodaki 11 satırı kapatıyor, #13+14 tek maddede birleşti):
İlhanlı'nın dağılması (1335) · Timur'un İran'ı alışı (1387) · Kara Yusuf'un
Tebriz'i geri alışı (1406) · Uzun Hasan'ın Karakoyunlu'ya son vermesi (1468) ·
Şah İsmail'in Safevî Devleti'ni kuruşu (1501) · Rusya'nın Derbend'i alışı (1722) ·
Gence Antlaşması: Derbend/Bakü'nün iadesi (1735) · Nadir Şah'ın tahta çıkışı
(1736) · Türkmençay Antlaşması (1828) · İbn Suûd'un Riyad'ı alışı (1902).

Ölçüm: `py arac/denetle_statu.py` → gerçek gün taşıyan maddesiz devir **81 → 68**.
Kaynaklar: `ilhanlilar` · `timur` · `karakoyunlular` · `akkoyunlular` ·
`safeviler` · `derbend` · `nadir-sah--iran` · `revan` · `riyad` — hepsi CANLI.

Yeni bölüm `data/olaylar_ek7.js`'in sonuna "10) YABANCI DEVLETLER ARASI SESSİZ
TOPRAK DEĞİŞİMİ" başlığıyla eklendi; dosyanın önsözündeki "toprak kazanç/kayıp'a
girilmez" kuralı Osmanlı'nın kendi kazanç/kaybı içindir, bu maddeler kapsam dışı
— başlıkta bunu açıkça not ettim ki sonraki okuyan kafası karışmasın.

🔴 **Bulgu — kaynak alanı şeması yalnız TDV'yi destekliyor.** `js/app.js:1112`
`kaynak` alanını doğrudan `islamansiklopedisi.org.tr/` önekiyle linkliyor ve
"TDV İslâm Ansiklopedisi" etiketiyle gösteriyor. Listedeki **kalan 68 maddenin
büyük kısmı** (Lehistan taksimleri, Campo Formio, İtalya birleşmesi, İsveç-
Norveç ayrılığı, Somali/Habeşistan sömürge tarihi gibi TDV kapsamı dışı Avrupa-
içi/sömürge olayları) için TDV slug'ı YOK — kaynak alanını ya yanlış TDV
etiketiyle doldurmam ya da boş bırakıp linki gizlemem gerekir, ikisi de dosyanın
%100 `kaynak:` doldurma geleneğini bozar. **Karar merkezde:** şemaya "TDV dışı
kaynak" için ikinci bir alan (`kaynak_ad`+`kaynak_url` gibi) eklenmesi gerekebilir
— `js/app.js` bende değil, ben ekleyemem. Karar gelene kadar TDV kapsamındaki
maddelerle devam ediyorum.

### Oturum 4'ün OTURUM-4-KRONOLOJI.md teslimi — 9/13 HAZIR işlendi

Slug spot-check yaptım (`ibrail`, `kabakci-isyani` — ikisi de CANLI), sonra 13
HAZIR maddeden işlenebilir olan 9'unu + 1 kaynak düzeltmesini geçirdim:
- 0.2: `kaynak:"kabakci-mustafa"` (ÖLÜ) → `kaynak:"kabakci-isyani"` (CANLI)
- M1, M2, M7, M8, M10, M11, M12, M13: yeni madde (İbrâil'in iki düşüşü, Rusçuk'un
  teslimi, Ahıska'nın terki, Cezayir zinciri — Yelpaze hadisesinden Dayı
  Hüseyin'in sürgününe)
- **M6 EKLENDİ SONRA SİLİNDİ:** `denetle.py --ayrinti` M6'yı ("Rusya'nın savaş
  ilânı") `olaylar_ek5.js:314`'teki mevcut, daha ayrıntılı "1828-1829 Osmanlı-
  Rus Savaşı'nın başlaması" kaydıyla aynı gün + aynı kişiler olarak yakaladı.
  Oturum 4'ün araştırması sağlamdı ama benim dosyaya-geçirme adımım kendi
  korpusumu taramadı — tam da bu turun konusu olan hata sınıfını kendim
  ürettim. Silindi, denetim tekrar temiz.

**İşlemediklerim (Oturum 4'ün kendi işaretiyle):** M3 (Rusçuk zaferi, gün yok),
M4 (Kutayis, kaynak yok), M5 (Sohum, metin çekilmedi), M9 (Varna/Kars, gün yok +
geçici işgal uyarısı), M14 (Mısır donanması, gün teyit bekliyor). Hiçbirine
`YYYY-01-01` yazıp geçmedim.

**Bana ait olmayan 5 düzeltme — merkeze bildiriyorum, kendim uygulayamıyorum:**
| # | Dosya | İş |
|---|---|---|
| 0.1 | `olaylar_ek.js:71` | `kaynak:"bukres-antlasmasi"` (ÖLÜ) → `"bucak"`, `d:` metni Kafkasya'yı eklesin (Oturum 4'ün önerdiği tam metin dosyada) |
| 4.1 | `olaylar.js:132` | Navarin: `t:"1827-10"` → `"1827-10-20"`, `gun:"20 Ekim 1827"` |
| 4.2 | `olaylar.js:134` | `t:"1830-02"` birleşik kaydı SİL (Yunanistan kısmı 1830-02-03'te, Cezayir kısmı yukarıdaki M12/M13'te zaten var) |
| 4.3 | `olaylar_ek4.js:118,122` | Tripoliçe `1825-06-22`→`23`, Missolonghi `1826-04-22`→`23` (TDV ile 1 gün fark) |
| 4.3(Modon) | — | Modon: TDV kendi içinde çelişiyor (Şubat/Mart 1825), karar merkezde |

### 🔴 Yeni bulgu — Fizan mükerreri (bana ait değil)

`denetle.py --ayrinti` ikinci turda 1 sert mükerrer daha yakaladı, benim
maddelerimle ilgisi yok: `olaylar_ek8.js:47` "Fizan'ın Osmanlı tâbiiyetine
girmesi" ile `olaylar_ek9.js:207` "Fizan'ın Osmanlı idaresine bağlanması" —
ikisi de `1577-01-01`, aynı hânedan (Evlâd-ı Muhammed). Muhtemelen Oturum 14
`olaylar_ek9.js`'i yazarken `olaylar_ek8.js`'teki mevcut maddeyi görmedi.
Dosyaların ikisi de bana ait değil, düzeltmedim — Oturum 2/14'e bildiriyorum.

### 🟡 Bilgi — Değişmez 1 şu an İHLAL gösteriyor (bana ait değil)

Bu turun ortasında `yerlesimler.js` 927→939 yerleşime çıktı ve sahipsiz sayısı
34→40'a yükseldi (beklenen 34). Ben `yerlesimler.js`'e hiç dokunmadım; başka bir
oturumun (muhtemelen 13/14/15) sürmekte olan işi. Bilgi amaçlı not ediyorum,
düzeltmeye çalışmadım — dosya bende değil.

### Denetim sonucu (bu turun sonunda)

Değişmez 2: ✓ 452/0. Mükerrer (benim eklediklerim): ✓ 0. Değişmez 1: ✗ (yukarıda
açıklanan, bana ait olmayan sebepten). `SONUÇ: İHLAL VAR` çıkış kodu bu yüzden
1 — kendi payıma düşen kısım temiz.

---

## Beşinci tur — Katalan oku, 639 günlük madde boşluğu (2026-07-31)

⚠️ Bu görev `data/savaslar.js` konusunda geliyor — o da bende değil. Aşağıdaki
maddeyi **yazmadım**, hazırladım; YAMACI uygulayacak. Muhtemel hedef dosya
`data/olaylar_ek.js` (mevcut tek Katalan kaydı orada, satır 90, aynı `kaynak:"bizans"`
zinciriyle).

**Ölçüm doğrulandı:** `savaslar.js:508` — Katalan oku `f:"1303-09-01"`,
`t:"1305-06-01"`. Kronolojide "Katalan" geçen tek madde `olaylar_ek.js:90`,
`t:"1305-06-01"` — okun **bitişine** tarihli. Okun **başlangıcı** (1303 sonbaharı)
639 gün boyunca maddesiz. `yerlesimler.js`'te 1303-09-01 ±45 gün içinde başka
kırılma yok (ölçtüm, node ile) — yani tek madde bu boşluğu kapatacak, ikinci bir
konu birleştirmeye gerek yok.

**TDV doğrulaması (5 madde açıldı, `<title>` ile sınandı, hepsi CANLI):**
- `bizans` — kronolojik iskeletin kaynağı: *"6500 kişilik Katalan birliği...
  1303'te... Türkler'e karşı mücadele etmek üzere Bizans'ın yardımına"* koştu;
  *"1304 yılında... Germiyanoğulları'nın kuşattığı Alaşehir'i... kurtarmıştır"*;
  1305'te Roger de Flor öldürüldü, Trakya yağmalandı. **Gün yok, yalnız yıl.**
- `alasehir`, `germiyanogullari` — kuşatmanın kaldırılışını doğruluyor ama
  🔴 `germiyanogullari` tarihi **1306** olarak veriyor (Yakub Bey'in kuşatması),
  `bizans` ve `manisa` ise **1304** diyor. TDV kendi içinde çelişiyor — `bizans`
  ana kayıt olduğu ve okun `t:1305-06-01` sınırıyla tutarlı olduğu için 1304'ü
  esas aldım, 1306'yı **yazmadım**. Bu satırı sana bildiriyorum, iki tarihten
  birini tercih ettim, karar istersen değiştirilebilir.
- `manisa` — Katalanların 1304'te Manisa'ya geldiğini ama Attalios'un onları
  içeri almadığını ekliyor (ayrı ayrıntı, ana maddeye almadım — konu dışı).
  `gelibolu` — Katalanların Anadolu'daki faaliyetlerinin **ardından** (1304)
  Gelibolu'ya **yerleştiğini** yazıyor; okun rotası (Gelibolu→Alaşehir) bunu
  çelişki saymaz — 1303 geçişi ile 1304 yerleşimi ayrı aşamalar olabilir, ama
  bu da senin bilmen gereken bir ayrıntı.
- Ölü slug yok bu turda. `katalanlar` slug'ı **YOK** (arama sonuç vermedi),
  `filadelfiya` slug'ı **YOK** (Alaşehir adı kullanılıyor).

**🔴 Tarih notu:** `1303-09-01` benim uydurduğum değil, okun zaten sahip olduğu
tarih — TDV yalnız yıl veriyor (`"1303 yılı"`), aya/mevsime dair bir şey söylemiyor.
Talimatına göre `gun:"1303 sonbaharı"` yazıp `t:`'yi okun kendi başlangıcıyla
(1303-09-01) hizaladım; bu bir uydurma değil, okun MEVCUT tarihini açıklayan bir
madde.

**Önerilen madde (kopyala-yapıştır hazır):**
```js
{ t:"1303-09-01", k:"savas", etiket:["savas"], b:"Katalan Kumpanyası'nın Bizans hizmetine girip Anadolu'ya geçişi", gun:"1303 sonbaharı", yer:"Gelibolu — Batı Anadolu", kisiler:"Roger de Flor, II. Andronikos", d:"~6500 kişilik Katalan paralı asker bölüğü, Türklere karşı savaşmak üzere II. Andronikos'un hizmetine girip Anadolu'ya geçti. Ertesi yıl Germiyanoğulları'nın kuşattığı Alaşehir'i kurtaracaklar, 1305'te Roger de Flor'un öldürülmesiyle Bizans'a düşman kesilip Trakya'yı yağmalayacaklardı.", kaynak:"bizans" },
```

Bu madde eklenirse `olaylar_ek.js:90`'daki mevcut kayıtla (1305-06-01) birlikte
okun tüm aralığı (1303-09 → 1305-06) iki uçtan maddeli hâle gelir, 639 günlük
boşluk kapanır.

---

## Altıncı tur — Hicaz: 3 açık kırılma + kaçırılırsa açılacak 4. boşluk (2026-07-31)

Kaynak: `ARABISTAN-DUZELTMELER.md` §A.1/§A.3 (A5'in daha önce hazırladığı zincir,
sıfırdan araştırmadım). `yerlesimler.js`'i okuyup YAMACI'nın Hicaz paketini
(`f145a2a`) neyi uyguladığını doğruladım:

```
Tâif  s: 1803-02-01 → 1813-05-02  (tek dönem)                — uygulanmış
Mekke s: 1803-04-30 → 1803-08-06, 1806-01-01 → 1813-01-23    — uygulanmış
```

⚠️ **Üç kırılmayı düzeltirsem dördüncü bir boşluk açardım, onu da kapsadım.**
`olaylar_ek5.js:299`'daki mevcut madde (`t:"1803-05-15"`, başlık "Mekke ve Tâif")
şu an **tesadüfen** iki kırılmayı da örtüyor: 1803-02-01'e (Tâif) 103 gün, ama
1803-04-30'a (Mekke'nin İLK düşüşü) yalnız 15 gün — Değişmez 2 bu ikinciyi
"maddeli" sayıyor. Talimattaki gibi bu maddeyi Tâif'e daraltıp tarihini
1803-02-01'e çekersem, 1803-04-30 birden maddesiz kalır. Bu yüzden dört madde
hazırladım, üçü değil — A.3'ün 1/2/3 numaralı önerilerinin hepsi, tek biri değil.

**TDV doğrulaması** (`ARABISTAN-DUZELTMELER.md`'de zaten yapılmış, ben yalnız
kaynak zincirini takip ettim, `<title>` sınaması orada geçmiş): `taif` ve `mekke`
canlı. `taif`: *"Suûd emrindeki ordu Şubat 1803'te Tâif'i ele geçirerek
yağmaladı"* · *"...Tâif'i Vehhâbîler'den geri aldı"* (**2 Mayıs 1813**). `mekke`:
Suûd'un ilk işgali **30 Nisan 1803**, Şerif Gālib'in geri alışı *"12 Temmuz 1803'te
başlayan 25 günlük kuşatma"* (⚠️ **6 Ağustos türetilmiştir**, TDV günü vermiyor —
`yerlesimler.js`'in kendi `t:` değeri zaten bu türetilmiş tarihi taşıyor, ben
uydurmadım, veriyle eşleştirdim).

### 1. DEĞİŞTİR — `olaylar_ek5.js:299` (1803-02-01'e taşınıp Tâif'e daraltılacak)
```js
{ t:"1803-02-01", k:"kayip", etiket:["ayaklanma","toprak-kaybi"], b:"Vehhâbîlerin Tâif'i ele geçirmesi", gun:"Şubat 1803", yer:"Tâif, Hicaz", kisiler:"Suûd b. Abdülazîz, III. Selim", d:"Suûd b. Abdülazîz kumandasındaki Vehhâbî kuvvetleri Hicaz'a yönelik ilk hamlede Tâif'i kuşatıp yağmaladı; şehir kutsal topraklara açılan ilk kapı olarak düştü. Haremeyn'in hâmisi sıfatını taşıyan Osmanlı padişahı için bu, saltanatın meşruiyetini doğrudan sarsan bir darbeydi. İki buçuk ay sonra aynı ordu Mekke'ye yürüyecekti.", kaynak:"taif" },
```
(Eski hâli: `t:"1803-05-15"`, başlık "Mekke ve Tâif", `kaynak:"vehhabilik"` —
A.4'te bu slug "fakir slug" diye işaretlenmişti, `taif`/`mekke`'ye taşınıyor.)

### 2. YENİ — Mekke'nin ilk düşüşü (1803-04-30'u örter, aksi hâlde açılacaktı)
```js
{ t:"1803-04-30", k:"kayip", etiket:["ayaklanma","toprak-kaybi"], b:"Vehhâbîlerin Mekke'yi ilk kez ele geçirmesi", gun:"30 Nisan 1803", yer:"Mekke, Hicaz", kisiler:"Suûd b. Abdülazîz, Şerif Gālib, III. Selim", d:"Tâif'in düşmesinden iki buçuk ay sonra Vehhâbî kuvvetleri Mekke'ye girdi, türbeleri yıktı ve kendi anlayışlarına göre bir düzen kurdu; Şerif Gālib Cidde'ye çekilmek zorunda kaldı. Hac yollarının kapanması bütün İslâm dünyasında yankılandı ve İstanbul'u Mısır valisi Mehmed Ali'den askerî yardım istemeye mecbur bıraktı. Bu ilk hâkimiyet yalnız üç ay sürecekti.", kaynak:"mekke" },
```

### 3. YENİ — 1803-08-06 kırılmasının maddesi (koordinatörün istediği asıl madde)
```js
{ t:"1803-08-06", k:"fetih", etiket:["toprak-kazanc"], b:"Şerif Gālib'in Mekke'yi geri alması", gun:"Ağustos 1803 başı — TDV yalnız kuşatmanın başlangıcını (12 Temmuz) ve süresini (25 gün) veriyor, gün türetilmiştir", yer:"Mekke, Hicaz", kisiler:"Şerif Gālib", d:"Cidde'ye çekilmiş olan Şerif Gālib, topladığı kuvvetlerle Mekke'yi kuşattı ve yirmi beş günlük kuşatmanın ardından şehri Vehhâbîlerden geri aldı; Osmanlı adına hutbe yeniden okundu. Bu ikinci hâkimiyet de kalıcı olmayacak, Suûd kuvvetleri 1806'da şehri tekrar alacaktı.", kaynak:"mekke" },
```

### 4. DEĞİŞTİR — `olaylar_ek4.js:62` (başlıktan "Tâif" çıkar — orası henüz geri alınmadı)
`b:"Mekke ve Tâif geri alındı — hac yolu açıldı"` → **`b:"Mekke geri alındı — hac
yolu açıldı"`**. Gerekçe: bu maddenin tarihi (1813-01-23) yalnız Mekke'nin
`s:t` değeriyle eşleşiyor; Tâif'in gerçek dönüş tarihi 98 gün sonra, 1813-05-02.
Metin zaten yalnız Mekke'yi anlatıyor, tek değişiklik başlıktaki "ve Tâif" ekinin
silinmesi. Diğer hiçbir alana dokunulmuyor.

### 5. YENİ — koordinatörün istediği asıl madde: 1813-05-02
```js
{ t:"1813-05-02", k:"fetih", etiket:["toprak-kazanc"], b:"Tâif'in geri alınması — Hicaz seferinin tamamlanışı", gun:"2 Mayıs 1813", yer:"Tâif, Hicaz", kisiler:"Tosun Paşa, Şerif Gālib", d:"Medine (Aralık 1812) ve Mekke'nin (Ocak 1813) ardından Tosun Paşa kumandasındaki Mısır ordusu son olarak Tâif'i Vehhâbîlerden geri aldı. On yıl süren Suûd hâkimiyeti sona erdi, Hicaz'ın üç kutsal merkezi de yeniden Osmanlı-Mısır denetimine girmiş oldu.", kaynak:"taif" },
```

**Hedef dosyalar bende değil** (`olaylar_ek4.js`, `olaylar_ek5.js`) — beşi de
YAMACI uygulayacak. 1. ve 2. maddeler muhtemelen `olaylar_ek5.js`'e (mevcut
kayıtla aynı yere/civara), 3. ve 5. maddeler `olaylar_ek4.js`'e (1812-1813
Hicaz seferi bloğunun içine, kronolojik sırayı bozmadan) uygun düşer — kesin
konum YAMACI'nın kararı.

Uygulandıktan sonra beklenen: Değişmez 2 açık sayısı 3 → 0, `2s` tavanı
117 → 114'e geri döner.

---

## Yedinci tur — II. Murad'ın feragati (Ağustos 1444) + tarih tutarsızlığı çözüldü (2026-07-31)

**TDV doğrulaması** (`murad-ii` ve `mehmed-ii`, ikisi de `<title>` ile canlı
sınandı): Feragat *"Cemâziyelevvel 848'de (Ağustos 1444) Mihalıç'ta kapıkulu ve
beyler önünde"* — gün yok, yalnız ay. Edirne-Segedin barışının (12 Haziran 1444)
kalıcı sanılmasına dayandırılıyor, tam istediğin bağlantı.

### YENİ MADDE
```js
{ t:"1444-08-01", k:"siyaset", etiket:["siyaset"], b:"II. Murad'ın tahttan feragati — II. Mehmed'in ilk cülûsu", gun:"Ağustos 1444", yer:"Mihalıç ovası (Bursa yakını)", kisiler:"II. Murad, II. Mehmed (Fatih)", d:"İki ay önce imzalanan Edirne-Segedin Antlaşması'nın (12 Haziran 1444) barışı kalıcı kıldığına inanan II. Murad, Mihalıç ovasında kapıkulu ve beyler önünde tahtı on iki yaşındaki oğlu II. Mehmed'e resmen bıraktı. Bu ilk saltanat kısa sürecekti: antlaşma bozulup Macar-Leh ordusu güneye inince Murad üç ay sonra Varna'da orduyu bizzat komuta etmek üzere geri çağrıldı — ama padişahlık sıfatı hâlâ oğlundaydı. Kalıcı ikinci cülûsu, 1446'daki Buçuktepe Vak'ası'nın ardından gerçekleşecekti.", kaynak:"murad-ii" },
```
Muhtemel hedef: `olaylar_ek.js` (1444-06-12 ve 1444-08-01/Semendire kayıtlarının
hemen yanı, kronolojik sırayı bozmadan) — dosya bende değil, YAMACI karar versin.

### 🔴 Tarih tutarsızlığı — ÇÖZÜLDÜ, kronoloji değil `padisahlar.js` yanlış

`murad-ii` maddesi 1446 dönüşünü TAM GÜNLE veriyor: *"II. Murad 8 Safer 850'de
(**5 Mayıs 1446**) Manisa'dan acele yola çıktı"* → *"iki yıllık bir aradan sonra
tekrar saltanata geçmiş oldu"*. Bu, mevcut kronoloji maddesiyle (`olaylar_ek5.js:115`,
`t:"1446-05-05"`, Buçuktepe Vak'ası) **birebir aynı gün** — kronoloji zaten doğru,
metnini de değiştirmedim.

Tutarsız olan `data/padisahlar.js`'teki `murad2` ikinci saltanat başlangıcı
(`1446-09`, Eylül) — TDV'nin verdiği günden **4 ay** uzakta. Bu benim dosyam
değil, düzeltmedim; **merkeze bildiriyorum**, `padisahlar.js`'in sahibi kim ise
`1446-05-05`'e çekmesi gerekiyor. `1451-02-18` maddesi ("Beş yıl önce Buçuktepe'de
tahtından indirilen...") zaten 1446-05-05'i esas aldığı için kronoloji tarafında
ek bir tutarsızlık yok — tek düzeltilecek yer `padisahlar.js`.

Bu madde bir kırılma kapatmıyor (Değişmez 2'yi etkilemez), yalnız 1451-02-18 ve
1446-05-05 maddelerinin varsaydığı olayı tamamlıyor.

---

## Sekizinci tur — son açık kırılma (Silifke 1473) + iki madde-tarih hizalaması (2026-07-31)

### 1. Silifke — YENİ MADDE, `t:"1473-01-01"` (kayıttaki tarihle birebir)

**TDV doğrulaması** (`silifke` ✅ canlı `<title>` sınandı, `karamanogullari` da
canlı ama bu ayrıntıyı vermiyor): Silifke 1472'de bir kez Gedik Ahmed Paşa'ya
teslim oldu, **aynı yıl** Karamanoğlu Kasım Bey Akdeniz'deki Haçlı donanmasının
yardımıyla geri aldı. **1473'te**, *Otlukbeli zaferinin ardından*, Fatih oğlunu ve
Gedik Ahmed Paşa'yı bölgeyi kesin ele geçirmekle görevlendirdi; eski Osmanlı
topçularının yardımıyla barut deposu ateşlenip kale hızla düşürüldü.

⚠️ TDV ay/gün vermiyor, yalnız "Otlukbeli sonrası 1473" diyor (Otlukbeli
11 Ağustos 1473) — kayıttaki `1473-01-01` zaten yıl-hassasiyetli yerleşim
takma tarihi (proje kuralı, Ocak'ı işaret etmiyor), **çelişki yok**, tarihi
kaynağına çekmeme gerek kalmadı.

```js
{ t:"1473-01-01", k:"fetih", etiket:["toprak-kazanc"], b:"Silifke'nin kesin fethi — Karamanoğulları'nın son direnişinin kırılması", gun:"1473, Otlukbeli sonrası (TDV ay/gün vermiyor)", yer:"Silifke, İçel", kisiler:"Fatih Sultan Mehmed, Gedik Ahmed Paşa, Kasım Bey", d:"Silifke Kalesi 1472'de bir kez Gedik Ahmed Paşa'ya teslim olmuş, ama aynı yıl Karamanoğlu Kasım Bey, Akdeniz'deki Haçlı donanmasının yardımıyla kaleyi geri almıştı. Otlukbeli zaferinin ardından Fatih, oğlunu ve Gedik Ahmed Paşa'yı bölgeyi kesin olarak ele geçirmekle görevlendirdi; eski Osmanlı topçularının yardımıyla barut deposu ateşlenip kale hızla düşürüldü. Böylece Karamanoğulları'nın Taşeli-İçel dağlarındaki son direnişi kırıldı; beyliğin tasfiyesi 1474'te tamamlanacaktı.", kaynak:"silifke" },
```
Hedef muhtemelen `olaylar_ek5.js` (Otlukbeli/Karaman bloğunun yanı) — dosya
bende değil.

### 2-3. A5'in bulduğu "veri taşındı, madde taşınmadı" sınıfı — iki hizalama

Kural doğru: kırılma tarihi kaydırılınca aynı pakette maddesi de kaydırılmalı.
İkisi de daha önce `ARABISTAN-DUZELTMELER.md` §A.1'de TDV ile doğrulanmıştı,
yeniden araştırmadım, yalnız madde tarafını hizalıyorum:

**`olaylar_ek5.js:301`** — `t:"1805-07-01"` → **`"1805-06-01"`**, `gun:"1805"` →
**`"Haziran 1805"`**, `kaynak:"vehhabilik"` → **`"medine"`** (A.4'te "fakir slug"
diye işaretlenmişti; `medine` maddesi tam alıntıyı veriyor: *"...işgal edip
(Haziran 1805)"*). Başlık/gövde değişmiyor, yalnız bu üç alan.

**`olaylar_ek4.js:58`** — `t:"1812-11-08"` → **`"1812-12-03"`**, `gun:"Kasım 1812"`
→ **`"3 Aralık 1812"`** (TDV `medine`: *"3 Aralık 1812'de Medine geri alındı"*).
Başlık/gövde değişmiyor.

İkisi de bende değil (`olaylar_ek4.js`, `olaylar_ek5.js`), YAMACI uygulasın.

### Yenbu — bilgi alındı, benden ek iş yok

`1811-11-01→1811-09-03` veri tarafı zaten YAMACI'ya gidiyor, madde
(`olaylar_ek4.js`'teki "Hicaz seferi başladı" kaydı) zaten `1811-09-03` günü
anlatıyor — dokunmadım. `1805-07-20` açık borç: benim de TDV'de yalnız yıl
bulduğum aynı sınır (A.1 madde 4'ten hatırlıyorum), kaynak yok, **madde
yazmadım.**

### Beklenen sonuç
Silifke maddesi eklenince Değişmez 2 **3 açık → 0** olmalı (bu turun başında
zaten Hicaz'ın 3'ü kapanmıştı, Silifke depodaki son tekildi). İki madde-tarih
hizalaması Değişmez 2'yi etkilemiyor (ikisi de zaten "maddeli" görünüyordu,
yanlış maddeyle) — yalnız A5'in bulduğu yanlış-eşleşme sınıfını kapatıyor.

### ⚠️ Sonradan not — bu üçü YAMACI'ya değil, doğrudan uygulandı

Koordinatör bu üç işi ilerleme dosyasında bulunca ("yazıldı ama veriye
girmedi") doğrudan `data/olaylar.js`, `data/olaylar_ek4.js`,
`data/olaylar_ek5.js`'e uygulamamı istedi — sıradaki YAMACI adımını
beklemeden. Commit `f0093da`, yalnız bu üç dosya, `py arac/denetle.py` sonrası
`SONUÇ: temiz` (Değişmez 2: 0 açık). Normalde bu dosyalar bende değil; bu
istisna koordinatörün açık talimatıyla ve depo kırmızıyken yapıldı.

---

## Dokuzuncu tur — Girit iki madde + Dalmaçya dört madde + iki eski kalem (2026-08-01, ÜRETİM KOŞARKEN — COMMIT ATILMADI)

⚠️ Koordinatör "veri dondu, `data/olaylar*.js`'e commit atma" dedi (üretim
~18:08'de bitecek). Aşağıdaki hepsi **dosyalara yazıldı, çalışma alanında
bekliyor**, hiçbiri commit edilmedi. `py arac/denetle.py`: Değişmez 2 **0
açık** (Dubrovnik dahil beş yeni kırılma kapandı).

**B) Girit — iki madde, `olaylar.js`, Kandiye fethi maddesinin hemen
ardına:**
- `1692-01-01` Granbosa'nın fethi (TDV `girit`, canlı, yalnız yıl)
- `1715-01-01` Suda ve Spinalonga'nın fethi (TDV `girit`: "1127 (1715) Mora
  seferi sırasında") — **1715-09-07'deki mevcut Çuha Adası maddesine
  bağlamadım**: coğrafya farklı (Kythira ≠ Girit) ve TDV o günü Suda/
  Spinalonga'ya bağlamıyor; §76.1 "komşunun gününü ödünç alma" tam bu
  vakayı yasaklıyor. Yıl hassasiyetinde kaldı.
- İkisi de `fethedilen:` almadı — Suda/Spinalonga/Granbosa kasıtlı olarak
  `yerlesimler*.js`'te yok (OGRENILENLER §82), alan zaten karşılıksız kalırdı.

**A) Dalmaçya — dört + bir madde, `olaylar_ek5.js`:**
`yerlesimler_ek.js`'i okudum (NOKTA EKLEME'nin kendi kaynak notları
satırların üstünde duruyor) — dört tarihin hepsi zaten oradaki `s:`
alanlarıyla birebir eşleşiyordu, kaynak taramamı buna göre ayarladım:
- `1513-01-01` Sin (Sinj)'in fethi — **başta hata sandım**: TDV `livno`
  Sinj'i Gazi Hüsrev Bey'in 1521-22 seferinde sayıyor, 1513 ile 8 yıl
  çelişiyor gibi göründü. `yerlesimler_ek.js:183-184`'teki yorum satırı
  konuyu çözdü: 1513 ayrı, daha erken bir akıncı fethi — Gazi Hüsrev Bey
  henüz sancakbeyi bile değildi. Maddede bu yüzden **Gazi Hüsrev Bey adını
  vermedim**, TDV bu 1513 olayını doğrulamıyor; `kaynak:"dalmacya"` (genel,
  zayıf ama en yakın canlı slug), kisiler boş bırakıldı. ⚠️ Bu, uydurmadan
  kaçınmak için özellikle temkinli yazılmış bir madde — istersen ARAŞTIRMA
  BALKAN/DALMAÇYA daha iyi kaynak bulursa değiştirilsin.
- `1522-05-29` Knin'in fethi (TDV `gazi-husrev-bey`, canlı, yalnız yıl)
- `1537-03-12` Klis'in fethi ve sancağın kuruluşu (TDV `klis`, canlı, yalnız
  yıl — ama fetih+sancak kuruluşunu ayrı ayrı anlatan metin istendiği gibi)
- `1648-03-31` Klis'in Venedik'e kaybı — TDV (`klis`, `ibrahim--padisah`)
  yalnız "1645-1648 arası" diyor, ama `yerlesimler_ek.js:192-193`'teki yorum
  daha kesin bir kaynak veriyor: **31 Mart 1648, Leonardo Foscolo**. Bunu
  kullandım, gun: alanında ikisini de belirttim.

**Eski kalemler:**
- **Dubrovnik `1806-05-27`** — TDV `dubrovnik` (canlı) birebir doğruladı:
  *"27 Mayıs 1806'da Dubrovnik'i zaptederek..."* — depodaki TEK açık
  Değişmez 2 ihlaliydi, şimdi kapandı. `olaylar_ek6.js`'e eklendi.
- **`karlofca-antlasmasi` ölü slug** — `<title>` ile doğrulandı (ölü,
  "Arama" sayfasına düşüyor). İki dosyada (`olaylar.js:104`,
  `olaylar_ek3.js:42`) `kaynak:"karlofca"` (canlı) ile değiştirildi.

**Toplam bu turda dokunulan dosyalar (hepsi commit'siz):** `olaylar.js`,
`olaylar_ek3.js`, `olaylar_ek5.js`, `olaylar_ek6.js`.

⚠️ Değişmez 2s (115/tavan 114) ve 2t (56/tavan 49) şu an tavan üstü — ama bu
sayılar bugün başka oturumların işiyle birkaç kez zaten oynadı (2t tek
başına 62→48→49 arası gezindi), tavanı ben değiştiremem. Girit'in iki
maddesi kesinlikle 2t'ye katkı yapıyor (kırılmasız, kasıtlı) — geri kalanı
başka oturumların eş zamanlı işi olabilir, ayırt edemedim.

**Üretim bitip haber gelince**: bu dört dosyayı `git add` + tek commit'te
göndereceğim, `git diff --cached` ile yalnız bunları doğrulayacağım.
