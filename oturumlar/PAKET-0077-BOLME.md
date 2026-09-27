# PAKET-0077 — 88 maddenin oturumlara bölünmesi

> Emre onayladı (27 Eylül 2026): *"88 maddelik paket onayladım bunları oturumlara
> bölerek sorunları çözelim."* Kaynak: `C:/claudemre/kutu/giden/parti-emrelic-0077/`
> · damga 2026-09-27 10:20 · 88 madde · `CEVAP.json` henüz YOK.
> Kapsama sınavı: `py <scratchpad>/kol77.py` → 88/88 · atanmayan 0 · çift atanan 0.

## 0. Bölme ölçütü DOSYADIR (`CLAUDE.md §7`), konu değil

Ölçüldü — hangi ailenin kaç sahibi olabileceğini dosya düzeni söylüyor:

| aile | yazdığı dosya | paralellik |
|---|---|---|
| ek okuma | **yeni** `data/ekokuma_p77<harf>.js` (kalıp: `ekokuma_p76b..h`) | 🟢 SINIRSIZ — her oturum kendi dosyası |
| sefer oku | **yeni** `data/seferler_p0077.js` (kalıp: `seferler_p0074.js`) | 🟢 katman ZATEN VAR (`index.html` ③b · app.js 184 atıf) — app.js'e dokunmaz |
| nokta / petek | **yeni** `data/yerlesimler_p77_<bölge>.js` (kalıp: `yerlesimler_a78_*`) | 🟢 bölge başına ayrı dosya |
| D sınırı / renk oturması | `data/d_sinirlar_<bölge>.js` (13 bölgesel dosya) | 🟡 bölge başına tek sahip |
| çizim bozukluğu + arayüz | **`js/app.js` (13.914 satır) + `css/style.css`** | 🔴 **TEK SAHİP — bölünemez** |
| renk paleti | `arac/renkler.py` | 🔴 **MOTOR TUZU** (`§9.1`) — yalnız koordinatör, koşuyla toplu girer |

⇒ Dokuz koldan **yalnız biri zorunlu tek** (app.js). Gerisi bir bütçe kararıdır,
bir dosya kısıtı değil. Karar gerekçesi §3'te.

## 1. Kol tablosu — 9 işçi + koordinatör

| kol | madde | adet | yazdığı dosya | devralacağı ölçüm |
|---|---|---|---|---|
| **EKOKUMA-0077-A** | 10, 11, 22, 23, 24, 26, 27, 35, 36, 38, 40, 45 | 12 | `data/ekokuma_p77a.js` | `denetim/EKOKUMA-0076-*` kalıbı |
| **EKOKUMA-0077-B** | 8, 9, 37, 42, 43, 51, 52, 54, 56, 67, 68, 85 | 12 | `data/ekokuma_p77b.js` | aynı |
| **EKOKUMA-0077-C** | 12 (Ermeni meselesi) | 1 | `data/ekokuma_p77c.js` | — |
| **SEFER-OK-0077** | 16, 18, 19, 44, 47 **+ 8, 9, 54'ün ok yüzü** | 5+3 | `data/seferler_p0077.js` | `denetim/SEFER-OK-0070.md` · `-0075.md` |
| **ARAYUZ-0077** 🔴 | 2, 13, 20, 21, 30, 32, 34, 63, 76, 82, 83 **+ 49'un buton yüzü** | 11+1 | `js/app.js` · `css/style.css` · `data/hukuki_sinirlar.js` | `denetim/HARITA-0076.md` + `-YAMA-hukuki_sinirlar.md` |
| **NOKTA-ORTADOGU-0077** | 1, 4, 5, 6, 7, 17, 29, 31, 33, 46, 50, 74, 87 | 13 | `data/yerlesimler_p77_ortadogu.js` | `denetim/SINIR-ARABISTAN-0078-*` (yarım iş) |
| **NOKTA-KAFKAS-0077** | 25, 28, 41, 57, 58, 62, 75, 80 | 8 | `data/yerlesimler_p77_kafkas.js` | — |
| **ISGAL-BATI-0077** | 53, 55, 60, 61, 64, 71, 72, 73, 78, 79, 81 | 11 | `data/yerlesimler_p77_bati.js` + `isg:` kayıtları | — |
| **AVRUPA-SINIR-0077** | 3, 14, 15, 48, 49, 59, 65, 66, 69, 70, 77, 84, 88 | 13 | `data/d_sinirlar_avrupa_orta/bati/asya/ortadogu.js` | `denetim/SINIR-D-*-0077.md` ×8 · `D-RENK-0073-*` ×3 |
| **Z — koordinatör (ben)** | 39 (3 Rusya rengi → `renkler.py`, motor tuzu) · 86 (genel kural) | 2 | `arac/renkler.py` · `arac/denetle.py` · `CLAUDE.md` | — |

