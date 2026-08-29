# BULGU — Değişmez 2s · 80 açık yabancı kırılma

```
OTURUM   ARAŞTIRMA 2S          TARİH   28 Ağustos 2026
ÖLÇÜM    py arac/denetle.py --ayrinti     (koşu sırasında, arac/ SALT OKUNUR)
TABAN    girdi.yukle() · 2609 nokta · 56 dosya
DURUM    ① DÖKÜM VE SINIFLANDIRMA BİTTİ · ② madde yazımı BAŞLAMADI (izin bekliyor)
```

## 0. TABAN — ve bir kendi kendini sınama

```
Değişmez 2   ✓  524 kırılma ·  0 AÇIK            ← Osmanlı tarafı temiz
Değişmez 2s  ✓  957 kırılma · 80 AÇIK (tavan 121) · 173 KAPSAM DIŞI
Değişmez 2i  ✓   20 kırılma ·  3 açık (tavan 3)
```

🟢 **Dökümü ayrıştırırken 83 satır çıktı, 80 bekliyordum.** Fazladan üçü
`Değişmez 2i`nin satırlarıydı (`1737-10-01` Niş · `1789-10-13` Semendire ·
`1878-09-18` Bihaç) — ayrıştırıcım `2i` başlığından sonrasını okuyordu.
Ayıklandı: **80 gün · 169 kırılma.** Sayı `denetle.py` ile birebir tutuyor.
📌 Bunu yazıyorum çünkü sessizce düzeltilseydi kova sayıları %4 şişecekti.

## 1. 🔴 EN BÜYÜK BULGU: 80'in 59'u YUVARLAK GÜN

```
YUVARLAK  (YYYY-01-01)   59 gün · 128 kırılma      %74
GERÇEK GÜN               21 gün ·  41 kırılma      %26
```

⚠️ **Ve yuvarlak olmak tek başına kusur DEĞİLDİR.** `CLAUDE.md §4` bunu
açıkça meşrû kılıyor: *"Gün bilinmiyorsa `YYYY-01-01` yaz — bu, 'yıl
biliniyor, gün bilinmiyor' demenin kabul edilmiş yoludur."*

⇒ O hâlde asıl soru *"yuvarlak mı"* değil:
**bir gündeki noktalar TEK BİR OLAYIN parçaları mı, yoksa ALAKASIZ olaylar
aynı 1 Ocak'a mı yığılmış?**

## 2. AYIRAN ÖLÇÜM — iki ölçüt

```
ölçüt A   o günde kaç AYRI kimlik geçişi var        (X→Y çifti sayısı)
ölçüt B   noktalar birbirinden kaç km uzakta        (en uzak çift)
```

| kova | ölçüt | gün | ne demek |
|---|---|---|---|
| 🟢 **TEK OLAY** | 1 geçiş · yayılım < 900 km | **40** | tek madde GERÇEKTEN kapatır |
| 🟠 **ŞÜPHELİ** | 2 geçiş, karışık | **25** | tek tek bakılmalı |
| 🔴 **ÇARPIŞMA** | ≥3 geçiş · yayılım > 2000 km | **15** | tek madde kapatamaz — **yazmak YANLIŞI SABİTLER** |

### 🔴 ÇARPIŞMA kovası niçin en değerlisi

ORHANGAZİ'nin uyarısı birebir gerçekleşiyor. Örnekler:

```
1898-01-01  4 geçiş · 16.184 km   Fas→Fransa · →Hollanda Doğu Hint ·
                                  →Fransa · →Qing         (Afrika+Endonezya+Mançurya)
1784-01-01  3 geçiş · 14.044 km   Babür→Maratha · Fransa→Hollanda · →Rusya
1600-01-01  3 geçiş · 12.059 km   Hive→Türkmen · Svahili→Portekiz · →Azuchi-Momoyama
1808-01-01  4 geçiş · 10.970 km   Afgan→Sih · Banten→Hollanda · Hausa→Sokoto · →Kacar
```

⇒ Bunlar **uydurma tarih değil**, projenin kendi `YYYY-01-01` kuralının
farklı oturumlarca bağımsız uygulanmasının **1 Ocak'ta çarpışması.** Ama
sonuç aynı: *bu günlere tek bir madde yazmak, dört ayrı kıtadaki dört ayrı
olayı tek olay gibi göstermek olur.*

🔴 **Ve `Değişmez 2s` bunu ödüllendirir**: madde yazılınca sayaç düşer,
kusur *kapanmış* görünür. Yani **denetimi memnun eden hamle, veriyi
bozan hamledir.** Bu kovaya madde YAZMIYORUM; kararı koordinatöre bırakıyorum.

