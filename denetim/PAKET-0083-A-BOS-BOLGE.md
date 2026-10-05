# PAKET-0083-A-BOS-BOLGE — "bu bölge neden boş" ×4 (H-0002 · H-0003 · H-0004 · H-0007)

5 Ekim 2026 · oturum PAKET-0083-A-BOS-BOLGE (eski PAKET-0076-TASNIF-1004) · şartname `oturumlar/PAKET-0083.md` §0 + §A.
`data/` · `arac/` · `js/` YALNIZ OKUNDU.

## 0 · GÖRSEL OKUMA (ölçümden önce)
Dört PNG de **tarih göstermiyor** (kırpılmış harita parçası; zaman çubuğu yok). PARTI.json'da da tarih alanı yok.
Görselden okunan:
| Madde | Okunan | Boş alanın biçimi |
|---|---|---|
| H-0002 | üstte "VENEDİK" (sarı gövde), altta "Delvine", ortada üst üste binmiş iki etiket (okunamıyor) | kenarları ÇİZGİLİ (pembe · mavi-yeşil · lacivert) bir çokgenin İÇİ boş — Arnavutluk güneyi, Delvine'nin kuzeyi |
| H-0003 | "Sohum" sol altta; güneybatı pembe-mor, kuzeydoğu kahverengi gövde | iki gövde arasında KB–GD uzanan İNCE ŞERİT (Kafkas ana sırtı boyu) |
| H-0004 | "İRAN" sağda; güneybatı pembe-mor, kuzeybatı kahverengi, altta mavi gövde | iki gövde arasında KB–GD uzanan İNCE ŞERİT — yer adı yok |
| H-0007 | Milano Dk. · Mantua Dk. · Ferrara Dk. · Venedik (sarı çizgi) · Trento (yeşil) | Po ovası/Venedik karası GENİŞ alan: Bergamo · Brescia · Verona · Padova · Parma noktaları GÖRÜNÜYOR ama boyasız |

Yıl görselden okunamadı ⇒ yıl **veriden** aranacak (noktaların `s:` dönemi boş/`__BOSLUK__` olduğu pencere,
künye ömürleriyle daraltılarak). H-0007 için künye ipucu: Ferrara Dukalığı + Mantua Dukalığı birlikte ⇒ ~1530–1598.

## 1 · ÖNGÖRÜ — ÖLÇÜMDEN ÖNCE
```
H-0007  Noktalar VAR (görselde 5+ ad). ⇒ sebep "nokta yok" DEĞİL; noktaların o yılda s: dönemi YOK
        ya da __BOSLUK__/sahipsiz. Venedik karasının (Terraferma) s: dönemi eksik, öngörü: ≥5 nokta,
        hepsi aynı pencerede boş. SINIF: veri boşluğu (dönem eksik).
H-0002  Kenarlı çokgen içi boş ⇒ öngörü: noktalar var ama o yıl sahipsiz/__BOSLUK__ (Osmanlı öncesi
        Arnavut beylikleri penceresi — künyesi olmayan dilim). SINIF: kasıtlı boşluk ya da dönem eksik.
H-0003  İnce şerit, iki gövde arasında ⇒ öngörü: şeritte nokta YOK ya da 1-2 dağ noktası; şerit iki
        gövdenin hat-yaslaması/gövde kırpmasında kalan ARTIK (motor çıktısı), veri boşluğu değil.
        SINIF: gövde/hat artığı.
H-0004  H-0003 ile aynı biçim ⇒ öngörü: aynı sınıf (gövde/hat artığı). Yer ölçülemeyebilir.
⇒ Öngörü: dört maddeden İKİ sınıf (Po + Arnavutluk = veri; Kafkas + İran şeritleri = motor artığı).
```

## 2 · ÖLÇÜM (öngörüden SONRA)

