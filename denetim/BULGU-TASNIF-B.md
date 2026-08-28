# BULGU — TASNİF-B

**Oturum:** TASNİF-B (Opus) · **Tarih:** 28 Ağustos 2026
**Şartname:** `oturumlar/TASNIF-BOLUM.md` + `oturumlar/TASNIF.md` +
`oturumlar/ORTAK-PAKET-KURALLARI.md` · koordinatör **ORHANGAZİ**
**Yetki:** YALNIZ ÖLÇÜM VE HÜKÜM. `data/` `arac/` `js/` ve kök `*.md`
dosyalarına **yazılmadı** (`CLAUDE.md §7`, Oturum 2 kuralı).
**Çıktım:** bu dosya + `denetim/HUKUM-TASNIF-B.json` — başka hiçbir şey.

---

## 0. TABAN — şartnamedeki sayı ölçüldü ve düzeltildi

`ORTAK §4`: *"Şartnamende bir sayı varsa önce onu ölç."* Ölçtüm.

```
paket                     satır
parti-emrelic-0010          1
parti-emrelic-0013          2
parti-emrelic-0014          0   ← şartnamede VAR, SINIFLANMADI'da YOK
parti-emrelic-0016          3
parti-emrelic-0017          1
parti-emrelic-0019         28
─────────────────────────────
TOPLAM                     35   (şartname ~36 diyordu)
```

🟢 **`0014` bir hata değil.** `CEVAP.json`ında 9 madde var
(`cozuldu` 6 · `zaten-dogru` 1 · `senin-kararin` 1 · `sirada` 1) ve o tek
`sirada` maddesi (H-0005) **`denetim/kume/renk-kimlik.md`ye sınıflanmış** —
yani `SINIFLANMADI` kovasına hiç girmemiş. Bende yapacak işi yok.

🔴 **İKİ MADDE SAHİPSİZ.** 174'ün tamamını altı oturuma dağıttım:

```
TASNİF    29 · TASNİF-B 35 · TASNİF-C 30 · TASNİF-D 29 · TASNİF-E 34 · TASNİF-F 15
altı oturumun toplamı                                                        172
parti-kasa-0010 (1) + parti-kasa-0012 (1)                                      2  ← SAHİPSİZ
                                                                             ───
                                                                             174 ✓
```
⚠️ Ayrıca **TASNİF-F**'in yükü şartnamede `~36` yazıyor, gerçek **15**.
En büyük sapma orada; o oturum kendi tabanını ölçmezse 21 madde arayacak.
(Tahtaya `M-1398` ile bildirildi.)

**Ölçüm tabanım:** `girdi.GIRDI_DOSYALARI` → **2607 nokta / 56 dosya**
(`py arac/_yer_ara.py`), kronoloji için node ile `olaylar*.js` birleşimi →
**1264 madde**.

---

## 1. KOVALAR — 35 madde

```
🟢 KAPANMIŞ                              1
🔁 TEKRAR (kuyruktan düşer)              4
🔵 KÜMEYE GİT                           23
🔴 YENİ İŞ                               7
                                       ───
                                        35
```

---

## 2. 🟢 KAPANMIŞ — 1 madde

### `0019/H-0016` — Rey · İsfahan · Fars · Kirman → **`cozuldu`**

Devraldığım not **"Rey KAYIT YOK · İsfahan KAYIT YOK"** diyordu. Ölçtüm,
**çürüdü:**

```
Isfahan   32,654 / 51,668  k1
   ilhanli → incu → muzafferi → timurlu → KARAKOYUNLU 1452-01-01→1469-01-01
   → akkoyunlu → safevi → afsar → zend → kacar
Şiraz     29,591 / 52,584   karakoyunlu 1452→1469  ✓
Kirman                       karakoyunlu 1452→1469  ✓
Yezd                         karakoyunlu 1452→1469  ✓
Rey       müstakil kayıt YOK — ama Tahran (35,690/51,390) BİREBİR aynı
          zinciri taşıyor ve Rey'e (35,59/51,43) 12 km
```

