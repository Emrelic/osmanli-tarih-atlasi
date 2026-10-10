# KASA-HICRI-PROVENANS-1010 — 64 tek ifadeli İÇİNDE: ifade HANGİ maddeden?

Görev: YILDIRIM BAYEZIT (ICINDE kararı (d)) · Araştırmacı: KASA · salt okunur, `data/` DONUK.
Risk sınıfı (tek): ifade tek, ama KOMŞU bir polity'nin maddesinden alıntı (`hamdani-yemen` f ↔ `suleyhiler`).
Yöntem (ölçümden önce sabit):
- **Provenans kaynağı:** eşleşme kaydı (`icinde.json`) ifadenin çevresindeki not metnini taşıyor. Künye notları
  alıntıyı "TDV: <slug>" / "[TDV: <slug>]" / "TDV `<slug>`" ile etiketliyor ⇒ ifadeye EN YAKIN etiket okunur. Madde
  çekilmez.
- **Künyenin kendi maddesi:** künyenin `kaynak` alanındaki İLK TDV slug'ı (ya da `ozet`'teki "madde: X").
- **Sınıflar:**
  - KENDİ (etiket = kendi maddesi) ⇒ risk yok, İÇİNDE kalır.
  - KOMŞU POLITY (başka hânedan/devlet maddesi) ⇒ RİSKLİ, yeniden ölçülür.
  - ÜLKE/ŞEHİR maddesi ⇒ ICINDE (a) kuralıyla: künyenin kendi f/t'si için polity maddesi esas ⇒ RİSKLİ sayılır,
    kendi maddesinde karşılık aranır.
  - ETİKETSİZ (yakında etiket yok) ⇒ ölçülemedi-provenans. Sayılır, İÇİNDE'ye karıştırılmaz.
- Riskli olanlar için künyenin KENDİ maddesi çekilir, aynı olayın hicrî yılı aranır, kesişim kuralı uygulanır.

## 0. ÖNGÖRÜ (ölçümden ÖNCE, 2026-10-10) — kendi aralığım
**Desen:**
- ① Etiketsizlerin çoğu, notun kendisinin "TDV: X" ile başlayıp alıntıyı sonra verdiği tek-kaynaklı künyeler. Bunlar
  aslında KENDİ ⇒ etiket okuma kuralı en yakın etiketi doğru buluyor (%80).
- ② Riskli (komşu + ülke/şehir) olanlar ⚠️ karşılaştırma notu taşıyan künyelerde (%75).
- ③ Yeniden ölçülen riskliler içinden DIŞINDA çıkanlar yine `-01-01` ve yapısal ±1 (%90).
**Büyüklük (kendi kurduğum, desen dar · büyüklük geniş):**
- KENDİ **44 ± 16** · KOMŞU **6 ± 6** · ÜLKE/ŞEHİR **6 ± 6** · ETİKETSİZ **8 ± 8**.
- Yeniden ölçülen riskliden DIŞINDA: **2 ± 2** ⇒ 78 → **80 ± 2**.

## 1. ÖLÇÜM

**Provenans kaydı ELDE VARDI** (koordinatörün şartı karşılandı): künye notları alıntıyı madde adıyla etiketliyor
(`TDV: X` · `[TDV: X]` · `alinti_slug`). Sıra tersine çevrilmedi.
- Otomatik etiket okuyucu: KENDİ 38 · BAŞKA 19 · ETİKETSİZ 7.
- ⚠️ Okuyucu gürültülüydü: "gunu", "hicri", "bitisi", "yalniz" gibi sözcükleri madde adı sandı; `kaynak` alanı
  "TDV:" önekisiz olan künyelerde kendi maddeyi bulamadı. ⇒ BAŞKA + ETİKETSİZ 26 vakanın hepsi elle okundu.
  Gerekirse kendi madde ÇEKİLDİ.

