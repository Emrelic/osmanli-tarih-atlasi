# BULGU — ARAYÜZ, 26 açık kalem (27-29 Ağustos 2026)

Kaynak: `py arac/_acik_dok.py` → `── ARAYUZ (26) ──`. Dosyalarım:
`js/app.js` · `css/style.css`. `index.html`'e dokunmadım (ORHANGAZİ'de).
Tam hüküm listesi: `denetim/HUKUM-ARAYUZ.json`.

## SAYIYLA

```
26 madde okundu
 6 cozuldu       (3 bugün UYGULANDI: 0037/H-0002 · 0008/H-0006 · 0024/H-0010
                  3 kod okunarak DOĞRULANDI, önceden yapılmış: 0004/H-0011
                  + not: 0038/H-0001 "zaten-dogru" da bu ailede)
 2 zaten-dogru   (0019/H-0051 canlı test edildi · 0038/H-0001 kod doğrulandı)
16 sirada        (VERİ/MOTOR/RENK/KRONOLOJİ/ETIKETLEME'ye bağlı — arayüz
                  tarafında yapılabilecek YOK ya da tasarım kararı bekliyor)
 2 olculecek     (0035/H-0035 Değişmez-7 sonucu BULUNDU ama VERİ kararı
                  bekliyor · 0035/H-0077 VERİ/araştırma)
```

## ⚠️ BU ORTAMIN KISITI — her maddede tekrarlamamak için burada bir kez

MapLibre/WebGL bu tarayıcı panosunda **render olmadı** (`haritaHazir` her
denemede `false` kaldı — resize, reload, tab-front denendi, değişmedi).
Bu, projede önceden de yaşanmış bir pano-compositing kısıtı. Sonuç:
**piksel/görsel doğrulama yapamadım.** Buna karşılık ÇALIŞAN yollar:
`node --check js/app.js` (sözdizimi), canlı DOM/veri sorgulama (kronoloji
listesi, `gunIdx`, `window.YERLESIMLER`/`DEVLETLER` — haritanın WebGL'ine
bağlı değiller, ÇALIŞTI) ve kod okuması. Her maddede hangisine dayandığımı
ayrıca yazdım.

---

## UYGULANAN ÜÇ DEĞİŞİKLİK

### 1. 0037/H-0002 — deniz mavisi çok koyu
`SU_RENGI` `#bcd6e6` ("bir tık") → `#c4dcea` ("iki tık") — 24 Ağustos'un
kendi ölçüm tablosunda zaten hazır duran bir sonraki adım, yeniden
hesaplamadım. **SEVK: RENK oturumu `arac/renk_olc.py`yi yeniden koştursun**
— su açılınca su-yakınlığı mesafeleri kayar.

### 2. 0008/H-0006 — yabancı devlet başkentleri işaretlenmiyordu
`YABANCI_BASKENT_PENCERE` + `yabanciBaskentMi(ad,t)` eklendi: `devletler.js`
`baskent:` alanı (390 künyenin çoğunda dolu) o şehrin kendi `s:` (yabancı
sahiplik) pencereleriyle kesiştiriliyor. Osmanlı'nın aksine elle doğrulanmış
bir sıra kullanmadım — veri zaten "bu şehir bu devlete aitti" diyorsa
"ve başkentiymiş" bilgisiyle kesiştirmek yeterliydi. ⚠️ Ölçmediğim: `baskent:`
adı ile `ad:` alanının tam (aksan dahil) eşleşme oranı — eşleşmeyen sessizce
yıldızsız kalır, çökmez.

### 3. 0024/H-0010 — "Hakkında" — koşu ve yayın tarihi
Eski ağır modalı **geri getirmedim** (Emre'nin kendi isteğiyle kaldırılmıştı,
farklı içerikti). Bunun yerine MapLibre'nin hiç kullanmadığı `bottom-left`
kontrol yuvasına (ölçüldü: 0×0, boş) küçük, tıklamasız bir etiket eklendi:
sürüm no `<script src=app.js?v=rNN>`'den, yayın tarihi `data/donemler.js`nin
HTTP `Last-Modified` başlığından — ikisi de zaten üretiliyordu. ⚠️ Production
(GitHub Pages/Fastly) `Last-Modified`ı git-commit tarihiyle verip vermediğini
ölçmedim; vermezse etiket sessizce yalnız sürüm no'sunu gösterir.

