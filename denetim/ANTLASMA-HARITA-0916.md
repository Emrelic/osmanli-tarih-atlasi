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

## 9. DALGA-0058 md.3b — Pasarofça 1718, şema `noktalar` ile genişletildi

1.MURAT: "Karlofça'dan sonra ikinci antlaşma haritası Pasarofça 1718 olsun, üç taraflı etiketle:
'Avusturya'ya bırakıldı' (Belgrad, Banat, Küçük Eflak, Kuzey Sırbistan), 'Osmanlı'ya kaldı' (Mora),
'Venedik'e bırakıldı' (Dalmaçya/Arnavutluk kıyı kaleleri). Veriyi D-GEOARAC üretiyor... tahtadan onunla
eşleş."

**`data/hukuki_sinirlar.js`de Pasarofça için SIFIR kayıt var** (Karlofça'nın 4 kaydından farklı) —
`sinir_id` yolu kullanılamadı. Şema bu yüzden yeni bir alan aldı: `bolgeler[].noktalar` — doğrudan
`{ad, lat, lon, kaynak}` dizisi, `data/hukuki_sinirlar.js` aracılığı OLMADAN. `js/antlasma_harita.js`
`_ahBolgeleriUret` bu iki yolu (mevcut `sinir_id` VE yeni `noktalar`) PARALEL destekliyor; Karlofça
regresyon testinde AYNI sonucu verdi (5 nokta/3 etiket/0 dolgu — değişmedi).

**D-GEOARAC'ın çıktısıyla karşılaştırma** (`denetim/_ANTLASMA-HARITA-CIKTI-0916.json`, otomatik
yerleşim-fark aleti): Pasarofça için yalnız 2 eşleşme buldu — Çuha Adası VE Ayamavra, ikisi de
`osmanli→venedik` yönünde. Çuha DOĞRU (kronoloji maddesi teyit ediyor). **Ayamavra ŞÜPHELİ/atlandı**:
kronoloji maddeleri Ayamavra'nın 1699 Karlofça'da Venedik'e verildiğini, 1715'te Osmanlı'nın GERİ
ALDIĞINI (data/olaylar_ek5.js:515) söylüyor ama Pasarofça'daki (1718) akıbetini hiçbir madde AÇIKÇA
belirtmiyor — D-GEOARAC'ın algoritması muhtemelen ±60 gün penceresine rastlayan alakasız bir sahiplik
kırılmasını yakalamış olabilir. **Ayamavra bu kayda EKLENMEDİ** (D107: bulunamadı, uydurulmadı); bulgu
D-GEOARAC'a tahtadan bildirildi (bkz. §10).