### Yöntem
- Nokta sayımı: `denetle.yerlesimleri_yukle()` (girdi.py'nin 93 dosyası) üzerinden boylam/enlem kutusu ve
  `s:` dönemleri (`scratchpad/t83/kutu.py`).
- "Boş mu": yerel önizleme (`py -m http.server 8765`), tarayıcıda uygulamanın KENDİ çözülmüş verisi:
  yabancı gövdeler `devletler2[].dnm[].ft` (aktifAralik ile), Osmanlı/tâbi `donemler[donemBul(t)]`
  (`tekVeri`/`petekVerisi` — guncelle()'nin kullandığı işlevler). Nokta-içinde testi app.js'in `noktaIcinde`
  işleviyle. Harita çizimi KULLANILMADI (önizleme paneli gizli, stil yüklenmiyor) ⇒ ölçülen şey yayın
  verisinin geometrisi, ekrandaki piksel değil.
- Yerel çıktı: `data/donemler.js` + `devletler_harita.js` (diskte 4 Eki 19:17) · `KOSU_DAMGA`: koşu 19,
  `yuruyus:true`, bütçe 40 saat. ⚠️ Emre'nin ekranı 4 Eki 21:28'de yayındaki r11195'i gösteriyordu;
  `kosu_damga.js` yorumu r11195'in YÜRÜYÜŞ KAPALI koştuğunu söylüyor. Yereldeki çıktı ile Emre'nin gördüğü
  çıktı AYNI MI: **ölçülemedi**. Dört boşluk da yerel veride BİREBİR yeniden üretildi (aşağıda).

### H-0007 — Po ovası · SINIF: KASITLI BOŞLUK (`__BOSLUK__`), künyesi olmayan senyörlükler
- Görselin yılı: **1281-01-01 → 1395-05-11** arası (aşağıdaki ölçüm bu pencereyi verir; görselde Milano,
  Mantua, Ferrara dolu, Bergamo–Padova boş).
- Kutu 9,5–12,5 D × 44,5–46,0 K: **9 nokta.** Bunların **5'i** (Bergamo · Brescia · Verona · Padova · Parma)
  `s:` ilk dönemi `1281-01-01→1395-05-11 __BOSLUK__` (`yerlesimler_avrupa.js`).
- Tarayıcı ölçümü (gövde içinde mi):
  ```
  1300 · 1350 · 1390   Verona Bergamo Padova Brescia Parma = BOŞ · Milano=milanoduka · Mantova=mantua · Ferrara=ferrara · Venedik=venedik
  1396                 beşi de milanoduka
  1420                 Verona/Padova=venedik · Bergamo/Brescia/Parma=milanoduka
  ```
- ⇒ Nokta VAR, eksik değil. Boşluk BEYANLI: 1395 öncesi bu şehirlerin sahibi için künye yok
  (`devletler.js`te Scaligeri / Carraresi / Visconti senyörlüğü kimliği aranıp BULUNAMADI). Not: `milanoduka`
  künyesi f:1097'den başlıyor (devletler.js:2091), yani Visconti şehirleri için kimlik VAR — ama hangi şehrin
  hangi yıl Visconti'ye geçtiği kaynakla tarihlenmedi. "Kaç olmalı": nokta sayısı yeterli (5/5); eksik olan
  dönem + gerekirse 2 künye (Della Scala · Carrara). Kaynak işi.

### H-0002 — Güney Arnavutluk (Berat) · SINIF: KASITLI BOŞLUK (`__BOSLUK__`)
- Görselin yılı: **1281-01-01 → 1417-01-01** arası (Draç=venedik üstte sarı, Avlonya=napoli batı kıyısında
  pembe, Delvine=bizans altta lacivert — görseldeki renk düzeniyle örtüşüyor).
- Kutu 19,2–20,8 D × 39,5–41,5 K: **15 nokta.** Boşluğun merkezi **Berat**: `1281-01-01→1417-01-01 __BOSLUK__`
  (`yerlesimler.js`). Görice de `1281→1395 __BOSLUK__`.
- Tarayıcı ölçümü:
  ```
  1360 · 1394 · 1400 · 1416   Berat=BOŞ · Berat–Avlonya arası (19,75/40,6)=BOŞ · Tepedelen/Ergiri/Delvine=bizans · Avlonya=napoli
  1418                        Berat · Avlonya · Tepedelen · Ergiri = OSM
  ```
- ⇒ Nokta VAR. Boşluk BEYANLI: 1417 öncesi Berat'ın sahibi için künye yok (Muzaka/Berat despotluğu kimliği
  `devletler.js`te aranıp BULUNAMADI; `arnavutluk-iskenderbey` var ama 1443+). "Kaç olmalı": nokta yeterli;
  eksik olan künye + dönem.

### H-0003 — Sohum'un kuzeydoğusu, Kafkas ana sırtı · SINIF: NOKTASIZ YÜKSEK SIRT, iki farklı sahip arasında
- Görselin yılı: **ölçülemedi tek bir güne**; şerit 1500 · 1600 · 1790'da VAR, 1815'te YOK (aşağıda). Görseldeki
  pembe = Osmanlı, kahverengi = Kabartay/Rusya ⇒ en olası pencere **1578–1810** (Sohum Osmanlı).
- Kutu 40,6–42,8 D × 42,7–43,8 K: **1 nokta** (Sohum). Şerit örneklerinin 50 km içinde **0 nokta**; en yakınlar
  Sohum 95–110 km · Kabartay (Nalçik) 108–156 km · Kutaisi 107–159 km.
- Tarayıcı ızgarası (0,1°): Abhazya (O/Gürcistan) ile Kabartay/Rusya arasında KB–GD uzanan, **4-7 hücre
  (~30-55 km) genişliğinde BOŞ şerit**, 41,5 D/43,8 K → 42,6 D/43,1 K.
  ```
  1500  G(gurcistan) | .... | K(kabartay)
  1600  O(OSM)       | .... | K(kabartay)
  1790  O(OSM)       | .... | R(rusya)
  1815  R | R | R  ← iki yaka AYNI sahip olunca şerit KAPANIYOR
  ```
- ⇒ Nokta YOK. Şerit, iki yakadaki noktaların erişiminin dışında kalan yüksek sırttır; iki yaka aynı devlete
  geçince (1815) gövde onu içine alıyor. Mekanizma (yürüyüş bütçesi 40 sa mı, A1 tavanı mı): motor logundan
  **ölçülmedi** — yalnız sonuç ölçüldü. En yakın nokta ~100 km, A1 tavanı 200 km; yöne duyarlı A1b'nin bu
  sektörde ne kestiği ölçülmedi. Damga `yuruyus:true` olduğundan en olası açıklama 40 saatlik bütçedir —
  ama bu bir ÇIKARIM, ölçüm değil.
- "Kaç olmalı": şeridin içinde ya da yakınında **≥1 nokta** (Svaneti/üst Kodori vadisi), kaynaklı. Aday —
  KAYNAKSIZ, yalnız yer tarifi: Mestia (Svaneti). Nokta ekleme koordinatörde.

### H-0004 — Kaheti ile Dağıstan arası, Kafkas ana sırtı · SINIF: H-0003 ile AYNI + ayrı bir KİMLİK kusuru
- Görselin yeri ve yılı: "İRAN" etiketi `iran` kimliğinin etiketi. Bu kimlik yalnız **1281-01-01 → 1510-12-02**
  arasında gövde taşıyor ve 1281–1501 gövdesi **Dağıstan'da** (bbox 46,4–48,7 D × 41,5–44,5 K) ⇒ görsel
  **1281–1501** arası, Kafkas ana sırtının doğu ucu. Görseldeki kahverengi KB = Altın Orda, pembe GB = Gürcistan,
  mavi G = Şirvanşah (1350 ızgarasında birebir bu düzen).
- Şerit örneklerinin 50 km içinde **0 nokta**; en yakınlar Zagem (Kaheti) 93–112 km · Tarki 104–130 km ·
  Vladikavkaz 83 km (`kur:1784` — o yıl YOK) · Şeki 116–149 km.
- Tarayıcı ızgarası: 1350 · 1450 · 1505'te Gürcistan ile `iran`/Nogay arasında KB–GD BOŞ şerit
  (45,6 D/42,7 K → 47,2 D/41,9 K). 1450'de Kabartay–Altın Orda arasında genişliyor.
- ⇒ Nokta YOK — H-0003 ile aynı sınıf.
- 🔴 **YAN BULGU — "devlet var, yeri yanlış" (D204/D205):** `iran` künyesi `f:1925-12-12` (Pehlevi →
  İİC, devletler.js:179). Ama **3 Dağıstan noktası** `s: iran` ile 1281'den başlıyor: Tarki (Tarku)
  1281→1501-07-01 · Ağraham burnu 1281→1501-07-01 · Derbend 1281→1509-01-01 (`yerlesimler.js`); ve
  Dihistan · Kızılarvat 1507→1510. Emre'nin ekranındaki "İRAN" yazısı bu yüzden 14. yüzyıl Dağıstan'ında.
  Sınıflandırma (D205): ③ ardıl/başka yapı — Tarki için künye VAR: `kumuk-samhalligi` (f:1578, devletler.js:7737),
  ama 1281–1501 penceresini kapsamıyor. Bu iş bu paketin kapsamı dışı; koordinatöre BİLDİRİM.

### Öngörü puanı
| Madde | Sayı | Mekanizma |
|---|---|---|
| H-0007 | TUTTU (≥5 → 5) | TUTTU (aynı pencerede boş — `__BOSLUK__`) |
| H-0002 | TUTTU (nokta var) | TUTTU (`__BOSLUK__`, Osmanlı öncesi künyesiz dilim) |
| H-0003 | TUTTU (0 nokta) | **ÇÜRÜDÜ** — "hat-yaslama/gövde kırpma artığı" dedim; ölçüm: hat değil, noktasız sırt erişim dışında kalıyor ve iki yaka aynı sahip olunca kapanıyor |
| H-0004 | TUTTU (H-0003 ile aynı) | aynı çürüme; "yer ölçülemeyebilir" de ÇÜRÜDÜ — yer `iran` kimliğinden ölçüldü |
| Toplam | "iki sınıf" TUTTU | ikinci sınıfın mekanizması ÇÜRÜDÜ |

## 3 · HÜKÜM
- **H-0007, H-0002 — "devletsiz mi?" Cevap: hayır; atlasın dizininde o yılların sahibi yok.** Noktalar var,
  dönemler bilerek `__BOSLUK__` (CLAUDE.md §1.5 "kasıtlı boşluk — kusur değil, beyan"). Çare nokta değil
  **künye + kaynaklı dönem**: Verona (Della Scala), Padova (Carrara), Bergamo/Brescia/Parma (Visconti —
  `milanoduka` kimliği zaten var), Berat (Muzaka). Kaynak TDV + İtalyan/Arnavut akademik literatür.
- **H-0003, H-0004 — Kafkas ana sırtı, 0 nokta.** Haritada boyasız kalma doğru ve dürüst bir gösterim olabilir
  (sırtta yerleşim yok, iki yaka ayrı devlet), ama Emre için "neden boş" sorusu hâlâ yerinde: iki yakadaki
  devlet ya da dağ toplulukları (Svanlar, Avarlar/Didoylar) haritada yok. Çare **nokta** (Svaneti · Avar/Hunzah
  vb., kaynaklı) — ya da bilinçli bırakılıyorsa arayüzde "sırt — yerleşim yok" beyanı.
- **Dördü iki ayrı sebepten.** Toplu hüküm YAZILMADI.
