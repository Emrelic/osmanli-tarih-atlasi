# C-NSEGMENT — N noktalı hatta dolgu bölme (13 Eylül 2026)

İstek: tahta M-3783 (C-FERHATPASA-HAT). `js/app.js` `_cKayitGeometrisi`, N noktalı
(`hat.tur` cetvel / dogal-tanimsiz) bir hattın dolgusunu yalnız İLK↔SON nokta
KİRİŞİNE göre bölüyordu. Commit YOK. `data/hukuki_sinirlar.js`e dokunulmadı.

## ① Ne değişti (js/app.js)

| satır | ne |
|---|---|
| 5218-5227 | eski "⚠️ SINIR" yorumu yerine yeni durum notu |
| 5231 `_cParcaKutuKes` | Liang–Barsky: bir parçanın kutu içinde kalan [t0,t1] aralığı |
| 5245 `_cCevreParam` | kutu çevresinde, saat yönünün tersine konum parametresi |
| 5252 `_cParcalarKesisir` | iki parça kesişiyor mu (hattın basitlik denetimi) |
| 5270 `_cPolylineKutuBol` | kutuyu N noktalı hatla İKİ halkaya böler |
| 5335 `_cKayitGeometrisi` | dağıtım: N≥3 nokta + `kapsama.kutu` + poligon dalı değil ⇒ yeni bölücü; öteki her durumda ESKİ kod BİREBİR (5355-5356) |

**Yöntem.** Hattın iki ucu, son parçalar doğrultusunda kutunun dışına kadar
uzatılır. Kutu içinde kalan kısım tek bir zincir olarak kırpılır. Halkalar
şöyle kurulur: zincir, ardından kutu çevresinde çıkış noktasından giriş
noktasına yürüyüş.
- saat yönünde yürüyüş ⇒ hattın yönüne göre SAĞ taraf = **negatif**
- saat yönünün tersine yürüyüş ⇒ SOL taraf = **pozitif**

2 noktada cross≤0 tarafı tam budur, yani `kapsama.negatif_taraf` anlamı aynen
korunuyor. Halkalar saat yönünün tersine çevrilip verilir.

**Desteklenmeyen durum.** Hat kutuya birden fazla kez girip çıkıyorsa ya da
kendini kesiyorsa bölücü `null` döner. O kayıtta dolgu çizilmez, yalnız çizgi
çizilir ve `console.warn` basılır. Kiriş yaklaşıklığına sessizce DÜŞÜLMEZ
(D015: ölçemediğini temiz sayma).

