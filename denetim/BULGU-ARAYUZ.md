# BULGU — ARAYÜZ (js/app.js · css/style.css · index.html)

**Oturum:** ARAYÜZ (eski adı: PAKET 0033-0034) · sevk: ORHANGAZİ · 27 Ağustos 2026
**Dosyalarım:** `js/app.js` · `css/style.css` · `index.html` (yazma) · bu rapor
**Dokunmadıklarım:** `arac/*.py` · `data/*.js` · `kutu/giden/*/CEVAP.json`

---

## ÖZET — SAYIYLA

```
Taradığım açık kalem (sirada/olculecek, arayüz izi taşıyan) : 20 H-numarası
  cozuldu     : 7   (3'ü ÖNCEDEN düzeltilmiş — CEVAP notu bayattı;
                     4'ü BU OTURUMDA düzeltildi)
  sirada      : 12  (11'i VERİ/tasarım kararına bağlı — koda dokunmadım
                     çünkü kod değil veri/karar eksik; 1'i teyit istiyor)
  senin-kararin: 1  (HAKKINDA menüsü — geri alınmış bir kararla çelişiyor)
İÇERİK TALEBİ kovası (ek okuma/magazin, ~24 H-numarası, çoğu 0034/0035):
  DOKUNMADIM — altyapı (EKOKUMA/MERAK) ZATEN ÇALIŞIYOR, eksik olan yalnız
  içerik verisi (data/ekokuma.js · data/merak.js), arayüz kodu hazır.
```

**Koda yazılan değişiklik:** 2 kalem, `js/app.js` + `css/style.css`, ikisi de
node --check ile ve canlı sunucuda (arac/sunucu.py, konsol hatasız, 62/62
sefer kaydı sağlam) doğrulandı. `?v=` damgasına dokunmadım.

---

## ① BU OTURUMDA DÜZELTİLEN — 2 kalem

### p0019/H-0046 — "görüşme" hareket türü eklendi
CEVAP notu: *"işaret tipolojisi VAR ve zengin, eksik olan yalnız 'görüşme'
türü ve glif."* Doğru teşhisti, uyguladım:
```js
var SAVAS_TUR_SIMGE = { meydan: "⚔", kusatma: "◎", isyan: "🔥", deniz: "⚓",
                        antlasma: "📜", gorusme: "🤝" };
```
`meydan`/`antlasma` gibi özel bir CSS bloğu gerekmiyor (genel `.savas-isaret
.sv-ikon` stili yeterli — ölçtüm, `.tur-kusatma/.tur-isyan/.tur-deniz` dışında
kimse özel stil kullanmıyor). **Kalan iş VERİ'de:** `data/savaslar.js`e
`tur:"gorusme"` + koordinat yazmak yeter, kod dokunulmadan çalışır.

### p0019/H-0041, H-0062 — "planlanan ↔ yürünen" hâl ekseni eklendi
CEVAP notu doğru teşhis etmiş ama uygulamamıştı: *"renk zaten veriden
geliyor, ikinci eksen için kod değişikliği gerekmiyor — renk alanını
yazmak yeter."* Bunu bir adım ileri götürdüm: VERİ'nin her plan kaydına
elle turuncu hex yazması yerine, `hal:"planlanan"` bir SÖZLEŞME oldu:
```js
var renk = s.renk || (s.hal === "planlanan" ? "#c98a00"
           : (s.taraf === "dusman" ? "#1b7a3f" : "#2b1006"));
ic.style.color = renk;
if (s.hal === "planlanan") ic.classList.add("hal-planlanan");
```
+ `css/style.css`: `.sefer-ok.hal-planlanan { opacity: 0.72; }` (hafif
saydamlık, "henüz olmadı" hissi; `hal` yazılmayan hiçbir kayıt etkilenmez).
Doğruladım: bu `renk` değişkeni hem ok ikonuna hem GeoJSON çizgisine
(`m.renk` → `line-color`) aynı anda gidiyor, ikisi ayrışmıyor.
**Kalan iş VERİ'de:** `data/savaslar.js`e `hal:"planlanan"` yazmak yeter.