⚠️ **Ve aramanın kendisi bir tuzak taşıyordu:** `İsfahan` (noktalı İ) ile
arayınca **0 eşleşme**, `Isfahan` ile **1 eşleşme**. `ORTAK §4.5`in ad
ekseni. Not muhtemelen bu yüzden "yok" demiş.

⇒ Emre'nin şikâyeti (*"Karakoyunluların Rey · İsfahan · Fars · Kirman'ı
alması kronolojide görünüyor ama haritada göstermiyor"*) bugünkü veride
**karşılıksız**. Rey 1220 Moğol yıkımından sonra atlas ufkunda (1281+)
müstakil bir yerleşim değildir; ayrı kayıt gerekmiyor.

---

## 3. 🔁 TEKRAR — 4 madde, kuyruktan düşer

| madde | eşi | gerekçe |
|---|---|---|
| `0016/H-0002` | `0017/H-0001` | aynı coğrafya (Kayseri-Elbistan-Sivas), aynı sebep (Voronoi kaması), aynı çare |
| `0016/H-0005` | `0016/H-0004` | aynı kök: boğaz maskesi |
| `0019/H-0025` | `0019/H-0022` | aynı ölçüm: tâbi gövdelerin etiketlenmemesi |
| `0019/H-0078` | `0019/H-0077` | aynı soru: Van'ın yanındaki pembe gövde |

---

## 4. 🔵 KÜMEYE GİT — 23 madde

| küme | madde |
|---|---|
| **cizim-geometri** | `0013/H-0002` · `0016/H-0004` · `0019/H-0018` · `0019/H-0019` |
| **sahiplik-teyidi** | `0019/H-0001` · `H-0003` · `H-0004` · `H-0008` · `H-0043` · `H-0069` |
| **emilme** | `0017/H-0001` · `0019/H-0026` · `0019/H-0076` |
| **renk-kimlik** | `0019/H-0007` · `0019/H-0077` |
| **icerik-talebi** | `0019/H-0045` · `0019/H-0048` |
| **hareket-tipoloji** | `0019/H-0041` · `H-0046` · `H-0062` |
| **etiketleme** | `0019/H-0056` |
| **degismez2** | `0019/H-0047` |
| *(kümesiz — arayüz)* | `0019/H-0022` · `0019/H-0051` → `js/app.js` |

---

## 5. 🔴 YENİ İŞ — 7 madde, dosyasıyla

| madde | ne gerekiyor | hangi dosya |
|---|---|---|
| `0010/H-0001` | tespih hücrelerine "mesaj yaz" düğmesi | **ATLAS DIŞI** — `ClaudEmre/kutu/kutu.py` |
| `0013/H-0001` | akademik kaynak haritası (üç kademe) | yeni belge · ayrı araştırma oturumu |
| `0019/H-0020` | 1240 Osmanlı maddesine `dunya:`/`kapsam:` + **harita** süzgeci | `data/olaylar*.js` + `js/app.js` |
| `0019/H-0022` | tâbi gövdelere `symbol` (etiket) katmanı | `js/app.js` |
| `0019/H-0023` | "etiketsiz toprak" denetim dalı | `arac/denetle.py` |
| `0019/H-0051` | aktif maddeyi üst paya konumlandırma | `js/app.js` |
| `0019/H-0058` | Böğürdelen kuşatması savaş kaydı | `data/savaslar.js` |

---

# 6. 🔴 ÖLÇÜLDÜ VE DEVRALDIĞIM HÜKÜM ÇÜRÜDÜ — beş vaka

`ORTAK §4`: *"Devraldığın hiçbir rakamı doğrulamadan aktarma."* Beşi
çürüdü, üçü **iş tarifini değiştiriyor.**

### ① `0019/H-0020` — *"hiç başlanmamış"* → **iş büyük ölçüde yapılmış**

