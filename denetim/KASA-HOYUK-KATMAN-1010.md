# KASA-HOYUK-KATMAN-1010 — Anadolu kutusunda Pleiades'in MÖ tasdikli KENDİ siteleri: höyük katmanı kutuyu açar mı?

Görev: YILDIRIM BAYEZIT (KUR-ANADOLU-147 kararı (a)-(ii), ilk adım) · Araştırmacı: KASA · `data/` DONUK ·
main 46ebbc3c.
Soru: atlasın noktaları değil, **Pleiades kayıtlarının kendisi**. TR-Asya kutusu (31.090 hücre, Trakya hariç,
`motor_kara`) içinde TAVO-HARİÇ MÖ tasdikli kaç site var; kaçı atlasta yok; nokta olarak girselerdi p95 ne olurdu.
Yöntem (ölçümden önce sabit):
- Kaynak: Pleiades toplu dökümü (2026-10-09).
- Kesitte varlık: TAVO-dışı bir dönem etiketinin [başlangıç, bitiş] aralığı kesit yılını İÇERİYOR. "Başlangıçtan
  beri var" kabul EDİLMEZ, çünkü höyükler terk edilir.
- Kesitler: MÖ 3000 / 2000 / 1500 / 1000 / 500 (astronomik -2999 … -499).
- Mükerrer: atlas noktasına ≤3 km.
- Taban: 9 kaynaklı MÖ noktası (KASA-NOKTA-ANADOLU-MO) + KUR-ANADOLU-147 TASDİKLİ kümesi.
- §6.2: bir site birden çok Pleiades kaydında varsa (ör. Melitene 629040 = Arslantepe 25078867, 0,02 km), ≤0,5 km
  kayıtlar tek nesne sayılır.

## 0. ÖNGÖRÜ (ölçümden ÖNCE, 2026-10-10)
**Kutuda TAVO-dışı MÖ etiketli Pleiades kaydı (herhangi bir MÖ kesitinde var):** **900 ± 400**, büyük çoğunluğu
Helenistik/Roma etiketli şehirler (yalnız MÖ 500 ve sonrası).
**Kesit başına site sayısı (TAVO-dışı, aralık içeren):**
MÖ 3000 **60 ± 40** · MÖ 2000 **90 ± 50** · MÖ 1500 **100 ± 50** · MÖ 1000 **130 ± 60** · MÖ 500 **500 ± 250**.
**Atlasta YOK (>3 km):** MÖ 3000 sitelerinin **%85 ± 10'u** (höyükler modern şehirde değil) · MÖ 500 sitelerinin
**%60 ± 15'i**.
**🔴 ASIL SORU — höyük katmanıyla p95:**
- MÖ 3000: **140-220 km** ⇒ **SINIR (%55)** · AÇ %30 · KAPALI %15.
- MÖ 2000 / 1500: **120-190** ⇒ SINIR/AÇ sınırında.
- MÖ 1000: **110-170**.
- MÖ 500: **50-80** ⇒ **AÇ (%95)**.
⇒ Beklenen hüküm: **(ii) KISMEN işler.** MÖ 1. binyılda kesin açılır. MÖ 3000-1500'de Pleiades'in prehistorik
kapsamı (CIGS/OSM höyükleri) Doğu ve İç Anadolu'da seyrek kaldığı için azamî mesafe 300'ü aşar ⇒ SINIR.
Kapıyı açmak için Pleiades dışı bir höyük envanteri (TAY vb.) gerekir — tahminim %60.

## 1. ÖLÇÜM

Zemin: Pleiades dökümleri (`places` / `names` / `locations`, 2026-10-09). Kutu: noktanın en yakın kutu
hücresine ≤3,6 km (0,05° hücrenin yarım köşegeni). **TAVO süzgeci:** names/locations satırının açıklaması
"…from the TAVO Index" ya da yazarı Siewert-Mayer ise etiket dışarıda (Konya örneğinde JSON provenance ile
birebir eşleşiyor). Dönem aralıkları Pleiades sözlüğünden; MS etiketleri ayrıştırılmadı, MÖ kesitlerini
etkilemiyor (kontrol edildi).

