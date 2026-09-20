# ELE-GECIRME-ANIM-0070 — toprak el değiştirme animasyonu

**Şartname:** `oturumlar/DALGA-0070.md` § "2 · ELE-GECIRME-ANIM-0070" (H-0008 · H-0007 · H-0005)
**Tarih:** 20 Eylül 2026 · **Oturum:** ELE-GECIRME-ANIM-0070 (Opus 5)
**Ölçüm aleti:** `node denetim/ARAC-ELE-GECIRME-0070.js` (salt okuma, yeniden koşturulabilir)
**Eşleşilen oturum:** SEFER-OK-0070 — ortak animasyon dili, tahta M-4701 (teklif) → **M-4703** (kabul + iki düzeltme)

---

## 🔴 ÖNCE BULGU: mekanizma zaten vardı, eksik olan DİLDİ

Şartname "önce KEŞİF: app.js'te bugün ne var" diyor. Keşif hükmü değiştirdi:

| Soru | Ölçülen |
|---|---|
| El değiştiren bölgeyi bulan kural var mı | **VAR** — `SUZGEC.maddeDegisimleri` (PAKET-UI3, 14 Eylül) |
| Bölgenin geometrisi çiziliyor mu | **ÇİZİLİYOR** — `antlasma-fark` kaynağı + `_farkKutusuCiz` (PAKET-UI2) |
| Yanıp sönüyor mu | **SÖNÜYOR** — ama Emre'nin istediği dizide değil |
| Odak/uçuş var mı | **VAR** — `haritayiOlayaGotur` + tek varış kapısı `_varista()` |

**Ölçü (1605 madde, `index.html` evreni):**

| Kova | Sayı |
|---|---|
| Gününde harita değişen madde (antlaşma hariç) | **782** |
| 🔴 Animasyon **ateşleyen** (değişim maddeye bağlanabildi) | **634** · %81,1 |
| 🟡 **Sessiz** (o gün değişim var, maddeye bağlanamadı) | 148 |
| ⚪ Antlaşma maddesi (UI2 kutusu çiziyor, ayrı yol) | 71 |
| Bağ yolu dağılımı | `yer_id` 614 · `yer` 491 · `komşu` 2711 · `başlık` 34 |

⇒ Yeni bir mekanizma **icat edilmedi** (şartname: D023). Değişen şey vuruş dizisidir.

### Eski dil → yeni dil

```
ESKİ (PAKET-UI2):  once → sonra → once → sonra → once → sonra → yok     (6 × 520 ms)
YENİ (H-0008)   :  koyu(420) → yok(180) → koyu(420) → yok(180) → sonra(620) → yok
```

Emre'nin cümlesi: *"koyu renk ile gösterilen bölge **2 kez yanıp sönmeli** ve **üçüncüde ele geçiren
devletin rengine bürünmeli**."* Tablo **tek yerde** durur (`app.js: ELE_GECIRME_DILI`), dizi ondan
türer (`eleGecirmeDizisi()`), ölçüm aleti de **aynı kaynaktan sökerek** koşar — sayı iki yere yazılmadı.

**Dizi sınavı (alet, app.js kaynağından):**
`koyu(420) → yok(180) → koyu(420) → yok(180) → sonra(620) → yok(0)` · toplam **1820 ms**
① koyu vuruş = 2 ✓ ② 3. vuruş yeni sahip ✓ ③ örtü sonunda çözülüyor ✓

### 🔴 Niçin son vuruşta örtü ASILI KALMIYOR, ÇÖZÜLÜYOR

Örtüyü "yeni sahibin düz rengi"nde bırakmak **işgal maddelerinde haritayı yalancı yapardı**: işgal
edilen yer nominal olarak hâlâ eski sahibinindir ve harita bunu TARAMA ile anlatır (`isgal-dolgu`).
Örtü kalkınca altından haritanın **kendi çizimi** çıkar — ilhaksa düz renk, işgalse tarama. Böylece
terim ayrımı (TERIM-STANDART-0070) ileride nasıl karara bağlanırsa bağlansın **bu animasyon kırılmaz**.
Bu, SEFER-OK-0070'in "varışta taralı işgal gösterimiyle yanıp sönsün" teklifine karşı yazdığım
düzeltmedir (M-4703 §②b) ve karşı taraf kabul kapısında.