Not: *"`data/olaylar*.js` içinde `onem:` alanı **HİÇ YOK** (0 eşleşme)…
hiç başlanmamış… arayüz kısmı ondan sonra 10 dakikalık iş."*

Ölçtüm — **üçü de var:**
```
① VERİ    `dunya:` (1-5) KIRK kronoloji dosyasında yaygın
          kronoloji_anadolu 288 · ingiltere 278 · fransa 214 · balkan 205 …
          `kapsam:"ic"/"dis"` aynı dosyalarda yanı sıra
② ARAYÜZ  index.html:230  <select id="ek-dunya-esik">     ← "yalnız 4-5 göster"
          index.html:239  <input  id="ek-yalniz-dis">      ← iç/dış süzgeci
③ KOD     js/app.js:7269  var dunya = m.dunya != null ? m.dunya
                            : (m.onem != null ? m.onem : 3);
          js/app.js:7270  if (dunya < EK_DUNYA_ESIK) return;
          js/app.js:7271  if (EK_YALNIZ_DIS && m.kapsam !== "dis") return;
```

🔴 **Gerçekten açık olan iki şey:**
```
(a) OSMANLI'NIN KENDİ KRONOLOJİSİ
    data/olaylar*.js  1264 madde · dunya:/kapsam: taşıyan  24  (%1,9)
       olaylar_ek17.js 21 · olaylar_serhat.js 3 · ötekilerin hepsi 0
    ⇒ js/app.js:7094 bu sınırı ZATEN kaydetmiş:
      "Osmanlı EK olarak sunulmuyor — ölçülmüş bir sınır, kapatılmadı … 0/821"
(b) HARİTADA GÖSTER/GÖSTERME
    Emre açıkça "bu dış olayları haritada göster/gösterme" dedi.
    Süzgeç YALNIZ `birlesikTopla()`ya, yani LİSTEYE uygulanıyor. Haritaya DEĞİL.
```
📌 **Notun teşhisi tersine dönüyor:** o *"veri işi, arayüz 10 dakika"*
diyordu; ölçüm *"arayüz hazır, veri %1,9"* diyor.

### ② `0019/H-0022` + `H-0025` — dört *"KAYIT YOK"*un dördü de çürüdü

```
not                          ölçüm (py arac/_yer_ara.py)
Suceava   KAYIT YOK    →   Suçava (Suceava) 47,633/26,250  v:1456-06-01→1775-05-07
Yaş       KAYIT YOK    →   Yaş              47,157/27,601  v:1456-06-01→1878-07-13
Târgovişte KAYIT YOK   →   Tırgovişte       44,925/25,457  v:1462-06-01→1878-07-13
Akkerman  KAYIT YOK    →   Akkirman         46,197/30,343  d:1484-08-04→1812-05-28
```
⚠️ **İkisi ad ekseni tuzağına giriyordu:** `Târgovişte → Tırgovişte`,
`Akkerman → Akkirman` (Osmanlı yazımı). Düz arama ikisini de "yok" gösterir.

⇒ Maddenin **(a) VERİ yarısı KAPANMIŞ.** (b) ARAYÜZ yarısı açık ve onu da
ölçtüm: `js/app.js:875` yalnız `vassal-dolgu` (`type: "fill"`) kuruyor;
`vassal` kaynağı için **bir tane de `symbol` katmanı yok.** Tâbi gövdeler
kendi adıyla etiketlenmiyor — Emre'nin gördüğü eksik tam bu.

### ③ `0019/H-0047` — *"H-0045 ile aynı sınıf"* → **sınıf yanlış**

Not, Trablusşam maddesini Halep/Şam ile aynı kovaya koymuştu
(*başlık ile haritada değişen yer kümesinin örtüşmesi*). Ölçtüm:

