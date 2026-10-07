HAVVA-H0008-UFUK-RENK-1007

# DENETİM — parti-0085 / H-0008 · 7 ve 10 günlük ufuk: renk + "toprak eklenmiyor"

Makine: **HAVVA** (`hostname` ölçüldü) · dal `makine/havva-h0008` · temel `3a5522a5e`
Şartname: `oturumlar/HAVVA-H0008-UFUK-RENK-1007.md` (tamamı okundu).
Bant verisi: `data/ufuk_bantlari_ust.js` + `ufuk_bant_parcalar.js` = KOŞU 21 (`14174ef7d`) çıktısı;
ⓒ ölçümü aynı koşunun ham dosyasından (`C:\atlas-kosu21\data\ufuk_bantlari.js`, 544,6 MB).
Koşu YAPILMADI, motor dosyalarına DOKUNULMADI.

> ⚠️ **Emre'nin 9 görseli bu makinede YOK.** `C:\claudemre\kutu\giden\parti-emrelic-0085\`
> HAVVA'da bulunmuyor (`C:\claudemre` yok; C:\ altında `H-0008*` araması boş döndü).
> Görsellere BAKILAMADI; ⓑ'nin "hangi karede ne işaretlenmiş" sorusu (§2 ③) ÖLÇÜLEMEDİ.
> Yerine aynı görüntüler tarayıcıda yeniden üretildi (1520-07-01, Afrika + Anadolu, dört kip).

---

## 0. ORTAK KÖK — üç kalemin ikisi aynı sözleşme uyuşmazlığından

```
arac/uret_petek.py:8025-8063   bantlar İÇ İÇE TAM BÖLGE ("<=7" = 7 günlük erişimin TAMAMI)
                               (MOTOR-BANT-TAM-1005, main'de, KOŞU 21 bununla koştu)
js/app.js (main)               bandı ARTIŞ HALKASI sayıp A'nın ALTINA, opaklık 1 ile çiziyor
                               ← ARAYUZ-BANT-TAM-1005 (af7d4e99) bd1b97163 ile GERİ ALINDI
```
Motor yorumu bunu önceden yazmıştı (`uret_petek.py:8044`): *"İkisi AYNI koşuda inmeli; yalnız
biri inerse harita iç içe poligonları üst üste çizer."* KOŞU 21 motor yarısıyla koştu, arayüz
yarısı geri alınmış hâlde kaldı ⇒ **tam olan iç içelik ÖLÇÜLDÜ:**

| 1520-07-01 | alan(7∩5)/alan(5) | alan(10∩7)/alan(7) |
|---|---|---|
| KOŞU 21 ham bant | **1,000** | **1,000** |

⇒ 7 seçilince A'nın bütün gövdesi, AYNI RENKTE ve **opaklık 1** ile, yarı saydam A'nın altına
bir kez daha çiziliyor. Yumuşak kipte (A 0,44/0,68) sonuç: A gövdesi opak görünür.

---

## 1. ⓐ YUMUŞAK KİP BANTA UYGULANMIYOR — SINIF (a), ÖLÇÜLDÜ

**Ölçüm aracı:** başsız Edge + Selenium, gerçek `index.html`, yalnız UI yolu (radyo + kutu
tıklaması), değerler `getPaintProperty`/`getLayoutProperty` ile KATMANDAN.
Tarih 1520-07-01 · A: devlet 35 · osmanli 6 · vassal 5 özellik · 7 günde rozet 248 bant özelliği.

**ÖNCE (main, `3a5522a5e`):**

| hâl | ufuk-bant-alan | devlet-dolgu | vassal | himaye | osmanli |
|---|---|---|---|---|---|
| yumuşak · 5 | none · **1** | 0,44 | 0,60 | 0,60 | 0,68 |
| yumuşak · 7 | visible · **1** | 0,44 | 0,60 | 0,60 | 0,68 |
| sert · 7 | visible · 1 | 1 | 1 | 1 | 1 |
| yumuşak · 10 | visible · **1** | 0,44 | 0,60 | 0,60 | 0,68 |

**Sınıf (a) — kip bant katmanını HİÇ ziyaret etmiyor:** `siyasiKipUygula` yalnız `SIYASI_KIP`
sözlüğündeki dört kimliği gezer; `ufuk-bant-alan` orada yok ⇒ `fill-opacity` her kipte 1.
(b) ve (c) değil: bant değeri hiçbir kipte değişmiyor (geri yazılan bir değer yok); z-sırası
sorunu ikincil — §0'daki üst üste binme, (a) düzelse bile A'yı ~0,69 alfaya koyulaştırırdı
(0,44 üstüne 0,44), yani YALNIZ sözlüğe satır eklemek yetmez.

