# ARAYUZ-0077 — 15 madde hükmü

**Oturum:** `ARAYUZ-0077` (Opus 5.5) · **Koordinatör:** `YILDIRIM BAYEZIT`
**Tarih:** 27 Eylül 2026 · **Şartname:** `oturumlar/ARAYUZ-0077.md`
**Değişen dosyalar:** `js/app.js` · `css/style.css` (ikisi de benim) ·
`denetim/ARAYUZ-0077*.{md,py,json}` · `data/hukuki_sinirlar.js` ve `data/savaslar.js` **DOKUNULMADI**.

Ölçümler canlı motorda yapıldı (`py arac/sunucu.py`, 8777). Gövdeye bakan
ölçümler **Koşu 15 gövdesine (9ce6c942, DONEMLER 590) karşı TEKRARLANDI** (M-5220).

---

## 0. Sınıflandırma — şartnamenin uyarısı haklı çıktı

Şartname *"H-0013 · H-0032 · H-0076 · H-0082 · H-0083 büyük ölçüde HARITA-0076
Kova A (opak kutu) ile AYNI kusur"* hipotezini verip "önce sınıflandır" dedi.
**Ölçüm: beşinin HİÇBİRİ Kova A değil.**

- Kova A'nın imzası **eksen hizalı dikdörtgen**tir. Beş görselin hiçbirinde
  dikdörtgen yok (hepsi çok köşeli, eğik kenarlı gövde).
- `denetim/HARITA-0076-kutu-kapisi.py` bugün: **5 kutu taşıyan kayıt · 4 muaf ·
  1 çizen** (`misir-sudan-22-paralel-1899`, 22°K kuşağı — H-0013/76/82/83'ün
  pencerelerinin hiçbirine değmiyor). Yama (`c43bc80a`) iki kaydı zaten kapatmış.
- `midye-enez` ve `ii-erzurum` artık `dolgu:false` ⇒ Kova A'dan geriye tek
  kalem kaldı, o da `senin-kararin` (aşağıda §3).

| madde | sınıf | kanıt |
|---|---|---|
| H-0013 | **Kova B + D** (gövde çakışması + noktasızlık) | aşağıda |
| H-0076 | **§3.5 hayalet devlet** (künye aşımı) | aşağıda |
| H-0082 · H-0083 | **Kova B** (iki komşu gövde ortak kenar paylaşmıyor) | aşağıda |
| H-0032 | **Kova B genel** (+ boşluk tarafı Kova C/D) | aşağıda |
| H-78:6 | **ölçülemedi** — görsel diskte YOK | aşağıda |

---

## 1. Hükümler

### H-0002 — açılış animasyonu · `cozuldu` (kısmen) + `senin-kararin` (kalan liste)
**Yapılan:** `css/style.css`e **saf CSS açılış perdesi**: dönen küre (Natural
Earth karası, eşdikdörtgen şerit dairenin içinde kayar) + küreden teker teker
fırlayan 10 silüet: **Türkiye · Fransa · İngiltere · İtalya · Rusya · İspanya ·
Japonya · Çin · Hindistan · Osmanlı (1600 zirvesi)** + "Atlas yükleniyor…
lütfen bekleyin" yazısı. `app.js` `haritaHazir` anında `<html>`e `atlas-hazir`
koyar, perde kalkar.
- **Niçin saf CSS:** 281 veri betiği senkron yükleniyor ve `app.js` EN SONDA
  geliyor — JS ile kurulan perde yükleme bitince kurulurdu. `style.css` `<head>`de.