```
1516-09-26  "Trablusşam'ın Osmanlı idaresine girişi"
            O GÜN KIRILAN: 1  (yalnız Trablusşam'ın kendisi)

Hama         d: 1516-09-19    ← YEDİ GÜN ÖNCE
Humus        d: 1516-09-21    ← BEŞ GÜN ÖNCE
Trablusşam   d: 1516-09-26
```
⇒ Emre'nin istediği *"Trablusşam maddesinde Hama ve Humus'tan da
bahsedilsin"* **uygulanırsa yanlış olur** — o ikisi aynı gün gelmedi.

🔴 **Ve asıl kusur daha ağır:** Eylül 1516'da `olaylar*.js`te **yalnız iki
madde var** (09-26 Trablusşam · 09-27 Şam). Hama'nın ve Humus'un **kendi
maddesi yok**; ikisi de ±30 gün penceresi içinde Trablusşam maddesine
yapışıyor ve **`Değişmez 2` TEMİZ raporluyor.** ⇒ Bu bir `icerik-talebi`
değil, `degismez2` maddesidir. Emre haklı, sebep sandığından farklı.

### ④ `0016/H-0004` — çare doğru, **hedefi yanlış**

Not, çare (a) için *"maskeye boğaz kesiği … veri değişiyor, kod
değişmez"* diyor ve sahibini `veri-kaynak/` olarak veriyor. Ölçtüm:

```
veri-kaynak/motor_kara.geojson  → MOTORUN ÇIKTISI
git log: "OTOMATIK KOŞU" commit'leriyle her koşuda yeniden yazılıyor
         536e90c · 5f05614 · 910c31c · 6404f8f · 5560b43
```
⇒ Oraya elle atılan bir kesik **bir sonraki koşuda silinir.** Kesik ya
**girdiye** (`veri-kaynak/ne_10m_land.geojson`) ya da `uret_petek.py`ye bir
**aşama** olarak konmalı.

### ⑤ `0017/H-0001` — 🟠 çare **ilan edilmiş, uygulanmamış**

Not dört noktayı **adıyla** öneriyordu. Ölçtüm — **0/4 inmiş:**
```
Pınarbaşı  0 eşleşme        Gürün    0 eşleşme
Sarız      0 eşleşme        Darende  0 eşleşme
(2607 noktalık tam taban · Türkçe/Osmanlı ad ekseni de denendi)
```
Bu, dördüncü kovanın (*"çare ilan edildi ama uygulanmadı"*) ders kitabı
vakası: 20+ gün önce yazılmış, hiçbiri inmemiş, kayıt *"çözülmüş"* gibi
okunuyor.

---

# 7. 🟢 ÖLÇÜLMEMİŞ BIRAKILAN ÜÇ KALEMİ ÖLÇTÜM

Devraldığım notlar üçünde de açıkça *"ÖLÇMEDİM"* diyordu.

### `0019/H-0045` — Halep başlığı · **3 yer eksik, biri Emre'nin de gözünden kaçmış**
```
1516-08-28  "Halep'in Osmanlı hâkimiyetine girişi"   yer: Halep
O GÜN KIRILAN (4): Antakya · Deyrizor · Halep · Rakka
BAŞLIKTA/yer'de GEÇMEYEN (3): Antakya · Deyrizor · Rakka
```
Emre ikisini saymış (Deyrizor · Rakka); **üçüncüsü ANTAKYA** onun da
gözünden kaçmış. Şikâyet canlı ve ölçülebilir.

### `0019/H-0048` — Şam başlığı · **2 yer eksik, ve notun açık bıraktığı ihtimal kapandı**
```
1516-09-27  "Şam'ın (Dımaşk) Osmanlı hâkimiyetine girişi"   yer: Şam
O GÜN KIRILAN (3): Beyrut · Tedmür (Palmyra) · Şam
BAŞLIKTA GEÇMEYEN (2): Beyrut · Tedmür (Palmyra)
```
🔴 Not şu ihtimali bırakmıştı: *"Palmyra Şam'la AYNI GÜN mü geçti, yoksa
noktasızlık yüzünden Şam'ın peteğine mi düşüyor? İkincisi ise bu bir başlık
işi değil NOKTA işidir."* **Ölçtüm:** Tedmür'ün **kendi kaydı var** ve
dönemi 1516-09-27'de **gerçekten başlıyor** ⇒ peteğe düşme değil, gerçek
bir kırılma. **Bu bir başlık işidir.** İhtimal kapandı.