### Koyu ton nereden geliyor

`koyuTon(renk, 0.45)` — **yeni sahibin** rengini karartır, yeni bir palet açılmaz (`renkler.py` ile
ayrışmasın diye). Petek **başına** hesaplanır: aynı maddede iki ayrı yeni sahip olabilir
(1463: Travnik kazanılırken Yayça kaybediliyor), tek bir "koyu" sabiti ikisini de yanlış anlatırdı.

Gerçek veride ölçüldü (Mekke 1803-04-30, tarayıcıda):
`once #b2384a (Osmanlı tâbi) · sonra #304b0f (Vehhâbî) · koyu #1a2908`

---

## H-0007 · olay alanının yanıp sönen simgesi

Bugüne kadar varışta yalnız **altın halka** (`.odak-parlama`) yanıp sönüyordu: halka *nerede*yi
söylüyor, *ne*yi söylemiyordu. Glif halkanın **içine** girdi — ikinci bir işaret, ikinci bir keyframe
ve ikinci bir zamanlayıcı **açılmadı** (aynı eleman, aynı `odakParla`, aynı 1800 ms).

**Glif uydurulmaz**, `olayMuharebeTuru(o)` kuralından gelir (madde türü/etiketi). Türetilemeyen
maddede halka **eskisi gibi** yalnız halkadır — boş bir emoji koymak, hiç koymamaktan kötüdür.
Tek tek maddeye elle bayrak **konmadı** (şartnamenin açık yasağı).

## H-0005 · deniz muharebesi simgesi

Glif **zaten vardı** (`SAVAS_TUR_SIMGE.deniz = ⚓`, lejantta da duruyor); eksik olan **türetme
koluydu** — `MUHAREBE_K` yalnız meydan/kuşatma/isyan biliyordu, her deniz muharebesi ⚔ çıkıyordu.
Sıra: ① `k:` ② `etiket:` ③ başlık/`yer:` metninde deniz kalıbı (yalnız ①/② "meydan" derken).

| Ölçü | Önce | Sonra |
|---|---|---|
| Simge türeyen madde | 550 | **555** |
| ⚔ meydan | 445 | 430 |
| ⚓ deniz | **0** | **20** |
| ◎ kuşatma · 🔥 isyan | 10 · 95 | 10 · 95 |

**⚓ alan 20 maddenin tamamı** (biri yanlışsa kural değil O KAYIT tartışılır):
İzmir Limanı 1344 · Gelibolu Tersanesi 1390 · Sapienza 1499 · Diu 1509 · Cidde 1517-04 ·
İskenderiye 1517-05 · Fransız donanmasının Osmanlı emrine girmesi 1553 · Cerbe 1560 ·
donanmanın yeniden inşası 1572-06-01 · Kılıç Ali Paşa 1572-06-13 · Girit Seferi 1645 ·
Fidonisi 1788-01 · Karadeniz'e açılma 1788-05 · Malta 1798-06 · **Ebukır (Nil) 1798-08-01** ·
Duckworth 1807 · Genel Deniz Antlaşması 1820 · Büyükdere 1833 · Karadeniz Baskını 1914 ·
İtilâf donanması 1918.

🟡 **Kuralın AÇIK kaldığı yer — bilinen borç, gizlenmiyor:** başlığında deniz kalıbı geçmeyen
deniz muharebeleri ⚔ kalıyor. Ölçülen örnekler: **Navarin 1827-10-20**, **Sinop 1853-11-30**,
**Çeşme 1770-07-06** (üçü de "…baskını"). Bunları yakalamak için başlık kalıbını genişletmek
YANLIŞ olurdu (ilk denememde `baskın.*liman` kolu Çeşme'yi yakaladı ama aynı kol kara baskınlarını
da yakalardı); doğru çare **veride** `etiket:["deniz"]` — kod onu ZATEN okuyor (`MUHAREBE_K.deniz`),
tek satırlık veri işi. `data/olaylar*.js` benim kalemim değil; sevk koordinatörde.