**Gerçek geometri, kronoloji maddesinden ve `data/yerlesimler*.js`nin bilinen koordinatlarından
kuruldu** (D-GEOARAC'ın çıktısı DEĞİL — o yalnız 2 nokta buluyordu, asıl içerik başka yerden geldi):
`data/olaylar_ek5.js:517` (kaynak: TDV `pasarofca-antlasmasi`) üç grubu da isimle veriyor: "Belgrad ile
birlikte Kuzey Sırbistan, Banat ve Küçük Eflak Avusturya'ya terk edildi... Mora'yı Osmanlı'da bıraktı...
Venedik ise İyon kıyısındaki Preveze ve Çuha gibi mevzilerini korudu." 8 nokta üretildi:
```
Avusturya'ya bırakılan   Belgrad · Semendire · Temeşvar(Banat, TEMSİLÎ) · Krayova(Küçük Eflak, TEMSİLÎ)
Osmanlı'da kalan          Koron (Mora, TEMSİLÎ)
Venedik'te kalan          Preveze · Çuha Adası · Vonitsa
```
⚠️ **"TEMSİLÎ nokta" damgası BİLEREK kondu** — Temeşvar/Krayova/Koron antlaşma metninin doğrudan andığı
yerler DEĞİL, "Banat"/"Küçük Eflak"/"Mora" gibi BÖLGE adlarının bilinen idarî merkezleri/temsilcileri.
Bu, Karlofça'daki `nokta_atamalari`den (antlaşmanın KENDİSİ o şehirleri adıyla anıyordu) epistemik
olarak FARKLI bir güven seviyesi — kayıtta açıkça ayırt edildi, gizlenmedi.

Tarayıcıda gerçek `obGoster`/`_ahBolgeleriUret` ile sınandı: 8 nokta + 3 etiket doğru üretildi, "Haritada
gör" düğmesi doğru metinle belirdi, hata yok.

## 10. Tahtadan D-GEOARAC'a bildirilen bulgu

M-… (yatay mesaj): D-GEOARAC'ın Pasarofça eşleşmesindeki Ayamavra kaydının yön/tarih açısından şüpheli
olduğu, kronoloji maddeleriyle doğrulanamadığı, bu yüzden antlaşma haritasına EKLENMEDİĞİ bildirildi —
aletlerini gözden geçirmek isterlerse diye.

## 11. Bekleyen

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
- 🟡 D-GEOARAC'a Ayamavra bulgusu bildirildi (§10) — aletlerini gözden geçirip geçirmediklerini
  bekliyorum; ileride başka antlaşmalarda benzer yön/tarih şüphesi çıkarsa aynı disiplinle (kaynaksız
  eşleşme EKLENMEZ) elenecek.
- 🟢 Yeni antlaşma kayıtları (D-GEOARAC'tan) `ANTLASMA_HARITALARI`ye eklendikçe `js/antlasma_harita.js`
  DEĞİŞMEZ — tasarım zaten antlaşma sayısından bağımsız (§6).

## 12. DALGA-0066 H-0004 — "Rus yeşili üstünde pembe Lehistan" TEŞHİSİ (kod DEĞİŞMEDİ)

Emre'nin gördüğü ekran görüntüsü: 1769-09-19, "Hotin Kalesi'nin Ruslara kaybı" maddesi, Rus yeşili
zemin üstünde pembe (Lehistan) dolgu + iç diyagonal şerit (taralı görünüm). **Üç dosyamın da (js/
d_katman.js, js/antlasma_harita.js, data/antlasma_haritalari.js) bu şeklin KAYNAĞI OLMADIĞI ölçüldü:**
```
js/d_katman.js         1769-09-19'da aktif TÜM Lehistan-taraflı D_SINIRLAR kayıtları (4 tanesi)
                        kategori:"D-YOK" + hat:null — sinif "YOK", hem izinliSiniflar'da hem
                        hat-varlık kontrolünde ELENİYOR. Çizilebilecek HİÇBİR kayıt yok.
js/antlasma_harita.js   "Hotin kaybı" bir antlaşma (k:"antlasma") DEĞİL, k:"kayip" — ANTLASMA_
                        HARITALARI'nda eşleşen hiçbir kayıt yok, düğme bile çıkmaz. Karlofça'nın
                        kendi Lehistan bölgesi (aktif pencere 1699-1795, bu tarihi kapsıyor) yalnız
                        kullanıcı O MADDEYİ açıp "Haritada gör"e TIKLARSA görünür — nokta/circle
                        olarak (Suçava/Bar/Kamaniçe/Roman), POLİGON DEĞİL; görüntüdeki şekil poligon.
data/hukuki_sinirlar.js 1769-09-19'da aktif TEK Lehistan kaydı `karlofca-lehistan-1699`, "nokta-
(okunan, sahibi değil) kümesi" hat_tur — `_cKayitGeometrisi` bunun için dolgu ÜRETMEZ (nd.length<2).
```
**Renk eşleşmesi teşhisi güçlendiriyor:** `arac/renkler.py` — lehistan `#fc87c9` (PEMBE) · rusya
`#4f7d4f` (YEŞİL) · habsburg→avusturya `#bdab3f` (HARDAL — görüntüdeki iç şeridin tonu). Görüntüdeki
şeklin (opak DEĞİL, yarı saydam blend + iç diyagonal şerit = TARAMA deseni) DALGA-0066 H-0003'ün
kendi tarifiyle ("taralı işgal gösterimi") BİREBİR örtüşüyor — H-0003 UI-HARITA'ya (app.js sahibi)
verilmiş bir madde ve "Rus işgali taralı, Kırım düz" diyor, yani işgal/taralı mekanizması ZATEN
Rusya için biliniyor. **Sonuç: bu şekil muhtemelen `data/yerlesimler*.js`nin `isg:` (işgal) alanına
bağlı, app.js'in kendi taralı-örtü mekanizmasıyla çiziliyor — benim üç dosyamda değil.**
🔴 Bu bir TEŞHİS, kesin TEYİT değil — app.js'e dokunmuyorum (§7, dosya bende değil) ve
`isg:`in tam mekanizmasını kod okuyarak doğrulamadım (zaman/kapsam sınırı). **1.MURAT'a
ISGAL-TARAMA'ya (koordinatörün adlandırdığı sahip) devredilmesi önerildi** — spesifik soru:
Lehistan'ın bu bölgede (47-50°K, 30-35°D) 1769'da `isg:` kaydı var mı, varsa penceresi doğru mu.

## 13. DALGA-0066 H-0005 — Lehistan'ın 1. Paylaşımı (1772), üç pay da AYIRT EDİLEBİLİR yapıldı

Emre: Prusya'nın payı "koyu mavi" ile belirgin görünüyor ama Habsburg/Rusya'nınki kendi devlet
rengine bürünüp kayboluyor. **TEŞHİS (yine kod kusuru DEĞİL):** üçü de yalnız normal petek dolgusu
— Prusya'nın rengi (#2478d2 mavi) komşularından TESADÜFEN ayırt edilebiliyor, Rusya (#4f7d4f yeşil)
ve Habsburg (#bdab3f hardal) KENDİ eski topraklarıyla AYNI renkte olduğu için "kaybolıyor". **Önceden
hiçbir antlaşma haritası kaydı YOKTU** (`data/hukuki_sinirlar.js` ve `data/antlasma_haritalari.js`
bu antlaşmayı hiç kapsamıyordu) — ÇÖZÜM burada, MADDE `lehistan-1-paylasim-1772` eklendi.

**Şema genişletildi:** `bolgeler[].kutu` — `[lon0,lat0,lon1,lat1]` doğrudan bbox dikdörtgeni (ne
`sinir_id` ne `noktalar` yeterliydi: `hukuki_sinirlar.js`de 0 kayıt, "bölge" bir nokta değil).
`js/antlasma_harita.js`e üçüncü bir geometri yolu eklendi (`_ahBolgeleriUret`, sinir_id/noktalar'ın
AYNI dolgu+etiket üretimine katılıyor).

**Geometri kaynağı — kendi başına ÜRETİLMEDİ (D023):** `js/d_katman.js`nin kendi D_SINIRLAR
ailesindeki, GERİYE-SARMA'nın G6-G7 dalgasında araştırılmış ama koordinatsız "D-YOK" kayıtlarından
(`d1742-lh-ah` · `d1686-lh-ru` · `d1606-lh-alm-pr`) TÜRETİLDİ — dayanakları (Britannica Partitions
of Poland/Silesian Wars/Wehlau-Oliva, Encyclopedia of Ukraine) o kayıtlarda ZATEN vardı.
🔴 **Kesinlik AÇIKÇA düşük, kayıtta gizlenmiyor:** Rusya ve Prusya'nın kutuları o devletin
Lehistan'la TÜM tarihî sınır bölgesini (1772+1793+1795 paylaşmalarının toplamını) kapsıyor, YALNIZ
1772 payını değil — gerçek 1772 sınırı muhtemelen bu kutuların bir ALT kümesi. Habsburg'unki
("1772 Galiçya" notlu d1742-lh-ah) daha dar/isabetli. Bu, H-0005'in ASIL şikâyetini (üç payın da
görünür/ayırt edilebilir olması) ÇÖZÜYOR ama "kesin 1772 sınırı" iddia ETMİYOR — isabetli sınır
istenirse ayrı bir araştırma turu (D-GEOARAC/D2-KOMSU) gerekir, kayıtta AÇIKÇA not edildi.

**Doğrulama — gerçek `obGoster` ile, gerçek "BİRİNCİ TAKSİM" maddesiyle** (`devletler.js`nin
`lehistan.kronoloji`sinden, `t:"1772-08-05"`): eşleşme bulundu, 3 dolgu + 3 etiket üretildi, "Haritada
gör" düğmesi doğru çıktı, tıklanınca hata yok (harita "load" bu ortamda hâlâ ateşlenmiyor — önceki
turlarla AYNI ağ kısıtı). Karlofça/Pasarofça/Ankara İtilafnâmesi kayıtlarında regresyon YOK.