### `0016/H-0004` — boğaz maskesi · **iki maskede de ölçtüm**

`scratchpad/olc_bogaz.py` (shapely + STRtree), altı nokta, iki maske:
```
① veri-kaynak/motor_kara.geojson            3462 bileşen
   Kilitbahir · Çanakkale · Çimpe · Biga · İstanbul · Üsküdar → ALTISI DA #6
② ne_10m_land.geojson + simplify(0.002)     6836 bileşen
   (uret_petek.py:398-407 ile aynı işlem)   → ALTISI DA #0
```
⇒ **Çanakkale ve İstanbul boğazları iki maskede de kesilmemiş.** Kusur
sadeleştirmede değil, **kaynak veride** — Natural Earth 10m Avrupa ile
Anadolu'yu tek parça veriyor.

⚠️ Yan bulgu: Kilitbahir ve Çimpe ölçümde **maske dışı** çıktı (en yakın
bileşene düşürüldü) — 220 m'lik kıyı sadeleştirmesi onları denize itiyor.
Bu ayrı bir kalem, ölçülmedi.

---

# 8. 🔴 BAŞKA İŞE BAĞLI — bekleyen iki engel

### `0019/H-0077` + `H-0078` — tahta **M-0001, on beş gündür cevapsız**
```
M-0001  2026-08-13 22:16  KOORDINATOR → RENK 3  🔴 CEVAP BEKLİYOR
        vade 2026-08-14 12:00 · 🔴 TEYİT BEKLİYOR
        "Van'in yanindaki PEMBE toprak kimin? Olc ve bildir."
        okuyan: RENK 3@22:19          ← okumuş, cevap vermemiş
```
Aynı soru iki kanaldan açık. Yeni ölçüm açılmadan önce o kalem RENK 3'e
yeniden sorulmalı ya da devredilmeli — yoksa **aynı iş iki kez yapılır.**

Renk tarafında ölçtüğüm: `renkler.py:528` safevi `#a56cab` (mor-pembe) ·
`:553` gurcistan `#e020b0` (parlak magenta) — **ikisi de değişmemiş.**

### `0019/H-0019` — `H-0018`in kökü kapanmadan görünür değişiklik üretmez
Boğaz kesiği inmeden Rumeli Hisarı tarihini düzeltmek ekranda hiçbir şey
değiştirmez; karşı yaka zaten komşu peteğiyle boyanıyor. **Sıra: ① maske
② hisar tarihleri**, ve ikisi tek kalemde — yoksa ilk yarı "düzeltildi"
sanılır.

---

# 9. 🔴 KOORDİNATÖRE İKİ SORU — tek satırlık düzeltmeler

`ORTAK §1`: *"Bir maddeyi kapatamıyorsan sebebi üç şıktan biridir."*
İkisinde de sebep **dosya sahipliği** (`CLAUDE.md §7`), benim dosyam değil.

### ① `0019/H-0067` — Fuzûlî anakronizmi · **tek satır**
```
data/olaylar_ek14.js:83   t:"1534-06-01"  "Fuzûlî'nin Bağdat'ın fethi
                                            sonrası Kanûnî'ye kaside sunması"
data/olaylar.js:68        t:"1534-12-04"  "Bağdat'ın fethi — Irakeyn Seferi"
```
*"Fethi sonrası"* denen olay fethin **altı ay öncesine** yazılı. Emre'nin
teşhisi birebir doğru. Çare: tarih `1534-12-04` sonrasına (Kanûnî Bağdat'ta
kışladı; `olaylar_ek14.js:84` "Leylâ vü Mecnûn'un tamamlanması" zaten
`1535-01-01`). ⚠️ TDV `fuzuli` maddesini **okumadım.**

