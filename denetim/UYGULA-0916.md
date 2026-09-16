# UYGULA — DALGA-0052 · 16 Eylül 2026

**Oturum:** UYGULA (Opus · OPUS HAZIR KITA 404) · koordinatör 1.MURAT ·
şartname `oturumlar/DALGA-0052.md` §2/§3
**Yazabildiğim dosyalar:** `data/yerlesimler*.js` · `data/yer_yama_*.js` ·
`data/devletler.js` · `arac/renkler.py` · `arac/girdi.py` · bu rapor
**Dokunmadıklarım:** `C:/atlas-kosu12` · Kuzey Kafkasya–Kırım kayıtları (TK oturumu)

---

## 0. ÖZET

| commit | ne indi | denetim |
|---|---|---|
| `24dc637` | YAMA-ISGAL1919 · 13 HAZIR kalem (15 `isg` dönemi) | ✓ · 2i 65→92 |
| `c2bd55c` | KARADENİZ Silistre ×2 · Niğbolu · ARAP-N1 Sina/Süveyş kimliği · `girdi.py` `kesinlik` | ✓ · 2i 92→96 |
| `37ec7be` | `girdi.py` — `gecitler.js` anlık görüntü + parmak izi (MOTOR M-3994) | — |
| `783f473` | HARITA-VERI: 5 Ukrayna noktası (yeni dosya) · Bar · Limni · Kabartay/Venedik rengi | ✓ · D1 3850→3855 · `renk_olc` 0 |

**Uygulanan kalem: 24** (13 + 3 + 1 + 5 + 1 + 1 + 2 renk; `girdi.py` iki şema düzeltmesi ayrıca)
**Uygulanmayan: kaynak/madde/karar bekleyenler — §3.**

Taban (`denetle.py`, uygulamadan önce): bütün değişmezler ✓ · 3850 yerleşim · 324 sahipsiz ·
D2 535/0 · 2s 1333/99 · 2i 65/3 · 2t 16 · 4c 129 · D7 662.
Son hâl: bütün değişmezler ✓ · 3855 · 324 · D2 534/0 · 2s 1331/99 · 2i 96/3 · 2t 15 · 4c 129 · D7 661.

---

## 1. UYGULANANLAR — kalem kalem

### 1.1 `YAMA-ISGAL1919-0914` → `24dc637`
13/13 HAZIR: İzmir · Aydın · Manisa · Bursa · Uşak · Eskişehir · Kütahya · Bilecik ·
Afyon · Adapazarı · Kırklareli · Edirne · Muğla.

🔴 **UYGULAYICI KUSURU BULUNDU:** 13'ün 4'ü (İzmir · Aydın · Uşak · Kütahya) ilk ölçümde
*"eşleşme yok"* göründü. Fark görünmez karakterdeydi: kayıtlar **çok satırlı**, yama
metni **LF**, `data/yerlesimler.js` **CRLF** (2281 CRLF · 0 yalnız LF). Satır sonu dosyanın
biçimine çevrilince 13/13 tam bir kez eşleşti. Sonrası: CRLF 2294 · yalnız LF 0.

Denetim farkları, gerekçesiyle:
```
2i   65 → 92 işgal kırılması · 3 açık (tavan 3) — yeni 27'si olaylar_p0057'de maddeli
D2   535 → 534 · 0 açık — kaybolan gün 1919-05-15: İzmir ve Aydın'da Yunan işgali
     SAHİPLİK değişimi (s: + d: bölünmesi) olarak yazılıydı; artık isg: katmanında,
     sahiplik 1920-04-23'te bütün Anadolu gibi TBMM'ye geçiyor
2s   1333 → 1330 · 99 açık — aynı iki kaydın s: kırılımı 1920-04-23'e taşındı
```
**Uygulanmadı:** 14 KARAR kalemi (§3 K6) · 28 BULUNAMADI yerleşim.

### 1.2 `YAMA-KARADENIZ-0914` → `c2bd55c`
```
SIL-1810  Silistre isg rusya 1810-06-10 → 1811-05-01   kesinlik {f:gun, t:ay}
SIL-1829  Silistre isg rusya 1829-06-30 → 1836-01-01   kesinlik {f:gun, t:yil}
NIG-KES   Niğbolu isg — günler DEĞİŞMEDİ, kesinlik:"ay" + kaynak metni
```
Dört kırılmanın dördü maddeli (olaylar_p0056 ×3 · olaylar_ek21 ×1). 2i 92 → 96, açık 3.
**Uygulanmadı:** RUS-1811 (iki seçenek + ek21 madde) · TAMAN-1774 (kaynak çelişkisi, TK alanı).