**Çare — KODDA VAR olan, geri alınmış yama:** `af7d4e99` (ARAYUZ-BANT-TAM-1005) bugünkü
`app.js`e `git apply` ile TEMİZ uydu (5 hunk, ofset 191–239 satır, çakışma 0). Çağırdığı her şey
kodda var: `setLayoutProperty`, `setPaintProperty` (ifade kabul eder — ölçüldü, aşağıda),
`ufukAcik()`, `katmanSinifla()`, `input[data-katman="siyasi"]`. Yaptığı üç şey:
1. `ufuk-bant-alan` `SIYASI_KIP`e girer: sert 1 · yumuşak `["match",["get","kim"],"OSMANLI",0.68,0.44]`
2. Bant açıkken A'nın ZEMİN katmanları (11 kimlik, `UFUK_TABAN_KATMANLAR`) gizlenir — bant tabanın
   YERİNE geçer, üst üste binme kalmaz; kapanınca Siyasî kutusuna SORULARAK geri gelir
3. Yalnız SEÇİLEN günün tam bandı çizilir (`b.gun !== ufukGun`), birikim yok

**SONRA (dal, aynı ölçüm):**

| hâl | ufuk-bant-alan | devlet-dolgu | osmanli |
|---|---|---|---|
| yumuşak · 5 | none · match(0,68/0,44) | visible 0,44 | visible 0,68 |
| yumuşak · 7 | **visible · match(0,68/0,44)** | **none** | **none** |
| sert · 7 | visible · 1 | none · 1 | none · 1 |
| sert · 5 | none · 1 | visible 1 | visible 1 |
| yumuşak · 10 | visible · match | none | none |
| sıra ters (önce kip, sonra ufuk) | S2 ile **birebir aynı** | | |

Görsel: yumuşak·7 Afrika artık yumuşak·5 ile aynı tonda (önce: sert·7 ile aynıydı).

⚠️ **Bilinen sınırlar (yamanın kendi beyanı, değişmedi):**
- 7/10 görünümünde A'nın kenar/şerit/hale katmanları da gizlenir (zemin listesi) — tâbi pembesi,
  imparatorluk halesi o görünümde YOK. Bu bir görünüm kararıdır; Emre'nin H-0013 isteği
  ("7 seçince 7'nin TAM haritası") ile uyumlu, ama gözle onaylanmalı.
- Bantta tâbi kimliği ayrı tutulmuyor (yama notu: eflak 6 · bogdan 3 · kirim 5 kayıt) ⇒ tâbiler
  7/10'da kendi renkleriyle, 0,44 ile çizilir.

---

## 2. ⓑ "YUMUŞAK RENK AYARINI KALDIRINCA UFAK TEFEK DEĞİŞİKLİKLER OLUYOR"

**① Katman kümesi TAM tarandı:** 87 katmanın HEPSİ, her biri için `visibility` + okunabilen
bütün boya özellikleri (fill-/line- opacity·color·width, outline, pattern, antialias), yumuşak↔sert
iki yönde (5 ve 7 günde):

