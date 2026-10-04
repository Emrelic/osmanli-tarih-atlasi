# 📋 DAĞITIM — 4 Ekim 2026, sabah içtimasından sonra

> Koordinatör: YILDIRIM BAYEZIT · Emre klavyede
> 🔴 **Bu dosyanın tek işi: hangi iş kimde, ve NİÇİN O BOYUTTA.**
> Emre'nin sloganı: **1 token = 1 iş.** Bu dosyadaki her küçültme o slogandan türedi.

---

## 0 · İÇTİMA — canlıdan ölçüldü (`ListAgents`, defterden DEĞİL)

| makine | rol | hâl |
|---|---|---|
| **EMRELIC** | koordinatör · paketleyici · plan | ✅ ben |
| **KASA** | araştırmacı (yalnız metin) | ✅ idle · görev verildi |
| **UMIT** | yazıcı (kod) | ✅ idle · **deposu kirli, kurtarma sırası verildi** |
| **HAVVA** | koşucu + yayıncı | ✅ `HAVVA IRTIBAT` idle · kurulum verildi · `HAVVA` hâlâ `requires_action` |
| **LAB** | denetleyici | ❌ **offline — makine kapalı** |

⇒ **4/5 burada.** LAB kapalı olduğu için Emre'nin kararıyla **denetim işinin araştırma
yarısı KASA'ya + EMRELIC'teki boş kıtalara** verildi.

📌 **EMRELIC'te 7 "hazır kıta" oturumu zaten AÇIK ve idle.** Ama ölçüldü: biri **99 mesaj**
taşıyor — *"hazır kıta" adı boşluk kanıtı değildir* (`§7.3 ⑧`). Yine de **zaten RAM'de
duruyorlar**: 26 claude süreci · 4.032 MB · boş RAM 1,59 GB. ⇒ Onları kullanmak **ek RAM
istemiyor**; yeni oturum açmak istiyor. Bu yüzden EMRELIC'te yeni oturum İSTENMEDİ.

---

## 1 · 🔴 EMRE'NİN ÜÇ DENETİM İŞİ — ölçüldü ve İKİSİ KÜÇÜLDÜ

### ② "İndeksteki her devletin kronoloji maddesi var mı" → **895 değil 3**

`girdi.oku_devletler()` ile ölçüldü (**ilk denemem regexti ve 895'in 280'ini gördü —
`D219` ailesi, aynı tuzağa bu sabah yine düştüm**):

```
künye (devletler.js)                                895
künyenin KENDİ içinde kronoloji taşıyan             865
harici kronolojide (olaylar*+kronoloji*) anılan     668
yalnız künye içi kronolojisi olan                   224  ← app.js:14163 DEVLET ODAĞI
                                                          bunu GÖSTERİYOR ⇒ kusur DEĞİL
🔴 ikisi de yok = GERÇEK BOŞLUK                       3
```
**Boşluğun tamamı üç satır:**
```
luksemburg-hollanda-birligi  Lüksemburg Büyük Dükalığı       1815-06-09 → 1890-11-23
harezm-halk-cumhuriyeti      Harezm Halk Sovyet Cumhuriyeti  1920-04-26 → 1924-01-01
buhara-halk-cumhuriyeti      Buhara Halk Sovyet Cumhuriyeti  1920-10-08 → 1924-01-01
```
📌 Son ikisi **UFUK içinde** (UFUK sonu `1923-10-29`) ⇒ haritada karşılığı olmalı.
🔴 **Kazanç:** 895 kaydı elle okutmak yerine **3 kalem araştırma.** Bu ölçüm yapılmasa
Emre'nin isteği harfiyen uygulanırdı ve 895 kayıt bir işçiye okutulurdu.
⇒ **KASA'ya verildi** (`denetim/KASA-KUNYE-BOSLUK-1004.md`).

### ① "Tarih boyunca bütün siyasi yapılar indekste var mı" → **SINIRSIZ, hücreye bölündü**

Bu soru bizim verimizden ölçülemez: *"eksik"* demek için **dışarıdan bir referans liste**
gerekir. ⇒ Doğru biçim: **tek hücrede isabet oranını ölç, kampanyayı ona göre kur.**
İlk hücre **Anadolu 1281-1500** (çekirdek + TDV zengin: burada körsek ciddi, temizsek dışa
genişleriz). ⇒ **`DIZIN-KAPSAM-PILOT-1004`** (EMRELIC kıtası).
🔴 İstenen tek sayı: **kaç aday arandı / kaçı dizinde vardı.** Kampanyanın büyüklüğünü
o oran belirleyecek — çünkü dün üç kez ölçüldü: *mekanik desen ŞİŞİRİR, elle okuma ÖLÇER*
(14→2 · "sistematik"→3 · 148→57).