---

## ② BAYAT ÇIKANLAR — zaten düzeltilmiş, CEVAP notu güncel değildi

Üçü de "§11: bir şikâyet şikâyet edilen şeyden daha hızlı bayatlar"
dersinin taze bir vakası — CEVAP notları yazıldığı gün doğruydu, kod o
tarihten sonra değişti.

### p0030/H-0006 — panel düğmesi "gideceği durum" yazsın
CEVAP hükmü `senin-kararin` idi (ben karar bekliyordum). Ama koda bakınca:
`js/app.js:5545-5579` bunu **24 Ağustos'ta** (`0031/H-0006`, commit
`82aa96e`) zaten çözmüş — fiil tabanlı etiket ("Daralt"/"Kapat"/"Genişlet")
hem Emre'nin "gideceği" hükmünü hem eski itirazın (üç kademede belirsizlik
olmasın) endişesini aynı anda karşılıyor. **Dokunmadım, zaten yayında.**

### p0019/H-0051 — kronoloji listesi kaydırma pozisyonu
CEVAP notu `block:"nearest"`in yanlış konumlandığını söylüyordu. Kod
(`js/app.js:3878-3908`) **18 Ağustos'ta** zaten düzeltilmiş: `scrollIntoView`
artık yalnız FALLBACK (kap kaydırılamıyorsa), asıl yol elle `scrollTop`
hesabı — madde ekranın ÜSTÜNE alınıyor. **Dokunmadım, zaten yayında.**

### p0034/H-0010, H-0024 — antlaşma metni butonu
CEVAP hükmü `sirada` idi ("Oturum 1 kapsamına girer"). Kod
(`js/app.js:5114-5157`) **24 Ağustos'ta** (`0034/H-0010`, OPUS HAZIR KITA 84)
zaten yazılmış: `EKOKUMA_TUR.antlasma`, 41/41 antlaşmanın `ozet`+`topraklar`
alanından besleniyor, kopya YOK (doğrudan bağlı). **Dokunmadım, zaten
yayında.**

---

## ③ VERİ'YE BAĞLI — koda dokunmadım, kod değil veri eksik

```
p0002/H-0011 · p0004/H-0011 · p0008/H-0006   Başkent yıldızı (yabancı
    devletler). Osmanlı başkentleri (k:1) ZATEN işaretli. Engel:
    devletler.js'te `baskent:` TEK DEĞER, zaman penceresi yok
    (Söğüt→Bursa→Edirne→İstanbul zinciri gibi). DEVLET KÜNYESİ kalemi —
    şema değişince arayüz tarafı küçük (nokta partileriyle paralel
    yapılabilir, önceki oturumun ölçümü).

p0019/H-0058                                  Böğürdelen fethi işareti
    yok. kronoloji yer_id VAR, `data/savaslar.js` kaydı YOK (0 eşleşme).
    Aynı kalıp Granbosa vakasıyla (4581d71) birebir — kod savaslar.js'i
    okuyor, kayıt gelince otomatik çıkar.

p0035/H-0081                                  Çeşme baskını için ne
    işaretleme ne Rus filosu gösterimi var — H-0058 ile AYNI SINIF
    (savaslar.js kaydı eksik). `deniz: "⚓"` glifi zaten hazır.

p0019/H-0020                                  Önem puanı (1-5) filtresi.
    `data/olaylar*.js`de `onem:` alanı 0 kayıtta var — 1223 maddenin
    TAMAMI puanlanmalı. Bu VERİ'nin büyük bir kalemi; arayüz tarafı
    (süzgeç: "yalnız 4-5") alan gelince ~10 dakikalık iş.

p0021/H-0030 (kalan kısmı)                    Üç voyvodalık başkentine
    ateş emojisi + saldırılan şehir/kale gösterimi. Okuma tarafı (ANTLASMALAR
    lat/lon + savasIsaretleri'nin ikisini de okuması) 19 Ağustos'ta
    düzeltilmiş (r2598); kalan iş üç YENİ savaslar.js kaydı.
```