- Silüetler **üretilir, elle yazılmaz:** `py denetim/ARAYUZ-0077-yukleme-silueti.py`
  (Natural Earth `ADM0_A3`; Fransa Avrupa kutusuna, Rusya 180°'ye kırpıldı).
  Osmanlı: atlasın kendi `ao` zirvesi `1600-10-20` (`denetim/ARAYUZ-0077-osmanli-zirve.json`).
- ⚠️ z-index 9000 < geometri kapısının hata kutusu (9999): yükleme çökerse hata
  perdenin üstünde görünür.
- **Doğrulandı:** perde ekran görüntüsünde göründü (küre + Türkiye silüeti +
  yazı), yükleme bitince `atlas-hazir` sınıfı geldi, `::before` içeriği `none`.
- 🟡 **ÖLÇÜLEN SINIR:** yükleme sırasında ana iş parçacığı çoğu an **kilitli**
  (ekran görüntüsü aracı üç kez "sayfa boyanmadı" diye zaman aşımına düştü).
  Kürenin dönmesi (`background-position`) bu anlarda donar; silüetin fırlaması
  bileşik katmanda koşar ama ilk karesi ana iş parçacığına bağlı. Bu yüzden
  taban konum "havadaki kare" yapıldı (silüet küreyi örtmez). **Akıcı
  canlandırma `index.html`in betik yüklemesine (`defer`/parça) bağlı** —
  dosya benim değil, öneri §3.
- **senin-kararin (gerekçeli):** listenin tarihî yarısı — **Roma · Cengiz ·
  İskender · İslâm (Emevî/Abbâsî) · Alman İmp. · Avusturya-Macaristan** —
  eklenmedi. Atlas 1281–1923 kapsıyor, ilk dördünün gövdesi atlasta YOK;
  silüeti elden çizmek §4 kaynak kuralını çiğner. Kaynaklı bir sınır
  verisi (ör. akademik bir tarih atlasının kamu malı çizimi) gelirse üretici
  betiğe tek satırla eklenir.

### H-0013 — Niğbolu 1915 · `sirada` (Oturum 0 + nokta kolu)
Kova A değil. Taze gövdede (1915-09-06):
- `bulgaristan` gövdesi **Tuna'nın kuzeyine taşıyor**: köşe dizisi
  `24.56,43.78 → 24.84,43.87 → 24.89,43.95 → 24.96,44.00 → 25.05,44.00 → 25.04,43.78`.
  Nokta 24.95E 43.95N (Romanya kıyısı) → `bulgaristan`.
- **Sebep noktasızlık (§2):** 24.2–25.8E × 43.6–44.4N penceresinde **tek**
  yerleşim var: `Niğbolu` (24.892, 43.706). Tuna'nın Romanya kıyısında nokta
  **0** ⇒ Niğbolu'nun peteği nehri aşıyor.
- Ayrıca `bulgaristan × romanya-kralligi` gövde çakışması: 7650 hücrenin
  **16**'sı (0.01°, eski gövdede de vardı; Koşu 15 düşürmedi).
- Çare `yerlesimler.js`: Romanya kıyısına kaynaklı nokta (ör. Turnu Măgurele,
  Zimnicea — koordinat + kaynak **bende YOK**, `bulunamadı`). Nokta EKLEMEDİM.

### H-0021 — ileri tuşu ağır, tıklamalar birikiyor · `cozuldu`
**Ölçüldü:** ⏭ tek adımda ana iş parçacığı **1193 · 1251 ms** kilitli
(sonraki adımlar 15–22 ms). Kilit sırasında gelen tıklamalar kuyrukta bekleyip
kilit açılınca **art arda** işleniyordu — "birikip 3-4 madde birden gitmek".
**Çare (`agirAdim`):** kilit sırasında oluşmuş (`event.timeStamp < son adımın
bitişi`) ya da adım başlamadan gelen tıklama yutulur ⇒ **bir tık = bir madde**.
**Sınandı:** üç hızlı tık → **1** adım (index 1→2); ardından tek tık → 1 adım (2→3).
⚠️ Adımın KENDİSİ hızlanmadı (1,2 sn `tarihAyarla` zincirinde); bu kapı
birikmeyi ve sessiz beklemeyi çözer. Hızlandırma ayrı kalem (§3).

### H-0030 — işgal lejantı aynı devleti tekrarlıyor · `cozuldu`
**Ölçüldü:** lejant satır başına **bir gövde** basıyordu; 1916-11-03'te
15 satır (yunanistan ×6, İngiltere ×4, italya ×3 …). Ham slug da yazılıyordu
(`fransa-cumhuriyet`, `italya`).
**Çare:** her işgalci **tek satır**; ad `devletAdi()` ile künyeden.
**Sınandı:** 1916-11-03 → 5 satır (`Fransa (1792 Sonrası…)` · `İngiltere` ·
`İtalya Krallığı` · `Yunanistan Krallığı` · `Kutsal Roma / Almanya`).
**Yan bulgu, düzeltildi:** desen adı yalnız `id`idi; **5 kimlik** (rusya ·
ingiltere · fransa-cumhuriyet · yunanistan · avusturya) iki ayrı `sahipRenk`
taşıyor (#8e0b22 doğrudan · #b2384a tâbi) ve ilk gelen kaydın sahip rengi
ötekilere de basılıyordu. Desen artık `id + sahipRenk` (8 kimlik → **13** desen).
📌 Not: `almanya` için künye adı `Kutsal Roma / Almanya` çıkıyor (`harita:`
eşlemesinin ilk künyesi). 1916 için yanıltıcı; `devletler.js` sahibinin kalemi.

### H-0032 — üst üste binme + boşluk (genel) · `sirada` (Oturum 0)
Genel soru; ölçülen iki yüzü H-0082/83 ve H-0013. Kök: **komşu gövdeler ortak
kenar paylaşmıyor** (her devletin gövdesi kendi dönem kesitinde ayrı
üretiliyor — `devletler2[].dnm`). HARITA-0076 §2 Kova B'nin aynısı; dünya
ölçeğinde boyalı alanın %1,3–1,4'ü. Koşu 15 bunu **düşürmedi** (aşağıdaki
sayılar taze gövde). Boşluk tarafı Kova C/D (noktasızlık). `app.js`te yapılacak
dürüst bir çare yok — gövde üretimi Oturum 0. HARITA-0076'nın önerisi
(çakışma ölçümü `denetle.py`ye yedinci değişmez) duruyor.

### H-0034 — "işlem sürüyor" animasyonu · `cozuldu`
Seçim: **dönen halka + "Harita hazırlanıyor…"** (`#mesgul`). Gerekçe ölçüm:
ağır adımda ana iş parçacığı ~1,2 sn kilitli; kum saati ya da gidip-gelen
çubuk ana iş parçacığında canlandırılırsa tam o anda DONAR. `transform:rotate`
bileşik katmanda koşar, kilitte de döner. 180 ms gecikmeli belirir (hızlı
işlemde göz kırpmasın). ⏭ ⏮ ve "tarihe git" (Enter) bağlandı.
**Sınandı:** tık anında `#mesgul.acik` = true, adım bitince false.
⚠️ Emre hangi düğmeyi kastettiğini yazmamış; başka bir düğme için de
isterse tek satır: `agirAdim(e, is)`.

### H-0063 — 1919-10-22'de iki farklı tarama · `zaten-dogru` (+ lejant düzeldi)
**Ölçüldü:** o gün o pencerede **iki ayrı işgalci** var —
`fransa-cumhuriyet` (#00297c, lacivert) 3 gövde ve `ingiltere` (#7e3d8f, mor)
4 gövde (Maraş · Antep · Urfa çevresi; İngiliz pencereleri 1919-10-29 /
1919-11-05'te kapanıyor). İki tarama = iki işgalci; kusur değil. Kafa
karıştıran lejanttı (ham slug + tekrar) — H-0030 çaresiyle düzeldi:
lejantta artık `Fransa …` ve `İngiltere` tek satır. Pencere tarihleri
veridir (`data/devirler.js`, üretilmiş), ben kaynak hükmü vermedim.

### H-0076 — Derbend 1920 · `sirada` (Oturum 0, `yerlesimler.js`)
Kova A değil. **Hayalet devlet (§3.5):** `Derbend` `s:` son penceresi
`{f:"1813-10-24", t:"1923-10-29", d:"rusya"}`; `rusya` künyesi
`t:"1917-03-15"` ⇒ 1917 sonrasında **ölmüş devlet** boyuyor. 1920-07-28'de
Derbend peteği `rusya` (yeşil), çevresi `sovyet-rusya` (turkuaz) — "üst üste
binmiş iki renk" budur. Pencerede (46.7–48.9E × 41.4–42.7N) **tek** nokta
var (Derbend) ⇒ bütün Güney Dağıstan tek peteğe asılı.
§3.5 üç sınıf: bu **③ ardıl yapı** — kısaltmak delik açar; ardıl künye
(1917–1921 arası Dağıstan'ın durumu kaynak ister) + 1917 kırılmasına kronoloji
maddesi. Kaynak **bende yok** (`bulunamadı`).

### H-0082 · H-0083 — Hopa–Artvin / Kars 1921 · `sirada` (Oturum 0)
Kova A değil. **Kova B:** `sovyet-rusya` ile `tbmm-turkiye` gövdeleri ortak
kenarı PAYLAŞMIYOR. Ölçüldü (eski gövde): sovyet halkasında
`41.39,40.85 → 41.40,40.88 → 41.39,40.93 → 41.33,40.80 → 41.36,40.81 →
41.20,40.65 → 41.23,40.71 → 41.24,40.73 → 41.20,40.80 → 41.25,40.79` zikzakı
(H-0082'nin ince turkuaz şeritleri) ve `43.31,40.68 → 43.05,40.90` düz köşegeni —
tbmm kenarı aynı aralıkta `43.37,40.78 → 43.29,40.83 → 43.29,40.94 → 43.05,40.90`
diye dolanıyor; aradaki üçgen **H-0083'ün çizgisi**.
**Taze gövdede (Koşu 15):** 40.99–43.4E × 40.45–41.59N, 0.02° ızgara,
**6897 hücrenin 92'si** iki gövdede birden ⇒ kusur sürüyor.

### H-78:1 — B görünümü ayarları çalışmıyor · `cozuldu` (dürüstlük) + hipotez ÇÜRÜDÜ
**Ölçüldü, Emre haklı:** iki B ayarının İKİSİNİN DE verisi diskte YOK.
- ④b Dolgu: `window.DOLGU` boş — `data/dolgu.js` hiç üretilmemiş (yükleyici
  satırı 22 Eylül'de silinmiş). Kutu işaretleniyor, harita değişmiyor; üstelik
  rozet "—" yazıp hemen ardından genel sayaç **"2"** (katman sayısı) basıyordu
  ⇒ ayar çalışıyormuş gibi görünüyordu.
- ④c Ufuk: `data/ufuk_bantlari.js` YOK — 7/10 seçilince `onerror` ve seçici
  "sessiz geri dönüş"le 5'e zıplıyor. "Tıklayamıyorum" budur.
**Çare (`bVeriKapisi`):** verisi olmayan ayar **pasif + gerekçeli**
(`7 gün — veri henüz üretilmedi`, dolgu kutusu disabled + "veri henüz
üretilmedi"). Ufuk 7/10 **varsayılan pasif**; dosya yalnız seçiciye
yaklaşan kullanıcıda bir kez `HEAD` ile yoklanır, varsa seçenekler açılır.
⚠️ İlk sürüm açılışta yokluyordu ve ağ kaydında **her ziyaretçiye bir 404**
(`HEAD …ufuk_bantlari.js → 404`) ölçüldü — 3b6c4b62'nin kapattığı sınıf.
Düzeltildi: açılışta yoklama **0**.
**İki yönde (C13):** gerçek 404 → 7/10 pasif kalıyor · `fetch` taklidiyle
"dosya var" → 7/10 açılıyor. Dolgu kutusu `disabled`, rozet "—" (eskiden "2").
Bantların GERÇEK verisiyle çizim **ölçülemedi**: veri yok.
**HİPOTEZ ÇÜRÜDÜ:** H-78:2 ve H-78:5'teki boşluklar A (5 gün) haritasında
duruyor; A **varsayılan** harita ve B ayarlarından bağımsız. Ölü ayar
boşlukların sebebi DEĞİL.

### H-78:2 — Bosna 1281 boşluğu · `kapsam-disi` (sevk: nokta kolu / Oturum 0)
Hipotez çürüdüğü için şartname gereği **benim kalemim değil**. Soru "bu
noktalar 5 günlük sürtünmeli yürüyüşten daha yakın değil mi" — cevap motorun
(`uret_petek.py`) yürüyüş hesabında ya da nokta yoğunluğunda; ikisi de
Oturum 0. Nokta EKLEMEDİM.

### H-78:3 — "savaş simgesi bütün zamanlarda mı?" · `cozuldu`
**Ölçüldü:** 1281-01-01 Bosna görselindeki simgeler **savaş değil 🏰 KALE**
simgesi (`Drežnik`, `Bihaç`, `Udbina` → `tur:"kale"`). Kale simgesi
"fetihten sonra 550 gün" penceresine bağlıydı ama **epok damgası**
(`1281-01-01`, atlasın başlangıcı — gerçek fetih değil) ayıklanmıyordu:
yöntem simgesi epokta bastırılıyor, 🏰 bastırılmıyordu.
**Etki:** 725 kale noktasının **412**'si atlas açılır açılmaz 550 gün "yeni
fethedilmiş" işaretiyle duruyordu.
**Çare:** pencereye `e` (epok) bayrağı; 🏰 epokta basılmaz.
**İki yönde sınandı:** epokta 🏰 = **0**; gerçek fetih (`Aydos Kalesi`
1329-06-01 +5 gün) → `🏰♜` **görünüyor**.
Savaş işaretlerinin kendisi: 174 kaydın hepsinde pencere var (`sure` en çok
1500 gün, Kandiye 800) — "bütün zamanlarda" gösterilen savaş işareti yok.
`data/savaslar.js`e dokunmak GEREKMEDİ.

### H-78:5 — Aydın 1281 boşluğu · `kapsam-disi` (sevk)
H-78:2 ile aynı gerekçe. ⚠️ Görsel (`parti-emrelic-0078/H-0005-1.png`)
diskte **YOK** — ölçmedim.

### H-78:6 — Hısnıkeyfâ Eyyûbîleri iki renk · `olculecek`
Görsel (`parti-emrelic-0078/H-0006-1.png`) diskte **YOK**; madde tarih
vermiyor. Ölçebildiğim: `eyyubi-hisnikeyfa` tek dönem (1281–1462, 181 yıl
sabit gövde), bbox 40.84–41.79E × 37.52–38.77N, 434 hücre; yabancı gövde
çakışması 1300: **0**, 1400: **0**, 1450: **2** (`karakoyunlu`). Yani bu
tarihlerde Kova B yok. Görsel/tarih gelirse ölçerim.

---

## 2. Tahtadan gelen yan iş — 💥 `vurus` alanı (SEFER-OK-0077, M-5210 → M-5212)
Sözleşme: `vurus:[{lon, lat, ad, t:"YYYY-MM-DD", kaynak?}]` sefer kaydında.
Çizim `app.js`te hazır: ok görünürken ve `t` geldiyse 💥 (iç `<span>`
canlanır — işaretçinin konum `transform`u ezilmesin diye). Eksik alanlı öğe
çizilmez, konsola adıyla düşer.
**Sentetik sınama (Çaldıran oku):** vuruştan önce `[ok:true, 💥:false]` ·
sonra `[true, true]` · ok düşünce `[false, false]`. Gerçek veri
(`seferler_p0077.js`) inince tekrar sınanmalı.

---

## 3. İstediklerim / öneriler
1. **`misir-sudan-22-paralel-1899`** (Kova A'nın son kalemi) — HARITA-0076
   YAMA §1③ seçenekleri duruyor; hüküm Emre/koordinatör.
2. **Kova B** (H-0032/82/83/13): çakışma ölçümü `denetle.py`ye değişmez
   olarak — Koşu 15 sonrası hâlâ %1,3 (92/6897 Kafkas penceresi).
3. **H-0076 · H-0013** `yerlesimler.js` kalemleri (Derbend ardıl künye;
   Tuna'nın Romanya kıyısına nokta) — kaynak araştırması ister.
4. **Açılış akıcılığı:** `index.html` betiklerini `defer`e çevirmek ya da
   parçalamak perdenin canlanmasını akıcı yapar — dosya koordinatörde.
5. **⏭ adımının 1,2 sn'si** (`tarihAyarla` zinciri) profillenmeli — ayrı kalem.
6. **Sürüm damgası:** `denetle_yayin.py` "2 kod dosyası değişmiş, damga
   r10122" diyor — `surum_damgala.py` koordinatörün.
7. **H-78:5 · H-78:6 görselleri** diskte yok.