## 3. 🟢 TEK OLAY (40) — yazılabilir küme, ve çoğu GERÇEK ANTLAŞMA

Bu kovanın 21'i **gerçek gün** taşıyor ve tanınabilir olaylar:

```
1311-03-15  Tırhala · Yenişehir      bizans → katalan      Katalan Kumpanyası
1326-10-09  Beyşehir · Seydişehir    eşrefoğulları → hamid
1344-10-28  Aydın · Çeşme · İzmir    aydin → şövalye       İzmir Haçlı seferi
1358-02-18  Zadar · Nadin · Vrana    venedik → macaristan  Zadar Antlaşması
1510-07-25  Trablus                  hafsî → ispanya
1530-03-24  Malta · Trablus          napoli/ispanya → şövalye
1535-11-01  Milano                   milano dukalığı → ispanya
1591-04-13  Cenne · Gao              songhay → fas         Tondibi sonrası
1658-02-26  Helsingborg · Malmö …    danimarka → isvec     Roskilde Antlaşması
1720-02-24  Cagliari · Sassari       ispanya → sardinya
1768-05-15  Ajaccio · Bastia         ceneviz → fransa      Versailles Antlaşması
1841-10-01  Cübeyl · Katîf · Lahsa   benîhâlid → suûd
1870-09-20  Roma                     papalık → italya      Porta Pia
1887-01-06  Harar · Cîcîga           adal → habeşistan     Çelenko
1897-09-10  Bonga (Kaffa)            kaffa → habeşistan
1903-01-01  Kano · Katsina · Zaria   sokoto → ingiltere
1903-01-15  Sokoto                   sokoto → ingiltere
```

⇒ **En düşük riskli, en yüksek getirili küme burası.** Tarih zaten veride
gün hassasiyetinde; iş yalnız **kaynakla teyit + madde yazımı.**

Kalan 19'u yuvarlak ama **tek geçiş + dar coğrafya**, yani gerçekten tek
olay: Alanya `karaman→alaiye` (1293) · Ordu-Ünye `trabzon-rum→haciemir`
(1350) · Konya-Aksaray-Niğde `ilhanli→karaman` (1366) · Van-Bitlis
`karakoyunlu→akkoyunlu` (1467) · Don bozkırı `kirim→don-kazak` (1570) ve
`don-kazak→rusya` (1721) …

## 4. 🟠 ŞÜPHELİ (25) — tek tek bakılmalı

İki alt cins var ve çareleri **ters**:

```
(a) AYNI OLAY, iki geçiş     1353-01-01  ilhanli→kert · →lur-i-buzurg · →lur-i-kucek
                             1556-01-01  astarhan→rusya · nogay→rusya   (791-1069 km)
                             ⇒ İlhanlı/Astarhan çöküşü — TEK olayın çok ardılı
                             ⇒ tek madde KAPATABİLİR

(b) İKİ AYRI OLAY çakışmış   1356-01-01  Bryansk (Litvanya) + Jeju/Hamhung (Kore)  7.222 km
                             1611-01-01  Ferahâbâd (Safevî) + Hirosaki (Edo)       7.284 km
                             ⇒ tek madde KAPATAMAZ, 🔴 kovasının küçük hâli
```

## 5. 🔴 BÖLGEDE KRONOLOJİ HİÇ YOK — 12 gün

*"En yakın madde"* mesafesi **365 günü aşan** 12 gün var; en uçları:

```
1293-01-01  Alanya                    en yakın madde 1461 GÜN ötede
1349-01-01  Mankup · Montpellier       945 g
1379-01-01  Erzincan · Hîve · …        731 g
1350-01-01  Ordu · Ünye · Cahokia      730 g
1751-01-01  Belh                       712 g
```

⇒ Bunlarda kusur *"madde yanlış"* değil, **o dönemde o coğrafyada hiçbir
madde yok.** `Değişmez 2s`nin en dürüst ölçtüğü şey bu.

## 5.1 🟢 12 ADAY ELENDİ — "MADDE mi eksik, GÜN mü yanlış?" · 29 Ağustos

ORHANGAZİ'nin deseni (`Karahisâr-ı Sâhib 1341 → 1327`, veri düzeltmesiyle
kapandı) şunu sordurdu: *bazı 2s açıkları madde eksikliği değil, yanlış
kırılma günü olabilir mi?* §5'teki 12 aday (en yakın madde > 365 gün)
**kaynak okumadan** elendi.

**Ölçüt — yalnız veriyle sorulabilen tek soru:**
```
kırılma günü, o gün DOĞAN/ÖLEN kimliğin KÜNYE ÖMRÜNÜN içinde mi?
   künye dışında  →  GÜN (ya da kimlik) yanlış   →  veri düzeltmesi
   künye içinde   →  gün savunulabilir           →  eksik olan MADDE
```
📌 Bu, `CLAUDE.md §3.5`in hayalet-devlet denetiminin **kırılma tarafı**.