---

## ④ BÜYÜK ÖZELLİK — tasarımı var, kodu yok, ayrı oturum öneriyorum

```
p0027/H-0006 · p0030/H-0003 · p0023/H-0003    Kutsal İttifak rozetleri +
    bağlantı ipleri. Tasarım teslim edilmiş (denetim/ITTIFAK-TASARIM.md,
    commit d9b255e): altyapının ÜÇTE İKİSİ zaten var (rozet kavramı,
    "🤝" glifi, düğüm-kenar ağı — koridorGuncelle ile aynı aile, 65
    düğüm/64 kenar, rozet çapası %100 dolu). EKSİK: (a) data/ittifaklar.js
    (üyelik verisi — VERİ, benim değil) (b) ışıltı animasyonu ve rozetleri
    birbirine bağlama çizimi (ARAYÜZ, benim ama VERİ'siz test edilemez).
    ⚠️ Bu projede "istenen şeyin altyapısı zaten vardı" BEŞ kez yaşanmış
    (0027/H-0006'nın kendi notu) — tasarım dokümanını uygulamadan önce
    TAM okumam gerekiyor, bu oturumda okuyamadım (darboğaz). Öneri: küçük
    ayrı bir "İTTİFAK RENDER" oturumu, tasarım dokümanı + boş/örnek
    ittifaklar.js ile.

p0034/H-0022, H-0040                          Her kronoloji maddesinin
    içeriğine göre 1-5 "ek okuma" başlığı OTOMATİK önerilsin. Bu, var olan
    buton mekanizmasından (③'e bak) FARKLI: var olan mekanizma veriye
    (ekokuma.js'teki `olay`/`baglanti` alanı) bakıp hangi kartın hangi
    maddeye bağlı olduğunu okuyor — yani HANGİ kartların hangi maddeye
    gideceğine hâlâ İÇERİK yazarı karar veriyor. "Otomatik öneri" bunun
    tersini istiyor: madde İÇERİĞİNE bakıp uygun başlıkları kendi kendine
    seçen bir algoritma/kural seti. Bu bir TASARIM KARARI (kural mı,
    anahtar kelime eşleştirmesi mi, LLM çağrısı mı) — koordinatörle
    netleşmeden yazılmaz.
```

---

## ⑤ TEYİT İSTİYORUM — geri alınmış bir kararla çelişiyor

### p0024/H-0010 — "Butonlar menüsünde HAKKINDA menüsü olsun"
🔴 **Ölçtüm ve bir çelişki buldum, kendi başıma karar vermedim:**
`index.html:23-28` ve `js/app.js:4219-4220` şunu kayda geçirmiş:
> *p0002/H-0010 — Emre: "Hakkında butonuna artık gerek yok." Hakkında
> (proje künyesi + BEKLEYENLER tablosu) TAMAMEN kaldırıldı — `hakkindaKur`
> ve eşleri SİLİNDİ.*

Bu, **daha eski** bir pakettten (`parti-0002`, "emrelic" ön eki bile yok —
projenin ilk partilerinden). `p0024/H-0010` ise DAHA SONRA, farklı bir
içerikle aynı düğmeyi istiyor: *"sitenin koşu ve yayın tarihi gibi
bilgiler."* Eskisi (proje künyesi + BEKLEYENLER) ile yenisi (sürüm/koşu
tarihi) **aynı şey değil** — ama aynı buton alanı, ve bu alan bir kez geri
alınmış.

