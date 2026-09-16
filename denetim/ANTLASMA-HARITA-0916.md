# ANTLAŞMA HARİTASI — D-KATMAN, paket 0054 H-0020 (madde 20) · 16 Eylül 2026

Görev tanımı: `oturumlar/DALGA-0054.md` D-KATMAN satırı · orijinal metin `PARTI.md` H-0020 (Emre):
> *"tüm barış anlaşmaları için bir kronolojik madde koymamız gerekiyor ve bu barış anlaşması kronolojik
> maddesinde anlaşma hükümleri ile beraber haritada alınan verilen bölgelerin boyanması taranması ve
> üstlerine mesela avusturyaya bırakılan yerler lehistana bırakılan yerler venediğe bırkılan yerler
> rusyaya bırakılan yerler gibi etiketler koyalım. bu harita sadece o kronoloji maddesinde geçerli
> olacaktır ve barış anlaşmasındaki durumu haritada gösterecektir"*

Kurallar: `oturumlar/DALGA-0052.md` §0 (tahta, pathspec commit, kaynak kuralı). Tahtaya YALNIZ TESLİMDE
yazıldı (koordinatörün bu iş için özel talimatı).

## 1. Tasarım

**Geometri kendi başına üretilmedi.** `data/hukuki_sinirlar.js` (`window.HUKUKI_SINIRLAR`, C katmanı)
zaten Karlofça'nın taraf/kapsama/dayanak bilgisini taşıyor — D023 ("kendi yazdığın ayrıştırıcı, var
olandan her zaman kötüdür") gereği yeni bir tasarım YERİNE, mevcut kayıtlardan TÜRETEN ince bir katman
yazıldı:

```
data/antlasma_haritalari.js   window.ANTLASMA_HARITALARI — antlaşma → bölge → taraf + sinir_id[] eşlemesi
js/antlasma_harita.js         eşleştirme + geometri türetme + çizim + obGoster() bağlantısı
```

**"Yalnız o maddede geçerli" — nasıl sağlandı:** `js/app.js`'in madde detay kartını dolduran global
fonksiyonu `obGoster(o)` (app.js:7909, üst seviye gerçek global — d_katman.js'in `guncelle()` sarmalama
deseniyle AYNI yöntem) monkey-patch ile sarıldı. `obGoster` HER madde açılışında çağrıldığı için: açılan
madde `ANTLASMA_HARITALARI`daki bir kayda denk geliyorsa çizilir, denk gelmiyorsa (ya da yoksa) ÖNCEKİ
katman TEMİZLENİR. `app.js`/`index.html`'e DOKUNULMADI.

**Eşleştirme:** `app.js`'in `ANTLASMALAR` için zaten kullandığı desenle AYNI (app.js:7991-7993):
`o.b.indexOf(antlasma_ad) >= 0 && |gunIdx(tarih) - o.gi| < 60`.

## 2. Karlofça pilotu — veri

`data/hukuki_sinirlar.js`de gerçekten 4 Karlofça kaydı var (`karlofca-lehistan-1699` ·
`karlofca-venedik-1699` · `karlofca-bosna-sava-1699` · `karlofca-bosna-kaleler-1699`), üçü taraf başına
gruplandı:
```
Avusturya (habsburg)   karlofca-bosna-sava-1699 (Sava hattı) + karlofca-bosna-kaleler-1699 (Kostayniça·Bosna Novi'si)
Lehistan                karlofca-lehistan-1699 (Bar/Podolya)
Venedik                 karlofca-venedik-1699 (Ayamavra·Trebinye)
```
**Rusya BİLEREK EKLENMEDİ** — Karlofça'da Rusya ile yalnız iki yıllık mütareke yapıldı, Azak'ın devri
1700 İstanbul Antlaşması'ndadır (kaynak: `data/olaylar_ek5.js:260`, kendi `kaynak:` alanı TDV
karlofca/rusya'ya dayanıyor). Emre'nin H-0020 örneğindeki "Rusya'ya bırakılan" bu antlaşma için
KAYNAKSIZ olurdu; `data/antlasma_haritalari.js`nin `not:` alanına yazıldı, İstanbul 1700 ayrı bir kayıt
gerektirir (bu pilotta YOK).