### 1.3 `YAMA-ARAP-0914` → `c2bd55c`
ARAP-N1'in ikinci kalemi: **Süveyş · Sina güneyi** `isg` `d:"fransa"` → `"fransa-cumhuriyet"`
(`fransa` künyesi 1792-09-22'de bitiyor; 1798 işgali pencere dışındaydı).
🔴 **Bu düzeltme 4c'ye YANSIMADI — çünkü 4c onu hiç görmüyordu** (§2 B1).
**Uygulanmadı:** El-Arîş isg (bitiş gününde madde yok → 2i tavanı aşılır) · T1 · S1 · H1 · B1 · F1 (§3 K1/K7).

### 1.4 `arac/girdi.py`
```
c2bd55c  BILINEN_DONEM_ALANLARI'na "kesinlik" — şema 2 Eylül'de karara bağlanmıştı
         (VERI-YAPISI.md "İKİ BİÇİM ALIR"), sözlükte yoktu; s.kesinlik uyarısı
         (Vidin · Musul · Kerkük …) kalktı. TANINDI ≠ OKUNUYOR: motor okumaz.
37ec7be  GECIT_DOSYASI — data/gecitler.js anlık görüntüye ve parmak izine girdi.
         Doğrulama: parmak_izi 83 dosya · anlık görüntü kopyalıyor · yukle() dokunmuyor.
783f473  GIRDI_DOSYALARI'na yerlesimler_ukrayna_0916.js
```
⚠️ `gecitler.js` kopyasının işe yaraması için motor dosyayı `girdi.DATA`dan okumalı —
bugün `KOK/data`dan okuyor. MOTOR'a tahtadan bildirildi.
⚠️ İz **kümesi** değişti: bu commit'ten önce alınmış bir koşu izi, ana klasöre karşı yayın
kapısında *"girdi DOSYA KÜMESİ değişmiş: gecitler.js"* der (`denetle_yayin.py` ölçüldü).
Ana klasördeki `yerlesimler.js` zaten değiştiği için koşu 12 kendi kopyasından yayınlanmak
zorunda — bu değişiklik yeni bir kusur sınıfı açmıyor.

### 1.5 HARITA-VERI yamaları → `783f473`
```
UKRAYNA 1    Bar (Podolya) 49.078,28.260 → 49.074,27.674  (43 km batı; GeoNames 712861)
UKRAYNA 2-6  YENİ DOSYA data/yerlesimler_ukrayna_0916.js · window.YERLESIMLER_UKRAYNA_0916
             Vinnitsa · Braslav · Kostantinov · Jitomir · Berdiçev — IEU (CIUS)
             en yakın mevcut nokta 22,9 km · ad çakışması 0 · v: kırılmaları Bucaş/Karlofça'da 0 gün
EGELEVANT 1  Limni s:venedik 1656-08-21 → 1656-07-13 (d: aynı gün)
KAFKAS 2     kabartay  #d058e8 → #0c5a84
KAFKAS 3     venedik   #deed93 → #fcfc06
```
🔴 **Limni'de yamaya bir şey EKLEDİM:** §4'ün şartlı komşu kuralının dördüncü şartı
(*"kayda AÇIKÇA yazılır"*) yama metninde yoktu. Döneme
`kaynak:"gün komşudan: Bozcaada · TDV bozcaada (21 Ramazan 1066 / 13 Temmuz 1656); TDV limni
yalnız 1656 Temmuzu diyor — aynı Venedik harekâtı (TDV mehmed-iv)"` kondu.

Yeni dosyayı **ayrı** açtım: Kırım oturumunun dokunabileceği dosyalarla aynı dosyada
eşzamanlı yazım riski olmasın diye. `index.html` satırı UI'nin — tahtadan istendi.

`renk_olc.py`: çıkış 0 · Kabartay ve Venedik **hiçbir sorun listesinde yok**. Kalan
2 çakışma (`indor↔maratha 3,7` · `bharatpur-cat↔gvalyar 4,3`) bu değişiklikten bağımsız.

Denetim farkları: D1 3850→3855 (sahipsiz 324 sabit) · 2s 1330→1331 (açık 99 sabit) ·
2t 16→15 · 5c 2147→2148 (Jitomir `kur:` yok, bilgi) · D7 662→661.

---

## 2. BULGULAR

**B1 — Değişmez 4 / 4c / 4d `isg:` kimliklerini SORMUYOR.**
`degismez4()` yalnız `s:` dönemlerini tarıyor (`denetle.py:1869`). Süveyş/Sina'nın ölü
`fransa` künyesi bu yüzden hiç sayılmamıştı; düzeltme 4c'yi oynatmadı.
Ölçüm (bugün): 268 `isg` dönemi · pencere dışı **0** · künyesiz **18** — hepsi `avusturya`,
ki bu bir künye `id`si değil, `habsburg` künyesinin **harita anahtarı**. Boyama çalışıyor,
künye sınavı çalışamıyor. `denetle.py` koordinatörün — öneri: `isg` dalını 4'e ekle,
`harita:` anahtarını `id`ye çözerek.

**B2 — Yama metinleri LF, veri CRLF.** Çok satırlı kayıtlarda düz metin eşleşmesi
sessizce başarısız oluyor (ISGAL'de 4/13). Bir sonraki yama üreticisi ya da uygulayıcısı
satır sonunu **dosyanın** biçimine çevirmeli.

**B3 — Germiyan grubunun günü ay-kodlu.** `olaylar_ek.js:115` `t:"1429-02-01"` ·
`gun:"1429"` — `§4`ün *"hassasiyet şişmiş"* kovasının bir üyesi, ve grup yerleşimleri
(Kütahya · Afyon · Uşak · Simav · Tavşanlı · Emet) aynı günü taşıyor.

**B4 — `dogrulanmadi` alan uyarısı duruyor** (`yerlesimler_ek29.js` Deyrülkamer, kayıt
düzeyi). Şemada yeri bilinmiyor; dokunulmadı.

---

## 3. UYGULANMAYANLAR — karar ya da başka dosya bekliyor

**K1 — MADDE DOSYASI (en büyük engel).** Aşağıdaki yerleşim yamaları, kendi yazarlarının
şartıyla **maddeyle aynı partide** inmeli; yoksa D2 / 2i / 2s açılır. Maddeler
`olaylar*.js`te ve hiçbiri UYGULA'nın değil:
```
TRAKYA 53 kalem   MT-1..MT-7  olaylar_ek.js · olaylar.js · olaylar_ek17.js · (yeni) olaylar_p0055.js
ARAP              M1 (ek11 Bağdat 1401) · M2 (Arîş 1517-01-11) · M4 (Arîş 1799) · M5 (Hâil/Riyad)
UKRAYNA 9 Çehrin  ek5:249 gün 1678-07-19→08-21 + YENİ madde 1676-09-19
UKRAYNA 10 Uman   YENİ madde 1674 (en yakın madde 365 gün)
UZAK-Y1 Hîve      iki madde (1593 · 1598)
```

**K2 — Denizli (ANADOLU-1).** Yıl TDV'de 1429. Önerilen gün 1429-02-01 = Germiyan grubunun
ay-kodlu günü (B3). `§4` (13 Eyl) kaynaksız komşu gününü yasaklıyor; `1429-01-01` yazılırsa
madde 31 gün uzakta kalır → D2 açılır. Seçenek: (a) grup + Denizli + madde birlikte
`1429-01-01` (madde dosyası K1) · (b) `1429-02-01`i grupla tutarlılık için onayla.

**K3 — Ankara (ANADOLU-2).** 1403-09-01 günü kaynaksız; yama *"gün seçimi"* istiyor.

**K4 — Bizans haraçgüzar `v:` pencereleri (ANADOLU-3).** Çok dosyalı; Epir kayıtları
dahil mi (yama uyarıyor) · D2 ölçülmedi · renk P13B'de.

**K5 — TRAKYA Emre soruları.** Çirmen (TR-023/024) · Gümülcine · Dedeağaç (TR-029/030) ·
İğneada/Ahtopol/Rezve (TR-045–050) · Köstendil seçeneği (TR-053). Ön-sınav 13 Eylül
tabanında (3818 nokta) — inişte yeniden sınanacak.

**K6 — ISGAL1919 14 KARAR kalemi.** Tekirdağ · Alaşehir · Balıkesir · Afyon (Yunan) ·
Bilecik · İzmit · İnegöl · Yenişehir · Bodrum · Marmaris · Kuşadası · Fethiye · Burdur ·
Konya — gün/uç seçimi.

**K7 — ARAP.** B1 Katîf `safevi` atfı (yerine hangi kimlik) · F1 Fizan dolgusu (D1 beklenen
324→325) · H1 Riyad'ın 1744–1773 kimliği (künye yok) + D1 · T1 Bağdat 1393–1405 (+M1).

**K8 — KARADENİZ.** RUS-1811 (a/b + ek21 madde) · TAMAN (kaynak çelişkisi + TK alanı).

**K9 — HARITA-VERI kararları.** Erbil A/B · Colmar (akademik kaynak yok) · Palopo/Sengkang
(`luwu`/`buton` künye + renk önce, D1 314→316).

**K10 — Hazır olmayanlar.** KUZEY: 8 kalemin hepsi *"sırada"* (künye/gün bekliyor) +
Y3b Nystad takvim sorusu · UZAK Y2–Y5 bloke, Y6 motor · P12 dosyaları UYGULA'nın değil ·
ANADOLU-6 **zaten yapılmış** (`girdi.py:759` bağlı, `index.html` satırı var).

---

## 4. YÖNTEM

Kalem başına: hedef metnin dosyadaki sayısı ölçüldü (`eski` tam 1 · `yeni` 0 değilse
**yazılmadı**, `D001`) · satır sonu dosyanın biçimine çevrildi · her partiden sonra
`denetle.py` tabanla satır satır kıyaslandı · renk değişikliğinden sonra `renk_olc.py` ·
`node --check` / `py_compile` · commit iki adımda da pathspec'le, `git show --name-only`
ile doğrulandı. Yardımcı betikler scratchpad'de (şartname `denetim/`e yalnız bu raporu verdi).