---

## KOD OKUYARAK DOĞRULANAN (değişiklik gerekmedi)

- **0004/H-0011** (yıldız metnin değil şehrin yanında) — zaten yapılmış
  (`p2/H-0008` + `p4/H-0011`, CSS `.s-nokta::after` + `osmanliBaskentMi`).
- **0019/H-0051** (kaydırma politikası) — canlı test: `.simdiki` öğesi
  kabın üstüne 0,03 px farkla hizalanıyor, yani zaten "en başta" davranışı.
  DOM'da bir "konu süzgeci" satırı **aradım, bulamadım** — notun bahsettiği
  muhtemelen henüz inşa edilmemiş bir özellik (bkz. 0035/H-0034/H-0066).
- **0038/H-0001** (Rus işgali taralı, hangi renk) — `isgalDesenleriKur()`
  zaten işgalcinin rengini (`ig.renk`) ince şeritte, sahibin rengini kalın
  zeminde kullanıyor. Kod tarafında **hiçbir şey yanlış değil**; kalan iş
  tamamen VERİ (Eflak/Boğdan'ın kendi `isg:rusya` kaydı).

## ÖLÇÜP VARSAYIMI ÇÜRÜTTÜĞÜM MADDE

- **0027/H-0006** (Kutsal İttifak rozetleri, "Osmanlı'nın etrafından
  dolaşarak" bağlansın) — notun "koridor altyapısı belki yeterli" varsayımını
  ÖLÇTÜM VE ÇÜRÜTTÜM: `koridorGuncelle` yalnız sabit düğümler arasında DÜZ
  ÇİZGİ çiziyor, bir engeli "dolaşan" eğri/rota mekanizması YOK. Bu, tahmin
  edilenden daha büyük bir iş — ayrı bir görselleştirme partisi gerektirir.

## DEĞİŞMEZ 7'Yİ KOŞTURUP CEVAP BULDUĞUM MADDE

- **0035/H-0035** (Hotin'in Rusya'ya kara bağlantısız görünmesi) —
  `arac/denetle.py --ayrinti` (salt okundu) çalıştırıldı: Hotin 1769-09-19
  → rusya, 362 km, **B-bilinmiyor** kovasında (300-800 km) — ne doğrulanmış
  ne yalanlanmış bir vaka. VERİ oturumunun TDV'den ikmal hattını araştırması
  gerekiyor.

## KAPSAM DIŞI OLDUĞU İÇİN DOKUNMADIĞIM (16 kalem)

VERİ/MOTOR nokta yoğunluğu (0033/H-0010), araştırma kalemleri (0008/H-0001,
0035/H-0077), KRONOLOJİ İÇERİK eksikleri (0019/H-0046, H-0058, 0035/H-0059,
H-0081, H-0090), ETIKETLEME taksonomi tasarımı (0035/H-0034, H-0066,
0034/H-0022, H-0040 — bu ikisi taksonomiye bağlı olduğu için de sirada),
VERİ şema kararları (0019/H-0041, 0035/H-0093/94/98), RENK paleti
(0002/H-0005), ve ClaudEmre SİSTEM aracının arayüzü (0010/H-0001 — atlas
`js/app.js`'i değil). Her birinde NİÇİN ayrı ayrı `HUKUM-ARAYUZ.json`'da.

---

**Teslim:** 26/26 okundu · 3 kod değişikliği (js/app.js + css/style.css) ·
`node --check` ile sözdizimi doğrulandı · `CEVAP.json`a dokunulmadı ·
`denetim/HUKUM-ARAYUZ.json` yazıldı.