### 1.1 Sayılar (①②)
```
kutudaki Pleiades yeri                     3.354
TAVO-dışı MÖ etiketli (≤ MÖ 500 başlangıç)   684        öngörü 900 ± 400 ✓

kesit     site (≤0,5 km tek)   atlasta YOK (>3 km)   ≤3 km   yalnız TAVO ile var olurdu   öngörü (site)
MÖ 3000        37                 35 (%95)            2            4                     60 ± 40  ✓
MÖ 2000        67                 63 (%94)            4            3                     90 ± 50  ✓
MÖ 1500        67                 63 (%94)            4           35                    100 ± 50  ✓
MÖ 1000        98                 90 (%92)            8           20                    130 ± 60  ✓
MÖ  500       462                412 (%89)           50           14                    500 ± 250 ✓
birleşim      552                498                                                    (fiyat etiketi)
MÖ 3000-1000 birleşimi, atlasta yok: 118
```
- "atlasta yok" öngörüsü: MÖ 3000 %85 ± 10 → %95 ✓ (sınırda); MÖ 500 %60 ± 15 → %89 ✗.
  ⇒ **Pleiades'in MÖ siteleri atlas noktalarıyla neredeyse hiç örtüşmüyor**, MÖ 500'de bile. Koordinatörün
  hükmü ("atlasın nokta kümesi modern/ortaçağ kümesi") sayıyla doğrulandı.
- ≤3 km olan 2 MÖ 3000 sitesi: Yumuktepe ↔ atlas Mersin 2,57 km (KUR-ANADOLU-48 ⑧ şüphesi DOĞRULANDI:
  MÖ 6000 etiketi bu höyüğün) · Çukuriçi Höyük ↔ atlas noktası 2,55 km (Efes/Selçuk; AYRI höyük, nokta mükerrer
  sayılmamalı, §6.2). Arslantepe 4,01 km (Milid, zaten ayrı nokta kararı).
- **MÖ 3000'in 37 sitesi:** Alaybeyi Höyük · Ilion/Troia · Bakla Tepe · Beycesultan · Bozkurt · Karkamış ·
  Chatal Höyük (Amuq) · Dağdeviren · Gre Virike · Göltepe · Hamamkarahisar · Hirbemerdon · Horoztepe · Dilkaya ·
  Ilıpınar · Kadıkalesi/Anaia · Kalatepe · Korucutepe · Kumtepe · Tell Tayinat · Kurban Höyük · Küllüoba ·
  Arslantepe · Nakrason · Norşuntepe · Oluz · Oylum · Panaztepe · Seyitömer · Sirkeli · Til-Bašerê · Titriş ·
  Tırmıl Tepe · Yumuktepe · Çadır Höyük · Çobantepe · Çukuriçi. Türlerin 36/37'si settlement/tell/arkeolojik
  site; Ilion'un temsil kaydı "related" hassasiyetli.
- Konum hassasiyeti: site kayıtlarının %77'si `precise`. Yalnız precise ile p95 en çok 6 km değişiyor (aşağıda).

### 1.2 p95 — höyük katmanı NOKTA olarak girerse (③)
```
kesit      siteler + TASDİKLİ taban      yalnız siteler       yalnız precise       öngörü
MÖ 3000    186,1 / 254,8  SINIR          186,1                186,1                140-220 SINIR ✓
MÖ 2000    158,1 / 248,3  SINIR          158,1                158,1                120-190 ✓
MÖ 1500    148,8 / 249,0  AÇ (!)         148,8                151,3 SINIR          120-190 ✓
MÖ 1000    172,4 / 244,8  SINIR          172,4                176,6                110-170 ✗ (biraz üstünde)
MÖ  500     86,9 / 189,2  AÇ             93,5                 99,8                 50-80 AÇ ✗ (biraz üstünde, hüküm ✓)
karşılaştır: TASDİKLİ atlas noktaları (KUR-ANADOLU-147): 620 / 484 / 484 / 455 / 378 — hepsi KAPALI
```
⚠️ MÖ 1500 AÇ **kırılgan**: 148,8 km eşiğin 1,2 km altında. Yalnız precise kayıtlarla 151,3 km ⇒ SINIR.
SINIR saymak doğru.
- Azamî mesafe her kesitte ≤255 km ⇒ hiçbir kesitte KAPALI yok.
- MÖ 1000'in MÖ 1500'den kötü olması gerçek: Hitit dönemi siteleri ("middle-hittite" etiketi MÖ 1200'de biter)
  sahneden çıkıyor, Demir Çağı kayıtları onların yerini tam doldurmuyor.

**MÖ 3000'de en boş bölgeler** (150 km'den uzak hücreler %13,6):
- Pisidya/Isauria — 36-37°K, 31-32°D (Konya güneyi, Toroslar)
- Batı Karadeniz — 41°K, 32-33°D (Bartın/Kastamonu)
- Likya — 36°K, 29°D
- Erzincan-Giresun — 40°K, 38°D
- Artvin — 41°K, 42°D

