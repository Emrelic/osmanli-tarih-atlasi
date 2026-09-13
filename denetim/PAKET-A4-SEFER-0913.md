# PAKET-A4-SEFER — 13 Eylül 2026

Sevk: 1.MURAT · `denetim/OLCUM-PAKET-SINIF-0913.md` "A4 · SEFER KAYITLARI" (6 kalem) + ek iş 0021/H-0030 (A1'den devir, 3 kalem).
Yazılan dosya: **yalnız `data/savaslar.js`** (+ bu rapor, + `denetim/ARAC-A4-SEFER-0913.js`). Commit YOK.

## 0. Özet — sayılar (koordinatör düzeltmesinden SONRA)

```
SEFERLER   HEAD 62 → ağaç 74   (+12 net: 14 A4 kaydı; 2'si VAR OLAN kaydın yerine yazıldı)
SAVASLAR   HEAD 171 → ağaç 173 (+2: Bükreş ve Yaş 1594-11-13 isyan işaretleri)
           Çaldıran ⚔ taşındı: 43.91,39.09 → 44.384,39.065 (+ konum_kaynagi)
           Erdel 1594-01-01 ve Kalûgerân 1595-01-01 işaretleri ÇIKARILDI (koordinatör hükmü, §4 pencere şartı)
git diff   data/savaslar.js  148 ekleme / 6 silme
doğrulama  node denetim/ARAC-A4-SEFER-0913.js  → exit 0
           14 SEFERLER + 2 SAVASLAR kaydı şema temiz (sözdizimi · kaynak · f/t biçimi ·
           f<=t [SEFERLER'de t = BİTİŞ, D190] · yol) · çıkarılan 2 işaret ağaçta 0 ·
           Çaldıran ⚔ yeni koordinatta ve sefer okunun ucuyla AYNI nokta
kara       ne_10m_land ile ölçüldü — Rus filosu (tur:deniz) %0,4 kara
anakronizm arac/denetle_anakronizm.py §D: "ölçülebilen tarafların hepsi kendi ömrü içinde" ✓
denetle.py (düzeltmeden ÖNCE koşuldu) SONUÇ "İHLAL VAR" — kaynağı BENDE DEĞİL: mükerrer madde çifti
           "Çıldır Zaferi" ↔ "Ahıska atabegliğinin Osmanlı idaresine girmesi" (olaylar, 1578-08-09).
           O koşuda savaş senkronundaki benim tek açığım Erdel 1594-01-01 (−184 g) idi; işaret artık yok.
```

⚠️ **Denetim notu:** `savas_senkronu()` en yakın maddeye AD bakmadan bakıyor; çıkarılan Kalûgerân
`1595-01-01` işareti alakasız bir `1595-01-01` maddesine (Ahmednagar) yapışıp "kapalı" görünüyordu —
gerçek Kalûgerân maddesi `1595-08-23`, **234 gün** uzakta. (`§11` "denetim var ≠ o soruyu soruyor".)

Koordinatlar: **OpenStreetMap Nominatim** (gazetteer; GeoNames API hesap istediği için kullanılmadı —
her istasyonun OSM kimliği scratchpad `geo*.json`da). Atlas yerleşim noktası **koordinat kaynağı
olarak kullanılmadı**. Deniz yolundaki ara noktalar kaynak istasyonu DEĞİL, yalnız karadan geçmeme
geometrisi (kayıtta ayrıca yazılı). Vikipedi hiçbir tarihte dayanak yapılmadı.

---

## 1. `0033/H-0018` — Yavuz'un 1514 Tebriz güzergâhı (3 kayıt)

| id | f → t | istasyonlar |
|---|---|---|
| `a4-caldiran-gidis-1514` (**var olan "Çaldıran seferi (1514)" kaydının yerine**) | 1514-03-20 → 1514-08-23 | Edirne · Üsküdar · İzmit · Yenişehir · Seyitgazi · Konya · Kayseri · Sivas · Erzincan · Erzurum · Eleşkirt · Çaldıran ovası |
| `a4-tebriz-yuruyus-1514` | 1514-08-25 → 1514-09-06 | Çaldıran · Hoy · Tebriz |
| `a4-tebriz-donus-1514` (tur:cekilme) | 1514-09-15 → 1514-11-24 | Tebriz · Nahçıvan · Revan · Kars · Erzurum · Bayburt · Niksar · Amasya |

🔴 **Eski güzergâh kaynaksızdı ve yanlıştı:** Bolu-Tosya-Amasya-Tokat ("Orta Kol" şablonu). TDV
`caldiran-savasi`: *"Yenişehir, Seyitgazi ve Konya üzerinden Sivas'a"*; TDV `selim-i`: *"İzmit'ten …
Konya'ya, oradan Kayseri üzerinden Sivas'a (2 Temmuz)"*. Eski `t:1514-10-01` de kaynaksızdı.

Kaynaklar: TDV `selim-i` · `caldiran-savasi` · `tebriz` (üçü 200, gövde okundu) · Remzi Kılıç (Prof.,
Erciyes Ü.), *"Yavuz Sultan Selim'in Çaldıran Seferi ve Sonrası Gelişmeler (1514-1517)"*, remzikilic.com.
🟡 **Kılıç sayfası yazarın kendi sitesi, dipnotlu, yayın künyesi sayfada YOK** — `§4` ara bölge.
Yalnız ondan gelenler: Üsküdar (20 Nisan) · Erzurum Kara-konak (5 Ağustos) · Tebriz'e hareket (25 Ağustos)
· Hoy · **15 Eylül çıkış** · Nahçıvan (21 Eylül) · Revan (25 Eylül) · Kars (5 Ekim) · **24 Kasım Amasya**.
TDV'nin *"Tebriz'de dokuz gün kaldı"*sı 6→15 Eylül ile uyumlu.

**Çelişki:** Tebriz'e giriş TDV `caldiran-savasi` **5 Eylül** · TDV `selim-i` + TDV `tebriz` + Kılıç **6 Eylül** → 6 yazıldı.

**Madde:** f 1514-03-20 ✓ · 1514-08-23 ✓ · 1514-09-06 ✓ · 1514-09-15 ✓ · 🔴 **1514-11-24 Amasya'ya varış — MADDE YOK.**

🟢 **SAVASLAR Çaldıran ⚔ TAŞINDI (koordinatör hükmü):**
```
eski   lat:39.09  lon:43.91   Türkiye tarafı (bugünkü Çaldıran ilçesi), kaynaksız
yeni   lat:39.065 lon:44.384  OpenStreetMap Nominatim node/879415755 (Siah Çeşme / Çaldıran, İran)
neden  TDV caldiran-savasi "İran Azerbaycanı'nda Çaldıran ovası" · Kılıç "Makû ile Hoy arasında"
       ⇒ ~40 km doğu. `konum_kaynagi` alanına gazetteer kimliği, eski koordinat ve gerekçe yazıldı.
       Sefer okunun (a4-caldiran-gidis-1514) ucu ile ⚔ artık AYNI noktada (alet sınıyor).
```

**B kalemleri (yerleşim — koşu 10 yüzünden yazılmadı):**
```
Tebriz    veride d:1514-09-06→1514-09-15  ✓ kaynakla UYUMLU, dokunma gerekmez
Erzincan  veride 1514-10-23 (TDV)          ✓
Kemah     veride 1515-05-19 (TDV + Kılıç)  ✓
Bayburt   🔴 YERLEŞİM NOKTASI YOK. Kılıç: fethi Ekim 1514, anahtarlar ~24 Ekim; TDV selim-i: "dönüş sırasında … teslim"
Kiğı      🔴 ÇELİŞKİ: data/yer_yama_zaza.js s:safevi →1515-09-10 · TDV selim-i: 1514 dönüşünde teslim alındı
Tercan · İspir · Doğu Bayezid   Kılıç'ın 1514 fetih listesinde; atlasta ad araması (ad:"…") BULUNAMADI
```

## 2. `0035/H-0081` — Rus filosunun Baltık→Çeşme yolu

`a4-rus-filosu-cesme-1770` · tur:deniz · **1770-01-01 → 1770-07-07** · 52 nokta · kara %0,4

İstasyonlar (adı kaynakta): **Baltık** (TDV `kucuk-kaynarca-antlasmasi`: *"Baltık'tan hareket eden
gemilerini İngilizler'in yardımıyla Akdeniz'e sokmuş"*) · Akdeniz · Mora açıkları · **Anabolu** ·
**Suluca (Hydra)** · **Koyun adaları** · Çeşme (TDV `cesme-vakasi`, 200, gövde okundu) · 6-7 Temmuz (TDV `mustafa-iii`).
⚠️ Kronştad noktası "Baltık"ın **temsilî** noktası — Kronştad adı kabul edilebilir kaynakta okunamadı.
Cebelitarık Boğazı: kaynakta adı yok, Baltık→Akdeniz deniz yolunun tek girişi (coğrafî zorunluluk).

🔴 **Baltık'tan çıkış günü BULUNAMADI.** Akademik sayfalara erişilemedi (prlib.ru güvenlik duvarı,
Britannica 404); "18/29 Temmuz 1769" yalnız Vikipedi/forumda → kullanılmadı. `f` = TDV'nin ilk tarihi
*"1770 yılı başlarında … Akdeniz'e açılmış"* ⇒ **YIL hassasiyeti**; ok 1769 yolculuğunu tarihlemiyor.
(Uygulamanın kırpma kuralı oku zaten sürenin yarısından önce çizmiyor.)

Madde: t 1770-07-07 ✓ (Çeşme baskını 07-06) · 🔴 çıkış (1769) ve Mora'ya varış (1770 başı) — **MADDE YOK.**

## 3. `0035/H-0093` — Napolyon'un Akkâ harekâtı (2 kayıt)

| id | f → t | istasyonlar |
|---|---|---|
| `a4-napolyon-akka-yuruyus-1799` (sonuc:yenilgi) | 1799-02-10 → 1799-03-19 | Kahire · Arîş · Gazze · Yafa · Hayfa · Akkâ |
| `a4-napolyon-akka-cekilis-1799` (tur:cekilme, sonuc:zafer) | 1799-05-20 → 1799-06-14 | Akkâ · Yafa · Gazze · Kahire |

Kaynaklar: TDV `akka` · `cezzar-ahmed-pasa` · `aris` · `gazze` · `yafa` · `hayfa` (hepsi 200) ·
napoleon.org (Fondation Napoléon), *Chronologie de la Correspondance générale* t.2 — Kahire'den çıkış
(10 Şubat) ve Kahire'ye dönüş (14 Haziran) **yalnız burada**.

**Çelişkiler (ara istasyon günleri kayda yazılmadı):**
```
Arîş     TDV aris 18 Şubat            napoleon.org 20 Şubat
Akkâ     TDV akka 18 Mart · TDV cezzar "19 ve 20 Mart" · napoleon.org 19 Mart  → 19 yazıldı
Yafa     TDV yafa "6 Mayıs 1799" 🔴   napoleon.org 7 Mart (TDV günü Akkâ kuşatmasının İÇİNE düşüyor — muhtemel yanlış)
kaldırma TDV cezzar 20 Mayıs          napoleon.org 17 Mayıs (KARAR) → TDV yazıldı
```
Madde: t 1799-03-19 ✓ (03-18) · f 1799-05-20 ✓ · 🔴 **1799-02-10 Kahire'den çıkış · 1799-02-20 Arîş · 1799-03-07 Yafa · 1799-06-14 Kahire'ye dönüş — MADDE YOK.**

## 4. `0035/H-0094` — Vehhâbî askerî hareketleri (4 kayıt, hepsi Dir'iye'den)

| id | f → t | yol | kaynak |
|---|---|---|---|
| `a4-vehhabi-kerbela-1801` (akin) | 1801-04-01 → 1801-04-01 | Dir'iye → Kerbelâ | TDV `kerbela` "1801 Nisan başları" · `suud-b-abdulaziz` "1215/1801" |
| `a4-vehhabi-taif-mekke-1803` (sefer) | 1803-02-01 → 1803-04-30 | Dir'iye → Tâif → Mekke | TDV `taif` "Şubat 1803" · `mekke` "30 Nisan 1803" |
| `a4-vehhabi-medine-1805` (kusatma) | 1805-06-01 → 1805-06-01 | Dir'iye → Medine | TDV `medine` "Haziran 1805" |
| `a4-vehhabi-mekke-1806` (kusatma) | 1805-10-01 → 1806-01-01 | Dir'iye → Mekke | TDV `mekke` "1805 sonları … üç ay kadar … (Ocak 1806)" |

🟡 **Hassasiyet:** TDV dördünde de **AY** veriyor; `f`/`t` ayın 1'i ve `tarih_hassasiyet` alanında
beyan edildi. Yıla indirilmedi, çünkü o gün aynı olayın kronoloji maddesinden **aylar önceye** düşerdi
(`§4` pencere şartı). Mekke 1806 `f` iki cümleden **türetildi** (Ocak 1806 − "üç ay kadar") ve öyle yazıldı.
Dir'iye koordinatı: Nominatim "At-Turaif, Diriyah" (ilk sorgu Kasîm'deki başka bir Diriyah'ı döndürdü).

**Çelişki:** Kerbelâ yılı — TDV `kerbela` · `suud-b-abdulaziz` · `vehhabilik` **1801**; TDV
`abdulaziz-b-muhammed-b-suud` **1802** (ve "Kerkük'ü yağma ettirdi" diyor). Üç madde → 1801.
Madde: dördünün f/t'si maddeli ✓ · 🔴 1805-10 Mekke kuşatmasının başlaması — MADDE YOK.

## 5. `0035/H-0095` — Alemdar Mustafa Paşa'nın İstanbul yürüyüşü

`a4-alemdar-istanbul-1808` · renk #6b2d8a (iç harekât) · **1808-01-01 → 1808-07-19** · Rusçuk · Edirne · Dâvud Paşa sahrası

Kaynaklar: TDV `alemdar-mustafa-pasa` · `mustafa-iv` (ikisi "19 Temmuz 1808") · Mensure Öztürk, Iğdır Ü.
SBD 7 (2015) · Silvart Malhasyan & Aysel Yıldız, Cihannüma III/1 (2017).
🔴 **Rusçuk'tan çıkış günü BULUNAMADI** (dört kaynak okundu) ⇒ `f` YIL.
**Çelişki:** İstanbul'a varış TDV ×2 **19 Temmuz** · Malhasyan & Yıldız 2017 **26 Temmuz** → TDV esas.
Madde: t 1808-07-19 ✓ · 🔴 Rusçuk'tan çıkış — MADDE YOK (gün de yok).

## 6. `0035/H-0098` — Tosun Paşa'nın Hicaz seferi

`a4-tosun-hicaz-1811` · **var olan "Hicaz seferi (1811-13)" kaydının yerine** · **1811-09-01 → 1813-01-23** · Kahire · Yenbu · Medine · Mekke

```
eski   f:1811-09-03 · t:1813-01-24 · kaynak YOK · Süveyş ara noktası
yeni   f:1811-09-01 (AY) · t:1813-01-23 (TDV mekke GÜN) · Süveyş ÇIKARILDI (1811 için hiçbir kaynakta adı yok)
```
Kaynaklar: Kevser Değirmenci, *Sosyal Bilimler Dergisi* 49 (2016): *"Eylül 1811'de Hicaz'a hareket
ettirdi"* · TDV `yenbu` (1811) · `medine` (3 Aralık 1812) · `mekke` (23 Ocak 1813). `f` yıla indirilmedi:
1811-01-01, Tosun'un sefere tayininden (1 Mart 1811, TDV) önce düşer.
Madde: f ✓ (1811-09-03) · t ✓. 🟡 Mevcut madde `1811-09-03` `gun:"Eylül 1811"` — **gün hassasiyeti şişmiş** (A3/kronoloji sahibine).
Eksik ara madde: Safrâ/Cüdeyde bozgunu var (1811-12-01, ay kodlu); kaynağı bu pakette sınanmadı.

---

## 7. EK İŞ `0021/H-0030` (A1'den devir) — 3 kalem

### ① Kalûgerân Muharebesi — SAVASLAR işareti YAZILMADI (koordinatör hükmü)
İlk teslimde `t:1595-01-01` (YIL) ile yazılmıştı; **çıkarıldı.** Gerekçe `§4` pencere şartı: yıl kodu
⚔'yı olaydan aylar önce, seferin kaynaklı başından (1595-07-18) bile önce çizdiriyordu — kaba tarih
olay aralığının dışına düşürüyorsa yazılmaz.
**Kalûgerân sefer okunda (`a4-sinan-eflak-ilerleyis-1595`) İSTASYON olarak duruyor** (44.186,26.001, Nominatim Călugăreni).
🔴 **GÜN BULUNAMADI:** TDV `bukres` yalnız "(1595)"; Alkan 2013 · Özçelik 2025 · Kaçan Erdoğan 2022
gün vermiyor. "23 Ağustos" yalnız mevcut maddede (kaynağı `eflak`, gövdede gün YOK) ve Vikipedi'de; bir
arama özeti "25 Ağustos" dedi, kaynağı okunamadı.
➡️ **Önal, *Koca Sinan Paşa*, s. 390-395 okununca günle geri gelir** (Özçelik 2025'in dayanağı).
Geri gelirken hazır bilgi: TDV `bukres` sonucu *"Yenilen Eflaklılar"* diye veriyor, TDV `eflak` baskını
Mihai'ye veriyor ⇒ `galip` yazılmamalı; TDV'nin *"Bükreş'e 4 mil (yaklaşık 6 km.)"* mesafesi gazetteer
noktasıyla (~30 km güney) uyuşmuyor.

### ② Koca Sinan Paşa'nın 1595 Eflak seferi — SEFERLER (2 kayıt)
| id | f → t | istasyonlar |
|---|---|---|
| `a4-sinan-eflak-ilerleyis-1595` | 1595-07-18 → 1595-10-19 | Rusçuk · Yergöğü · Kalûgerân · Bükreş · Tergovişte |
| `a4-sinan-eflak-cekilis-1595` (cekilme, yenilgi) | 1595-10-19 → 1595-10-24 | Tergovişte · Bükreş · Yergöğü · Rusçuk |

Kaynaklar: Mustafa Alkan, *Akademik Bakış* 7/13 (2013) — 18 Temmuz 1595 yürüyüş · 19 Ekim Tergovişte · **24 Ekim köprü** ·
Emirhan Özçelik, *OTAM* 58 (2025) — Rusçuk · köprüler · Yergöğü · Bükreş · Tirgovişte · çekiliş ·
TDV `bukres` · `yergogu` (1595 Ekim) · `koca-sinan-pasa` ("başarılı olamadı").
TDV slug sınaması: `eflak` · `bogdan` · `erdel` · `koca-sinan-pasa` · `yergogu` · `bukres` · `murad-iii` · `mehmed-iii` **200**;
`mihai` · `mihal` · `mihal-voyvoda` · `kalugeran` · `kalugeran-savasi` · `tergoviste` · `targoviste` · `aron-voyvoda` · `sigismund-bathory` **302 ölü**.
🔴 Tuna geçiş günü BULUNAMADI (`f` = sefere çıkış günü, ok Rusçuk'tan başlar).
**Çelişki:** Bükreş tahliyesi TDV `bukres` "ertesi yıl" · TDV `yergogu` + Alkan + Özçelik **1595 Ekim**.
Madde: 🔴 1595-07-18 sefere çıkış — YOK · t 10-19 / 10-24 → mevcut `1595-10-01` (ay kodlu "Ekim 1595"; Alkan'la 24 Ekim'e inceltilebilir).

### ③ 1594 üç voyvodalık ayaklanması — SAVASLAR `tur:"isyan"` (2 işaret yazıldı, 1 çıkarıldı)
| ad | t | nokta | kaynak |
|---|---|---|---|
| Eflak ayaklanması — Mihail'in Bükreş'te isyanı (1594) | **1594-11-13** | Bükreş | Heper, *GTTAD* 5/10 (2023) · Heper, *Karadeniz İncelemeleri* 30 (2021) |
| Boğdan ayaklanması — Aron Voyvoda'nın Yaş'ta isyanı (1594) | **1594-11-13** | Yaş | Heper 2021 "eş zamanlı" · TDV `bogdan` "Yaş ve Bükreş'te" |
| ~~Erdel'in Kutsal İttifak'a katılışı — Zsigmond Báthory (1594)~~ | ~~1594-01-01~~ | — | **ÇIKARILDI** (koordinatör hükmü, §4 pencere şartı) |

🔴 **Erdel günü bulunamadı:** TDV `bogdan` "1594'te" · Heper 2021 "1594 yılı ortalarında"; 17/28 Ağustos ·
5 Ekim 1594 yalnız Vikipedi/popüler sitede. Yıl kodu işareti Kasım isyanlarından ~10 ay önce çiziyordu
(savaş senkronunda −184 gün açık). Akademik bir gün bulununca geri gelir (nokta önerisi: başkent Alba Iulia, 46.068,23.566 — temsilî).
⚠️ Adlar **kasten ortak kök taşımıyor:** `isyanYayilmaUret()` aynı köklü isyanları "yayılıyor" okuyla
bağlıyor; kaynak yayılma yönü vermiyor.
**Çelişki:** isyanın başı 13 Kasım (Heper ×2) · 13 Ekim (EBSCO Research Starters — kullanılmadı).
Madde: Eflak ✓ (1594-11-13) · Boğdan 🟡 madde aynı gün ama **Bükreş + Bender** anlatıyor, Yaş'ı değil ·
Erdel 🟡 madde `1594-10-05` — günü kaynaksız (`kaynak:"bogdan"` gövdesinde gün yok).
**B:** üç voyvodalık 1594-95'te haritada hâlâ tâbi — ayaklanma yıllarının `v:` kırılması yerleşim işi, koşu sonrası.

---

## 8. Eksik maddeler — toplu (yazılmadı)
```
1514-11-24  Yavuz'un Amasya'ya varışı (Kılıç)
1769/1770   Rus filosunun Baltık'tan çıkışı · Mora açıklarına varışı (gün yok)
1799-02-10  Napolyon Kahire'den Suriye'ye çıktı (napoleon.org)
1799-02-20  Arîş'in düşüşü (napoleon.org; TDV 18 Şubat)
1799-03-07  Yafa'nın alınışı (napoleon.org; TDV "6 Mayıs" çelişkili)
1799-06-14  Napolyon Kahire'ye döndü (napoleon.org)
1805-10     Vehhâbîlerin Mekke kuşatmasının başlaması (türetilmiş ay)
1808        Alemdar'ın Rusçuk'tan hareketi (gün yok)
1595-07-18  Koca Sinan Paşa'nın Eflak seferine çıkışı (Alkan)
1595-10-19  Tergovişte'nin Mihal'e geçişi (Alkan) — mevcut 1595-10-01 maddesi ay kodlu
1595-10-24  Yergöğü köprüsü faciası (Alkan) — aynı madde
```
Günü kaynaksız mevcut maddeler: `1595-08-23` Kalûgerân · `1594-10-05` üç voyvodalık · `1811-09-03` Tosun (ay→gün şişmiş).

## 9. Kararlar
**Verildi ve uygulandı (koordinatör, 13 Eylül 2026):**
1. ✅ Kalûgerân `1595-01-01` ve Erdel `1594-01-01` SAVASLAR işaretleri **ÇIKARILDI** (§4 pencere şartı). Kalûgerân sefer okunda istasyon; Önal s. 390-395 okununca günle geri gelir.
2. ✅ SAVASLAR Çaldıran ⚔ **43.91,39.09 → 44.384,39.065** taşındı; `konum_kaynagi` = OSM node/879415755 + eski koordinat + gerekçe.

**Hâlâ açık:**
3. Çeşme `f:1770-01-01` (Baltık çıkışı kaynaksız, YIL) kabul mü?
4. `savas_senkronu()` ad bakmadan en yakın maddeye eşliyor (Kalûgerân vakası) — denetim sahibine bildirilmeli mi?