🔴 Bu borcu **tarayıcı sınavı yakaladı**: alet ilk sürümünde Çeşme'yi ⚓ listesinde basıyordu,
ekranda ⚔ çıktı. Sebep aletin ölçtüğü kural ile UYGULANAN kuralın ayrışmasıydı; alet düzeltildi
(`YENI_K`/`DENIZ_RE` artık app.js ile birebir) ve rapordaki liste yeniden üretildi.

---

## 🔴 DÜZELTİLEN KUSUR — `prefers-reduced-motion` açıkken örtü asılı kalıyordu

Tarayıcıda ölçüldü (Mekke 1803-04-30, iz kaydı): tek satır **`797ms sonra op=0.92`**, 4,2 saniye
boyunca değişmedi. Yani hareket kısıtı açık olan kullanıcıda fark örtüsü **bir sonraki maddeye
kadar asılı kalıyor** ve haritanın kendi çizimini (işgal taraması dâhil) örtüyordu.

Eski kod bunu bilerek yapıyordu ama **düğme** için: "↻ Yakıp söndür"e basınca bir şey olsun diye
önce↔sonra toggle. Kendiliğinden koşan **sahnede** yanlıştı. Ayrım `antlasmaFarkiKirp(gecikme, elle)`
ile yapıldı: düğme eski davranışı korur; sahne tek durak gösterir (`sonra`, 1040 ms) ve **çözülür**.
Hareket istemeyene akan animasyon verilmez — ama sonsuz örtü de verilmez.

---

## Sahne sıralayıcı — `js/anim_dili.js` (YENİ dosya)

SEFER-OK-0070 ile ortak dil (M-4701/M-4703). Faz sırası: **`ok` → `vurus` → `cozul`**.
Kayıtlı olmayan faz atlanır; faz `bitti()` demezse 2400 ms tavanla geçilir (sahne asılı kalmaz).

* `ok` fazı **SEFER-OK-0070'te** (`js/sefer_ok.js`), `vurus`/`cozul` **bende** (app.js'e kayıtlı).
* **rAF yok** — benim fazlarım `setTimeout` + MapLibre'nin kendi `fill-opacity-transition`ı.
  Kare başına hesap yapılmıyor. Ok fazı kendi içinde rAF kullanabilir.
* **Pasif kip:** Emre — *"pasif modda … sanki bu odaklanma gerçekleşmiş gibi bu adım pas
  geçilecektir."* ⇒ **atlanan ODAKTIR, vuruşlar değil.** `ANIM.sahnele` bunu `ucusAcik()`e sorarak
  ayırır (tek kapı, app.js).
* **Varış:** uçuş/ani kipte vuruşlar kamera VARINCA başlar — `_varista()` (var olan tek varış kapısı)
  `ANIM.varisBildir()` der; gelmezse 1600 ms tavan.
* 🔴 **Dosya bağlanmasa da animasyon çalışır:** `index.html` satırını koordinatör ekler (D099).
  `window.ANIM` yoksa app.js **aynı** `eleGecirmeDizisi()` tablosunu sabit gecikmeyle koşar —
  iki zamanlayıcı ama **tek tablo**.

---

## ✅ TARAYICI SINAVI — gerçek veriyle, mock YOK

Sunucu: `py arac/sunucu.py` (preview). Madde gerçek `olaylar` dizisinden açıldı
(`tarihAyarla` + `obGoster` + `haritayiOlayaGotur`), hiçbir veri uydurulmadı.

**① Vuruş dizisi — Mekke 1803-04-30, PASİF kipte** (25 ms aralıkla 105 örnek, `antlasma-fark-dolgu`
boya özelliği okunarak):