## 3. Doğrulama — tarayıcıda, gerçek `obGoster` ile

Yerel önizlemede (`index.html`ye GEÇİCİ 2 script satırı eklendi, sonra HEAD'e geri alındı, commit YOK)
gerçek kronoloji maddesi (`olaylar.find(...b.indexOf("Karlofça Antlaşması")...)`) bulunup `obGoster(o)`
ÇAĞRILDI:
```
eşleşme: bulundu, id=karlofca-1699                                    ✓
5 nokta üretildi: Kostayniça · Bosna Novi'si · Bar (Podolya) ·
                  Ayamavra (Lefkada) · Trebinye — hepsi GERÇEK isim   ✓
3 etiket üretildi: "Avusturya'ya bırakılan" · "Lehistan'a bırakılan" ·
                   "Venedik'e bırakılan", her biri makul bir çapa
                   koordinatında                                      ✓
hata YOK                                                               ✓
```
🟡 **Bulgu — kusur DEĞİL:** Avusturya bölgesi için DOLGU (fill poligon) üretilmedi (`dolgu_sayisi:0`).
Sebep bulundu ve doğrulandı: `karlofca-bosna-sava-1699` kaydının `kapsama.dolgu:false` alanı var —
15 Eylül 2026'da Emre'nin kendi talebiyle (app.js:6067-6073 yorumu) C katmanının bu kayıt için dolguyu
BİLEREK kapattığı bir alan ("yarısı kırmızı yarısı yeşil dikdörtgen" görsel kusurunu önlemek için).
`_ahBolgePoligonu` bu bayrağı EZMEDİ — `_cKayitGeometrisi`nin kendi (Emre onaylı) davranışına saygı
gösterdi. Sonuç: Avusturya bölgesi haritada yalnız 2 kale-noktasıyla (Kostayniça, Bosna Novi'si)
temsil ediliyor, poligon YOK — bu VERİDEN kaynaklanan bir sınır, kodun eksiği değil.

🟡 **Görsel (tile) doğrulama YAPILAMADI** — önceki iki D-KATMAN turunda da aynı sonuç: bu ortamda
harita altlığı (`server.arcgisonline.com`) ağ erişimi olmadığı için yüklenmiyor, MapLibre "load"
ateşlenmiyor. `_ahKatmaniKur()` elle çağrılınca aynı "Style is not done loading" hatasını veriyor,
kendi try/catch'i YAKALIYOR, çökme yok.

## 4. Görsel tasarım

Üç kaynak/katman: `antlasma-harita-dolgu` (fill, `fill-opacity:0.55` — yarı saydam, ALTINDAKİ normal
harita hâlâ görünsün), `antlasma-harita-nokta` (circle, taraf renginde), `antlasma-harita-etiket`
(symbol, `text-field` ile bölge etiketi — Emre'nin "üstlerine ... etiketler koyalım" isteği BİREBİR).
Renk: `_cTarafRengi(taraf)` — C katmanının KENDİ renk fonksiyonu, tekrar yazılmadı (D023). Tıklanınca
popup: etiket + (nokta ise) yer adı + kaynak alıntısı.

## 5. Bekleyen

- 🔴 UI'ya tahtadan: `index.html`ye `js/app.js`ten SONRA İKİ satır —
  `<script src="data/antlasma_haritalari.js">` ve `<script src="js/antlasma_harita.js">`.
- 🟡 Görsel (tile) doğrulama — bu ortamda yapılamadı, erişimi olan bir ortamda tekrarlanmalı.
- 🟡 "Boya/tara" — Emre "taranması" da dedi (hatch pattern). MapLibre'de hatch, bir sprite/pattern
  görseli gerektiriyor (bu pilotta YOK, yarı saydam fill ile yetinildi). Emre onaylarsa küçük bir
  çizgili PNG pattern eklenebilir — ayrı bir iş, bu pilotun kapsamı dışında bırakıldı.
- 🟢 İkinci antlaşma (örn. İstanbul 1700 — Rusya/Azak) `ANTLASMA_HARITALARI`ye YENİ bir kayıt eklenerek
  genişletilir, `js/antlasma_harita.js` DEĞİŞMEZ — tasarım antlaşma sayısından bağımsız.