**Dokunulmayan.** `kapsama.tur:"poligon"` dalı (N>2'de hâlâ kiriş), paralel,
meridyen, bölge ve nokta-kümesi yolları.

## ② Mevcut kayıtlar: önce/sonra

Sınav aracı: `node denetim/ARAC-C-NSEGMENT-0913.js`. Kod kopyası yok: C bloğu
hem çalışma kopyasından hem `git show HEAD:js/app.js`ten METİN olarak kesilip
değerlendiriliyor.

- **(a)** 9 kaydın 9'unda `_cKayitGeometrisi` JSON çıktısı eski ve yeni kodda
  **BİREBİR**. Öteki üç geometri fonksiyonunda da fark 0.
  - 2 noktalı üç kayıt: midye-enez · ii-erzurum-sattularap · karlofca-bosna-sava.
  - `ferhad-pasa-1590-sinir-hatti` (poligon + boş dizi): dosyadaki hâliyle aynı
    kalıyor ve dolgusuz.
- **(a2)** Yeni bölücü 2 noktalı üç kayda UYGULANSAYDI:
  - alan farkı ≤2,3e-13
  - 1521 noktalık ızgarada farklı taraf **0**

  ⇒ anlam kiriş kuralıyla aynı. Kayıtlar yine de eski koddan geçiyor; bu sınav
  yalnız anlam tutarlılığını gösteriyor.

## ③ Sınav sonuçları: HEPSİ GEÇTİ (çıkış 0)

- **b1 zikzak (19 köşe, uçlar kenara ulaşmıyor):**
  - 2 parça, alan toplamı = kutu alanı
  - hattın iki yanındaki 36 noktanın 36'sı doğru renkte
  - ESKİ kodla bu 36 noktanın 18'i yanlış
  - baş ve son uzantılarının iki yanı doğru renkte
- **b2:** nokta sırası ters çevrilip `negatif_taraf` değiştirilince görünüm aynı
  (2401/2401).
- **b3 at nalı** (aynı kenardan giriş ve çıkış): içi ve dışı doğru.
- **b4** (kutudan çıkıp tekrar giren hat): `null`, 0 dolgu, çizgi var, uyarı basıldı.
- **b5** (kendini kesen hat): `null`.
- **(c) Ferhat Paşa 19 köşe, bellekte `kapsama.tur:"bbox"`**
  (kutu 29,5-43°K × 41,5-50,5°D, negatif_taraf osmanli):

| yer | kaynak hükmü | koordinat (GeoNames) | YENİ | ESKİ (kiriş) |
|---|---|---|---|---|
| Tebriz | osmanli: TDV tebriz (1585-09-25 → 1603-10-21) | 38°04'48"K 46°17'30"D | osmanli ✓ | osmanli |
| Erdebil | safevi: Eskandar Beg (tr. Savory) · TDV erdebil | 38°14'59"K 48°17'35"D | safevi ✓ | **osmanli ✗** |
| Hemedan | safevi: Monshi/Savory s.587·690·825 · Iranica NEHĀVAND | 34°47'57"K 48°30'52"D | safevi ✓ | **osmanli ✗** |
| Bağdat | osmanli: TDV safeviler [211] bölge listesi | 33,34058 44,400876 | osmanli ✓ | osmanli |
| Bakü | osmanli (Şirvan): Iranica BAKU i · TDV safeviler [211] | 40°22'39"K 49°53'31"D | osmanli ✓ | **safevi ✗** |

- **Koordinatlar:** GeoNames gazetteer (geonames.org arama sonucu, 13 Eylül 2026;
  şehir merkezleri). ATLAS NOKTASI KULLANILMADI (§4 "Atlas referans değildir").
- **Hükümler:** kayıtta ve üç ölçüm raporunda adıyla verilen kaynaklardan
  aktarıldı. Kaynaklar bu oturumda YENİDEN OKUNMADI (D104).

**Tarayıcı** (`arac/sunucu.py`, port 8777):
- Kayıt yalnız bellekte bbox'a çevrildi (disk yok), gün 1595-06-15.
- Canlı sayfanın kendi `_cKayitGeometrisi`si 2 parça üretti (osmanli + safevi).
- `queryRenderedFeatures` ile beş şehrin piksel noktasında çizilen dolgu:
  Tebriz osmanli · Erdebil safevi · Hemedan safevi · Bağdat osmanli · Bakü osmanli.
- Sayfa sonra yeniden yüklendi, bellek kaydı silindi.

## ④ Ölçülemeyen / açık

- **Ferhat kaydının dolgusu AÇILMADI.** Açmak veri sahibinin (C-FERHATPASA-HAT)
  işi: `kapsama.tur:"poligon"` + boş dizi yerine `tur:"bbox"` yazılmalı. Bu
  oturum yalnız render'ın hazır olduğunu gösterdi.
- **Yalnız 5 test noktası sınandı.** C-FERHATPASA-HAT'ın 110 hükümlü noktalık
  evreni yeni kodla YENİDEN ÖLÇÜLMEDİ. O evren atlas noktalarından oluşuyor;
  kendi aracıyla yeniden koşması önerilir.
- **Uç uzantısı** bir tasarım kararıdır, kaynak değil:
  - baş: Hazar içinden doğuya, kutunun doğu kenarına (≈39,01°K)
  - son: Şattülarap ağzından güneydoğuya, kutunun güney kenarına
  - kutunun uzantı bölgesindeki boyaması kaynaksız
- **Poligon dalında N>2 hat** hâlâ kirişle bölünüyor. Bugün o dalda dolgulu
  kayıt yok.
- **Denizi boyama** mevcut davranış (kutu dolgusu zaten denizi boyuyor);
  değiştirilmedi.
- **Sınav sırasında veri değişti.** C-FERHATPASA-HAT `hukuki_sinirlar.js`i
  güncelledi: Ferhat kaydının çıktısı 448 → 483 karakter. Eski ve yeni kod her
  iki hâlde de aynı çıktıyı verdi. Araç her koşuda veriyi yeniden okuyor.
