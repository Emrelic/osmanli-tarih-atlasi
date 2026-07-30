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

### Bekleniyor

`OTURUM-4-KRONOLOJI.md` hâlâ yok — Oturum 4 araştırmasını bitirmedi. Gelince
5 maddeyi (Bükreş antlaşması, Rus ilerlemeleri, Cezayir'in adım adım işgali,
Yunan isyanı) işleyeceğim. O ana kadar kendi başıma yeni tarihî iddia üretmiyorum.