**Ölçtüğüm ek engel:** veri de eksik. `arac/surum_damgala.py` yalnız
`?v=rNNNN` (git commit sayacı) yazıyor; `URETIM_IZI` (data/*.js'lerin
başında) yalnız dosya HASH'leri taşıyor, **hiçbir yerde okunabilir bir
insan tarihi yok.** Yani bugün yazılabilecek tek şey "sürüm: rNNNN" —
"yayın tarihi" için önce MOTOR'un (Oturum 0) `URETIM_IZI`ye bir zaman
damgası eklemesi gerekiyor.

⇒ **Kendi başıma eklemedim.** Sebep tıpkı 0030/H-0006 vakasındaki gibi:
*"bir önceki paketin uygulanmış hükmünü yeni bir pakete dayanarak geri
almak, koordinatörün/Emre'nin adına karar vermek olur."* Öneri: minimal
bir "ⓘ rNNNN" göstergesi (buton değil, köşede sabit bir etiket) — eski
"Hakkında" ile karışmaz, veri zaten var. Ama son söz sizde.

---

## ⑥ İÇERİK TALEBİ — dokunmadım, altyapı zaten hazır

`0034/H-0013·H-0014·H-0018·H-0021·H-0026·H-0027·H-0029…H-0035·H-0038…
H-0044`, `0035/H-0003·H-0012·H-0016·H-0023·H-0024·H-0025·H-0030·H-0032·
H-0033·H-0040·H-0041·H-0046` ve `0032/H-0009·H-0011` (Sokollu, Akçe Krizi,
Kanije Savunması, III. Mehmed, Kuyucu Murad, Sultanahmet Camii, I. Ahmed,
I. Mustafa, II. Osman, IV. Murad, Hezarfen/Lagari/Evliya Çelebi, Deli
İbrahim, Kâtip Çelebi, Merzifonlu, Hafız Osman, Topkapı Sarayı, Osmanlı
Altını…) — hepsi *ek okuma/merak/magazin/kimdir/sebep-sonuç* istekleri.

**Ölçtüm:** `index.html:334-336,612-616` + `js/app.js:5071-5169`
(`EKOKUMA_TUR`, `ekOkumaButonlariGuncelle`, `#ekokuma-pencere`) TAM VE
ÇALIŞIR DURUMDA — `data/ekokuma.js`/`data/merak.js` yoksa buton sessizce
hiç çıkmıyor, dosya bir gün gelirse (İÇERİK oturumu yazınca) kod
DOKUNULMADAN kendiliğinden çıkıyor. **Yani bu 20+ maddenin hiçbiri arayüz
işi değil** — hepsi `data/ekokuma.js`/`data/merak.js`e kart yazmak, yani
İÇERİK/kronoloji derinleştirme oturumunun kalemi. Sirada hükmü doğru,
sahibi yanlış atanmışsa (arayüze düşmüşse) düzeltilmeli.

---

## ⑦ BAKMADIĞIM/İNCELEMEDİĞİM

- Gürcistan'ın tek-kimlik tasarımı (0033/0034 H-0011·H-0017·H-0023,
  önceki oturumumdan) — bu bir VERİ/petek modeli sorusu, `js/app.js`
  kodu değil; ARAYÜZ kapsamına almadım.
- ETIKETLEME.md kalemleri (0035/H-0034·H-0066) — ayrı bir eksen, etiket
  oturumunun işi.
- "İki haritanın sınırları örtüşmüyor" (0035/H-0072·H-0101) — RENK mi
  ÇİZİM/GEOMETRİ mi ayrılmadı; muhtemelen MOTOR (donemler.js vs
  devletler_harita.js), ARAYÜZ değil — ölçmedim, emin değilim.

---

**Teslim:** 20 arayüz-izi taşıyan H-numarası bulundu ve tek tek ölçüldü;
7'si zaten/şimdi çözülü, 12'si veri/tasarım kararına bağlı (koda
dokunmadım), 1'i (HAKKINDA) geçmiş bir kararla çeliştiği için teyit
istiyorum. ~24 "İçerik talebi" maddesi ayrı bir kovada, arayüz altyapısı
zaten hazır olduğu belirtilerek işaretlendi. 2 kalem kodda değişti
(js/app.js + css/style.css), ikisi de sunucuda (localhost:8777, konsol
hatasız) doğrulandı. `?v=` damgasına dokunulmadı.