### ③ "Kronoloji maddelerinin tarih/içerik doğruluğu" → **8575 madde, ÖRNEKLEM**

```
olaylar*.js + kronoloji*.js maddesi      8575   ⇒ tam tarama YAPILAMAZ
```
⇒ **25 maddelik, sabit tohumlu (`seed 1004`), ölçümden ÖNCE dondurulmuş örneklem**;
hata oranı 8575'lik bir kampanyanın gerekip gerekmediğini söyleyecek.
⇒ **`KRONO-DOGRULUK-ORNEKLEM-1004`** (EMRELIC kıtası), evren yalnız `olaylar*.js`
(**`kronoloji*.js` KUYRUKTUR, aynı evren değil** — `§5`).

---

## 2 · DAĞITILAN GÖREVLER

| kim | iş | niçin ona |
|---|---|---|
| **HAVVA** | `pip install shapely pyproj rtree scipy` + Node + `denetle.py` **çıkış kodu** | koşucu · bütün koşu zincirinin TIKACI |
| **KASA** | 3 boş künyenin kronoloji malzemesi (kaynak cümlesi birebir) | araştırmacı · yalnız metin |
| **UMIT** | ① `ARAC-KUNYE-KRONO-KAPSAM-1004.py` (3 kova, tavan **ÜYELİK**) ② `ARAC-KRONO-KUNYE-PENCERE-1004.py` | yazıcı · **ölçümü kalıcı kılar**; benim betiğim scratchpad'de kaybolacak |
| **KITA→DIZIN-KAPSAM-PILOT** | Anadolu 1281-1500 hücresi, isabet oranı | boş kıta · RAM'de zaten var |
| **KITA→KRONO-ORNEKLEM** | 25 madde, üç soru, üç kova | aynı |

### 🔴 UMIT — depo kirli, ve reset BİR TESLİM TAŞIYOR
UMIT ölçtü: `C:\atlas` var, `GIRDI_DOSYALARI` 93 ✓, ama **85 commit geride · 1 commit
ileride · çalışma ağacında 39 dosyada gerçek fark (+697/-979)**, içinde `CLAUDE.md`,
`arac/denetle.py`, `data/devletler.js`.
🔴 **Ben ölçtüm:** UMIT'in push edilmemiş commit'i **"TAHTA M-5717 KOSU-UMIT"** diyor, ama
`main`deki **M-5717 ODAK-KAPAT'ın** 1 Ekim teslimi. ⇒ **NUMARA ÇAKIŞMASI** — KOSU-UMIT'in
teslimi `main`de YOK ve `reset --hard` onu **siler**.
⇒ Sıra: **① teslim metnini kurtar → ② kirli ağacı repo dışına yedekle (3 dosya) → ③ reset
(Emre'nin 2 nolu kararı) → ④ `denetle.py` çıkış kodu → ⑤ `makine/umit` → ⑥ araçlar.**
📌 UMIT `C:\atlas2`ye temiz klon önerdi; **reddettim** — iki depo "hangi dosya canlı"
belirsizliğini kalıcı kılar (`D219` üç kez bayatladı). Yedek + reset geri dönülebilir.
📌 **Ve bu, tahtanın git'te olmasının faturasıdır.** `TAHTA-WEB` kesmesi tam bunu kapatıyor
— `A2`nin bir gerekçesi daha, bu kez ölçülmüş bir veri kaybı riskiyle.

---

## 3 · EMRE'DEN İSTENEN — oturum DEĞİL, ÜÇ DÜĞME

🔴 **Yeni oturum istemiyorum.** Ölçüm: EMRELIC'te boş RAM **1,59 GB**, 26 claude süreci.
Yeni oturum = yeni süreç = RAM; **zaten açık 7 kıta** ise bedava. ⇒ Kapasite darboğazı
oturum sayısı değil **RAM ve iş TANIMI**. Üç düğme ise zinciri açıyor:

| # | ne | ne açılıyor |
|---|---|---|
| **1** | 🔴 **HAVVA'nın izin penceresini ONAYLA** | kurulum → `denetle.py` → **KOŞU** |
| **2** | **LAB'ı AÇ** | denetleyici rol · ① ve ③ işlerinin asıl sahibi |
| **3** | **UMIT'te Node + izinler** (gerekirse) | iki ölçüm aracı |

⇒ Oturum gerekirse **KASA'da 2** (araştırma paralelleşir, RAM orada boş) — ama ancak
ilk teslimler gelip **isabet oranları ölçüldükten sonra**. Ölçmeden oturum açmak,
ölçmeden görev listesi yazmaktır; bu sabah tam onu yaptım ve 895'i 3'e indirmek zorunda
kaldım.
