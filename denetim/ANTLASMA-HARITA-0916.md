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

## 6. DALGA-0055 §A madde 1 — genelleme, otomatik çizimden DÜĞMEYE geçiş

1.MURAT: "Karlofça pilotunu BÜTÜN antlaşma maddelerine genelle ('Haritada gör' düğmesi, taralı alan +
'X'e bırakıldı' etiketi); veriyi D-GEOARAC üretecek (bölüm B), şemayı tahtadan onunla netleştir."

**Kod tarafı zaten genel** — `_ahEslesenKayit`/`_ahBolgeleriUret` Karlofça'ya ÖZEL yazılmadı, `window.
ANTLASMA_HARITALARI`nin TAMAMINI tarar; D-GEOARAC yeni kayıt ekledikçe kod DEĞİŞMEDEN çalışır. Değişen
tek şey **tetikleme**: ilk sürüm (commit 1f45b2e) madde açılır açılmaz OTOMATİK çiziyordu — ~400
antlaşma maddesi olduğu için (DALGA-0055 §B ölçümü) bu hem gereksiz hesap hem kullanıcı kontrolsüzlüğü
demekti. Artık `obGoster` sarmalaması yalnız bir **"🗺️ Haritada gör — bırakılan bölgeler"** düğmesi
ekliyor (`#ob-ozel`e append, app.js'in kendi "önce/sonra"/"yakıp söndür" düğmelerinin YANINA — mevcut
DOM'a dokunulmadı), tıklanınca `_ahGoster`/`_ahTemizle` arasında geçiş yapıyor (ikinci tık kaldırır).

**Şema D-GEOARAC'a tahtadan gönderildi** (yatay mesaj, §7.1③): tam alan listesi + "geometri kendin
üretme, yalnız `data/hukuki_sinirlar.js` id'lerine işaret et" uyarısı. D-GEOARAC'ın önceki işi (M-4098:
"D-GEOARAC dosyaları koordinatörce commit edildi, D-GEOARAC işi bitti") 1923 D sınırları geometri
aletiydi — BU iş (antlaşma haritası veri aleti) DALGA-0055 §B'de AYRI ve YENİ bir görev.

**Doğrulama (tarayıcı, gerçek `obGoster`):** madde açılınca düğme doğru metinle beliriyor
("🗺️ Haritada gör — bırakılan bölgeler"), `#ob-ozel` içindeki DÖRT düğmeden (◀ Öncesi/Sonrası ▶/↻ Yakıp
söndür/⌖ Farka odaklan — hepsi ÖNCEDEN VAR OLAN ANT_FARK düğmeleri) doğru ayırt edilip bulundu, metin
tıklanınca değişiyor. Aç/kapa döngüsü `_ahAktifId`i elle eşitleyerek de sınandı (bu ortamda harita
"load" olmadığı için `_ahGoster` gerçek durumu asla ayarlayamıyor — önceki turlarla AYNI, bilinen kısıt)
ve doğru çalıştığı doğrulandı.

## 7. DALGA-0055 §A madde 2 — vasal sınır rengi (`js/d_katman.js`)

1.MURAT: "Vasal devletlerin SINIR çizgisi Osmanlı vasal açık kırmızısı, iç dolgu değişmez (Eflak,
Boğdan, Erdel ayrı ayrı)." `js/d_katman.js`e eklendi (bu D-KATMAN'ın 1923 D-sınırları modülü, antlaşma
haritasından AYRI dosya): `taraflar`ı `eflak`/`bogdan`/`erdel` içeren bir D-sınırı kaydı artık
`D_HAT_RENK` (#0a2f5c, genel koyu lacivert) yerine `D_VASAL_RENK` (#d4707d) ile çiziliyor — bu renk
**yeni İCAT EDİLMEDİ**, app.js'in kendi vasal-şerit rengiyle (`himaye-serit-ic`, app.js:1508) BİREBİR
AYNI, görsel dil tutarlı kaldı. "İç dolgu değişmez" otomatik sağlanıyor çünkü D-KATMAN zaten hiç dolgu
çizmiyor (yalnız çizgi, §9) — app.js'in kendi osmanli/himaye-dolgu katmanlarına dokunulmadı.

⚠️ **Kapsam BİLEREK dar tutuldu** — yalnız Emre'nin açıkça saydığı üç künye (`eflak`/`bogdan`/`erdel`).
`devletler.js`de statik bir "vasal" bayrağı yok (yalnız `tur:"prenslik"` gibi polit tür var, gerçek
tâbilik yerleşim seviyesinde zaman-pencereli `v:` kaydı — D188 "kümeyi bilmeden hüküm verme"); Kırım
Hanlığı, Cezayir/Tunus/Trablus ocaklıkları gibi başka tâbi devletler İSTENİRSE 1.MURAT'a sorulup
`D_VASAL_TARAF_IDLERI`ye eklenir, ŞİMDİ eklenmedi. Düz JS nesnesiyle sınandı (üç isim de doğru renk
verdi, dördüncü/normal örnek genel rengi korudu) — gerçek D-sınırı verisinde Eflak/Boğdan/Erdel henüz
YOK (GERİYE-SARMA henüz 1923'ten geriye sarmadı), bu yüzden tarayıcıda gerçek bir kayıtla GÖRSEL olarak
sınanamadı; fonksiyon mantığı doğrulandı, veri gelince otomatik devreye girecek.

## 8. Bekleyen

- 🔴 UI'ya tahtadan: `index.html`ye `js/app.js`ten SONRA DÖRT satır —
  `<script src="data/antlasma_haritalari.js">` · `<script src="js/antlasma_harita.js">` ·
  `<script src="js/d_katman.js">` (D-KATMAN'ın öteki modülü, aynı ricada) ve `data/d_sinirlar*.js`
  aileleri (bkz. `denetim/D-KATMAN-0916.md` §8, ayrı rapor).
- 🟡 Görsel (tile) doğrulama — bu ortamda yapılamadı, erişimi olan bir ortamda tekrarlanmalı; özellikle
  düğmenin gerçek haritada dolgu/nokta/etiketi açtığı ve vasal rengin (Eflak/Boğdan/Erdel verisi
  gelince) doğru göründüğü.
- 🟡 D-GEOARAC'a şema gönderildi (tahta, §6) — cevap/ilk üretilmiş kayıt bekleniyor.
- 🟡 Vasal renk kapsamı (§7) yalnız Eflak/Boğdan/Erdel — genişletme (Kırım Hanlığı, Kuzey Afrika
  ocaklıkları vb.) 1.MURAT'a sorulmalı, kendiliğinden EKLENMEDİ.
- 🟡 "Boya/tara" — Emre "taranması" da dedi (hatch pattern). MapLibre'de hatch, bir sprite/pattern
  görseli gerektiriyor (bu pilotta YOK, yarı saydam fill ile yetinildi). Emre onaylarsa küçük bir
  çizgili PNG pattern eklenebilir — ayrı bir iş, bu pilotun kapsamı dışında bırakıldı.
- 🟢 Yeni antlaşma kayıtları (D-GEOARAC'tan) `ANTLASMA_HARITALARI`ye eklendikçe `js/antlasma_harita.js`
  DEĞİŞMEZ — tasarım zaten antlaşma sayısından bağımsız (§6).