MÖ 1000'de en boş bölgeler: Erzincan, Bilecik/Bursa (40°K 29-30°D), Kastamonu.

### 1.3 🔴 ASIL CEVAP (④)
**Höyük katmanı kutuyu AÇIYOR MU?**
- **MÖ 500: EVET, AÇ** (87-100 km).
- **MÖ 3000-1000: KAPALI → SINIR'a indiriyor** (149-186 km, azamî ≤255), AÇ'a getirmiyor.
- Atlas noktalarıyla 455-620 km olan TASDİKLİ p95, Pleiades'in kendi siteleriyle **üçte bire** iniyor.
⇒ (ii) **İŞLER ama YETMEZ**. Pleiades bu kutu için MÖ 2.-3. binyılda 37-67 site veriyor; SINIR'dan AÇ'a geçmek
için §1.2'deki boş bölgelerde Pleiades dışı bir höyük envanteri gerekir (öngörüm %60 idi; bu ölçümle
**gerekli**).
- **Fiyat etiketi:** MÖ 3000-1000 kesitleri için **118 yeni nokta** (atlasta yok, Pleiades'te var, TAVO-dışı
  tasdikli) ⇒ SINIR. MÖ 500 dahil tüm MÖ için **498 yeni nokta** ⇒ MÖ 500 AÇ.
- **Bu kaynak setiyle Anadolu MÖ 3000-1000 AÇ olmuyor; SINIR'da kalıyor.** Bu, (i)'nin beyanını değiştirmez,
  ama "hiç açılmaz" yerine **"Pleiades katmanıyla SINIR, AÇ için ek envanter"** der.

## 2. ÖNGÖRÜ ↔ ÖLÇÜM
| öngörü | ölçüm | |
|---|---|---|
| TAVO-dışı MÖ kayıt 900 ± 400 | 684 | ✓ |
| kesit site sayıları (5 kesit) | 37 / 67 / 67 / 98 / 462 | ✓ beşi de aralıkta |
| atlasta yok MÖ 3000 %85 ± 10 | %95 | ✓ (sınırda) |
| atlasta yok MÖ 500 %60 ± 15 | %89 | ✗ |
| p95 MÖ 3000 140-220 SINIR | 186,1 SINIR | ✓ |
| p95 MÖ 2000/1500 120-190 | 158,1 / 148,8 | ✓ |
| p95 MÖ 1000 110-170 | 172,4 | ✗ (2,4 km üstünde) |
| p95 MÖ 500 50-80 AÇ | 86,9 AÇ | ✗ sayı, ✓ hüküm |
| "(ii) KISMEN işler" | MÖ 500 AÇ, MÖ 3000-1000 SINIR | ✓ |

## 3. ③ İSTİYORUM
a) Emre'ye fiyat etiketi:
   - (ii) Pleiades höyük katmanı = **118 nokta → MÖ 3000-1000 SINIR (149-186)** · **498 nokta → MÖ 500 AÇ (87)**.
   - AÇ için ek höyük envanteri gerekir (TAY gibi; erişim/lisans ölçülmedi).
b) **Mersin/Yumuktepe:** KUR-ANADOLU-48'deki ⑧ şüphesi ölçümle doğrulandı. Pleiades 12504073, atlas
   Mersin'e 2,57 km. Höyük katmanı gelirse Yumuktepe **ayrı nokta** olmalı (Milid deseni). Aynısı Çukuriçi için.
c) Katman gelirse nokta modeli: `kur:`/`t:` = TAVO-dışı dönem aralığının ucu (yuzyil/binyil kesinlik);
   "başlangıçtan beri var" DEĞİL. Terk edilen höyükler kesitten çıkmalı (§1.2 MÖ 1000 dersi).