**SONUÇ: 12 adayın 11'i TEMİZ — eksik olan MADDE, gün değil.**

```
🔴 1379-01-01   cagatay künyesi 1370-01-01'de BİTMİŞ
                ama veri Hazârasp · Hîve · Köhne Ürgenç · Küngrat'ı
                1379'a kadar `cagatay` gösteriyor  ⇒ 9 YILLIK HAYALET
                (aynı gün `timurlu` künyesi 1370-04-09'da başlıyor ve
                 ✓ ömründe — yani ardıl doğru, ÖNCEKİ kimlik fazla yaşıyor)
                ⇒ MADDE DEĞİL VERİ İŞİ. `Değişmez 4`ün menzili.
🟢 kalan 11     iki kimliğin ikisi de künye ömründe · gün savunulabilir
                1293 · 1348 · 1349 · 1350 · 1368 · 1378 · 1751 · 1752 ·
                1785 · 1887 · 1893
```

### ⚠️ VE ALETİM İKİ YALANCI ALARM VERDİ — kaydediyorum

Ölçüm önce **üç** kusur bildirdi; ikisi **aracın kendi hatasıydı**:
```
1349-01-01  fransa  "🔴 KÜNYE 987-01-01'te BAŞLIYOR"     ← YANLIŞ ALARM
1785-01-01  fransa  aynı                                  ← YANLIŞ ALARM
```
Sebep: karşılaştırmayı **dizgi olarak** yapıyordum ve `"987-01-01" <=
"1349-01-01"` sözlük sırasında **YANLIŞ** (çünkü `"9" > "1"`). Yani üç
haneli yıl taşıyan her künye — `fransa` 987, `bizans` 330 — sahte kusur
üretiyor.
📌 `§11`in *"doğru şeyi ölçüp ALETİN yalan söylemesi"* sınıfı. Sayı
düzeltildi: **3 kusur → 1 kusur.** Alarm bildirilmeden önce yakalandı;
bildirilseydi `fransa`nın iki dönemi boşuna araştırılacaktı.
⇒ Ders: **tarih karşılaştırması dizgi ile yapılmaz** — bu külliyatta
zaten dört haneli yıl varsayımı var ve o varsayım sessiz.

## 6. ÖLÇMEDİKLERİM — açıkça

```
· Hiçbir KAYNAK okunmadı. Bu belge bir VERİ DÖKÜMÜDÜR, tarihî hüküm değil.
· Üye listelerini `s:` dönem sınırlarından çıkardım; denetle.py'nin
  KAPSAM DIŞI süzgecini (>2014 km) TEKRARLAMADIM ⇒ bazı günlerde
  listelediğim nokta sayısı, denetimin `n=` sayısından FAZLA.
  Yani üye listem ADAY kümesidir, kapsam-içi küme değil.
· `1700-01-01` (n=3) için üye çıkaramadım — kırılma dönem BAŞI değil SONU
  olabilir. Tek başına ölçülmeli.
· 🔴 ve 🟠 kovalarının ayrımı ÖLÇÜTLE yapıldı (geçiş sayısı + km), tek tek
  tarihî inceleme ile DEĞİL. Eşikler (900 km · 2000 km · 3 geçiş) benim
  seçimim; başka eşik başka dağılım verir.
```

## 7. KOORDİNATÖRE — karar gerektiren üç şey

```
① 🔴 ÇARPIŞMA kovasının 15 gününe madde YAZMIYORUM. Bunlara madde yazmak
   `Değişmez 2s`yi düşürür ama dört kıtadaki dört olayı tek olay gösterir.
   Doğru çare VERİ tarafında: aynı 1 Ocak'ta çakışan olayları AYRI günlere
   ayırmak (kaynak gerektirir) ya da kırılmayı olduğu gibi bırakıp
   denetime bir "yuvarlak gün çarpışması" muafiyeti eklemek.  KARAR SENİN.

② 🟢 TEK OLAY 40'ın 21'i GERÇEK GÜN taşıyor ve tanınabilir antlaşmalar
   (Roskilde · Zadar · Versailles · Porta Pia · Tondibi …). Onarlı gruplar
   hâlinde buradan başlıyorum — itirazın varsa şimdi söyle.

③ `data/olaylar_ek19.js` YOK (ek18'den ek20'ye atlıyor) ama
   `data/yerlesimler_ek19.js` VAR. `ek20` adını verdin; ek19 boşluğu
   başka bir oturuma ayrılmışsa çakışırız — teyit et.
```