### 1.1 64 tek ifadeli İÇİNDE — provenans dökümü
```
KENDİ maddesi (otomatik)                                         38
ETİKETSİZ → elle: hepsi KENDİ (`alinti_slug` alanı ya da notun tek kaynağı)   7
  suriye-selcuklu f · gazneli f · revvadi t · bavendi t · salgurlu t · alamut-nizari f · musafiri f
BAŞKA → elle: aslında KENDİ (okuyucu kaçırdı / kendi madde aynı değeri veriyor)  13
  karakoyunlu t (karakoyunlular) · sadi f (sadiler) · granada f (nasriler + girnata, gün) ·
  irak-selcuklu f (gün) · harizmsah f, t (harizmsahlar / son hükümdarın maddesi) · inalogullari f (kendi gövde) ·
  mezyedi t (mezyediler) · eyyubi-meyyafarikin t (meyyafarikin "658 (1260)" + eyyubiler listesi 642-658) ·
  derbent-hasimi f, t (Iranica, künyenin kendi akademik kaynağı) · midrari f (midrariler) ·
  ammarogullari f — şehir maddesi `trablusgarp` "727/1327"; KENDİ madde `ammarogullari--trablusgarp` ÇEKİLDİ:
    "…Benî Ammâr (Benî Sâbit) hânedanının temelleri atılmış oldu (727/1327)" ⇒ AYNI ✓
RİSKLİ (dayanak komşu polity ya da şehir maddesi)                            6
```
**Riskli 6 — yeniden ölçüm:**
| uç | dayanak | kendi madde | sonuç |
|---|---|---|---|
| sicilya-emirligi f 0947-01-01 | Fâtımî halifesinin tayini (komşu polity eylemi) | `kelbiler` "(335/947)" + `sicilya` aynı | ✅ İÇİNDE doğrulandı (335 ∩ 947 = 947-01-01…07-18) |
| fatimi t 1171-09-13 | `eyyubiler` (KOMŞU — fatih) "(10 Muharrem 567 / 13 Eylül 1171)" | — | ✅ İÇİNDE kalır: GÜN düzeyi, olay tekil (hilâfetin kaldırılması); komşu dayanağı beyan |
| trablus-kontlugu f 1109-07-12 | `trablussam` (ŞEHİR) "11 Zilhicce 502'de (12 Temmuz 1109) Haçlılar'ın eline geçti" | — | ✅ İÇİNDE kalır: GÜN; şehrin düşüşü = kontluğun kuruluşu (yer olgusu ile polity olgusu aynı) |
| zeyyani t 1553-01-01 | `tilimsan` (ŞEHİR) "960'ta (1553) … kesin biçimde ele geçirildi" | `zeyyaniler` taslak (2,5 KB, "bk."); `abdulvadiler` bitişi H/M ile VERMİYOR (yalnız 1516-1518 Oruç Reis olayları) | ⚪ **ÖLÇÜLEMEDİ-provenans** (değer 960 ∩ 1553 = 1553-01-01…12-07 içinde; ama dayanak şehir maddesi) |
| mekke-serifligi f 0969-01-01 | `mekke` (ŞEHİR) "(358/969)" | polity'nin kendi maddesi bulunamadı (arama yalnız kişi maddeleri: Katâde b. İdrîs, Şerîf Hüseyin …) | ⚪ **ÖLÇÜLEMEDİ-provenans** (değer 358 ∩ 969 içinde) |
| endulus-tavaif t 1110-01-01 | Belensiye'nin Murâbıtlar'a geçişi "(503/1110)" (şehir olayı) | `mulukut-tavaif` dönem sonunu H/M ile VERMİYOR | ⚪ **ÖLÇÜLEMEDİ-provenans** (değer 503 ∩ 1110 = 1110-01-01…07-19 içinde) |

### 1.2 Sayılar
```
64 tek ifadeli İÇİNDE
  doğrulandı (kendi madde / Iranica / gün düzeyi tekil olay)     61
  ÖLÇÜLEMEDİ-provenans (kendi madde o ucu H/M ile tarihlemiyor)    3   zeyyani t · mekke-serifligi f · endulus-tavaif t
  yeni DIŞINDA                                                    0
⇒ 78 dış uç DEĞİŞMEDİ.
1. tur nihai: 145 uç → DIŞINDA 72 · İÇİNDE 69 · ÖLÇÜLEMEDİ 4 (muvahhidler t + 3 provenans)
```
**78 TABAN — sebepler güncellendi:**
- ① 789 künye ölçülemedi.
- ② ~~64 tek ifadeli İÇİNDE doğrulanmadı~~ ⇒ **KAPANDI** (61 doğrulandı, 3 ölçülemedi).
- ③ hânedan-ana maddeleri taranmadı.
⇒ İki adlı sebep kaldı.

### 1.3 Öngörü sınavı
```
DESEN ① etiketsizler aslında KENDİ            %80   7/7 ✓
DESEN ② riskliler ⚠️ karşılaştırma notlarında  %75   3/6 (zeyyani · mekke · endulus-tavaif notları
                                                     alternatif tartışıyor; fatimi · trablus · sicilya değil) ✗ zayıf
DESEN ③ yeni DIŞINDA'lar -01-01 ve ±1          %90   sınanamadı (yeni DIŞINDA yok)
KENDİ 44 ± 16                                        58 ✓ (üst sınıra yakın)
KOMŞU 6 ± 6                                          2 (fatimi · sicilya) ✓
ÜLKE/ŞEHİR 6 ± 6                                     4 riskli + 4 kendisiyle doğrulanan ✓
ETİKETSİZ 8 ± 8                                      7 ✓
DIŞINDA 2 ± 2 ⇒ 80 ± 2                               0 ⇒ 78 ✓ (alt uç, 78 aralıkta)
```

## 2. ③ İSTİYORUM
a) §4 sayısı: **1. tur 145 → DIŞINDA 72 · İÇİNDE 69 · ÖLÇÜLEMEDİ 4**; gece toplamı **78**, TABAN, **iki** adlı
   sebeple (789 ölçülemedi · hânedan-ana maddeleri taranmadı).
b) 3 ölçülemedi-provenans uç için `ic_not`'a dayanağın şehir maddesi olduğu yazılsın (değer değişmez).
c) Sıradaki: hânedan-ana maddeleri (`osmanlilar` · `selcuklular` · `abbasiler` · `fatimiler`). Madde başına
   yöntem; dar kapsam: polity'nin kendi uçları için kendi maddesi, yerin olguları için yer maddesi (ICINDE (a)).