### ② `0019/H-0069` — Halepçe · **tek satır**
```
Halepçe    d: 1534-12-04 → …   ← Bağdat'ın fetih günü
Şehrizor   d: 1554-08-22 → …   ← YİRMİ YIL SONRA
Kasr-ı Şîrîn                    1503→1736 safevi (1534'te Osmanlı DEĞİL)
```
Halepçe, Şehrizor'un **doğusunda** — Osmanlı, arkasında Safevî Şehrizor
dururken ondan daha derindeki bir kasabayı almış görünüyor. Çare: Halepçe'nin
`d:` başlangıcı `1554-08-22`ye. ⇒ Bu düzeltilirse Emre'nin *"Halepçe niçin
enklav"* sorusu **kendiliğinden** kapanır; koridor aramaya gerek kalmaz.
⚠️ TDV `sehrizor` gövdesini **okumadım** (slug'ın CANLI olduğu `CLAUDE.md
§4`te yazılı).

---

# 10. 🟠 YENİ BULGU — `0019/H-0056`, Sahra'da 27 cinssiz boşluk

Emre *"1281-1923 arası tüm yerleşimlerin dizinde ve haritada olduğundan emin
olalım"* demişti. Ölçtüm:
```
Sahra kuşağı kutusu (15-33°K / -17…+33°D)
   nokta                   157      yoğunluk 1,5 nokta / 100.000 km²
   kasitli_bosluk / bos     29
      devletsiz              1
      veri-yok               1
      CİNSİ YAZILMAMIŞ      27      ← %93
```
🔴 Bu, `CLAUDE.md §11`in **on birinci kusur sınıfıdır**: *"doğru öğrenilmiş
bir dersin makinenin göremeyeceği yere yazılması."* Boşluk kaydedilmiş,
**cinsi yapılandırılmış alana yazılmamış** — yani `if` ile sorulamıyor,
harita çizemiyor, denetim göremiyor.

İki ayrı iş çıkıyor: ① Sahra kuşağı için nokta yoğunluğu **hedefi**
(tamamlık ölçütü hâlâ yok) ② 27 kaydın cinsinin yapılandırılmış alana
yazılması.

---

# 11. ÖLÇMEDİĞİM — açıkça işaretliyorum

`ORTAK §4` / `CLAUDE.md §11`: *"ölçmediğini `ölçmedim` diye yaz."*

```
0013/H-0002   çekirdekte "iç sınırın %31,8'i düz" — DEVRALINAN, doğrulamadım
0019/H-0004   "Edirne-Meriç-Elhovo farklı renkte" — bölge örtüsü ihtimali
0019/H-0007   ΔE 25,7 — hex'leri doğruladım, ΔE'yi yeniden hesaplamadım
0019/H-0018   Anadolu/Rumeli Hisarı `d:` başlangıç günleri (kök kapanmadan
              ölçmek yanıltıcı olur)
0019/H-0026   kutum devraldığım ölçümün kutusundan geniş: 13 → 20 farkı
              bir DEĞİŞİM mi kapsam farkı mı, AYIRT EDEMEDİM
              (yük taşıyan sayı aynı: arnavutluk hâlâ 1 nokta)
0019/H-0051   bugünkü davranışı TARAYICIDA görmedim; hüküm KODDAN
0019/H-0062   js/app.js:1985 SAVAS_PENCERE_TABAN/TAVAN — DEVRALINAN
0019/H-0077   görselin tarihi ve pembe alanın koordinatı — okunamadı
her TDV slug'ı  hiçbirini açıp GÖVDESİNİ okumadım (kaynak doğrulaması
              nokta/kronoloji oturumlarının işi)
```