**İki yüzü olan 6 madde** (8, 9, 25, 28, 49, 54): bir yüzü ek okuma/veri, öteki
yüzü sefer oku/arayüz. Çift sayılmaz; **ilk kol hükmü yazar, ikinci kol yalnız
kendi dosyasını yazar.** Aksi hâlde iki oturum aynı maddeye iki ayrı hüküm verir.

## 2. 🔴 H-0086 niçin koordinatörde — bu bir madde değil, bir DEĞİŞMEZ

H-0086 + H-0069: *"bir şehrin bölgesi ülke sınırını geçerek yabancı ülke
topraklarına erişemez… genel kural olarak yazalım."* Bu bir çizim düzeltmesi
değil; `denetle.py`ye **yeni bir soru** eklemektir (petek ∩ D-sınır ihlali).
Tek tek maddeye dağıtılırsa dokuz oturum dokuz ayrı yama yazar ve kural hiçbir
yerde yazılı olmaz. ⇒ Kural bende, **uygulaması** AVRUPA-SINIR ve NOKTA kollarında.

## 3. Niçin 9 — ve niçin 12 değil, 5 değil

🔴 **Paralellik token maliyetini DÜŞÜRMEZ, yalnız duvar saatini kısaltır**
(`oturumlar/CEPHANE.md §②`, `CLAUDE.md §7.1`: *maliyet ≈ bağlam × tur*).
Taze oturumun ölçülmüş tabanı **82.561 token**. ⇒ Oturum sayısı, işin
absorbe edebileceği en BÜYÜK sayı değil, dosya kısıtını ve konu yerelliğini
karşılayan en KÜÇÜK sayı olmalıdır.

| vites | oturum | madde/oturum | taban maliyet | ne zaman |
|---|---|---|---|---|
| geniş | 12 | 7,2 | ~991.000 | cephane bol + duvar saati acil |
| **önerim** | **9** | **9,6** | **~743.000** | cephane normal ← **BUGÜN BU** |
| dar | 7 | 12,3 | ~578.000 | limit %50-70 |
| en dar | 5 | 17,2 | ~413.000 | limit %70+ (`§2d`: yeni büyük iş açılmaz) |

🆕 **Cephane ÖLÇÜLDÜ (27 Eylül 07:35, `get_usage`):** Max · 5 saatlik %1 ·
haftalık **%17** · reset 30 Eylül 21:00. ⇒ `§2d`nin *"20x Max, limit rahat →
tam düzen"* satırı yürürlükte; **9 karşılanabilir, dar vitese inmek gerekmiyor.**
(`CEPHANE.md`deki %94 beyanı bayattı — o reset 25 Eylül'de geçmişti.)

**7'ye inerken birleşenler:** ISGAL-BATI + AVRUPA-SINIR (ikisi de 1918-22 batı
cephesi) · EKOKUMA-A + EKOKUMA-B (23 kart tek oturumda; 0076'da EKOKUMA-A 15
kart yapmıştı, yapılabilir ama sıkışır).
**5'e inerken ayrıca:** NOKTA-ORTADOGU + NOKTA-KAFKAS birleşir (21 madde),
EKOKUMA-C (Ermeni) ek okuma koluna girer.
🔴 **Hiçbir vitese `ARAYUZ-0077` katılamaz** — `js/app.js` tek sahiplidir ve
o kol her hâlükârda kendi başına durur.

## 4. Kadro — ölçüldü, hepsi SOĞUK

`list_sessions` (27 Eylül): 40 canlı oturum, **hepsi `isRunning:false`**, en yeni
etkinlik **25 Eylül 15:26** ⇒ `§7.3 ①`e göre **sıcak oturum YOK** (eşik 45 dk).
`get_usage` canlı süreç olmadığı için doluluk ÖLÇÜLEMEZ — bu soğukluğun kanıtı
değil, ölçülemezliğin kanıtıdır.
⚠️ `defter.py tablo` "BOSTA 256" diyor; **bayat**, canlı liste esastır (`F18`).

🔴 **HAZIR KITA HAVUZU YOK — havuz boş değil, havuz YOK.** Emre sordu: *"varolan
hazır kıtalara görev verebilir miyiz?"* Ölçtüm (`list_events`, `§7.2 ①`: ad
boşluk kanıtı değildir):

| oturum | mesaj | gerçekte ne yapmış |
|---|---|---|
| `OPUS HAZIR KITA 2309 0061` (5a77a2b7) | **290** | Kotor/Kotur ölçümü · teslim M-5055 · commit `83b69fd8` |
| `OPUS HAZIR KITA 2309 0061` (7a46cf99) | **279** | KRONO-0076-B: 24/24 madde + 20 ek okuma kartı · M-5043 |
| `OPUS HAZIR KITA 2309 0058` (cf863abe) | **56** | tahta bekçisi işi |