```
ÖNCE  yumuşak·7 → sert·7 : 4 fark — devlet/vassal/himaye/osmanli-dolgu fill-opacity. BAŞKA HİÇBİR ŞEY.
ÖNCE  sert·5 → yumuşak·5 : aynı 4 fark.
SONRA yumuşak·7 → sert·7 : 5 fark — aynı 4 + ufuk-bant-alan fill-opacity.
görünürlük farkı: 0 · geometri/kaynak farkı: 0 (kip setData çağırmıyor)
```
**② Sonuç:** kip GEOMETRİYİ değiştirmiyor; değişen yalnız dolgu opaklığı. "Ufak tefek
değişiklik" algısının ölçülmüş adayı **alfa harmanının kendisi**: yumuşak kipte dolgunun ALTINDAKİ
katmanlar görünür hâle gelir — `vassal-serit-dis` ve `himaye-serit-dis`in iç yarıları (4–8 px
şerit, opak dolgu sert kipte örtüyor), Esri altlığının dokusu, çakışan iki sahipliğin harmanı
(`app.js` 2183-2195'teki beyan: sert kipte üstteki sessizce kazanır). Sert kipe geçince bunlar
kaybolur ⇒ kenarlar "oynamış" görünür. **Bu bir kusur değil, kipin yazılı bedeli** — ama
Emre'nin hangi değişikliği kastettiği görseller olmadan DOĞRULANAMADI.
**③** Görseller makinede yok (yukarıda) — hangi karenin ⓑ'ye ait olduğu ÖLÇÜLEMEDİ.

📌 ÖNCE hâlinde 7/10 açıkken ikinci bir "renk dışı" etki vardı ve yama onu da kaldırır: sert
kipte opak A, opak tam bandın üstünde durduğu için bant yalnız artış kuşağında görünüyordu;
yumuşak kipte ise bant A'nın İÇİNDEN de görünüyordu ⇒ kip değişimi 7/10'da A gövdesinin
TONUNU da değiştiriyordu. Yamadan sonra 7/10'da A gizli, tek dolgu var.

---

## 3. ⓒ AFRİKA'DA 7 VE 10 GÜN TOPRAK EKLEMİYOR — ÖLÇÜM (hüküm DEĞİL)

**Öngörüm (ölçümden ÖNCE yazıldı):** Afrika'da 5→7 bant alanı **küçük** (< 1 milyon km²),
Anadolu/Balkanlar'da **çok küçük** (zaten dolu); mekanizma: koordinatörün emilme hipotezi DEĞİL,
KOŞU 21 bayrağı `MOTOR_COL_UFUK_SAAT=56` (çöl hücresinde eşik 56 sa sabit ⇒ çölde 5 = 7 = 10,
`uret_petek.py:2179` "KARAR GEREĞİ") + M2 puan kapısı (`:8101`, yabancı bant ∩ `_puan_bolgesi`).

**KOŞU 21 logundan (yorumdan değil, `C:\atlas-kosu21-kayit\`):**
```
baslangic.txt  MOTOR_YURUYUS_SAAT=40 MOTOR_UFUK_BANT=40,56,80 MOTOR_COL_UFUK_SAAT=56 MOTOR_SUREC_ISCI=2
kosu21.log:476 🏜 ÇÖL KELEPÇESİ AÇIK: çöl ufku 56 saat (282.2 km) · genel ufuk 40 saat (201.6 km)
               · 58 çöl poligonu · kelepçeli hücre 665,634 / 20,880,000 (%3.2)
kosu21.log:479 Ⓑ ufuk bantları: 40 sa, 56 sa, 80 sa · kontur parçaları 2590, 1166, 543
kosu21.log:542 Ⓑ bant ada kuralı: 654 taşma kesildi, 4621 boşta kalan pay verildi (3 bütçe)
kosu21.log:790 Ⓑ bant tavanı: 6 bant-petek kısaldı, 109 km² (3 bütçe)
```
**M1 ve M2** (`denetim/P84-UFUK-BANT-KOD-1006.md:144-147`): M1 = bant eşiği normalleştirilmemiş
alandan (çölde kelepçe 7/10'da büyümez); M2 = puan kapısı yabancı banda da uygulanır. Üçüncü bir
yama o raporda K4 (ölü yerleşim komşuluğu, epok) olarak ADLANDIRILMIŞ ve bu koşuda YOK.

**Ölçüm — 1520-07-01, eşalan (sinüzoidal), bölgeler Natural Earth admin-0:**
Afrika = CONTINENT "Africa" · Anadolu+Balkanlar = TUR GRC BGR ALB MKD SRB MNE KOS BIH CYP CYN ·
üçüncü **İran** (gerekçe: Afrika dışında çöl+dağ karışık, seyrek; kelepçe ile yoğunluğu ayırır).

| | kara km² | çöl payı | ③ nokta / 1000 km² | 5g erişim | ① 5→7 artış | ① 7→10 artış | artışın çöldeki kısmı |
|---|---|---|---|---|---|---|---|
| Afrika | 29.987.020 | %40,1 | **0,032** (947) | 13.230.452 (%44,1) | **260.948** (+%2,0) | 4.369 | 290 / 60 km² |
| Anadolu+Balkanlar | 1.239.392 | %0 | 0,380 (471) | 1.222.327 (%98,6) | 803 | 0 | 0 |
| İran | 1.623.490 | %7,7 | 0,067 (109) | 1.484.794 (%91,5) | 62.831 (+%4,2) | 2.544 | 164 / 32 km² |

(Nokta sayısı `girdi.yukle()` — bütün dönemlerin noktaları; 1520'ye süzülmedi.)

**② SAHİPSİZ PAY** (5 günlük hâlde HİÇBİR bandın içinde olmayan kara):
| | 5g DIŞI kara | çölde | 200 km'den uzak (vekil) | çöl DEĞİL ve 200 km İÇİNDE |
|---|---|---|---|---|
| Afrika | 16.756.570 km² (%55,9) | %35,6 | %12,9 | **10.630.776 km²** |
| Anadolu+Balkanlar | 17.065 | %0 | %0 | 17.065 |
| İran | 138.695 | %3,4 | %8,0 | 123.476 |

**④ BANT VAR MI:** EVET. `<=7` bandı Afrika'da 13.491.338 km² geometri taşıyor (1520'de bölge
kutusundaki 109 kaydın parçası); 7→10'da da kayıt sayısı aynı (109/109/109). Bant BOŞ değil ⇒
"hiç üretilmedi" sınıfı ÇÜRÜDÜ. Bant VAR ve 5 günlüğün TAMAMINI + %2 artışı taşıyor.

### Öngörünün değerlendirmesi — SAYI ve MEKANİZMA AYRI
- **Koordinatörün hipotezi (emilme):** SAYI tarafı tuttu (artış küçük). **MEKANİZMA tarafı
  ÇÜRÜDÜ:** emilme 5 günlük hâlde boşluğu doldurmuş olsaydı 5g dışı kara ~0 olurdu; ölçülen
  Afrika karasının **%55,9'u** 5 günde hiçbir bandın içinde değil (16,8 milyon km²). Ufkun
  ekleyebileceği sahipsiz toprak VAR, ama eklenmiyor.
- **Benim öngörüm:** SAYI tuttu (260.948 < 1 milyon km²). **MEKANİZMA KISMEN TUTTU, ÇOĞU
  AÇIKLANAMADI:** çöl kelepçesi 5g dışı Afrika karasının en çok %35,6'sını açıklar (artışın
  çöldeki kısmı 290 km² — kelepçe bekleneni yapıyor); 200 km vekili en çok %12,9'unu.
  Geriye **çöl olmayan ve bir yerleşime 200 km'den yakın 10,6 milyon km²** kalıyor ve 7 günlük
  ufuk onun yalnız ~%2,5'ini alıyor. ⇒ Kalan payın sebebi BULUNAMADI (aşağıda adaylar).

### Ölçülmemiş adaylar (sıralı, en ucuz ölçüm önce)
1. **Devletsiz toprak:** bant DEVLET başına üretiliyor (`_BANT_AKTIF`: devlet-dönem → aktif
   petekler). 1520'de hiçbir devletin aktif peteği olmayan yerleşimlerin toprağı HİÇBİR bantta
   yoktur ve ufuk onu asla boyamaz. Vekilim "herhangi bir yerleşime 200 km" saydığı için bu payı
   ayıramadı. Ölçüm: 5g dışı karayı devlet-sahipli peteklerin Voronoi hücreleriyle kes.
2. **Puan kapısının KESİN hâli:** vekil yalnız "<200 km" kolunu, bütün dönemlerin noktalarıyla
   ölçtü; gerçek kapı ≥4 puan ve "iki yerleşime <300 km" kollarını, o günün aktif noktalarıyla
   uygular ⇒ seyrek Afrika'da vekilden ÇOK daha sıkı bağlıyor olabilir (P84 raporunda K2: "seyrek
   bölgede 5 = 7 = 10 · BEYAN"). Ölçüm: `_puan_bolgesi`ni 1520 için çağırıp 5g dışı karayla kes.
3. **Bant kendi Voronoi hücresinde büyür** (`_yr_kes(kara_kesik, i, bant=…)`): artış ancak petek
   hücresinin 5 günde kesilen kısmında olabilir; komşu hücrenin boş kısmına taşamaz.

⇒ **Bu bir HÜKÜM değil:** "kusur değil, karar gereği" demek için kalan 10,6 milyon km²'nin
sebebi adıyla ölçülmeli. Çöl kısmı (≤ %35,6) motor yorumunun kendi beyanıyla "KARAR GEREĞİ";
gerisi açık.

---

## 4. KAPILAR

```
node --check js/app.js              0
py arac/denetle_arayuz.py           0  (34 denetim, ölü yok, SONUÇ: temiz)
py arac/denetle.py                  2  — KOŞU 21'in kendi denetle.log'uyla SATIR SATIR AYNI:
    Değişmez 8a ✓ 1505 (tavan 1508) · 8b ✓ 82 (tavan 82) · 8m ✓ 450 hat
    Değişmez 8k ✗ 78 TAM KÖR · 22 yarım · 178 (hat,gün) · defterde olmayan 18 (hat,gün)/11 hat körleşti
    ⇒ çıkış 2'nin TEK sebebi 8k körlüğü; KOŞU 21'den devralındı, bu dalın değişikliği DEĞİL
    (yalnız js/app.js değişti; Değişmez 8 veri katmanını ölçer).
    📌 İlk iki koşuda D8 "ÖLÇÜLEMEDİ" döndü (devletler_harita.js · donemler.js yok — gitignore'lu
       üretilmiş çıktı). KOŞU 21 ağacından (C:\atlas-kosu21\data) bu ağaca KOPYALANDI:
       devletler_harita.js · donemler.js · petek_govde.js — hepsi .gitignore'da, commit'e GİRMEZ.
```
Veriye dokunulmadı ⇒ `renk_olc.py` gerekmedi. Yayın yapılmadı ⇒ `denetle_yayin.py` koşulmadı.

## 5. DEĞİŞEN DOSYALAR
- `js/app.js` — `af7d4e99` (ARAYUZ-BANT-TAM-1005) yeniden uygulandı, içerik birebir (+89/−19)
- `denetim/HAVVA-H0008-UFUK-RENK-1007.md` — bu rapor

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