| an (ms) | durum |
|---|---|
| 3779 | `koyu` op=0.92 ← **1. vuruş** |
| 4131 | `koyu` op=0 |
| 4302 | `koyu` op=0.92 ← **2. vuruş** |
| 4722 | `koyu` op=0 |
| 5102 | `sonra` op=0.92 ← **3. vuruş: yeni sahibin rengi** |
| 5668 | `sonra` op=0 ← **çözülme** (harita kendi çizimini gösterir) |

Ölçülen vuruş süreleri 352/171/420/380/566 ms — tablo 420/180/420/180/620 (fark, ana iş
parçacığının o anki yükü + 25 ms örnekleme taneciği). **Dizi Emre'nin cümlesiyle birebir.**
📌 Bu koşu **pasif kipte** yapıldı ve aynı zamanda o kuralın sınavıdır: odak atlandı, **vuruşlar
atlanmadı**.

**② Olay noktası simgesi — `ani` kipte, halkanın içinden okundu:**

| madde | kural | ekranda |
|---|---|---|
| Ebukır (Nil) deniz muharebesi 1798-08-01 | ⚓ | **⚓** |
| Ebukır kara muharebesi 1799-07-25 | ⚔ | **⚔** |
| Çeşme baskını 1770-07-06 | ⚔ | **⚔** |
| Vehhâbîlerin Mekke'yi alması 1803-04-30 | 🔥 | **🔥** |

**③ Gerçek veriden okunan renkler** (Mekke 1803-04-30):
`once #b2384a` (Osmanlı tâbi) · `sonra #304b0f` (Vehhâbî) · `koyu #1a2908`.

**⚠️ Sınavda yamalanan tek şey:** `matchMedia("prefers-reduced-motion")` — bu tarayıcıda
`reduce` AÇIK geliyor ve tam dizi görülemezdi. Yama SINAV içindir, **kodda değildir**; hareket
kısıtlı yolun kendisi ayrıca ölçüldü (aşağıdaki kusur onunla yakalandı).

**🟡 Ortam engeli — kayda geçsin:** önizleme bölmesi boyanmadığında sayfada
`requestAnimationFrame` **hiç koşmuyor** (`rafKostu: 0`, sayaçla ölçüldü). MapLibre stil
yüklemesini rAF'a ertelediği için `harita.on("load")` hiç ateşlenmiyor ve `haritaHazir` false
kalıyor — sayfa "yükleniyor" gibi görünür ama sebep **pencerenin arkada olmasıdır**, kod değil.
Emre pencereyi öne aldığında aynı sayfa hemen hazır oldu ve yukarıdaki ölçümler alındı.
Sonraki oturumlara: bu ortamda harita sınavı **pencere önde** yapılır (ya da SEFER-OK-0070'in
kullandığı headless Chrome koşucusuyla).

---

## Değişen dosyalar

| Dosya | Ne |
|---|---|
| `js/anim_dili.js` | **YENİ** · ortak sahne sıralayıcı (`window.ANIM`) |
| `js/app.js` | `koyuTon()` · `ELE_GECIRME_DILI` + `eleGecirmeDizisi()` · `antlasmaFarkiKirp(gecikme, elle)` · `_eleGecirmeSahnesi()` + faz kaydı · `_antlasmaHal` "koyu" · `_farkKutusuCiz` koyu özelliği · `_varista` varış bildirimi · `MUHAREBE_K` deniz kolu · `isaretYanipSon(hedef, glif)` |
| `css/style.css` | `.odak-parlama .odak-glif` + hareket kısıtı kuralı |
| `denetim/ARAC-ELE-GECIRME-0070.js` | **YENİ** · ölçüm aleti |
| `denetim/ELE-GECIRME-ANIM-0070.md` | bu rapor |

`index.html`e **dokunulmadı** (satırı koordinatör ekler). `data/` altına **dokunulmadı**.
Motor koşusu **yapılmadı**. app.js'te yalnız kendi bloklarıma dokundum; SEFER/HAREKET blokları
(SEFER-OK-0070) ve serbest hat bloğu (SINIR-DIS-0070) **elimden geçmedi**.