Üçü de **dolu işçi.** Görev alırken adları görev adına çevrilmediği için
(`§7.2 ①` ihlali) listede boş görünüyorlar. ⇒ Bu üçüne iş vermek, dolu bir
işçinin üstüne ikinci iş yığmaktır. Genel kural `CLAUDE.md §7.1 ⑧`e yazıldı:
**gerçekten boş hazır kıta soğuk olsa bile kullanılır; dolu tecrübeli oturum
bilgisi diskte yazılıysa kullanılmaz.** Bugün ikinci şart geçerli.

🔴 **Karar: dokuzu da TAZE.** Gerekçe ölçümle: ilgili soğuk oturumların bilgisi
zaten **diskte yazılı** (`HARITA-0076.md` 21 KB · `SINIR-D-*-0077.md` ×8 ·
`SEFER-OK-0070.md` 14 KB · `D-RENK-0073-*` ×3). Taze oturum o ölçümü **tek dosya
okuyarak** devralır; soğuk ağır oturumu uyandırmak bağlamının TAMAMINI tam
fiyat yeniden ödetir (`§7.3 ②`). Tecrübe devri burada bir mesaj değil, bir
dosya yoludur — ve şartnameye adıyla yazılır.

⚠️ **İki yarım iş devredilecek** (git status): `denetim/SINIR-D-AVRUPA-BATI-0077.md`
değişmiş ve commit edilmemiş · `denetim/SINIR-ARABISTAN-0078-tdv-onbellek/`
izlenmiyor. Sahipleri soğuk. Bu ikisi ilgili kolun şartnamesine **açıkça** girer,
yoksa iş ikinci kez yapılır.

## 5. Sıra — koşu tek kapı olduğu için bu sıra zorunlu

```
① ÖNCE KUYRUK BOŞALTILIR (koordinatör, oturum istemez)
   koşu 15 çıktısı C:/atlas-kosu15'te BEKLİYOR — main'deki donemler.js
   damgası 22 Eylül 11:23. Küçülme açıklanır → main'e alınır →
   uret_devirler.py → denetle.py → YUK-BOLME uygulaması → yayın.
② SONRA dokuz kol PARALEL çalışır — hepsi KENDİ yeni dosyasına yazar.
   Bu safhada koşu YOK, data/ serbest.
③ SONRA TEK KOŞU — 44 maddelik nokta/işgal işinin hepsi bir koşuda iner.
   🔴 §9.1 gereği o koşuya MOTOR-LEGO yamaları da aynı anda girer (tek tuz
   değişimi). Ayrı ayrı koşu istemek 44 maddeyi 44 koşuya bölmektir.
④ ARAYUZ-0077 ve ek okuma kolları koşuya BAĞLI DEĞİL — ②'de bitip yayına
   ①'in ardından inebilirler.
```
📌 `CEPHANE.md §③`: *koşu ucuzdur, madde pahalıdır* — koşu tek Bash çağrısıdır,
token değil CPU yakar. Bütçeyi zorlayan 88 maddenin araştırmasıdır.

## 6. Emre'den istenen — tek şey

**9 taze hazır kıta oturumu.** Model: sekizi Opus, `EKOKUMA-0077-C` (Ermeni
meselesi) Opus — hiçbiri Sonnet değil; sekizi kaynak hükmü veriyor, biri
`js/app.js`e dokunuyor (`§4` küçük model kullanılmaz).
Cephane ölçüldü, sormaya gerek kalmadı (§3). Havuz ölçüldü, boş oturum yok (§4).

## 7. Yolda bulunan ayrı kusur — bekçi çıkış kodu 4 SİSTEMİK

Üç oturumun üçünde de aynı satır: `Background command "Re-arm watcher" failed
with exit code 4`. Koordinatörün kendi bekçisi (`brjq1tzjw`) de aynı kodla
düştü. ⇒ Bu tek bir oturumun arızası değil, **`arac/tahta_bekci.py`nin ya da
onu `run_in_background` ile kuran kalıbın sistemik kusuru.** Dört ayrı oturumda
aynı kod, tesadüf sayılmaz.
🔴 Sonucu ağır: bekçisi ölen oturum tahta mesajıyla UYANMAZ (`§7.2 ⚠️`) —
dokuz kolu dağıtıp bekçileri bu kusurla kurmak, dokuz oturumu sağır
dağıtmaktır. **Kol dağıtımından ÖNCE ölçülmeli.** Boyutu ölçülmedi; kalem
`YAPILACAKLAR.md`e girecek, sahibi koordinatör.
